const finputs = document.querySelectorAll(".form__input");
for (i = 0; i < finputs.length; i++) {
  finputs[i].addEventListener("input", updateformValue);
  finputs[i].nextElementSibling.children[1].textContent = finputs[i].getAttribute('maxl');
}

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

// start validate form header
const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const text = document.getElementById('text');

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

  var filesToUpload = [];
  const fileInput = document.querySelector('.form__input_file');
  const fileContainer = document.getElementById('form__file_container');

  function domObserver(el, callback){
      var done = function (){ callback(el); };
      var observer = new MutationObserver(done);
      observer.observe(el, { childList: true });
  };
  domObserver(fileContainer, function (el){
    if (fileContainer.children[1]) {
      fileContainer.children[0].remove();
    }
  });

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return '0';
    } else {
      var k = 1024;
      var dm = decimals < 0 ? 0 : decimals;
      var sizes = ['B', 'Kb', 'Mb', 'Gb', 'Tb'];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
  }

  fileInput.addEventListener('change', (e) => {
    console.log(e.target.files.length);
    for (let i = 0; i < e.target.files.length; i++) {
      let myFile = e.target.files[i];
      let myFileID = "FID" + (1000 + Math.random() * 9000).toFixed(0);
      let myFileSize = formatBytes(e.target.files[i].size);

      filesToUpload.push({
        file: myFile,
        FID: myFileID,
        filesize: myFileSize
      });
    };
    displayFiles();
    // e.target.value = null;
  });

  const removeFile = (x) => {
    for (let i = 0; i < filesToUpload.length; i++) {
      if (filesToUpload[i].FID === x) {
        filesToUpload.splice(i, 1);
      }
    }
    displayFiles();
  }

  const displayFiles = () => {
    console.log(fileContainer.innerHTML);
    fileContainer.innerHTML = "";
    for (let i = 0; i < filesToUpload.length; i++) {
      fileContainer.innerHTML += `<li class="form__file_item"><span class="form__file_name">${filesToUpload[i].file.name}</span><span class="form__file_size">${filesToUpload[i].filesize}</span><button onclick="removeFile('${filesToUpload[i].FID}')"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L12 12M12 12L17 7.00001M12 12L7 7M12 12L17 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg></button></li>`;
    }
  }
// end validate form header