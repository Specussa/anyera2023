const briefing = document.querySelector('.briefing');
if(!briefing){} else {
  var getMeTo = document.getElementById("top");
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
  const bstepsend = document.querySelector('.briefing__steps_end');
  const totop = document.querySelector('#top');

  // start autosize textarea
    autosize(document.querySelectorAll('textarea'));
  // end autosize textarea
  
  // start maxleight
  busername.oninput = function(){this.value = this.value.substr(0, 40);}
  bphone.oninput = function(){this.value = this.value.substr(0, 11);}
  bemail.oninput = function(){this.value = this.value.substr(0, 40);}

  bbasicterms.oninput = function(){this.value = this.value.substr(0, 300);}
  btarget.oninput = function(){this.value = this.value.substr(0, 300);}
  bknow.oninput = function(){this.value = this.value.substr(0, 300);}
  baudience.oninput = function(){this.value = this.value.substr(0, 300);}
  bchoice.oninput = function(){this.value = this.value.substr(0, 300);}

  blink.oninput = function(){this.value = this.value.substr(0, 300);}
  btopics.oninput = function(){this.value = this.value.substr(0, 300);}
  bnotopics.oninput = function(){this.value = this.value.substr(0, 300);}
  bprice.oninput = function(){this.value = this.value.substr(0, 300);}
  bimpression.oninput = function(){this.value = this.value.substr(0, 300);}
  bimportant.oninput = function(){this.value = this.value.substr(0, 300);}
  blike.oninput = function(){this.value = this.value.substr(0, 300);}

  bproblems.oninput = function(){this.value = this.value.substr(0, 300);}
  btriggers.oninput = function(){this.value = this.value.substr(0, 300);}
  binfoball.oninput = function(){this.value = this.value.substr(0, 300);}
  bneeds.oninput = function(){this.value = this.value.substr(0, 300);}
  bbarriers.oninput = function(){this.value = this.value.substr(0, 300);}
  bstrive.oninput = function(){this.value = this.value.substr(0, 300);}

  bdesign.oninput = function(){this.value = this.value.substr(0, 300);}
  bassociations.oninput = function(){this.value = this.value.substr(0, 300);}
  bsegment.oninput = function(){this.value = this.value.substr(0, 300);}
  // end maxleight

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
    if (!bformone.classList.contains("active") && bstepone.classList.contains("unlock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformone.style.maxHeight = bformone.scrollHeight + "px");
      bformone.classList.add("active");
      bstepsone.classList.add("active");
      scroll.scrollTo(totop);
    }
  })
  bsteptwo.addEventListener('click', function() {
    if (!bformtwo.classList.contains("active") && bsteptwo.classList.contains("unlock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformtwo.style.maxHeight = bformtwo.scrollHeight + "px");
      bformtwo.classList.add("active");
      bstepstwo.classList.add("active");
      scroll.scrollTo(totop);
    }
  })
  bstepthree.addEventListener('click', function() {
    if (!bformthree.classList.contains("active") && bstepthree.classList.contains("unlock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformthree.style.maxHeight = bformthree.scrollHeight + "px");
      bformthree.classList.add("active");
      bstepsthree.classList.add("active");
      scroll.scrollTo(totop);
    }
  })
  bstepfour.addEventListener('click', function() {
    if (!bformfour.classList.contains("active") && bstepfour.classList.contains("unlock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformfour.style.maxHeight = bformfour.scrollHeight + "px");
      bformfour.classList.add("active");
      bstepsfour.classList.add("active");
      scroll.scrollTo(totop);
    }
  })
  bstepfive.addEventListener('click', function() {
    if (!bformfive.classList.contains("active") && bstepfive.classList.contains("unlock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformfive.style.maxHeight = bformfive.scrollHeight + "px");
      bformfive.classList.add("active");
      bstepsfive.classList.add("active");
      scroll.scrollTo(totop);
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
    scroll.scrollTo(totop);
  })
  bbuttonthree.addEventListener('click', function() {
    briefingform.forEach(n => n.classList.remove('active'));
    briefingsteps.forEach(n => n.classList.remove('active'));
    briefingform.forEach(n => n.style.maxHeight = null);
    briefingform.forEach(n => bformtwo.style.maxHeight = bformtwo.scrollHeight + "px");
    bformtwo.classList.add("active");
    bstepstwo.classList.add("active");
    scroll.scrollTo(totop);
  })
  bbuttonfour.addEventListener('click', function() {
    briefingform.forEach(n => n.classList.remove('active'));
    briefingsteps.forEach(n => n.classList.remove('active'));
    briefingform.forEach(n => n.style.maxHeight = null);
    briefingform.forEach(n => bformthree.style.maxHeight = bformthree.scrollHeight + "px");
    bformthree.classList.add("active");
    bstepsthree.classList.add("active");
    scroll.scrollTo(totop);
  })
  bbuttonfive.addEventListener('click', function() {
    briefingform.forEach(n => n.classList.remove('active'));
    briefingsteps.forEach(n => n.classList.remove('active'));
    briefingform.forEach(n => n.style.maxHeight = null);
    briefingform.forEach(n => bformfour.style.maxHeight = bformfour.scrollHeight + "px");
    bformfour.classList.add("active");
    bstepsfour.classList.add("active");
    scroll.scrollTo(totop);
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

    if(busernameValue !== '' && busernameValue.length >= 4 && busernameValue.length <= 40) {
      setSuccessForBriefing(busername);
      bstepone.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(busername, 'Обязательное поле');
      bstepone.classList.add("error");
      scroll.scrollTo(totop);
    }

    if(bphoneValue !== '' && bphoneValue.length >= 4 && bphoneValue.length <= 11) {
      setSuccessForBriefing(bphone);
      bstepone.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bphone, 'Введите корректный телефон');
      bstepone.classList.add("error");
      scroll.scrollTo(totop);
    }

    if(!isEmail(bemailValue)) {
      setErrorForBriefing(bemail, 'Введите корректный email');
      bstepone.classList.add("error");
      scroll.scrollTo(totop);
    } else if (bemailValue !== '' && bemailValue.length >= 4 && bemailValue.length <= 40) {
      setSuccessForBriefing(bemail);
      bstepone.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bemail, 'Введите корректный email');
      bstepone.classList.add("error");
      scroll.scrollTo(totop);
    }

    if(!isEmail(bemailValue)){
      scroll.scrollTo(totop);
    } else if (
      busernameValue !== '' &&
      busernameValue.length >= 4 &&
      busernameValue.length <= 40 &&
      bphoneValue !== '' &&
      bphoneValue.length >= 4 &&
      bphoneValue.length <= 11 &&
      bemailValue !== '' &&
      bemailValue.length >= 4 &&
      bemailValue.length <= 40
    ) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformtwo.style.maxHeight = bformtwo.scrollHeight + "px");
      bformtwo.classList.add("active");
      bstepstwo.classList.add("active");
      bsteptwo.classList.add("active");
      bsteptwo.classList.add("unlock");
      scroll.scrollTo(totop);
    }
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

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

    if(bbasictermsValue !== '' && bbasictermsValue.length >= 4 && bbasictermsValue.length <= 300) {
      setSuccessForBriefing(bbasicterms);
      bsteptwo.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bbasicterms, 'Обязательное поле');
      bsteptwo.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(btargetValue !== '' && btargetValue.length >= 4 && btargetValue.length <= 300) {
      setSuccessForBriefing(btarget);
      bsteptwo.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(btarget, 'Обязательное поле');
      bsteptwo.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bknowValue !== '' && bknowValue.length >= 4 && bknowValue.length <= 300) {
      setSuccessForBriefing(bknow);
      bsteptwo.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bknow, 'Обязательное поле');
      bsteptwo.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(baudienceValue !== '' && baudienceValue.length >= 4 && baudienceValue.length <= 300) {
      setSuccessForBriefing(baudience);
      bsteptwo.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(baudience, 'Обязательное поле');
      bsteptwo.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bchoiceValue !== '' && bchoiceValue.length >= 4 && bchoiceValue.length <= 300) {
      setSuccessForBriefing(bchoice);
      bsteptwo.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bchoice, 'Обязательное поле');
      bsteptwo.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(
      bbasictermsValue != '' &&
      bbasictermsValue.length >= 4 &&
      bbasictermsValue.length <= 300 &&
      btargetValue != '' &&
      btargetValue.length >= 4 &&
      btargetValue.length <= 300 &&
      bknowValue != '' &&
      bknowValue.length >= 4 &&
      bknowValue.length <= 300 &&
      baudienceValue != '' &&
      baudienceValue.length >= 4 &&
      baudienceValue.length <= 300 &&
      bchoiceValue != '' &&
      bchoiceValue.length >= 4 &&
      bchoiceValue.length <= 300
    ){
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformthree.style.maxHeight = bformthree.scrollHeight + "px");
      bformthree.classList.add("active");
      bstepsthree.classList.add("active");
      bstepthree.classList.add("active");
      bstepthree.classList.add("unlock");
      scroll.scrollTo(totop);
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

    if(blinkValue !== '' && blinkValue.length >= 4 && blinkValue.length <= 300) {
      setSuccessForBriefing(blink);
      bstepthree.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(blink, 'Обязательное поле');
      bstepthree.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(btopicsValue !== '' && btopicsValue.length >= 4 && btopicsValue.length <= 300) {
      setSuccessForBriefing(btopics);
      bstepthree.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(btopics, 'Обязательное поле');
      bstepthree.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bnotopicsValue !== '' && bnotopicsValue.length >= 4 && bnotopicsValue.length <= 300) {
      setSuccessForBriefing(bnotopics);
      bstepthree.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bnotopics, 'Обязательное поле');
      bstepthree.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bpriceValue !== '' && bpriceValue.length >= 4 && bpriceValue.length <= 300) {
      setSuccessForBriefing(bprice);
      bstepthree.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bprice, 'Обязательное поле');
      bstepthree.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bimpressionValue !== '' && bimpressionValue.length >= 4 && bimpressionValue.length <= 300) {
      setSuccessForBriefing(bimpression);
      bstepthree.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bimpression, 'Обязательное поле');
      bstepthree.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bimportantValue !== '' && bimportantValue.length >= 4 && bimportantValue.length <= 300) {
      setSuccessForBriefing(bimportant);
      bstepthree.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bimportant, 'Обязательное поле');
      bstepthree.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(blikeValue !== '' && blikeValue.length >= 4 && blikeValue.length <= 300) {
      setSuccessForBriefing(blike);
      bstepthree.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(blike, 'Обязательное поле');
      bstepthree.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(
      blinkValue != '' &&
      blinkValue.length >= 4 &&
      blinkValue.length <= 300 &&
      btopicsValue != '' &&
      btopicsValue.length >= 4 &&
      btopicsValue.length <= 300 &&
      bnotopicsValue != '' &&
      bnotopicsValue.length >= 4 &&
      bnotopicsValue.length <= 300 &&
      bpriceValue != '' &&
      bpriceValue.length >= 4 &&
      bpriceValue.length <= 300 &&
      bimpressionValue != '' &&
      bimpressionValue.length >= 4 &&
      bimpressionValue.length <= 300 &&
      bimportantValue != '' &&
      bimportantValue.length >= 4 &&
      bimportantValue.length <= 300 &&
      blikeValue != '' &&
      blikeValue.length >= 4 &&
      blikeValue.length <= 300
    ){
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformfour.style.maxHeight = bformfour.scrollHeight + "px");
      bformfour.classList.add("active");
      bstepsfour.classList.add("active");
      bstepfour.classList.add("active");
      bstepfour.classList.add("unlock");
      scroll.scrollTo(totop);
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

    if(bproblemsValue !== '' && bproblemsValue.length >= 4 && bproblemsValue.length <= 300) {
      setSuccessForBriefing(bproblems);
      bstepfour.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bproblems, 'Обязательное поле');
      bstepfour.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(btriggersValue !== '' && btriggersValue.length >= 4 && btriggersValue.length <= 300) {
      setSuccessForBriefing(btriggers);
      bstepfour.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(btriggers, 'Обязательное поле');
      bstepfour.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(binfoballValue !== '' && binfoballValue.length >= 4 && binfoballValue.length <= 300) {
      setSuccessForBriefing(binfoball);
      bstepfour.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(binfoball, 'Обязательное поле');
      bstepfour.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bneedsValue !== '' && bneedsValue.length >= 4 && bneedsValue.length <= 300) {
      setSuccessForBriefing(bneeds);
      bstepfour.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bneeds, 'Обязательное поле');
      bstepfour.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bbarriersValue !== '' && bbarriersValue.length >= 4 && bbarriersValue.length <= 300) {
      setSuccessForBriefing(bbarriers);
      bstepfour.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bbarriers, 'Обязательное поле');
      bstepfour.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bstriveValue !== '' && bstriveValue.length >= 4 && bstriveValue.length <= 300) {
      setSuccessForBriefing(bstrive);
      bstepfour.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bstrive, 'Обязательное поле');
      bstepfour.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(
      bproblemsValue != '' &&
      bproblemsValue.length >= 4 &&
      bproblemsValue.length <= 300 &&
      btriggersValue != '' &&
      btriggersValue.length >= 4 &&
      btriggersValue.length <= 300 &&
      binfoballValue != '' &&
      binfoballValue.length >= 4 &&
      binfoballValue.length <= 300 &&
      bneedsValue != '' &&
      bneedsValue.length >= 4 &&
      bneedsValue.length <= 300 &&
      bbarriersValue != '' &&
      bbarriersValue.length >= 4 &&
      bbarriersValue.length <= 300 &&
      bstriveValue != '' &&
      bstriveValue.length >= 4 &&
      bstriveValue.length <= 300
    ){
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformfive.style.maxHeight = bformfive.scrollHeight + "px");
      bformfive.classList.add("active");
      bstepsfive.classList.add("active");
      bstepfive.classList.add("active");
      bstepfive.classList.add("unlock");
      scroll.scrollTo(totop);
    } else {
      scroll.scrollTo(totop);
    }
  }
  // END validate briefing__form_four

  // START validate briefing__form_five
  bformfive.addEventListener('submit', e => {
    e.preventDefault();
    checkfiveInputs();
  });
  function checkfiveInputs() {
    const busernameValue = busername.value.trim();
    const bphoneValue = bphone.value.trim();
    const bemailValue = bemail.value.trim();


    if(busernameValue !== '' && busernameValue.length >= 4 && busernameValue.length <= 40) {
      setSuccessForBriefing(busername);
    } else {
      setErrorForBriefing(busername, 'Обязательное поле');
    }

    if(bphoneValue !== '' && bphoneValue.length >= 4 && bphoneValue.length <= 11) {
      setSuccessForBriefing(bphone);
    } else {
      setErrorForBriefing(bphone, 'Введите корректный телефон');
    }

    if(!isEmail(bemailValue)) {
      setErrorForBriefing(bemail, 'Введите корректный email');
    } else if (bemailValue !== '' && bemailValue.length >= 4 && bemailValue.length <= 40) {
      setSuccessForBriefing(bemail);
    } else {
      setErrorForBriefing(bemail, 'Введите корректный email');
    }

    if(!isEmail(bemailValue)){
      bstepone.classList.remove("success");
      bstepone.classList.add("error");
    } else if (
      busernameValue != '' &&
      busernameValue.length >= 4 &&
      busernameValue.length <= 40 &&
      bphoneValue != '' &&
      bphoneValue.length >= 4 &&
      bphoneValue.length <= 11 &&
      bemailValue != '' &&
      bemailValue.length >= 4 &&
      bemailValue.length <= 40
    ) {
      bstepone.classList.remove("error");
      bstepone.classList.add("success");
    } else {
      bstepone.classList.remove("success");
      bstepone.classList.add("error");
    }

    const bbasictermsValue = bbasicterms.value.trim();
    const btargetValue = btarget.value.trim();
    const bknowValue = bknow.value.trim();
    const baudienceValue = baudience.value.trim();
    const bchoiceValue = bchoice.value.trim();

    if(bbasictermsValue !== '' && bbasictermsValue.length >= 4 && bbasictermsValue.length <= 300) {
      setSuccessForBriefing(bbasicterms);
    } else {
      setErrorForBriefing(bbasicterms, 'Обязательное поле');
    }
    if(btargetValue !== '' && btargetValue.length >= 4 && btargetValue.length <= 300) {
      setSuccessForBriefing(btarget);
    } else {
      setErrorForBriefing(btarget, 'Обязательное поле');
    }
    if(bknowValue !== '' && bknowValue.length >= 4 && bknowValue.length <= 300) {
      setSuccessForBriefing(bknow);
    } else {
      setErrorForBriefing(bknow, 'Обязательное поле');
    }
    if(baudienceValue !== '' && baudienceValue.length >= 4 && baudienceValue.length <= 300) {
      setSuccessForBriefing(baudience);
    } else {
      setErrorForBriefing(baudience, 'Обязательное поле');
    }
    if(bchoiceValue !== '' && bchoiceValue.length >= 4 && bchoiceValue.length <= 300) {
      setSuccessForBriefing(bchoice);
    } else {
      setErrorForBriefing(bchoice, 'Обязательное поле');
    }
    if(
      bbasictermsValue != '' &&
      bbasictermsValue.length >= 4 &&
      bbasictermsValue.length <= 300 &&
      btargetValue != '' &&
      btargetValue.length >= 4 &&
      btargetValue.length <= 300 &&
      bknowValue != '' &&
      bknowValue.length >= 4 &&
      bknowValue.length <= 300 &&
      baudienceValue != '' &&
      baudienceValue.length >= 4 &&
      baudienceValue.length <= 300 &&
      bchoiceValue != '' &&
      bchoiceValue.length >= 4 &&
      bchoiceValue.length <= 300
    ){
      bsteptwo.classList.remove("error");
      bsteptwo.classList.add("success");
    } else {
      bsteptwo.classList.remove("success");
      bsteptwo.classList.add("error");
    }

    const blinkValue = blink.value.trim();
    const btopicsValue = btopics.value.trim();
    const bnotopicsValue = bnotopics.value.trim();
    const bpriceValue = bprice.value.trim();
    const bimpressionValue = bimpression.value.trim();
    const bimportantValue = bimportant.value.trim();
    const blikeValue = blike.value.trim();

    if(blinkValue !== '' && blinkValue.length >= 4 && blinkValue.length <= 300) {
      setSuccessForBriefing(blink);
    } else {
      setErrorForBriefing(blink, 'Обязательное поле');
    }
    if(btopicsValue !== '' && btopicsValue.length >= 4 && btopicsValue.length <= 300) {
      setSuccessForBriefing(btopics);
    } else {
      setErrorForBriefing(btopics, 'Обязательное поле');
    }
    if(bnotopicsValue !== '' && bnotopicsValue.length >= 4 && bnotopicsValue.length <= 300) {
      setSuccessForBriefing(bnotopics);
    } else {
      setErrorForBriefing(bnotopics, 'Обязательное поле');
    }
    if(bpriceValue !== '' && bpriceValue.length >= 4 && bpriceValue.length <= 300) {
      setSuccessForBriefing(bprice);
    } else {
      setErrorForBriefing(bprice, 'Обязательное поле');
    }
    if(bimpressionValue !== '' && bimpressionValue.length >= 4 && bimpressionValue.length <= 300) {
      setSuccessForBriefing(bimpression);
    } else {
      setErrorForBriefing(bimpression, 'Обязательное поле');
    }
    if(bimportantValue !== '' && bimportantValue.length >= 4 && bimportantValue.length <= 300) {
      setSuccessForBriefing(bimportant);
    } else {
      setErrorForBriefing(bimportant, 'Обязательное поле');
    }
    if(blikeValue !== '' && blikeValue.length >= 4 && blikeValue.length <= 300) {
      setSuccessForBriefing(blike);
    } else {
      setErrorForBriefing(blike, 'Обязательное поле');
    }
    if(
      blinkValue != '' &&
      blinkValue.length >= 4 &&
      blinkValue.length <= 300 &&
      btopicsValue != '' &&
      btopicsValue.length >= 4 &&
      btopicsValue.length <= 300 &&
      bnotopicsValue != '' &&
      bnotopicsValue.length >= 4 &&
      bnotopicsValue.length <= 300 &&
      bpriceValue != '' &&
      bpriceValue.length >= 4 &&
      bpriceValue.length <= 300 &&
      bimpressionValue != '' &&
      bimpressionValue.length >= 4 &&
      bimpressionValue.length <= 300 &&
      bimportantValue != '' &&
      bimportantValue.length >= 4 &&
      bimportantValue.length <= 300 &&
      blikeValue != '' &&
      blikeValue.length >= 4 &&
      blikeValue.length <= 300
    ){
      bstepthree.classList.remove("error");
      bstepthree.classList.add("success");
    } else {
      bstepthree.classList.remove("success");
      bstepthree.classList.add("error");
    }

    const bproblemsValue = bproblems.value.trim();
    const btriggersValue = btriggers.value.trim();
    const binfoballValue = binfoball.value.trim();
    const bneedsValue = bneeds.value.trim();
    const bbarriersValue = bbarriers.value.trim();
    const bstriveValue = bstrive.value.trim();

    if(bproblemsValue !== '' && bproblemsValue.length >= 4 && bproblemsValue.length <= 300) {
      setSuccessForBriefing(bproblems);
    } else {
      setErrorForBriefing(bproblems, 'Обязательное поле');
    }
    if(btriggersValue !== '' && btriggersValue.length >= 4 && btriggersValue.length <= 300) {
      setSuccessForBriefing(btriggers);
    } else {
      setErrorForBriefing(btriggers, 'Обязательное поле');
    }
    if(binfoballValue !== '' && binfoballValue.length >= 4 && binfoballValue.length <= 300) {
      setSuccessForBriefing(binfoball);
    } else {
      setErrorForBriefing(binfoball, 'Обязательное поле');
    }
    if(bneedsValue !== '' && bneedsValue.length >= 4 && bneedsValue.length <= 300) {
      setSuccessForBriefing(bneeds);
    } else {
      setErrorForBriefing(bneeds, 'Обязательное поле');
    }
    if(bbarriersValue !== '' && bbarriersValue.length >= 4 && bbarriersValue.length <= 300) {
      setSuccessForBriefing(bbarriers);
    } else {
      setErrorForBriefing(bbarriers, 'Обязательное поле');
    }
    if(bstriveValue !== '' && bstriveValue.length >= 4 && bstriveValue.length <= 300) {
      setSuccessForBriefing(bstrive);
    } else {
      setErrorForBriefing(bstrive, 'Обязательное поле');
    }
    if(
      bproblemsValue != '' &&
      bproblemsValue.length >= 4 &&
      bproblemsValue.length <= 300 &&
      btriggersValue != '' &&
      btriggersValue.length >= 4 &&
      btriggersValue.length <= 300 &&
      binfoballValue != '' &&
      binfoballValue.length >= 4 &&
      binfoballValue.length <= 300 &&
      bneedsValue != '' &&
      bneedsValue.length >= 4 &&
      bneedsValue.length <= 300 &&
      bbarriersValue != '' &&
      bbarriersValue.length >= 4 &&
      bbarriersValue.length <= 300 &&
      bstriveValue != '' &&
      bstriveValue.length >= 4 &&
      bstriveValue.length <= 300
    ){
      bstepfour.classList.remove("error");
      bstepfour.classList.add("success");
    } else {
      bstepfour.classList.remove("success");
      bstepfour.classList.add("error");
    }

    const bdesignValue = bdesign.value.trim();
    const bassociationsValue = bassociations.value.trim();
    const bsegmentValue = bsegment.value.trim();

    if(bdesignValue !== '' && bdesignValue.length >= 4 && bdesignValue.length <= 300) {
      setSuccessForBriefing(bdesign);
      bstepfive.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bdesign, 'Обязательное поле');
      bstepfive.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bassociationsValue !== '' && bassociationsValue.length >= 4 && bassociationsValue.length <= 300) {
      setSuccessForBriefing(bassociations);
      bstepfive.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bassociations, 'Обязательное поле');
      bstepfive.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bsegmentValue !== '' && bsegmentValue.length >= 4 && bsegmentValue.length <= 300) {
      setSuccessForBriefing(bsegment);
      bstepfive.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bsegment, 'Обязательное поле');
      bstepfive.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(
      !isEmail(bemailValue)
    ) {
      scroll.scrollTo(totop);
    } else if (
      busernameValue !== '' &&
      busernameValue.length >= 4 &&
      busernameValue.length <= 40 &&
      bphoneValue !== '' &&
      bphoneValue.length >= 4 &&
      bphoneValue.length <= 11 &&
      bemailValue !== '' &&
      bemailValue.length >= 4 &&
      bemailValue.length <= 40 &&

      bbasictermsValue !== '' &&
      bbasictermsValue.length >= 4 &&
      bbasictermsValue.length <= 300 &&
      btargetValue !== '' &&
      btargetValue.length >= 4 &&
      btargetValue.length <= 300 &&
      bknowValue !== '' &&
      bknowValue.length >= 4 &&
      bknowValue.length <= 300 &&
      baudienceValue !== '' &&
      baudienceValue.length >= 4 &&
      baudienceValue.length <= 300 &&
      bchoiceValue !== '' &&
      bchoiceValue.length >= 4 &&
      bchoiceValue.length <= 300 &&

      blinkValue !== '' &&
      blinkValue.length >= 4 &&
      blinkValue.length <= 300 &&
      btopicsValue !== '' &&
      btopicsValue.length >= 4 &&
      btopicsValue.length <= 300 &&
      bnotopicsValue !== '' &&
      bnotopicsValue.length >= 4 &&
      bnotopicsValue.length <= 300 &&
      bpriceValue !== '' &&
      bpriceValue.length >= 4 &&
      bpriceValue.length <= 300 &&
      bimpressionValue !== '' &&
      bimpressionValue.length >= 4 &&
      bimpressionValue.length <= 300 &&
      bimportantValue !== '' &&
      bimportantValue.length >= 4 &&
      bimportantValue.length <= 300 &&
      blikeValue !== '' &&
      blikeValue.length >= 4 &&
      blikeValue.length <= 300 &&
      
      bproblemsValue !== '' &&
      bproblemsValue.length >= 4 &&
      bproblemsValue.length <= 300 &&
      btriggersValue !== '' &&
      btriggersValue.length >= 4 &&
      btriggersValue.length <= 300 &&
      binfoballValue !== '' &&
      binfoballValue.length >= 4 &&
      binfoballValue.length <= 300 &&
      bneedsValue !== '' &&
      bneedsValue.length >= 4 &&
      bneedsValue.length <= 300 &&
      bbarriersValue !== '' &&
      bbarriersValue.length >= 4 &&
      bbarriersValue.length <= 300 &&
      bstriveValue !== '' &&
      bstriveValue.length >= 4 &&
      bstriveValue.length <= 300 &&

      bdesignValue !== '' &&
      bdesignValue.length >= 4 &&
      bdesignValue.length <= 300 &&
      bassociationsValue !== '' &&
      bassociationsValue.length >= 4 &&
      bassociationsValue.length <= 300 &&
      bsegmentValue !== '' &&
      bsegmentValue.length >= 4 &&
      bsegmentValue.length <= 300
    ) {
      // fetch('/ajax/sendMail.php', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     one: busernameValue,
      //     two: bphoneValue,
      //     three: bemailValue,

      //     four: bbasictermsValue,
      //     five: btargetValue,
      //     six: bknowValue,
      //     seven: baudienceValue,
      //     eight: bchoiceValue,

      //     nine: blinkValue,
      //     ten: btopicsValue,
      //     eleven: bnotopicsValue,
      //     twelve: bpriceValue,
      //     thirteen: bimpressionValue,
      //     fourteen: bimportantValue,
      //     fifteen: blikeValue,

      //     sixteen: bproblemsValue,
      //     seventeen: btriggersValue,
      //     eighteen: binfoballValue,
      //     nineteen: bneedsValue,
      //     twenty: bbarriersValue,
      //     twenty-one: bstriveValue,
          
      //     twenty-one: bdesignValue,
      //     twenty-two: bassociationsValue,
      //     twenty-three: bsegmentValue
      //   }),
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8"
      //   }
      // });
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingform.forEach(n => n.style.maxHeight = null);
      bstepsend.classList.add("active");
      bformend.classList.add("active");
      briefingstep.forEach(n => n.classList.remove('unlock'));
      document.querySelector('.briefing__head').innerText = 'СПАСИБО ЗА БРИФИНГ!';
      document.querySelector('.briefing__desc').innerText = 'Мы свяжемся с вами по указанным в брифинге контактам в самое ближайшее время, чтобы обсудить проект.';
      bstepfive.classList.add("success");
      scroll.scrollTo(totop);
    } else {
      scroll.scrollTo(totop);
    }
  }
  // END validate briefing__form_five
}