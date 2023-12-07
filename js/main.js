// start right mouse
// document.oncontextmenu = cmenu; function cmenu() { return false; }
// function preventSelection(element){
//   var preventSelection = false;
//   function addHandler(element, event, handler){
//   if (element.attachEvent) element.attachEvent('on' + event, handler);
//   else if (element.addEventListener) element.addEventListener(event, handler, false);  }
//   function removeSelection(){
//   if (window.getSelection) { window.getSelection().removeAllRanges(); }
//   else if (document.selection && document.selection.clear)
//   document.selection.clear();
//   }

//   addHandler(element, 'mousemove', function(){ if(preventSelection) removeSelection(); });
//   addHandler(element, 'mousedown', function(event){ var event = event || window.event; var sender = event.target || event.srcElement; preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i) ;});

//   function killCtrlA(event){
//   var event = event || window.event;
//   var sender = event.target || event.srcElement;
//   if (sender.tagName.match(/INPUT|TEXTAREA/i)) return;
//   var key = event.keyCode || event.which;
//   if ((event.ctrlKey && key == 'U'.charCodeAt(0)) || (event.ctrlKey && key == 'A'.charCodeAt(0)) || (event.ctrlKey && key == 'S'.charCodeAt(0)))
//   { removeSelection();
//   if (event.preventDefault) event.preventDefault();
//   else event.returnValue = false;}}
//   addHandler(element, 'keydown', killCtrlA);
//   addHandler(element, 'keyup', killCtrlA);
// }
// preventSelection(document);
// end right mouse

// start height
let oldWidth = window.innerWidth;
const docheight = document.documentElement
docheight.style.setProperty('--height', `${window.innerHeight}px`);
const appHeight = () => {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    docheight.style.setProperty('--height', `${window.innerHeight}px`);
  }
  oldWidth = window.innerWidth;
}
window.addEventListener('resize', appHeight);
appHeight();
// end height

// start scroll
// scroll = new LocomotiveScroll({el: document.querySelector('[data-scroll-container]'),smooth:true,getDirection: true,scrollFromAnywhere: true,breakpoint: 0,lerp:0.05,mobile: {breakpoint: 0,smooth: true,inertia: 1,},tablet: {breakpoint: 0,smooth: true,inertia: 1,},smartphone: {breakpoint: 0,smooth: true,inertia: 1,}})
scroll = new LocomotiveScroll({el: document.querySelector('[data-scroll-container]'),smooth:true,getDirection: true,scrollFromAnywhere: true,breakpoint: 0,mobile: {breakpoint: 0,smooth: true,inertia: 1,},tablet: {breakpoint: 0,smooth: true,inertia: 1,},smartphone: {breakpoint: 0,smooth: true,inertia: 1,}})
new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"));

const hn_scroll = document.querySelector('.header__nav_scroll');
const hc_scroll = document.querySelector('.header__consultation_scroll');
const cp_scroll = document.querySelector('.career_popup__scroll');
const fp_scroll = document.querySelector('.feedback_popup__scroll');

Scrollbar.init(hn_scroll);
Scrollbar.init(hc_scroll);
if (cp_scroll) {Scrollbar.init(cp_scroll);}
if (fp_scroll) {Scrollbar.init(fp_scroll);}

const header = document.querySelector('.header');
const projecttop = document.querySelector('.project_top');
const projecttopinfo = document.querySelector('.project_top__info');

if(projecttop && 
  projecttop.style.background !=  "rgb(255, 255, 255)" && 
  projecttop.style.background !=  "rgb(255, 251, 239)" && 
  projecttop.style.background !=  "rgb(233, 249, 249)" && 
  projecttop.style.background !=  "var(--bg)"){
  header.classList.add('header__transparent');
  header.classList.add('project_top__white');
  projecttopinfo.classList.add('project_top__white');
} else if (projecttop && projecttop.style.background ==  "var(--bg)") {
  header.classList.add('project_top__bg');
  projecttopinfo.classList.add('project_top__bg');
}

const headerprogress = document.querySelector('.header__progress_bar');

scroll.on('scroll', (args) => {
  var scrollY = Math.round(args["scroll"]["y"]);
  var scrollH = Math.round(args["limit"]["y"]);
  let scrollheader = Math.round((scrollY / scrollH) * 100);
  headerprogress.style.flexBasis = scrollheader + '%';
  document.documentElement.setAttribute('scroll', `${Math.round(args["scroll"]["y"])}`);

  if(projecttop && 
    projecttop.style.background !=  "rgb(255, 255, 255)" && 
    projecttop.style.background !=  "rgb(255, 251, 239)" && 
    projecttop.style.background !=  "rgb(233, 249, 249)" && 
    projecttop.style.background !=  "var(--bg)"){
    if (Math.round(args["scroll"]["y"]) <= 50) {
      header.classList.add('header__transparent');
    } else {
      header.classList.remove('header__transparent');
    }
  }
});
// end scroll

// start cursor
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const cursorBlock = cursor.querySelector(".cursor__block");
  const a = document.querySelectorAll('a');
  const button = document.querySelectorAll('button');
  const label = document.querySelectorAll('label'); 
  const sinview = document.querySelectorAll('.showreel__inview');
  const cursorgrab = document.querySelectorAll('.c-scrollbar_thumb');
  const buttonnext = document.querySelectorAll('.swiper-button-next');
  const buttonprev = document.querySelectorAll('.swiper-button-prev');
  const sliders = document.querySelectorAll(".swiper-wrapper");

  document.addEventListener('mousemove', function(e){
    let ctx = e.clientX;
    let cty = e.clientY;
    if (ctx > (document.body.offsetWidth - 5) || cty > (document.body.offsetHeight - 5) || ctx < 5 || cty < 5) {
      cursor.classList.add('leave')
    } else {
      cursor.classList.remove('leave')
    }
  });
  
  function moveCursor(event) {
    var cursorX = event.clientX + "px";
    var cursorY = event.clientY + "px";
    cursor.style.transform = `translate3d(${cursorX}, ${cursorY}, 0)`;
  }

  document.onmousemove = (event) => {
    moveCursor(event);
  };

  document.onpointermove = (event) => {
    moveCursor(event);
  };

  document.addEventListener('mousedown', function(){
    cursor.classList.add('active')
  });

  document.addEventListener('mouseup', function(){
    cursor.classList.remove('active')
  });
  
  sinview.forEach(item => {
    item.onmouseenter = () => {
      cursor.classList.add("cursor__showreel");
    };
    item.onmouseleave = () => {
      cursor.classList.remove("cursor__showreel");
      cursorBlock.classList.remove("active");
    };
    item.onpointerdown = () => {
      cursorBlock.classList.add("active");
    }
    item.onpointerup = () => {
      cursorBlock.classList.remove("active");
    };
  })
  if (!document.querySelector(".price__swiper")) {
    sliders.forEach(item => {
      item.onmouseenter = () => {
        cursor.classList.add("cursor__slider");
      };
      item.onmouseleave = () => {
        cursor.classList.remove("cursor__slider");
        cursorBlock.classList.remove("active");
      };
      item.onpointerdown = () => {
        cursorBlock.classList.add("active");
      }
      item.onpointerup = () => {
        cursorBlock.classList.remove("active");
      };
    })
  }

  a.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  button.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  label.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  cursorgrab.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  buttonnext.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  buttonprev.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })
});
// end cursor

// start year
const year = document.querySelector('.footer__year');
if(!year){} else {
  const currentYear = new Date().getFullYear();
  year.insertAdjacentText('beforebegin', currentYear);
  year.remove();
}
// end year

// start navbar
const bodyoverlay = document.querySelector('.overlay');

const headerlinks = document.querySelector('.header__links');
const headerbuttons = document.querySelector('.header__buttons');

const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');

const menu_c = document.querySelector('.header__consultation');
const burger_c = document.querySelector('.button__project');
const contactssb = document.querySelector('.contacts__social_button');

const burger_ctwo = document.querySelector('.button__project_two');
const menuItemActive = document.getElementsByClassName("header__nav_item active");

// button header__burger
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    header.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
    if(menu_c){
      menu_c.classList.remove("active");
      burger_c.classList.remove("active");
    }
    for (var i = 0; i < menuItemActive.length; i++) {
      menuItemActive[i].classList.remove("active");
    }
    scroll.start();
  } else {
    bodyoverlay.classList.add("active");
    menu.classList.add("active");
    burger.classList.add("active");
    header.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    if(menu_c){
      menu_c.classList.remove("active");
      burger_c.classList.remove("active");
    }
    for (var i = 0; i < menuItemActive.length; i++) {
      menuItemActive[i].classList.remove("active");
    }
    scroll.stop();
  }
})
// end header__burger

// button header__project
burger_c.addEventListener('click', function() {
  if (!burger_c.classList.contains("active")) {
    bodyoverlay.classList.add("active");
    menu_c.classList.add("active");
    burger_c.classList.add("active");
    header.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    menu.classList.remove("active");
    burger.classList.remove("active");
    header.classList.add("hidden");
    headerlinks.classList.add("hidden");
    headerbuttons.classList.add("active");
    scroll.stop();
  }
})
if (contactssb) {
  contactssb.addEventListener('click', function() {
    if (!burger_c.classList.contains("active")) {
      bodyoverlay.classList.add("active");
      menu_c.classList.add("active");
      burger_c.classList.add("active");
      header.classList.add("active");
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      menu.classList.remove("active");
      burger.classList.remove("active");
      header.classList.add("hidden");
      headerlinks.classList.add("hidden");
      headerbuttons.classList.add("active");
      scroll.stop();
    }
  })
}
burger_ctwo.addEventListener('click', function() {
  if (!burger_c.classList.contains("active")) {
    bodyoverlay.classList.add("active");
    menu_c.classList.add("active");
    burger_c.classList.add("active");
    header.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    menu.classList.remove("active");
    burger.classList.remove("active");
    header.classList.add("hidden");
    headerlinks.classList.add("hidden");
    headerbuttons.classList.add("active");
    scroll.stop();
  }
})
// button закрыть для header__consultation
document.querySelector('.header__consultation_burger').addEventListener('click', function() {
  if (burger_c.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    menu_c.classList.remove("active");
    burger_c.classList.remove("active");
    header.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
    header.classList.remove("hidden");
    headerlinks.classList.remove("hidden");
    headerbuttons.classList.remove("active");
    scroll.start();
  }
})
// end header__consultation

// start menu sublist
const subnav = document.querySelectorAll('.header__subnav_list');
[...subnav].forEach(function (li) {
  for (let [index, elem] of [...li.children].entries()){
    elem.style.setProperty('--inc-step', index+1);
  }
});

const nav = document.querySelectorAll('.header__nav_list');
[...nav].forEach(function (li) {
  for (let [index, elem] of [...li.children].entries()){
    elem.children[0].style.setProperty('--inc-step', index+1);
  }
});

if (document.documentElement.clientWidth > 1439) {
  var hovermenu = document.querySelector('.header__nav_list');
  var elemHovermenu = false;
  hovermenu.addEventListener('mouseover', function(e) {
    var target = e.target.closest('.header__nav_item');
    if (elemHovermenu || !target) {return};
    elemHovermenu = target;
    var parent = target.closest('.header__nav_list');
    var old = parent.querySelector('.header__nav_item.active');
    if (old) {old.classList.remove('active')};
    target.classList.add('active');
  })
  hovermenu.addEventListener('mouseout', function(e) {
    if(!elemHovermenu) return;
    elemHovermenu = null;
  })
};

var hnl = document.getElementsByClassName("header__nav_link");
var i;
for (i = 0; i < hnl.length; i++) {
  hnl[i].onclick = function(e) {
    if (!this.parentElement.classList.contains("active")) {
      var hsl = this.nextElementSibling;
      if (hsl) {
        e.preventDefault();
        var courseHsl = document.getElementsByClassName("header__subnav_list");
        var courseHniActive = document.getElementsByClassName("header__nav_item active");

        if (hsl.style.maxHeight) {
          hsl.style.maxHeight = null;
          this.parentElement.classList.remove("active");
          hsl.classList.remove("active");
        } else {
          for (var q = 0; q < courseHniActive.length; q++) {
            courseHniActive[q].classList.remove("active");
            courseHsl[q].classList.remove("active");
          }
          for (var p = 0; p < courseHsl.length; p++) {
            this.parentElement.classList.remove("active");
            courseHsl[p].classList.remove("active");
            courseHsl[p].style.maxHeight = null;
          }
          hsl.style.maxHeight = hsl.scrollHeight + "px";
          hsl.classList.add("active");
          this.parentElement.classList.add("active");
        }
      }
    }
  };
}
// end menu sublist

// button career_popup
const careerpopup = document.querySelector('.career_popup');
if(careerpopup) {
  var careerbutton = document.getElementsByClassName("career_bottom__button");
  const careerpopupclose = document.querySelector('.career_popup__close');
  for (i = 0; i < careerbutton.length; i++) {
    careerbutton[i].onclick = function(e) {
      if (careerpopup.classList.contains("active")) {
        bodyoverlay.classList.remove("active");
        careerpopup.classList.remove("active");
        document.body.style.overflow = null;
        document.body.style.height = null;
        bodyoverlay.style.zIndex = null;
        scroll.start();
      } else {
        document.querySelector('.career_popup__vacancy').innerText = this.closest('.expertise__panel').previousElementSibling.children[0].children[0].children[0].children[0].innerText;
        bodyoverlay.classList.add("active");
        careerpopup.classList.add("active");
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
        bodyoverlay.style.zIndex = "101";
        scroll.stop();
      }
    };
  }
  careerpopupclose.addEventListener('click', function() {
    bodyoverlay.classList.remove("active");
    careerpopup.classList.remove("active");
    document.body.style.overflow = null;
    document.body.style.height = null;
    bodyoverlay.style.zIndex = null;
    scroll.start();
  })
}
// end career_popup

// button feedback_popup
const feedbackpopup = document.querySelector('.feedback_popup');
if(feedbackpopup) {
  var feedbackbutton = document.getElementsByClassName("footer_popup__button");
  const feedbackpopupclose = document.querySelector('.feedback_popup__close');
  for (i = 0; i < feedbackbutton.length; i++) {
    feedbackbutton[i].onclick = function(e) {
      if (feedbackpopup.classList.contains("active")) {
        bodyoverlay.classList.remove("active");
        feedbackpopup.classList.remove("active");
        document.body.style.overflow = null;
        document.body.style.height = null;
        bodyoverlay.style.zIndex = null;
        scroll.start();
      } else {
        bodyoverlay.classList.add("active");
        feedbackpopup.classList.add("active");
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
        bodyoverlay.style.zIndex = "101";
        scroll.stop();
      }
    };
  }
  feedbackpopupclose.addEventListener('click', function() {
    bodyoverlay.classList.remove("active");
    feedbackpopup.classList.remove("active");
    document.body.style.overflow = null;
    document.body.style.height = null;
    bodyoverlay.style.zIndex = null;
    scroll.start();
  })
}
// end feedback_popup

// button overlay
bodyoverlay.addEventListener('click', function() {
  if (bodyoverlay.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    header.classList.remove("active");
    header.classList.remove("hidden");
    headerlinks.classList.remove("hidden");
    headerbuttons.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.overflow = null;
    document.body.style.height = null;
    if(menu_c){
      menu_c.classList.remove("active");
      burger_c.classList.remove("active");
    }
    if(careerpopup){
      careerpopup.classList.remove("active");
      bodyoverlay.style.zIndex = null;
    }
    if(feedbackpopup){
      feedbackpopup.classList.remove("active");
      bodyoverlay.style.zIndex = null;
    }
    scroll.start();
  }
})
// end overlay

// button language
const headerlangbutton = document.querySelector('.header__set_language_icon');
const headerlang = document.querySelector('.header__set_language_control');
headerlangbutton.addEventListener('click', function() {
  if (headerlang.classList.contains("active")) {
    headerlang.classList.remove("active");
    headerlang.style.maxWidth = null;
  } else {
    headerlang.classList.add("active");
    headerlang.style.maxWidth = headerlang.scrollWidth + "px";
  }
})
// end language

// start text rotate
let textblock = document.querySelectorAll('.text');
textblock.forEach(element => {
  let innerText = element.innerText;
  element.innerHTML = '';
  
  let textContainer = document.createElement('span');
  textContainer.classList.add('text__rotate');
  
  for (let letter of innerText) {
    let span = document.createElement('span');
    span.innerText = letter.trim() === '' ? span.classList.add('text__space') : letter;
    span.innerText = letter.trim() === '' ? '\xa0': letter;
    textContainer.appendChild(span);
  }
  
  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});
const textrotate = document.querySelectorAll('.text__rotate'); 
[...textrotate].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
// end text rotate

// start select
const SELECT = '[data-select]'
const SELECT_LIST = '[data-select-list]'
const SELECT_ARROW = '[data-select-arrow]'
const SELECT_ACTION = '[data-select-action]'
const SELECT_TITLE = '[data-select-title]'
const SELECT_INPUT = '[data-select-input]'
const SELECT_ITEM = 'selectItem'
const OPEN_SELECT = 'selectOpen'

class Select {
  static attach() {
    document.querySelectorAll(SELECT)
      .forEach(select => new Select().init(select))
  }

  init(select) {
    if (this.findSelect(select)) {
      this.applyListener()
    }
  }

  applyListener() {
    document.querySelector('*').addEventListener('click', e => {
      const element = this.select.contains(e.target) && e.target.closest(SELECT_ACTION)

      if (this.isCallSelectElement(element)) {
        if (this.isOpened()) {
          this.closeSelectList();
        } else {
          this.openSelectList()
        }
      }

      if (this.isCallSelectItemElement(element)) {
        this.addSelectedValue(element)
      }

      if (this.isCallSelectElement(element) !== true && this.selectOverlayIsClickedElement(element) !== true) {
        this.closeSelectList()
      }
    })
  }

  isCallSelectElement(element, target) {
    return element && OPEN_SELECT in element.dataset
  }

  isCallSelectItemElement(element, target) {
    return element && SELECT_ITEM in element.dataset
  }

  findSelect(select) {

    if (select) {
      this.select = select
      this.selectList = this.select.querySelector(SELECT_LIST)
      this.selectArrow = this.select.querySelector(SELECT_ARROW)
      this.selectTitle = this.select.querySelector(SELECT_TITLE)
      this.selectInput = this.select.querySelector(SELECT_INPUT)
      return true
    }
    return false
  }

  isOpened() {
    return this.selectList.classList.contains('form__select_list_opened')
  }

  openSelectList() {
    this.selectList.style.maxHeight = this.selectList.scrollHeight + "px";
    this.selectList.classList.add('form__select_list_opened')
    this.selectArrow.classList.add('form__select_arrow_rotate')
  }

  closeSelectList() {
    this.selectList.style.maxHeight = null;
    this.selectList.classList.remove('form__select_list_opened')
    this.selectArrow.classList.remove('form__select_arrow_rotate')
  }

  addSelectedValue(element) {
    this.selectTitle.innerHTML = element.innerHTML;
    this.selectInput.value = element.innerHTML;
    element.parentNode.parentNode.classList.add("success");
    element.parentNode.parentNode.classList.remove("error");
    this.selectInput.setAttribute('value', this.selectInput.value);
  }

  selectOverlayIsClickedElement(element, target) {
    return element && 'select' in element.dataset
  }
}

Select.attach()
// end select

// Change color mode start
const toggleClrMode = document.querySelector('.header__set_mode');
const toggleClrModeBtnArr = document.querySelectorAll('.header__set_mode .header__set_mode_btn');
const toggleClrModeTxt = document.querySelector('.header__set_mode .header__set_mode_name');

// 1. Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
	document.body.classList.add("dark");
  toggleClrMode.setAttribute('data-clr-mode-active', 'dark');
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem('clrMode') === 'dark') {
  document.body.classList.add("dark");
  toggleClrMode.setAttribute('data-clr-mode-active', 'dark');
  toggleClrModeTxt.innerHTML = 'light on';
} else {
  document.body.classList.remove("dark");
  toggleClrMode.setAttribute('data-clr-mode-active', 'light');
  toggleClrModeTxt.innerHTML = 'dark on';
}

// Если меняются системные настройки, меняем тему
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
  const newColorScheme = event.matches ? "dark" : "light";

  if (newColorScheme === "dark") {
    document.body.classList.add("dark");
    localStorage.setItem("clrMode", "dark");
    toggleClrMode.setAttribute('data-clr-mode-active', 'dark');
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("clrMode", "light");
    toggleClrMode.setAttribute('data-clr-mode-active', 'light');
  }
});

// переключение темного/светлого режима
toggleClrModeBtnArr.forEach((btn) => {
  btn.addEventListener('click', function () {
    const clrModeAttr = this.getAttribute('data-clr-mode');
    const clrModeName = clrModeAttr === 'dark' ? 'light' : 'dark';

    toggleClrMode.setAttribute('data-clr-mode-active', clrModeAttr);
    toggleClrModeTxt.innerHTML = `${clrModeName} on`;
    localStorage.setItem("clrMode", clrModeAttr);
    document.body.classList.toggle("dark");
  });
});

// var hour = new Date().getHours();
// if (hour >= 5 && hour < 12) {
//   document.body.classList.remove("light");
//   document.body.classList.add("dark");
// } else if (hour >= 5 && hour < 12) {
//   document.body.classList.remove("dark");
//   document.body.classList.add("light");
// }
// Change color mode end

// start expertise
var expertisebutton = document.getElementsByClassName("expertise__button");
var i;

for (i = 0; i < expertisebutton.length; i++) {
  expertisebutton[i].onclick = function(e) {
    var expertise = this.nextElementSibling;
    var courseExpertise = document.getElementsByClassName("expertise__panel");
    var courseExpertiseActive = document.getElementsByClassName("expertise__button active");

    if (expertise.style.maxHeight) {
      expertise.style.maxHeight = null;
      this.classList.remove("active");
      expertise.classList.remove("active");
    } else {
      for (var q = 0; q < courseExpertiseActive.length; q++) {
        courseExpertiseActive[q].classList.remove("active");
        courseExpertise[q].classList.remove("active");
      }
      for (var p = 0; p < courseExpertise.length; p++) {
        this.classList.remove("active");
        courseExpertise[p].classList.remove("active");
        courseExpertise[p].style.maxHeight = null;
      }
      expertise.style.maxHeight = (expertise.scrollHeight + 40) + "px";
      expertise.classList.add("active");
      this.classList.add("active");
    }
  };
}
// end expertise

// start articles
const articlesSlider = document.querySelector('.articles__swiper');
if(articlesSlider){
  var aboutusSlider = new Swiper('.articles__swiper', {
    loop: false,
    freeMode: true,
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    loopedSlides: 4,
    spaceBetween: 10,
    speed: 1000,
    navigation: {
      nextEl: '.articles__next',
      prevEl: '.articles__prev',
    },
    breakpoints: {
      1919: {
        spaceBetween: 30,
      },
      1023: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
    },
    breakpoints: {
      1920: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
    },
  });
}
// end articles

// start project desktop
const projectdesktopSlider = document.querySelector('.project_desktop__swiper');
if(projectdesktopSlider){
  var pdesktopSlider = new Swiper('.project_desktop__swiper', {
    loop: true,
    slideToClickedSlide: false,
    allowTouchMove: true,
    watchSlidesProgress: true,
    slidesPerView: 1,
    loopedSlides: 1,
    spaceBetween: 0,
    pagination: {
      el: '.project_desktop__pagination',
      clickable: true,
    },
  });
}
// end project desktop

// start project tab
const projecttabSlider = document.querySelector('.project_tab__swiper');
if(projecttabSlider){
  var ptabSlider = new Swiper('.project_tab__swiper', {
    loop: true,
    slideToClickedSlide: false,
    allowTouchMove: true,
    watchSlidesProgress: true,
    slidesPerView: 1,
    loopedSlides: 1,
    spaceBetween: 0,
    pagination: {
      el: '.project_tab__pagination',
      clickable: true,
    },
  });
}
// end project tab

// start project phone slider
const elsliderphone = document.querySelector('.project_phone');
if(elsliderphone) {
  const ppParent = document.querySelector('.project_phone__list');
  const ppitem = document.querySelectorAll('.project_phone_item');
  window.addEventListener('resize', onResizeHandler, false);
  if (document.documentElement.clientWidth >= 1023) {
    ppParent.insertBefore(ppitem[0], ppitem[3]);
  } else {
    ppParent.insertBefore(ppitem[0], ppitem[2]);
  };
  function onResizeHandler() {
    if (document.documentElement.clientWidth >= 1023) {
      ppParent.insertBefore(ppitem[0], ppitem[3]);
    } else {
      ppParent.insertBefore(ppitem[0], ppitem[2]);
    };
  }
  var pphoneSlider = new Swiper(".project_phone__swiper", {
    loop: false,
    slidesPerView: 1.5,
    spaceBetween: 0,
    initialSlide: 2,
    centerSlides: true,
    centeredSlides : true,
    slideToClickedSlide: true,
    allowTouchMove: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    breakpoints: {
      1440: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 3,
      },
      390: {
        slidesPerView: 2,
      },
    },
  });
}
// end project phone slider

// start project desktop
const projectsSlider = document.querySelector('.projects__swiper');
if(projectsSlider){
  var pSlider = new Swiper('.projects__swiper', {
    loop: false,
    slideToClickedSlide: false,
    allowTouchMove: true,
    watchSlidesProgress: true,
    slidesPerView: 1,
    loopedSlides: 2,
    spaceBetween: 0,
    navigation: {
      nextEl: '.projects__next',
      prevEl: '.projects__prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
    },
  });
}
// end project desktop

// start team
const teamswiperSlider = document.querySelector('.team_slider__swiper');
if(teamswiperSlider){
  var teamSlider = new Swiper(".team_slider__swiper", {
    loop: true,
    slidesPerView: 1,
    loopedSlides: 4,
    spaceBetween: 0,
    loopPreventsSliding: true,
    effect: "coverflow",
    centeredSlides: true,
    slideToClickedSlide: false,
    allowTouchMove: true,
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      1440: {
        slidesPerView: 3.5,
      },
      1024: {
        slidesPerView: 3,
      },
      390: {
        slidesPerView: 1.5,
      },
    },
  });
}
// end team

// start team comments
const teamcommentsSlider = document.querySelector('.team_comments__swiper');
if(teamcommentsSlider){
  var tcSlider = new Swiper('.team_comments__swiper', {
    loop: true,
    slideToClickedSlide: false,
    allowTouchMove: true,
    watchSlidesProgress: true,
    slidesPerView: 1,
    loopedSlides: 1,
    spaceBetween: 80,
    navigation: {
      nextEl: '.team_comments__next',
      prevEl: '.team_comments__prev',
    },
  });
}
// end team comments

// start project present
const projectpresentSlider = document.querySelector('.project_present__swiper');
if(projectpresentSlider){
  var transformValue;
  var projectpresentlist = document.querySelector('.project_present__swiper .project_present__list');
  var ppresentSlider = new Swiper('.project_present__swiper', {
    loop: true,
    slideToClickedSlide: false,
    allowTouchMove: false,
    watchSlidesProgress: true,
    slidesPerView: 1,
    loopedSlides: 10,
    spaceBetween: 0,
    speed: 6000,
    autoplay: {
      enabled: true,
      delay: 1,
      pauseOnMouseEnter: false
    },
    breakpoints: {
      580: {
        slidesPerView: 'auto',
      },
    },
    on: {
      slideChangeTransitionStart: function() {
        projectpresentlist.style.transitionDuration = "6000ms";
        this.params.speed = 6000;
        this.autoplay.start();
      },
      init: function() {
        projectpresentSlider.addEventListener('mouseenter', () => {
          this.autoplay.stop();
          transformValue = projectpresentlist.style.transform;
          projectpresentlist.style.transitionDuration = "0ms";
          this.params.speed = 0;
          projectpresentlist.style.transform = "translate3d(" + this.getTranslate() + "px, 0px, 0px)";
        });
        projectpresentSlider.addEventListener('mouseleave', () => {
          projectpresentlist.style.transitionDuration = "1000ms";
          this.params.speed = 1000;
          projectpresentlist.style.transform = transformValue;
          this.autoplay.start();
        });
      }
    }
  });
}
// end project present

// start video
const preview = document.querySelector('.showreel__button');
const showreelvideo = document.getElementById('showreel__video');
const showreelmodal = document.querySelector('.showreel__modal');
const showreelmodalClose = document.querySelector('.showreel__modal_close');
if(!showreelvideo){} else {
  showreelvideo.pause();
  showreelvideo.currentTime = 0;
  preview.onclick = function(e) {
    e.preventDefault();
    showreelmodal.classList.add('showreel__modal_visible');
    document.querySelector('.spec__overlay').classList.add('is-playing');
    showreelvideo.play();
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    var t;
    window.addEventListener('mousemove', () => {
      if (t) {
        showreelmodal.classList.remove('hide')
        clearTimeout(t)
        t = 0
      }
      t = setTimeout(() => showreelmodal.classList.add('hide'), 1500)
    });
    const progress = document.querySelector('.progress');
    const progressLine = document.querySelector('.progress__line');
    progress.addEventListener('mousemove', (e) => {
      progressLine.style.left = e.offsetX + 'px';
    });
  }
  showreelmodalClose.onclick = function() {
    document.querySelector('.spec__overlay').classList.remove('is-playing');
    showreelmodal.classList.remove('showreel__modal_visible');
    showreelvideo.pause();
    showreelvideo.currentTime = 0;
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
  }
}
(function () {
  // helpers
  var regExp = function regExp(name) {
      return new RegExp('(^| )' + name + '( |$)');
  };
  var forEach = function forEach(list, fn, scope) {
      for (var i = 0; i < list.length; i++) {
          fn.call(scope, list[i]);
      }
  };
  // class list object with basic methods
  function ClassList(element) {
      this.element = element;
  }
  ClassList.prototype = {
      add: function add() {
          forEach(arguments, function (name) {
              if (!this.contains(name)) {
                  this.element.className += ' ' + name;
              }
          }, this);
      },
      remove: function remove() {
          forEach(arguments, function (name) {
              this.element.className = this.element.className.replace(regExp(name), '');
          }, this);
      },
      toggle: function toggle(name) {
          return this.contains(name) ? (this.remove(name), false) : (this.add(name), true);
      },
      contains: function contains(name) {
          return regExp(name).test(this.element.className);
      },
      // bonus..
      replace: function replace(oldName, newName) {
          this.remove(oldName), this.add(newName);
      }
  };
  // IE8/9, Safari
  if (!('classList' in Element.prototype)) {
      Object.defineProperty(Element.prototype, 'classList', {
          get: function get() {
              return new ClassList(this);
          }
      });
  }
  // replace() support for others
  if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
      DOMTokenList.prototype.replace = ClassList.prototype.replace;
  }
})();
(function () {
  if (typeof NodeList.prototype.forEach === "function") return false;
  NodeList.prototype.forEach = Array.prototype.forEach;
})();
// Unfortunately, due to scattered support, browser sniffing is required
function browserSniff() {
  var nVer = navigator.appVersion,
      nAgt = navigator.userAgent,
      browserName = navigator.appName,
      fullVersion = '' + parseFloat(navigator.appVersion),
      majorVersion = parseInt(navigator.appVersion, 10),
      nameOffset,
      verOffset,
      ix;
  // MSIE 11
  if (navigator.appVersion.indexOf("Windows NT") !== -1 && navigator.appVersion.indexOf("rv:11") !== -1) {
      browserName = "IE";
      fullVersion = "11;";
  }
  // MSIE
  else if ((verOffset = nAgt.indexOf("MSIE")) !== -1) {
          browserName = "IE";
          fullVersion = nAgt.substring(verOffset + 5);
      }
      // Chrome
      else if ((verOffset = nAgt.indexOf("Chrome")) !== -1) {
              browserName = "Chrome";
              fullVersion = nAgt.substring(verOffset + 7);
          }
          // Safari
          else if ((verOffset = nAgt.indexOf("Safari")) !== -1) {
                  browserName = "Safari";
                  fullVersion = nAgt.substring(verOffset + 7);
                  if ((verOffset = nAgt.indexOf("Version")) !== -1) {
                      fullVersion = nAgt.substring(verOffset + 8);
                  }
              }
              // Firefox
              else if ((verOffset = nAgt.indexOf("Firefox")) !== -1) {
                      browserName = "Firefox";
                      fullVersion = nAgt.substring(verOffset + 8);
                  }
                  // In most other browsers, "name/version" is at the end of userAgent
                  else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                          browserName = nAgt.substring(nameOffset, verOffset);
                          fullVersion = nAgt.substring(verOffset + 1);
                          if (browserName.toLowerCase() == browserName.toUpperCase()) {
                              browserName = navigator.appName;
                          }
                      }
  // Trim the fullVersion string at semicolon/space if present
  if ((ix = fullVersion.indexOf(";")) !== -1) {
      fullVersion = fullVersion.substring(0, ix);
  }
  if ((ix = fullVersion.indexOf(" ")) !== -1) {
      fullVersion = fullVersion.substring(0, ix);
  }
  majorVersion = parseInt('' + fullVersion, 10);
  if (isNaN(majorVersion)) {
      fullVersion = '' + parseFloat(navigator.appVersion);
      majorVersion = parseInt(navigator.appVersion, 10);
  }
  return [browserName, majorVersion];
}

var obj = {};
obj.browserInfo = browserSniff();
obj.browserName = obj.browserInfo[0];
obj.browserVersion = obj.browserInfo[1];

wrapPlayers();
var players = document.querySelectorAll('.spec__player');
var iconPlay = '<i class="spec-play"></i>';
var iconPause = '<i class="spec-pause"></i>';
var iconVolumeMute = '<i class="spec-volume-mute"></i>';
var iconVolumeMedium = '<i class="spec-volume-medium"></i>';
var iconVolumeLow = '<i class="spec-volume-low"></i>';
var iconExpand = '<i class="spec-expand"></i>';
var iconCompress = '<i class="spec-compress"></i>';

players.forEach(function (player) {
  var videos = player.querySelector('.showreel__video_responsive video');
  var skin = attachSkin(videos.dataset.spec);
  player.classList.add(skin);
  var overlay = videos.dataset.overlay;
  addOverlay(player, overlay);
  var title = showTitle(skin, videos.dataset.title);
  if (title) {
      player.insertAdjacentHTML('beforeend', title);
  }
  var html = buildControls(skin);
  player.insertAdjacentHTML('beforeend', html);
  var color = videos.dataset.color;
  addColor(player, color);
  var playerControls = player.querySelector('.' + skin + '__controls');
  var progress = player.querySelector('.progress');
  var progressBar = player.querySelector('.progress__filled');
  var toggle = player.querySelectorAll('.toggle');
  var volumeButton = player.querySelector('.volume');
  var fullScreenButton = player.querySelector('.fullscreen');
  if (obj.browserName === "IE" && (obj.browserVersion === 8 || obj.browserVersion === 9)) {
      showControls(videos);
      playerControls.style.display = "none";
  }
  videos.addEventListener('click', function () {
      togglePlay(this, player);
  });
  videos.addEventListener('play', function () {
      updateButton(this, toggle);
  });
  videos.addEventListener('pause', function () {
      updateButton(this, toggle);
  });
  videos.addEventListener('timeupdate', function () {
      handleProgress(this, progressBar);
  });
  toggle.forEach(function (button) {
      return button.addEventListener('click', function () {
          togglePlay(videos, player);
      });
  });
  volumeButton.addEventListener('click', function () {
      toggleVolume(videos, volumeButton);
  });
  var mousedown = false;
  progress.addEventListener('click', function (e) {
      scrub(e, videos, progress);
  });
  progress.addEventListener('mousemove', function (e) {
      return mousedown && scrub(e, videos, progress);
  });
  progress.addEventListener('mousedown', function () {
      return mousedown = true;
  });
  progress.addEventListener('mouseup', function () {
      return mousedown = false;
  });
  fullScreenButton.addEventListener('click', function (e) {
      return toggleFullScreen(player, fullScreenButton);
  });
  addListenerMulti(player, 'webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function (e) {
      return onFullScreen(e, player);
  });
});
function showControls(videon) {
  videon.setAttribute("controls", "controls");
}
function togglePlay(videon, player) {
  var method = videon.paused ? 'play' : 'pause';
  videon[method]();
  videon.paused ? player.classList.remove('is-playing') : player.classList.add('is-playing');
}
function updateButton(videon, toggle) {
  var icon = videon.paused ? iconPlay : iconPause;
  toggle.forEach(function (button) {
      return button.innerHTML = icon;
  });
  const progress = document.querySelector('.progress');
  const progress__time = document.getElementById("progress__time");
  progress.addEventListener('mousemove', (e) => {
    var thours = Math.floor((e.offsetX / progress.offsetWidth * videon.duration) / 60 / 60);
    var tminutes = Math.floor((e.offsetX / progress.offsetWidth * videon.duration) / 60) - (thours * 60);
    var tseconds = Math.floor((e.offsetX / progress.offsetWidth * videon.duration) % 60);
    progress__time.innerHTML = [tminutes,tseconds.toString().padStart(2, '0')].join(':');
  });
  var dhours = Math.floor(videon.duration / 60 / 60);
  var dminutes = Math.floor(videon.duration / 60) - (dhours * 60);
  var dseconds = Math.floor(videon.duration % 60);
  progress__duration.innerHTML = [dminutes,dseconds.toString().padStart(2, '0')].join(':');
}
function skip() {
  videon.currentTime += parseFloat(this.dataset.skip);
}
function toggleVolume(videon, volumeButton) {
  var level = videon.volume;
  var icon = iconVolumeMedium;
  if (level == 1) {
      level = 0;
      icon = iconVolumeMute;
  } else if (level == 0.5) {
      level = 1;
      icon = iconVolumeMedium;
  } else {
      level = 0.5;
      icon = iconVolumeLow;
  }
  videon['volume'] = level;
  volumeButton.innerHTML = icon;
}
function handleRangeUpdate() {
  videon[this.name] = this.value;
}
function handleProgress(videon, progressBar) {
  var percent = videon.currentTime / videon.duration * 100;
  progressBar.style.flexBasis = percent + '%';
  progress__duration = document.getElementById("progress__duration");
  progress__currenttime = document.getElementById("progress__currenttime");
  var chours = Math.floor(videon.currentTime / 60 / 60);
  var cminutes = Math.floor(videon.currentTime / 60) - (chours * 60);
  var cseconds = Math.floor(videon.currentTime % 60);
  progress__currenttime.innerHTML = [cminutes,cseconds.toString().padStart(2, '0')].join(':');
}
function scrub(e, videon, progress) {
  var scrubTime = e.offsetX / progress.offsetWidth * videon.duration;
  videon.currentTime = scrubTime;
}
function wrapPlayers() {
  var videol = document.querySelectorAll('.showreel__video_responsive video');
  videol.forEach(function (videon) {
      var wrapper = document.createElement('div');
      wrapper.classList.add('spec__player');
      videon.parentNode.insertBefore(wrapper, videon);
      wrapper.appendChild(videon);
  });
}
Number.prototype.lead0 = function(n) {
  var nz = "" + this;
  while (nz.length < n) {
      nz = "0" + nz;
  }
  return nz;
};
function buildControls(skin) {
  var html = [];
  html.push('<button class="' + skin + '__button--big toggle">' + iconPlay + '</button>');
  html.push('<div class="' + skin + '__border"></div>');
  html.push('<div class="' + skin + '__controls spec__controls">');
  html.push('<button class="' + skin + '__button toggle">' + iconPlay + '</button>', '<div class="progress">', '<div class="progress__filled"></div>', '<div class="progress__line"><p id="progress__time"></p></div>', '<p id="progress__duration"></p>', '<p id="progress__currenttime"></p>', '</div>', '<button class="' + skin + '__button volume">' + iconVolumeMedium + '</button>', '<button class="' + skin + '__button fullscreen" title="Full Screen">' + iconExpand + '</button>');
  html.push('</div>');
  return html.join('');
}
function attachSkin(skin) {
  if (typeof skin != 'undefined' && skin != '') {
      return skin;
  } else {
      return 'spec';
  }
}
function showTitle(skin, title) {
  if (typeof title != 'undefined' && title != '') {
      return '<div class="' + skin + '__title">' + title + '</div>';
  } else {
      return false;
  }
}
function addOverlay(player, overlay) {
  if (overlay == 1) {
      player.classList.add('spec__overlay');
  } else if (overlay == 2) {
      player.classList.add('spec__overlay--2');
  } else {
      return;
  }
}
function addColor(player, color) {
  if (typeof color != 'undefined' && color != '') {
      var buttons = player.querySelectorAll('button');
      var progress = player.querySelector('.progress__filled');
      progress.style.background = color;
      buttons.forEach(function (button) {
          return button.style.color = color;
      });
  }
}
function toggleFullScreen(player, fullScreenButton) {
  // let isFullscreen = false;
  if (!document.fullscreenElement && // alternative standard method
  !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      player.classList.add('spec__fullscreen');

      if (player.requestFullscreen) {
          player.requestFullscreen();
      } else if (player.mozRequestFullScreen) {
          player.mozRequestFullScreen(); // Firefox
      } else if (player.webkitRequestFullscreen) {
          player.webkitRequestFullscreen(); // Chrome and Safari
      } else if (player.msRequestFullscreen) {
          player.msRequestFullscreen();
      }
      isFullscreen = true;

      fullScreenButton.innerHTML = iconCompress;
  } else {
      player.classList.remove('spec__fullscreen');

      if (document.cancelFullScreen) {
          document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      }
      isFullscreen = false;
      fullScreenButton.innerHTML = iconExpand;
  }
}

function onFullScreen(e, player) {
  var isFullscreenNow = document.webkitFullscreenElement !== null;
  if (!isFullscreenNow) {
      player.classList.remove('spec__fullscreen');
      player.querySelector('.fullscreen').innerHTML = iconExpand;
  } else {
      // player.querySelector('.fullscreen').innerHTML = iconExpand;
  }
}

function addListenerMulti(element, eventNames, listener) {
  var events = eventNames.split(' ');
  for (var i = 0, iLen = events.length; i < iLen; i++) {
      element.addEventListener(events[i], listener, false);
  }
}
// end video

// start accordion projects__filter
const projectsfilters = document.querySelector('.projects__filter');
if(projectsfilters) {
  var projectsfilter = document.getElementsByClassName("projects__filter_button");
  for (i = 0; i < projectsfilter.length; i++) {
    projectsfilter[i].onclick = function(e) {
      var projectsfilterordion = this.nextElementSibling;
      var courseprojectsfilterordion = document.getElementsByClassName("projects__filter_sublist");
      var courseprojectsfilterordionActive = document.getElementsByClassName("projects__filter_button active");

      if (projectsfilterordion.style.maxHeight) {
        projectsfilterordion.style.maxHeight = null;
        this.classList.remove("active");
        projectsfilterordion.classList.remove("active");
      } else {
        for (var q = 0; q < courseprojectsfilterordionActive.length; q++) {
          courseprojectsfilterordionActive[q].classList.remove("active");
          courseprojectsfilterordion[q].classList.remove("active");
        }
        for (var p = 0; p < courseprojectsfilterordion.length; p++) {
          this.classList.remove("active");
          courseprojectsfilterordion[p].classList.remove("active");
          courseprojectsfilterordion[p].style.maxHeight = null;
        }
        projectsfilterordion.style.maxHeight = (projectsfilterordion.scrollHeight * 2) + "px";
        projectsfilterordion.classList.add("active");
        this.classList.add("active");
      }
      window.addEventListener('click', e => {
        const target = e.target
        if (!target.closest('.projects__filter')) {
          for (var q = 0; q < courseprojectsfilterordionActive.length; q++) {
            courseprojectsfilterordionActive[q].classList.remove("active");
            courseprojectsfilterordion[q].classList.remove("active");
          }
          projectsfilterordion.style.maxHeight = null;
          this.classList.remove("active");
          projectsfilterordion.classList.remove("active");
        }
      })
    };
  }

  const pfc = [...document.querySelectorAll('.projects__filter_check')];
  const pfclear = document.querySelector('.projects__filter_clear');
  const pfla = document.querySelectorAll('.projects__filter_label');

  const onChecked = () => {
    if(document.querySelector('.projects__filter_label.active')) {
      pfclear.classList.add("active");
    } else {
      pfclear.classList.remove("active");
    }
  }

  pfc.forEach(input => input.addEventListener('input', function(event) {
    if (event.target.checked) {
      event.target.closest('.projects__filter_label').classList.add('active');
    } else {
      event.target.closest('.projects__filter_label').classList.remove('active');
    }
    onChecked()
  }))

  pfclear.addEventListener('click', function() {
    for(var i = 0;i < pfc.length; i++) {pfc[i].checked = false;};
    for(var i = 0;i < pfla.length; i++) {pfla[i].classList.remove('active');};
    pfclear.classList.remove("active");
  })

  const projectsfs = document.querySelectorAll('.projects__filter_sublist');
  [...projectsfs].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
}
// end accordion projects__filter

// start mask phone
const phone_input = document.querySelector('[data-phone-pattern]');
if (phone_input) {
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
}
// end mask phone

// start autosize textarea
autosize(document.querySelectorAll('textarea'));
// end autosize textarea

// start price-list
const pricelist = document.querySelector("[price-list]");
if (pricelist) {
  const pricelists = document.querySelectorAll("[price-list]");
  document.addEventListener("DOMContentLoaded", () => {
    for (i = 0; i < pricelists.length; i++) {
      pricelists[i].textContent = pricelists[i].parentElement.parentElement.children[0].children[1].textContent - (pricelists[i].parentElement.parentElement.children[0].children[1].textContent / 100 * pricelists[i].previousElementSibling.textContent.replace(/\%/, ""));
    }
  });
  document.querySelectorAll('.price__sublist').forEach(n => {
    const priceswiper = new Swiper(n.querySelector('.price__swiper'), {
      slidesPerView: 1,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      breakpoints: {
        1024: {
          slidesPerView: 'auto',
        },
        768: {
          slidesPerView: 3,
        },
        580: {
          slidesPerView: 2,
        },
        390: {
          slidesPerView: 1,
        },
      },
    });
  });
}
// end price-list

// start index animation
const digital = document.querySelector('.digital');
const digitalinfo = document.querySelectorAll('.digital__info');
const digitalsl = document.querySelectorAll('.digital_social_list');
if(digital){
  let digitald = document.querySelectorAll('.digital');
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});};
  let digitaldopt = {threshold: [0]};
  let digitaldserv = new IntersectionObserver(onEntry, digitaldopt);
  for (let elm of digitald) {digitaldserv.observe(elm);}

  let digitalopt = {threshold: [0.5]};
  let digitalserv = new IntersectionObserver(onEntry, digitalopt);
  for (let elm of digitalinfo) {digitalserv.observe(elm);}
  const digitalhead = document.querySelectorAll('.digital__head'); 
  [...digitalhead].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});

  let digitallopt = {threshold: [0.5]};
  let digitallserv = new IntersectionObserver(onEntry, digitallopt);
  for (let elm of digitalsl) {digitallserv.observe(elm);}
  [...digitalsl].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
}

const breadcrumb = document.querySelector('.breadcrumbs__item');
const breadcrumbs = document.querySelectorAll('.breadcrumbs__list');
if(breadcrumb){
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});};
  let breadcrumbopt = {threshold: [0.5]};
  let breadcrumbserv = new IntersectionObserver(onEntry, breadcrumbopt);
  for (let elm of breadcrumbs) {breadcrumbserv.observe(elm);}
  [...breadcrumbs].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
}

const expertise = document.querySelector('.expertise');
const expertiseleft = document.querySelectorAll('.expertise__left');
const expertiseright = document.querySelectorAll('.expertise__right');
if(expertise){
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});};

  let expertiseleftopt = {threshold: [0.5]};
  let expertiseleftserv = new IntersectionObserver(onEntry, expertiseleftopt);
  for (let elm of expertiseleft) {expertiseleftserv.observe(elm);}
  [...expertiseleft].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});

  let expertiserightopt = {threshold: [0.5]};
  let expertiserightserv = new IntersectionObserver(onEntry, expertiserightopt);
  for (let elm of expertiseright) {expertiserightserv.observe(elm);}
}

const projects = document.querySelector('.projects');
const projectsflex = document.querySelectorAll('.projects__flex');
const projectsallflex = document.querySelector('.projects__all_flex');
const projectsallflexs = document.querySelectorAll('.projects__all_flex');
const projectsitem = document.querySelectorAll('.projects__item');
if(projects){
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});};

  if (projectsallflex) {
    let projectsallflexsopt = {threshold: [0.5]};
    let projectsallflexsserv = new IntersectionObserver(onEntry, projectsallflexsopt);
    for (let elm of projectsallflexs) {projectsallflexsserv.observe(elm);}
  }

  let projectsflexopt = {threshold: [0.5]};
  let projectsflexserv = new IntersectionObserver(onEntry, projectsflexopt);
  for (let elm of projectsflex) {projectsflexserv.observe(elm);}

  let projectsitemopt = {threshold: [0.3]};
  let projectsitemserv = new IntersectionObserver(onEntry, projectsitemopt);
  for (let elm of projectsitem) {projectsitemserv.observe(elm);}
}

const articles = document.querySelector('.articles');
const articlestop = document.querySelectorAll('.articles__top');
const articlesitem = document.querySelectorAll('.articles__item');
if(articles){
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});};

  let articlestopopt = {threshold: [0.5]};
  let articlestopserv = new IntersectionObserver(onEntry, articlestopopt);
  for (let elm of articlestop) {articlestopserv.observe(elm);}

  let articlesitemopt = {threshold: [0.5]};
  let articlesitemserv = new IntersectionObserver(onEntry, articlesitemopt);
  for (let elm of articlesitem) {articlesitemserv.observe(elm);}
}

const headerform = document.querySelector('.header__forms_form_controls');
const headerforms = document.querySelectorAll('.header__forms_form_controls');
if(headerform){
  // function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});};

  // let headerformsopt = {threshold: [0.5]};
  // let headerformsserv = new IntersectionObserver(onEntry, headerformsopt);
  // for (let elm of headerforms) {headerformsserv.observe(elm);}

  [...headerforms].forEach(function (li) {
    for (let [index, elem] of [...li.children].entries()){
      elem.style.setProperty('--inc-step', index+1);
    }
  });
}

const footer = document.querySelector('.footer');
const footerlist = document.querySelectorAll('.footer__list');
const footerleft = document.querySelectorAll('.footer__left');
const footerrb = document.querySelectorAll('.footer__right_block');
const footerbottom = document.querySelectorAll('.footer__bottom');
const footerinfo = document.querySelectorAll('.footer__info');
if(footer){
  let footerd = document.querySelectorAll('.footer');
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});};
  let footerdopt = {threshold: [0]};
  let footerdserv = new IntersectionObserver(onEntry, footerdopt);
  for (let elm of footerd) {footerdserv.observe(elm);}
  
  let footerlistopt = {threshold: [0.5]};
  let footerlistserv = new IntersectionObserver(onEntry, footerlistopt);
  for (let elm of footerlist) {footerlistserv.observe(elm);}
  
  [...footerlist].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
  let footerleftopt = {threshold: [0.5]};
  let footerleftserv = new IntersectionObserver(onEntry, footerleftopt);
  for (let elm of footerleft) {footerleftserv.observe(elm);}
  
  let footerrbopt = {threshold: [0.5]};
  let footerrbserv = new IntersectionObserver(onEntry, footerrbopt);
  for (let elm of footerrb) {footerrbserv.observe(elm);}
  
  let footerbottomopt = {threshold: [0.5]};
  let footerbottomserv = new IntersectionObserver(onEntry, footerbottomopt);
  for (let elm of footerbottom) {footerbottomserv.observe(elm);}
  
  let footerinfoopt = {threshold: [0.5]};
  let footerinfoserv = new IntersectionObserver(onEntry, footerinfoopt);
  for (let elm of footerinfo) {footerinfoserv.observe(elm);}
}
// end index animation