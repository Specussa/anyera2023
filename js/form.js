const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const text = document.getElementById('text');
// start validate form header
if(!form){} else {
  form.addEventListener('submit', e => {
  e.preventDefault();
  
  checkInputs();
  });
  function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const phoneValue = phone.value.trim();
  const textValue = text.value.trim();
  
  if(usernameValue === '') {
      setErrorFor(username, 'Обязательное поле'); } else { setSuccessFor(username);
  }
  if(phoneValue === '') {
      setErrorFor(phone, 'Обязательное поле'); } else { setSuccessFor(phone);
  }
  if(textValue === '') {
      setErrorFor(text, 'Обязательное поле'); } else { setSuccessFor(text);
    }
  }
  
  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'header__forms_form_control error';
    small.innerText = message;
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'header__forms_form_control success';
  }
}
// end validate form header

// start validate form header
  function updateformValue() {
    this.nextElementSibling.children[0].textContent = Math.max(0, Math.min(this.getAttribute('maxl'), this.value.length));
    if (this.value.length < this.getAttribute('minl')) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else {
      this.parentElement.classList.remove('error');
      this.parentElement.classList.add('success');
      this.nextElementSibling.classList.add('success');
    }
  }

  const finputs = document.querySelectorAll(".form__input");

  for (i = 0; i < finputs.length; i++) {
    finputs[i].addEventListener("input", updateformValue);
    finputs[i].nextElementSibling.children[1].textContent = finputs[i].getAttribute('maxl');
  }
// end validate form header