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
  busername.oninput = function(){this.value = this.value.substr(0, busername.getAttribute('maxlength'));}
  bphone.oninput = function(){this.value = this.value.substr(0, bphone.getAttribute('maxlength'));}
  bemail.oninput = function(){this.value = this.value.substr(0, bemail.getAttribute('maxlength'));}

  bbasicterms.oninput = function(){this.value = this.value.substr(0, bbasicterms.getAttribute('maxlength'));}
  btarget.oninput = function(){this.value = this.value.substr(0, btarget.getAttribute('maxlength'));}
  bknow.oninput = function(){this.value = this.value.substr(0, bknow.getAttribute('maxlength'));}
  baudience.oninput = function(){this.value = this.value.substr(0, baudience.getAttribute('maxlength'));}
  bchoice.oninput = function(){this.value = this.value.substr(0, bchoice.getAttribute('maxlength'));}

  blink.oninput = function(){this.value = this.value.substr(0, blink.getAttribute('maxlength'));}
  btopics.oninput = function(){this.value = this.value.substr(0, btopics.getAttribute('maxlength'));}
  bnotopics.oninput = function(){this.value = this.value.substr(0, bnotopics.getAttribute('maxlength'));}
  bprice.oninput = function(){this.value = this.value.substr(0, bprice.getAttribute('maxlength'));}
  bimpression.oninput = function(){this.value = this.value.substr(0, bimpression.getAttribute('maxlength'));}
  bimportant.oninput = function(){this.value = this.value.substr(0, bimportant.getAttribute('maxlength'));}
  blike.oninput = function(){this.value = this.value.substr(0, blike.getAttribute('maxlength'));}

  bproblems.oninput = function(){this.value = this.value.substr(0, bproblems.getAttribute('maxlength'));}
  btriggers.oninput = function(){this.value = this.value.substr(0, btriggers.getAttribute('maxlength'));}
  binfoball.oninput = function(){this.value = this.value.substr(0, binfoball.getAttribute('maxlength'));}
  bneeds.oninput = function(){this.value = this.value.substr(0, bneeds.getAttribute('maxlength'));}
  bbarriers.oninput = function(){this.value = this.value.substr(0, bbarriers.getAttribute('maxlength'));}
  bstrive.oninput = function(){this.value = this.value.substr(0, bstrive.getAttribute('maxlength'));}

  bdesign.oninput = function(){this.value = this.value.substr(0, bdesign.getAttribute('maxlength'));}
  bassociations.oninput = function(){this.value = this.value.substr(0, bassociations.getAttribute('maxlength'));}
  bsegment.oninput = function(){this.value = this.value.substr(0, bsegment.getAttribute('maxlength'));}
  // end maxleight

  // start mask phone
  document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
      var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
      if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
          e.target.value = '';
          return;
        }
      }
      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCalllback);
      }
    }
  });
  // end mask phone

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
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformone.style.maxHeight = bformone.scrollHeight + "px");
      bformone.classList.add("active");
      bstepsone.classList.add("active");
      bstepone.classList.add("border");
      scroll.scrollTo(totop);
    }
  })
  bsteptwo.addEventListener('click', function() {
    if (!bformtwo.classList.contains("active") && bsteptwo.classList.contains("unlock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformtwo.style.maxHeight = bformtwo.scrollHeight + "px");
      bformtwo.classList.add("active");
      bstepstwo.classList.add("active");
      bsteptwo.classList.add("border");
      scroll.scrollTo(totop);
    }
  })
  bstepthree.addEventListener('click', function() {
    if (!bformthree.classList.contains("active") && bstepthree.classList.contains("unlock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformthree.style.maxHeight = bformthree.scrollHeight + "px");
      bformthree.classList.add("active");
      bstepsthree.classList.add("active");
      bstepthree.classList.add("border");
      scroll.scrollTo(totop);
    }
  })
  bstepfour.addEventListener('click', function() {
    if (!bformfour.classList.contains("active") && bstepfour.classList.contains("unlock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformfour.style.maxHeight = bformfour.scrollHeight + "px");
      bformfour.classList.add("active");
      bstepsfour.classList.add("active");
      bstepfour.classList.add("border");
      scroll.scrollTo(totop);
    }
  })
  bstepfive.addEventListener('click', function() {
    if (!bformfive.classList.contains("active") && bstepfive.classList.contains("unlock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformfive.style.maxHeight = bformfive.scrollHeight + "px");
      bformfive.classList.add("active");
      bstepsfive.classList.add("active");
      bstepfive.classList.add("border");
      scroll.scrollTo(totop);
    }
  })
  // END step

  // START back
  bbuttontwo.addEventListener('click', function() {
    briefingform.forEach(n => n.classList.remove('active'));
    briefingsteps.forEach(n => n.classList.remove('active'));
    briefingstep.forEach(n => n.classList.remove('border'));
    briefingform.forEach(n => n.style.maxHeight = null);
    briefingform.forEach(n => bformone.style.maxHeight = bformone.scrollHeight + "px");
    bformone.classList.add("active");
    bstepsone.classList.add("active");
    bstepone.classList.add("border");
    scroll.scrollTo(totop);
  })
  bbuttonthree.addEventListener('click', function() {
    briefingform.forEach(n => n.classList.remove('active'));
    briefingsteps.forEach(n => n.classList.remove('active'));
    briefingstep.forEach(n => n.classList.remove('border'));
    briefingform.forEach(n => n.style.maxHeight = null);
    briefingform.forEach(n => bformtwo.style.maxHeight = bformtwo.scrollHeight + "px");
    bformtwo.classList.add("active");
    bstepstwo.classList.add("active");
    bsteptwo.classList.add("border");
    scroll.scrollTo(totop);
  })
  bbuttonfour.addEventListener('click', function() {
    briefingform.forEach(n => n.classList.remove('active'));
    briefingsteps.forEach(n => n.classList.remove('active'));
    briefingstep.forEach(n => n.classList.remove('border'));
    briefingform.forEach(n => n.style.maxHeight = null);
    briefingform.forEach(n => bformthree.style.maxHeight = bformthree.scrollHeight + "px");
    bformthree.classList.add("active");
    bstepsthree.classList.add("active");
    bstepthree.classList.add("border");
    scroll.scrollTo(totop);
  })
  bbuttonfive.addEventListener('click', function() {
    briefingform.forEach(n => n.classList.remove('active'));
    briefingsteps.forEach(n => n.classList.remove('active'));
    briefingstep.forEach(n => n.classList.remove('border'));
    briefingform.forEach(n => n.style.maxHeight = null);
    briefingform.forEach(n => bformfour.style.maxHeight = bformfour.scrollHeight + "px");
    bformfour.classList.add("active");
    bstepsfour.classList.add("active");
    bstepfour.classList.add("border");
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

    if(busernameValue !== '' && busernameValue.length >= busername.getAttribute('minlength') && busernameValue.length <= busername.getAttribute('maxlength')) {
      setSuccessForBriefing(busername);
      bstepone.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(busername, 'Обязательное поле');
      bstepone.classList.add("error");
      scroll.scrollTo(totop);
    }

    if(bphoneValue !== '' && bphoneValue.length >= bphone.getAttribute('minlength') && bphoneValue.length <= bphone.getAttribute('maxlength')) {
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
    } else if (bemailValue !== '' && bemailValue.length >= bemail.getAttribute('minlength') && bemailValue.length <= bemail.getAttribute('maxlength')) {
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
      busernameValue.length >= busername.getAttribute('minlength') &&
      busernameValue.length <= busername.getAttribute('maxlength') &&
      bphoneValue !== '' &&
      bphoneValue.length >= bphone.getAttribute('minlength') &&
      bphoneValue.length <= bphone.getAttribute('maxlength') &&
      bemailValue !== '' &&
      bemailValue.length >= bemail.getAttribute('minlength') &&
      bemailValue.length <= bemail.getAttribute('maxlength')
    ) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformtwo.style.maxHeight = bformtwo.scrollHeight + "px");
      bformtwo.classList.add("active");
      bstepstwo.classList.add("active");
      bsteptwo.classList.add("active");
      bsteptwo.classList.add("unlock");
      bsteptwo.classList.add("border");
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

    if(bbasictermsValue !== '' && bbasictermsValue.length >= bbasicterms.getAttribute('minlength') && bbasictermsValue.length <= bbasicterms.getAttribute('maxlength')) {
      setSuccessForBriefing(bbasicterms);
      bsteptwo.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bbasicterms, 'Обязательное поле');
      bsteptwo.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(btargetValue !== '' && btargetValue.length >= btarget.getAttribute('minlength') && btargetValue.length <= btarget.getAttribute('maxlength')) {
      setSuccessForBriefing(btarget);
      bsteptwo.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(btarget, 'Обязательное поле');
      bsteptwo.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bknowValue !== '' && bknowValue.length >= bknow.getAttribute('minlength') && bknowValue.length <= bknow.getAttribute('maxlength')) {
      setSuccessForBriefing(bknow);
      bsteptwo.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bknow, 'Обязательное поле');
      bsteptwo.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(baudienceValue !== '' && baudienceValue.length >= baudience.getAttribute('minlength') && baudienceValue.length <= baudience.getAttribute('maxlength')) {
      setSuccessForBriefing(baudience);
      bsteptwo.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(baudience, 'Обязательное поле');
      bsteptwo.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bchoiceValue !== '' && bchoiceValue.length >= bchoice.getAttribute('minlength') && bchoiceValue.length <= bchoice.getAttribute('maxlength')) {
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
      bbasictermsValue.length >= bbasicterms.getAttribute('minlength') &&
      bbasictermsValue.length <= bbasicterms.getAttribute('maxlength') &&
      btargetValue != '' &&
      btargetValue.length >= btarget.getAttribute('minlength') &&
      btargetValue.length <= btarget.getAttribute('maxlength') &&
      bknowValue != '' &&
      bknowValue.length >= bknow.getAttribute('minlength') &&
      bknowValue.length <= bknow.getAttribute('maxlength') &&
      baudienceValue != '' &&
      baudienceValue.length >= baudience.getAttribute('minlength') &&
      baudienceValue.length <= baudience.getAttribute('maxlength') &&
      bchoiceValue != '' &&
      bchoiceValue.length >= bchoice.getAttribute('minlength') &&
      bchoiceValue.length <= bchoice.getAttribute('maxlength')
    ){
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformthree.style.maxHeight = bformthree.scrollHeight + "px");
      bformthree.classList.add("active");
      bstepsthree.classList.add("active");
      bstepthree.classList.add("active");
      bstepthree.classList.add("unlock");
      bstepthree.classList.add("border");
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

    if(blinkValue !== '' && blinkValue.length >= blink.getAttribute('minlength') && blinkValue.length <= blink.getAttribute('maxlength')) {
      setSuccessForBriefing(blink);
      bstepthree.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(blink, 'Обязательное поле');
      bstepthree.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(btopicsValue !== '' && btopicsValue.length >= btopics.getAttribute('minlength') && btopicsValue.length <= btopics.getAttribute('maxlength')) {
      setSuccessForBriefing(btopics);
      bstepthree.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(btopics, 'Обязательное поле');
      bstepthree.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bnotopicsValue !== '' && bnotopicsValue.length >= bnotopics.getAttribute('minlength') && bnotopicsValue.length <= bnotopics.getAttribute('maxlength')) {
      setSuccessForBriefing(bnotopics);
      bstepthree.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bnotopics, 'Обязательное поле');
      bstepthree.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bpriceValue !== '' && bpriceValue.length >= bprice.getAttribute('minlength') && bpriceValue.length <= bprice.getAttribute('maxlength')) {
      setSuccessForBriefing(bprice);
      bstepthree.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bprice, 'Обязательное поле');
      bstepthree.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bimpressionValue !== '' && bimpressionValue.length >= bimpression.getAttribute('minlength') && bimpressionValue.length <= bimpression.getAttribute('maxlength')) {
      setSuccessForBriefing(bimpression);
      bstepthree.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bimpression, 'Обязательное поле');
      bstepthree.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bimportantValue !== '' && bimportantValue.length >= bimportant.getAttribute('minlength') && bimportantValue.length <= bimportant.getAttribute('maxlength')) {
      setSuccessForBriefing(bimportant);
      bstepthree.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bimportant, 'Обязательное поле');
      bstepthree.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(blikeValue !== '' && blikeValue.length >= blike.getAttribute('minlength') && blikeValue.length <= blike.getAttribute('maxlength')) {
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
      blinkValue.length >= blink.getAttribute('minlength') &&
      blinkValue.length <= blink.getAttribute('maxlength') &&
      btopicsValue != '' &&
      btopicsValue.length >= btopics.getAttribute('minlength') &&
      btopicsValue.length <= btopics.getAttribute('maxlength') &&
      bnotopicsValue != '' &&
      bnotopicsValue.length >= bnotopics.getAttribute('minlength') &&
      bnotopicsValue.length <= bnotopics.getAttribute('maxlength') &&
      bpriceValue != '' &&
      bpriceValue.length >= bprice.getAttribute('minlength') &&
      bpriceValue.length <= bprice.getAttribute('maxlength') &&
      bimpressionValue != '' &&
      bimpressionValue.length >= bimpression.getAttribute('minlength') &&
      bimpressionValue.length <= bimpression.getAttribute('maxlength') &&
      bimportantValue != '' &&
      bimportantValue.length >= bimportant.getAttribute('minlength') &&
      bimportantValue.length <= bimportant.getAttribute('maxlength') &&
      blikeValue != '' &&
      blikeValue.length >= blike.getAttribute('minlength') &&
      blikeValue.length <= blike.getAttribute('maxlength')
    ){
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformfour.style.maxHeight = bformfour.scrollHeight + "px");
      bformfour.classList.add("active");
      bstepsfour.classList.add("active");
      bstepfour.classList.add("active");
      bstepfour.classList.add("unlock");
      bstepfour.classList.add("border");
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

    if(bproblemsValue !== '' && bproblemsValue.length >= bproblems.getAttribute('minlength') && bproblemsValue.length <= bproblems.getAttribute('maxlength')) {
      setSuccessForBriefing(bproblems);
      bstepfour.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bproblems, 'Обязательное поле');
      bstepfour.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(btriggersValue !== '' && btriggersValue.length >= btriggers.getAttribute('minlength') && btriggersValue.length <= btriggers.getAttribute('maxlength')) {
      setSuccessForBriefing(btriggers);
      bstepfour.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(btriggers, 'Обязательное поле');
      bstepfour.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(binfoballValue !== '' && binfoballValue.length >= binfoball.getAttribute('minlength') && binfoballValue.length <= binfoball.getAttribute('maxlength')) {
      setSuccessForBriefing(binfoball);
      bstepfour.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(binfoball, 'Обязательное поле');
      bstepfour.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bneedsValue !== '' && bneedsValue.length >= bneeds.getAttribute('minlength') && bneedsValue.length <= bneeds.getAttribute('maxlength')) {
      setSuccessForBriefing(bneeds);
      bstepfour.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bneeds, 'Обязательное поле');
      bstepfour.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bbarriersValue !== '' && bbarriersValue.length >= bbarriers.getAttribute('minlength') && bbarriersValue.length <= bbarriers.getAttribute('maxlength')) {
      setSuccessForBriefing(bbarriers);
      bstepfour.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bbarriers, 'Обязательное поле');
      bstepfour.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bstriveValue !== '' && bstriveValue.length >= bstrive.getAttribute('minlength') && bstriveValue.length <= bstrive.getAttribute('maxlength')) {
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
      bproblemsValue.length >= bproblems.getAttribute('minlength') &&
      bproblemsValue.length <= bproblems.getAttribute('maxlength') &&
      btriggersValue != '' &&
      btriggersValue.length >= btriggers.getAttribute('minlength') &&
      btriggersValue.length <= btriggers.getAttribute('maxlength') &&
      binfoballValue != '' &&
      binfoballValue.length >= binfoball.getAttribute('minlength') &&
      binfoballValue.length <= binfoball.getAttribute('maxlength') &&
      bneedsValue != '' &&
      bneedsValue.length >= bneeds.getAttribute('minlength') &&
      bneedsValue.length <= bneeds.getAttribute('maxlength') &&
      bbarriersValue != '' &&
      bbarriersValue.length >= bbarriers.getAttribute('minlength') &&
      bbarriersValue.length <= bbarriers.getAttribute('maxlength') &&
      bstriveValue != '' &&
      bstriveValue.length >= bstrive.getAttribute('minlength') &&
      bstriveValue.length <= bstrive.getAttribute('maxlength')
    ){
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformfive.style.maxHeight = bformfive.scrollHeight + "px");
      bformfive.classList.add("active");
      bstepsfive.classList.add("active");
      bstepfive.classList.add("active");
      bstepfive.classList.add("unlock");
      bstepfive.classList.add("border");
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


    if(busernameValue !== '' && busernameValue.length >= busername.getAttribute('minlength') && busernameValue.length <= busername.getAttribute('maxlength')) {
      setSuccessForBriefing(busername);
    } else {
      setErrorForBriefing(busername, 'Обязательное поле');
    }

    if(bphoneValue !== '' && bphoneValue.length >= bphone.getAttribute('minlength') && bphoneValue.length <= bphone.getAttribute('maxlength')) {
      setSuccessForBriefing(bphone);
    } else {
      setErrorForBriefing(bphone, 'Введите корректный телефон');
    }

    if(!isEmail(bemailValue)) {
      setErrorForBriefing(bemail, 'Введите корректный email');
    } else if (bemailValue !== '' && bemailValue.length >= bemail.getAttribute('minlength') && bemailValue.length <= bemail.getAttribute('maxlength')) {
      setSuccessForBriefing(bemail);
    } else {
      setErrorForBriefing(bemail, 'Введите корректный email');
    }

    if(!isEmail(bemailValue)){
      bstepone.classList.remove("success");
      bstepone.classList.add("error");
    } else if (
      busernameValue != '' &&
      busernameValue.length >= busername.getAttribute('minlength') &&
      busernameValue.length <= busername.getAttribute('maxlength') &&
      bphoneValue != '' &&
      bphoneValue.length >= bphone.getAttribute('minlength') &&
      bphoneValue.length <= bphone.getAttribute('maxlength') &&
      bemailValue != '' &&
      bemailValue.length >= bemail.getAttribute('minlength') &&
      bemailValue.length <= bemail.getAttribute('maxlength')
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

    if(bbasictermsValue !== '' && bbasictermsValue.length >= bbasicterms.getAttribute('minlength') && bbasictermsValue.length <= bbasicterms.getAttribute('maxlength')) {
      setSuccessForBriefing(bbasicterms);
    } else {
      setErrorForBriefing(bbasicterms, 'Обязательное поле');
    }
    if(btargetValue !== '' && btargetValue.length >= btarget.getAttribute('minlength') && btargetValue.length <= btarget.getAttribute('maxlength')) {
      setSuccessForBriefing(btarget);
    } else {
      setErrorForBriefing(btarget, 'Обязательное поле');
    }
    if(bknowValue !== '' && bknowValue.length >= bknow.getAttribute('minlength') && bknowValue.length <= bknow.getAttribute('maxlength')) {
      setSuccessForBriefing(bknow);
    } else {
      setErrorForBriefing(bknow, 'Обязательное поле');
    }
    if(baudienceValue !== '' && baudienceValue.length >= baudience.getAttribute('minlength') && baudienceValue.length <= baudience.getAttribute('maxlength')) {
      setSuccessForBriefing(baudience);
    } else {
      setErrorForBriefing(baudience, 'Обязательное поле');
    }
    if(bchoiceValue !== '' && bchoiceValue.length >= bchoice.getAttribute('minlength') && bchoiceValue.length <= bchoice.getAttribute('maxlength')) {
      setSuccessForBriefing(bchoice);
    } else {
      setErrorForBriefing(bchoice, 'Обязательное поле');
    }
    if(
      bbasictermsValue != '' &&
      bbasictermsValue.length >= bbasicterms.getAttribute('minlength') &&
      bbasictermsValue.length <= bbasicterms.getAttribute('maxlength') &&
      btargetValue != '' &&
      btargetValue.length >= btarget.getAttribute('minlength') &&
      btargetValue.length <= btarget.getAttribute('maxlength') &&
      bknowValue != '' &&
      bknowValue.length >= bknow.getAttribute('minlength') &&
      bknowValue.length <= bknow.getAttribute('maxlength') &&
      baudienceValue != '' &&
      baudienceValue.length >= baudience.getAttribute('minlength') &&
      baudienceValue.length <= baudience.getAttribute('maxlength') &&
      bchoiceValue != '' &&
      bchoiceValue.length >= bchoice.getAttribute('minlength') &&
      bchoiceValue.length <= bchoice.getAttribute('maxlength')
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

    if(blinkValue !== '' && blinkValue.length >= blink.getAttribute('minlength') && blinkValue.length <= blink.getAttribute('maxlength')) {
      setSuccessForBriefing(blink);
    } else {
      setErrorForBriefing(blink, 'Обязательное поле');
    }
    if(btopicsValue !== '' && btopicsValue.length >= btopics.getAttribute('minlength') && btopicsValue.length <= btopics.getAttribute('maxlength')) {
      setSuccessForBriefing(btopics);
    } else {
      setErrorForBriefing(btopics, 'Обязательное поле');
    }
    if(bnotopicsValue !== '' && bnotopicsValue.length >= bnotopics.getAttribute('minlength') && bnotopicsValue.length <= bnotopics.getAttribute('maxlength')) {
      setSuccessForBriefing(bnotopics);
    } else {
      setErrorForBriefing(bnotopics, 'Обязательное поле');
    }
    if(bpriceValue !== '' && bpriceValue.length >= bprice.getAttribute('minlength') && bpriceValue.length <= bprice.getAttribute('maxlength')) {
      setSuccessForBriefing(bprice);
    } else {
      setErrorForBriefing(bprice, 'Обязательное поле');
    }
    if(bimpressionValue !== '' && bimpressionValue.length >= bimpression.getAttribute('minlength') && bimpressionValue.length <= bimpression.getAttribute('maxlength')) {
      setSuccessForBriefing(bimpression);
    } else {
      setErrorForBriefing(bimpression, 'Обязательное поле');
    }
    if(bimportantValue !== '' && bimportantValue.length >= bimportant.getAttribute('minlength') && bimportantValue.length <= bimportant.getAttribute('maxlength')) {
      setSuccessForBriefing(bimportant);
    } else {
      setErrorForBriefing(bimportant, 'Обязательное поле');
    }
    if(blikeValue !== '' && blikeValue.length >= blike.getAttribute('minlength') && blikeValue.length <= blike.getAttribute('maxlength')) {
      setSuccessForBriefing(blike);
    } else {
      setErrorForBriefing(blike, 'Обязательное поле');
    }
    if(
      blinkValue != '' &&
      blinkValue.length >= blink.getAttribute('minlength') &&
      blinkValue.length <= blink.getAttribute('maxlength') &&
      btopicsValue != '' &&
      btopicsValue.length >= btopics.getAttribute('minlength') &&
      btopicsValue.length <= btopics.getAttribute('maxlength') &&
      bnotopicsValue != '' &&
      bnotopicsValue.length >= bnotopics.getAttribute('minlength') &&
      bnotopicsValue.length <= bnotopics.getAttribute('maxlength') &&
      bpriceValue != '' &&
      bpriceValue.length >= bprice.getAttribute('minlength') &&
      bpriceValue.length <= bprice.getAttribute('maxlength') &&
      bimpressionValue != '' &&
      bimpressionValue.length >= bimpression.getAttribute('minlength') &&
      bimpressionValue.length <= bimpression.getAttribute('maxlength') &&
      bimportantValue != '' &&
      bimportantValue.length >= bimportant.getAttribute('minlength') &&
      bimportantValue.length <= bimportant.getAttribute('maxlength') &&
      blikeValue != '' &&
      blikeValue.length >= blike.getAttribute('minlength') &&
      blikeValue.length <= blike.getAttribute('maxlength')
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

    if(bproblemsValue !== '' && bproblemsValue.length >= bproblems.getAttribute('minlength') && bproblemsValue.length <= bproblems.getAttribute('maxlength')) {
      setSuccessForBriefing(bproblems);
    } else {
      setErrorForBriefing(bproblems, 'Обязательное поле');
    }
    if(btriggersValue !== '' && btriggersValue.length >= btriggers.getAttribute('minlength') && btriggersValue.length <= btriggers.getAttribute('maxlength')) {
      setSuccessForBriefing(btriggers);
    } else {
      setErrorForBriefing(btriggers, 'Обязательное поле');
    }
    if(binfoballValue !== '' && binfoballValue.length >= binfoball.getAttribute('minlength') && binfoballValue.length <= binfoball.getAttribute('maxlength')) {
      setSuccessForBriefing(binfoball);
    } else {
      setErrorForBriefing(binfoball, 'Обязательное поле');
    }
    if(bneedsValue !== '' && bneedsValue.length >= bneeds.getAttribute('minlength') && bneedsValue.length <= bneeds.getAttribute('maxlength')) {
      setSuccessForBriefing(bneeds);
    } else {
      setErrorForBriefing(bneeds, 'Обязательное поле');
    }
    if(bbarriersValue !== '' && bbarriersValue.length >= bbarriers.getAttribute('minlength') && bbarriersValue.length <= bbarriers.getAttribute('maxlength')) {
      setSuccessForBriefing(bbarriers);
    } else {
      setErrorForBriefing(bbarriers, 'Обязательное поле');
    }
    if(bstriveValue !== '' && bstriveValue.length >= bstrive.getAttribute('minlength') && bstriveValue.length <= bstrive.getAttribute('maxlength')) {
      setSuccessForBriefing(bstrive);
    } else {
      setErrorForBriefing(bstrive, 'Обязательное поле');
    }
    if(
      bproblemsValue != '' &&
      bproblemsValue.length >= bproblems.getAttribute('minlength') &&
      bproblemsValue.length <= bproblems.getAttribute('maxlength') &&
      btriggersValue != '' &&
      btriggersValue.length >= btriggers.getAttribute('minlength') &&
      btriggersValue.length <= btriggers.getAttribute('maxlength') &&
      binfoballValue != '' &&
      binfoballValue.length >= binfoball.getAttribute('minlength') &&
      binfoballValue.length <= binfoball.getAttribute('maxlength') &&
      bneedsValue != '' &&
      bneedsValue.length >= bneeds.getAttribute('minlength') &&
      bneedsValue.length <= bneeds.getAttribute('maxlength') &&
      bbarriersValue != '' &&
      bbarriersValue.length >= bbarriers.getAttribute('minlength') &&
      bbarriersValue.length <= bbarriers.getAttribute('maxlength') &&
      bstriveValue != '' &&
      bstriveValue.length >= bstrive.getAttribute('minlength') &&
      bstriveValue.length <= bstrive.getAttribute('maxlength')
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

    if(bdesignValue !== '' && bdesignValue.length >= bdesign.getAttribute('minlength') && bdesignValue.length <= bdesign.getAttribute('maxlength')) {
      setSuccessForBriefing(bdesign);
      bstepfive.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bdesign, 'Обязательное поле');
      bstepfive.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bassociationsValue !== '' && bassociationsValue.length >= bassociations.getAttribute('minlength') && bassociationsValue.length <= bassociations.getAttribute('maxlength')) {
      setSuccessForBriefing(bassociations);
      bstepfive.classList.remove("error");
      scroll.scrollTo(totop);
    } else {
      setErrorForBriefing(bassociations, 'Обязательное поле');
      bstepfive.classList.add("error");
      scroll.scrollTo(totop);
    }
    if(bsegmentValue !== '' && bsegmentValue.length >= bsegment.getAttribute('minlength') && bsegmentValue.length <= bsegment.getAttribute('maxlength')) {
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
      busernameValue.length >= busername.getAttribute('minlength') &&
      busernameValue.length <= busername.getAttribute('maxlength') &&
      bphoneValue !== '' &&
      bphoneValue.length >= bphone.getAttribute('minlength') &&
      bphoneValue.length <= bphone.getAttribute('maxlength') &&
      bemailValue !== '' &&
      bemailValue.length >= bemail.getAttribute('minlength') &&
      bemailValue.length <= bemail.getAttribute('maxlength') &&

      bbasictermsValue !== '' &&
      bbasictermsValue.length >= bbasicterms.getAttribute('minlength') &&
      bbasictermsValue.length <= bbasicterms.getAttribute('maxlength') &&
      btargetValue !== '' &&
      btargetValue.length >= btarget.getAttribute('minlength') &&
      btargetValue.length <= btarget.getAttribute('maxlength') &&
      bknowValue !== '' &&
      bknowValue.length >= bknow.getAttribute('minlength') &&
      bknowValue.length <= bknow.getAttribute('maxlength') &&
      baudienceValue !== '' &&
      baudienceValue.length >= baudience.getAttribute('minlength') &&
      baudienceValue.length <= baudience.getAttribute('maxlength') &&
      bchoiceValue !== '' &&
      bchoiceValue.length >= bchoice.getAttribute('minlength') &&
      bchoiceValue.length <= bchoice.getAttribute('maxlength') &&

      blinkValue !== '' &&
      blinkValue.length >= blink.getAttribute('minlength') &&
      blinkValue.length <= blink.getAttribute('maxlength') &&
      btopicsValue !== '' &&
      btopicsValue.length >= btopics.getAttribute('minlength') &&
      btopicsValue.length <= btopics.getAttribute('maxlength') &&
      bnotopicsValue !== '' &&
      bnotopicsValue.length >= bnotopics.getAttribute('minlength') &&
      bnotopicsValue.length <= bnotopics.getAttribute('maxlength') &&
      bpriceValue !== '' &&
      bpriceValue.length >= bprice.getAttribute('minlength') &&
      bpriceValue.length <= bprice.getAttribute('maxlength') &&
      bimpressionValue !== '' &&
      bimpressionValue.length >= bimpression.getAttribute('minlength') &&
      bimpressionValue.length <= bimpression.getAttribute('maxlength') &&
      bimportantValue !== '' &&
      bimportantValue.length >= bimportant.getAttribute('minlength') &&
      bimportantValue.length <= bimportant.getAttribute('maxlength') &&
      blikeValue !== '' &&
      blikeValue.length >= blike.getAttribute('minlength') &&
      blikeValue.length <= blike.getAttribute('maxlength') &&
      
      bproblemsValue !== '' &&
      bproblemsValue.length >= bproblems.getAttribute('minlength') &&
      bproblemsValue.length <= bproblems.getAttribute('maxlength') &&
      btriggersValue !== '' &&
      btriggersValue.length >= btriggers.getAttribute('minlength') &&
      btriggersValue.length <= btriggers.getAttribute('maxlength') &&
      binfoballValue !== '' &&
      binfoballValue.length >= binfoball.getAttribute('minlength') &&
      binfoballValue.length <= binfoball.getAttribute('maxlength') &&
      bneedsValue !== '' &&
      bneedsValue.length >= bneeds.getAttribute('minlength') &&
      bneedsValue.length <= bneeds.getAttribute('maxlength') &&
      bbarriersValue !== '' &&
      bbarriersValue.length >= bbarriers.getAttribute('minlength') &&
      bbarriersValue.length <= bbarriers.getAttribute('maxlength') &&
      bstriveValue !== '' &&
      bstriveValue.length >= bstrive.getAttribute('minlength') &&
      bstriveValue.length <= bstrive.getAttribute('maxlength') &&

      bdesignValue !== '' &&
      bdesignValue.length >= bdesign.getAttribute('minlength') &&
      bdesignValue.length <= bdesign.getAttribute('maxlength') &&
      bassociationsValue !== '' &&
      bassociationsValue.length >= bassociations.getAttribute('minlength') &&
      bassociationsValue.length <= bassociations.getAttribute('maxlength') &&
      bsegmentValue !== '' &&
      bsegmentValue.length >= bsegment.getAttribute('minlength') &&
      bsegmentValue.length <= bsegment.getAttribute('maxlength')
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
      briefingstep.forEach(n => n.classList.remove('border'));
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