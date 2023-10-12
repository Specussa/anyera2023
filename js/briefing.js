const briefing = document.querySelector('.briefing');
if(!briefing){} else {
  const bformone = document.getElementById('briefing__form_one');
  const bstepone = document.querySelector('.briefing__step_one');
  const bstepsone = document.querySelector('.briefing__steps_one');
  const busername = document.getElementById('briefing__username');
  const bphone = document.getElementById('briefing__phone');
  const bemail = document.getElementById('briefing__email');
  const bformtwo = document.getElementById('briefing__form_two');
  const bsteptwo = document.querySelector('.briefing__step_two');
  const bstepstwo = document.querySelector('.briefing__steps_two');
  const bbuttontwo = document.querySelector('.briefing__button_two');
  const bbasicterms = document.getElementById('briefing__basicterms');
  const btarget = document.getElementById('briefing__target');
  const bknow = document.getElementById('briefing__know');
  const baudience = document.getElementById('briefing__audience');
  const bchoice = document.getElementById('briefing__choice');
  const bformthree = document.getElementById('briefing__form_three');
  const bstepthree = document.querySelector('.briefing__step_three');
  const bstepsthree = document.querySelector('.briefing__steps_three');
  const bbuttonthree = document.querySelector('.briefing__button_three');
  const blink = document.getElementById('briefing__link');
  const btopics = document.getElementById('briefing__topics');
  const bnotopics = document.getElementById('briefing__notopics');
  const bprice = document.getElementById('briefing__price');
  const bimpression = document.getElementById('briefing__impression');
  const bimportant = document.getElementById('briefing__important');
  const blike = document.getElementById('briefing__like');
  const bformfour = document.getElementById('briefing__form_four');
  const bstepfour = document.querySelector('.briefing__step_four');
  const bstepsfour = document.querySelector('.briefing__steps_four');
  const bbuttonfour = document.querySelector('.briefing__button_four');
  const bproblems = document.getElementById('briefing__problems');
  const btriggers = document.getElementById('briefing__triggers');
  const binfoball = document.getElementById('briefing__infoball');
  const bneeds = document.getElementById('briefing__needs');
  const bbarriers = document.getElementById('briefing__barriers');
  const bstrive = document.getElementById('briefing__strive');
  const bformfive = document.getElementById('briefing__form_five');
  const bstepfive = document.querySelector('.briefing__step_five');
  const bstepsfive = document.querySelector('.briefing__steps_five');
  const bbuttonfive = document.querySelector('.briefing__button_five');
  const bdesign = document.getElementById('briefing__design');
  const bassociations = document.getElementById('briefing__associations');
  const bsegment = document.getElementById('briefing__segment');
  const bformend = document.querySelector('.briefing__form_end');

  // START step
  const briefingform = document.querySelectorAll(".briefing__right .briefing__form");
  const briefingsteps = document.querySelectorAll(".briefing__left .briefing__steps");
  const briefingstep = document.querySelectorAll(".briefing__left .briefing__step");

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
      briefingform.forEach(n => bformone.style.maxHeight = bformone.scrollHeight + "px");
      bformone.classList.add("active");
      bstepsone.classList.add("active");
    }
  })
  bsteptwo.addEventListener('click', function() {
    if (!bformtwo.classList.contains("active") && bsteptwo.classList.contains("unblock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformtwo.style.maxHeight = bformtwo.scrollHeight + "px");
      bformtwo.classList.add("active");
      bstepstwo.classList.add("active");
    }
  })
  bstepthree.addEventListener('click', function() {
    if (!bformthree.classList.contains("active") && bstepthree.classList.contains("unblock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformthree.style.maxHeight = bformthree.scrollHeight + "px");
      bformthree.classList.add("active");
      bstepsthree.classList.add("active");
    }
  })
  bstepfour.addEventListener('click', function() {
    if (!bformfour.classList.contains("active") && bstepfour.classList.contains("unblock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformfour.style.maxHeight = bformfour.scrollHeight + "px");
      bformfour.classList.add("active");
      bstepsfour.classList.add("active");
    }
  })
  bstepfive.addEventListener('click', function() {
    if (!bformfive.classList.contains("active") && bstepfive.classList.contains("unblock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformfive.style.maxHeight = bformfive.scrollHeight + "px");
      bformfive.classList.add("active");
      bstepsfive.classList.add("active");
    }
  })
  // END step

  // START back
  bbuttontwo.addEventListener('click', function() {
    briefingform.forEach(n => n.classList.remove('active'));
    briefingsteps.forEach(n => n.classList.remove('active'));
    briefingform.forEach(n => n.style.maxHeight = null);
    briefingform.forEach(n => bformone.style.maxHeight = bformone.scrollHeight + "px");
    bformone.classList.add("active");
    bstepsone.classList.add("active");
  })
  bbuttonthree.addEventListener('click', function() {
    briefingform.forEach(n => n.classList.remove('active'));
    briefingsteps.forEach(n => n.classList.remove('active'));
    briefingform.forEach(n => n.style.maxHeight = null);
    briefingform.forEach(n => bformtwo.style.maxHeight = bformtwo.scrollHeight + "px");
    bformtwo.classList.add("active");
    bstepstwo.classList.add("active");
  })
  bbuttonfour.addEventListener('click', function() {
    briefingform.forEach(n => n.classList.remove('active'));
    briefingsteps.forEach(n => n.classList.remove('active'));
    briefingform.forEach(n => n.style.maxHeight = null);
    briefingform.forEach(n => bformthree.style.maxHeight = bformthree.scrollHeight + "px");
    bformthree.classList.add("active");
    bstepsthree.classList.add("active");
  })
  bbuttonfive.addEventListener('click', function() {
    briefingform.forEach(n => n.classList.remove('active'));
    briefingsteps.forEach(n => n.classList.remove('active'));
    briefingform.forEach(n => n.style.maxHeight = null);
    briefingform.forEach(n => bformfour.style.maxHeight = bformfour.scrollHeight + "px");
    bformfour.classList.add("active");
    bstepsfour.classList.add("active");
  })
  // END back

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
      briefingform.forEach(n => bformtwo.style.maxHeight = bformtwo.scrollHeight + "px");
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
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformthree.style.maxHeight = bformthree.scrollHeight + "px");
      bformthree.classList.add("active");
      bstepsthree.classList.add("active");
      bstepthree.classList.add("active");
      bstepthree.classList.add("unblock");
      bsteptwo.classList.add("success");
    }
  }
  // END validate briefing__form_two

  // START validate briefing__form_three
  bformthree.addEventListener('submit', e => {
    e.preventDefault();
    checkthreeInputs();
  });
  function checkthreeInputs() {
    const blinkValue = blink.value.trim();
    const btopicsValue = btopics.value.trim();
    const bnotopicsValue = bnotopics.value.trim();
    const bpriceValue = bprice.value.trim();
    const bimpressionValue = bimpression.value.trim();
    const bimportantValue = bimportant.value.trim();
    const blikeValue = blike.value.trim();

    if(blinkValue === '') {setErrorForBriefing(blink, 'Обязательное поле');} else {setSuccessForBriefing(blink);}
    if(btopicsValue === '') {setErrorForBriefing(btopics, 'Обязательное поле');} else {setSuccessForBriefing(btopics);}
    if(bnotopicsValue === '') {setErrorForBriefing(bnotopics, 'Обязательное поле');} else {setSuccessForBriefing(bnotopics);}
    if(bpriceValue === '') {setErrorForBriefing(bprice, 'Обязательное поле');} else {setSuccessForBriefing(bprice);}
    if(bimpressionValue === '') {setErrorForBriefing(bimpression, 'Обязательное поле');} else {setSuccessForBriefing(bimpression);}
    if(bimportantValue === '') {setErrorForBriefing(bimportant, 'Обязательное поле');} else {setSuccessForBriefing(bimportant);}
    if(blikeValue === '') {setErrorForBriefing(blike, 'Обязательное поле');} else {setSuccessForBriefing(blike);}
    if(blinkValue != '' && btopicsValue != '' && bnotopicsValue != '' && bpriceValue != '' && bimpressionValue != '' && bimportantValue != '' && blikeValue != ''){
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformfour.style.maxHeight = bformfour.scrollHeight + "px");
      bformfour.classList.add("active");
      bstepsfour.classList.add("active");
      bstepfour.classList.add("active");
      bstepfour.classList.add("unblock");
      bstepthree.classList.add("success");
    }
  }
  // END validate briefing__form_three

  // START validate briefing__form_four
  bformfour.addEventListener('submit', e => {
    e.preventDefault();
    checkfourInputs();
  });
  function checkfourInputs() {
    const bproblemsValue = bproblems.value.trim();
    const btriggersValue = btriggers.value.trim();
    const binfoballValue = binfoball.value.trim();
    const bneedsValue = bneeds.value.trim();
    const bbarriersValue = bbarriers.value.trim();
    const bstriveValue = bstrive.value.trim();

    if(bproblemsValue === '') {setErrorForBriefing(bproblems, 'Обязательное поле');} else {setSuccessForBriefing(bproblems);}
    if(btriggersValue === '') {setErrorForBriefing(btriggers, 'Обязательное поле');} else {setSuccessForBriefing(btriggers);}
    if(binfoballValue === '') {setErrorForBriefing(binfoball, 'Обязательное поле');} else {setSuccessForBriefing(binfoball);}
    if(bneedsValue === '') {setErrorForBriefing(bneeds, 'Обязательное поле');} else {setSuccessForBriefing(bneeds);}
    if(bbarriersValue === '') {setErrorForBriefing(bbarriers, 'Обязательное поле');} else {setSuccessForBriefing(bbarriers);}
    if(bstriveValue === '') {setErrorForBriefing(bstrive, 'Обязательное поле');} else {setSuccessForBriefing(bstrive);}
    if(bproblemsValue != '' && btriggersValue != '' && binfoballValue != '' && bneedsValue != '' && bbarriersValue != '' && bbarriersValue != '' && bstriveValue != ''){
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformfive.style.maxHeight = bformfive.scrollHeight + "px");
      bformfive.classList.add("active");
      bstepsfive.classList.add("active");
      bstepfive.classList.add("active");
      bstepfive.classList.add("unblock");
      bstepfour.classList.add("success");
    }
  }
  // END validate briefing__form_four

  // START validate briefing__form_five
  bformfive.addEventListener('submit', e => {
    e.preventDefault();
    checkfiveInputs();
  });
  function checkfiveInputs() {
    const bdesignValue = bdesign.value.trim();
    const bassociationsValue = bassociations.value.trim();
    const bsegmentValue = bsegment.value.trim();

    if(bdesignValue === '') {setErrorForBriefing(bdesign, 'Обязательное поле');} else {setSuccessForBriefing(bdesign);}
    if(bassociationsValue === '') {setErrorForBriefing(bassociations, 'Обязательное поле');} else {setSuccessForBriefing(bassociations);}
    if(bsegmentValue === '') {setErrorForBriefing(bsegment, 'Обязательное поле');} else {setSuccessForBriefing(bsegment);}
    if(bdesignValue != '' && bassociationsValue != '' && bsegmentValue != ''){
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      bformend.classList.add("active");
      briefingsteps.forEach(n => n.classList.remove('active'));
      bstepfive.classList.add("success");
    }
  }
  // END validate briefing__form_five

  // function updateInput(ish){
  //   document.getElementById("fieldname").value = ish;
  // }
  // onchange="updateInput(this.value)"
}