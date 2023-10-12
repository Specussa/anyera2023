const briefing = document.querySelector('.briefing');
if(!briefing){} else {
  const bformone = document.getElementById('briefing__form_one');
  const bstepone = document.querySelector('.briefing__step_one');
  const bstepsone = document.querySelector('.briefing__steps_one');
  const busername = document.getElementById('briefing__username');
  const bphone = document.getElementById('briefing__phone');
  const bemail = document.getElementById('briefing__email');
  const bformtwo = document.getElementById('briefing__form_two');
  const bbasicterms = document.getElementById('briefing__basicterms');
  const btarget = document.getElementById('briefing__target');
  const bknow = document.getElementById('briefing__know');
  const baudience = document.getElementById('briefing__audience');
  const bchoice = document.getElementById('briefing__choice');
  const bsteptwo = document.querySelector('.briefing__step_two');
  const bstepstwo = document.querySelector('.briefing__steps_two');
  const bbuttontwo = document.querySelector('.briefing__button_two');
  const bformthree = document.getElementById('briefing__form_three');
  const bstepthree = document.querySelector('.briefing__step_three');
  const bstepsthree = document.querySelector('.briefing__steps_three');
  const bformfour = document.getElementById('briefing__form_four');
  const bstepfour = document.querySelector('.briefing__step_four');
  const bstepsfour = document.querySelector('.briefing__steps_four');
  const bformfive = document.getElementById('briefing__form_five');
  const bstepfive = document.querySelector('.briefing__step_five');
  const bstepsfive = document.querySelector('.briefing__steps_five');

  // START step
  const briefingform = document.querySelectorAll(".briefing__right .briefing__form");
  const briefingsteps = document.querySelectorAll(".briefing__left .briefing__steps");

  function setErrorForBriefing(input, message) {
    const bformoneControl = input.parentElement;
    const small = bformoneControl.querySelector('small');
    bformoneControl.className = 'briefing__control error';
    small.innerText = message;
  }

  function setSuccessForBriefing(input) {
    const bformoneControl = input.parentElement;
    bformoneControl.className = 'briefing__control success';
  }

  [...briefingform].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});

  bstepone.addEventListener('click', function() {
    if (!bformone.classList.contains("active") && bstepone.classList.contains("unblock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformone.style.maxHeight = (bformone.scrollHeight * 1) + "px");
      bformone.classList.add("active");
      bstepsone.classList.add("active");
    }
  })
  bbuttontwo.addEventListener('click', function() {
    if (!bformone.classList.contains("active") && bstepone.classList.contains("unblock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformone.style.maxHeight = (bformone.scrollHeight * 1) + "px");
      bformone.classList.add("active");
      bstepsone.classList.add("active");
    }
  })
  bsteptwo.addEventListener('click', function() {
    if (!bformtwo.classList.contains("active") && bsteptwo.classList.contains("unblock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformtwo.style.maxHeight = (bformtwo.scrollHeight * 1) + "px");
      bformtwo.classList.add("active");
      bstepstwo.classList.add("active");
    }
  })
  // END step

  // START validate briefing__form_one
  bformone.addEventListener('submit', e => {
    e.preventDefault();
    checkoneInputs();
  });
  function checkoneInputs() {
    const busernameValue = busername.value.trim();
    const bphoneValue = bphone.value.trim();
    const bemailValue = bemail.value.trim();

    if(busernameValue === '') {setErrorForBriefing(busername, 'Обязательное поле');} else {setSuccessForBriefing(busername);}
    if(bphoneValue === '') {setErrorForBriefing(bphone, 'Введите корректный телефон');} else {setSuccessForBriefing(bphone);}
    if(bemailValue === '') {setErrorForBriefing(bemail, 'Введите корректный email');} else {setSuccessForBriefing(bemail);}
    if(busernameValue != '' && bphoneValue != '' && bemailValue != ''){
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformtwo.style.maxHeight = (bformtwo.scrollHeight * 1) + "px");
      bformtwo.classList.add("active");
      bstepstwo.classList.add("active");
      bsteptwo.classList.add("active");
      bsteptwo.classList.add("unblock");
      bstepone.classList.add("success");
    }
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
  // END validate briefing__form_one

  // START validate briefing__form_two
  bformtwo.addEventListener('submit', e => {
    e.preventDefault();
    checktwoInputs();
  });
  function checktwoInputs() {
    const bbasictermsValue = bbasicterms.value.trim();
    const btargetValue = btarget.value.trim();
    const bknowValue = bknow.value.trim();
    const baudienceValue = baudience.value.trim();
    const bchoiceValue = bchoice.value.trim();

    if(bbasictermsValue === '') {setErrorForBriefing(bbasicterms, 'Обязательное поле');} else {setSuccessForBriefing(bbasicterms);}
    if(btargetValue === '') {setErrorForBriefing(btarget, 'Обязательное поле');} else {setSuccessForBriefing(btarget);}
    if(bknowValue === '') {setErrorForBriefing(bknow, 'Обязательное поле');} else {setSuccessForBriefing(bknow);}
    if(baudienceValue === '') {setErrorForBriefing(baudience, 'Обязательное поле');} else {setSuccessForBriefing(baudience);}
    if(bchoiceValue === '') {setErrorForBriefing(bchoice, 'Обязательное поле');} else {setSuccessForBriefing(bchoice);}
    if(bbasictermsValue != '' && btargetValue != '' && bknowValue != '' && baudienceValue != '' && bchoiceValue != ''){

    }
  }

  // END validate briefing__form_two

  // function updateInput(ish){
  //   document.getElementById("fieldname").value = ish;
  // }
  // onchange="updateInput(this.value)"
}