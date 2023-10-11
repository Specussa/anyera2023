const bformone = document.getElementById('briefing__form_one');
const busername = document.getElementById('briefing__username');
const bphone = document.getElementById('briefing__phone');
const bemail = document.getElementById('briefing__email');

// start validate briefing__form_one
if(!bformone){} else {
  bformone.addEventListener('submit', e => {
  e.preventDefault();
  
  checkInputs();
  });
  function checkInputs() {
  // trim to remove the whitespaces
  const busernameValue = busername.value.trim();
  const bphoneValue = bphone.value.trim();
  const bemailValue = bemail.value.trim();
  
  if(busernameValue === '') {
      setErrorFor(busername, 'Обязательное поле'); } else { setSuccessFor(busername);
  }
  if(bphoneValue === '') {
      setErrorFor(bphone, 'Обязательное поле'); } else { setSuccessFor(bphone);
  }
  if(bemailValue === '') {
      setErrorFor(bemail, 'Обязательное поле'); } else { setSuccessFor(bemail);
    }
  }
  
  function setErrorFor(input, message) {
    const bformoneControl = input.parentElement;
    const small = bformoneControl.querySelector('small');
    bformoneControl.className = 'briefing__control error';
    small.innerText = message;
  }
  
  function setSuccessFor(input) {
    const bformoneControl = input.parentElement;
    bformoneControl.className = 'briefing__control success';
  }
  
  // function iscontrol(control) {
  // 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control);
  // }

  const bcitype = [...document.querySelectorAll('.briefing__checks_type .briefing__check_input')];
  const bcisum = [...document.querySelectorAll('.briefing__checks_sum .briefing__check_input')];
  const bchecktype = document.querySelectorAll('.briefing__checks_type .briefing__check');
  const bchecksum = document.querySelectorAll('.briefing__checks_sum .briefing__check');

  bcitype.forEach(input => input.addEventListener('input', function(event) {
    if (event.target.checked) {
      for(var i = 0;i < bchecktype.length; i++) {bchecktype[i].classList.remove('active');}
      event.target.closest('.briefing__check').classList.add('active');
    }
  }))

  bcisum.forEach(input => input.addEventListener('input', function(event) {
    if (event.target.checked) {
      for(var i = 0;i < bchecksum.length; i++) {bchecksum[i].classList.remove('active');}
      event.target.closest('.briefing__check').classList.add('active');
    }
  }))

  const bchecks = document.querySelectorAll('.briefing__checks');
  [...bchecks].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
}
// end validate briefing__form_one