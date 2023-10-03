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
scroll = new LocomotiveScroll({el: document.querySelector('[data-scroll-container]'),smooth:true,scrollFromAnywhere: true,breakpoint: 0,lerp:0.03,mobile: {breakpoint: 0,smooth: true,inertia: 1,},tablet: {breakpoint: 0,smooth: true,inertia: 1,},smartphone: {breakpoint: 0,smooth: true,inertia: 1,}})
new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"));

const hn_scroll = document.querySelector('.header__nav_scroll');
const hc_scroll = document.querySelector('.header__consultation_scroll');

Scrollbar.init(hn_scroll);
Scrollbar.init(hc_scroll);

const header = document.querySelector('.header');
const projecttop = document.querySelector('.project_top');

if(projecttop && projecttop.style.backgroundColor !=  "rgb(255, 255, 255)"){
  header.classList.add('header__transparent');
}

console.log(projecttop.style.backgroundColor);
const headerprogress = document.querySelector('.header__progress_bar');

scroll.on('scroll', (args) => {
  var scrollY = Math.round(args["scroll"]["y"]);
  var scrollH = Math.round(args["limit"]["y"]);
  let scrollheader = Math.round((scrollY / scrollH) * 100);
  headerprogress.style.flexBasis = scrollheader + '%';
  document.documentElement.setAttribute('scroll', `${Math.round(args["scroll"]["y"])}`);

  if(projecttop && projecttop.style.backgroundColor !=  "rgb(255, 255, 255)"){
    if (Math.round(args["scroll"]["y"]) <= 10) {
      header.classList.add('header__transparent');
    } else {
      header.classList.remove('header__transparent');
    }
  }
});
// end scroll

// start cursor
var cursor = document.querySelector('.cursor');
var a = document.querySelectorAll('a');
var button = document.querySelectorAll('button');
var label = document.querySelectorAll('label');
var cursorgrab = document.querySelectorAll('.c-scrollbar_thumb');
var buttonnext = document.querySelectorAll('.swiper-button-next');
var buttonprev = document.querySelectorAll('.swiper-button-prev');

document.addEventListener('mousemove', function(e){
  var cursorx = e.clientX;
  var cursory = e.clientY;
  cursor.style.setProperty('--x', `${cursorx}px`);
  cursor.style.setProperty('--y', `${cursory}px`);

  if (cursorx > (document.body.clientWidth - 3) || cursory > (document.body.offsetHeight - 3) || cursorx < 3 || cursory < 3) {
    cursor.classList.add('leave')
  } else {
    cursor.classList.remove('leave')
  }
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('active')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('active')
});

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

const burger_ctwo = document.querySelector('.button__project_two');

// кнопка header__burger
document.querySelector('.header__burger').addEventListener('click', function() {
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
    scroll.stop();
  }
})
// end header__burger

// кнопка header__project
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
// кнопка закрыть для header__project
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
// end header__project

// start text rotate
let textblock = document.querySelectorAll('.text');
textblock.forEach(element => {
  let innerText = element.innerText;
  element.innerHTML = '';
  
  let textContainer = document.createElement('span');
  textContainer.classList.add('text__rotate');
  
  for (let letter of innerText) {
    let span = document.createElement('span');
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
    return this.selectList.classList.contains('header__select_list_opened')
  }

  openSelectList() {
    this.selectList.style.maxHeight = this.selectList.scrollHeight + "px";
    this.selectList.classList.add('header__select_list_opened')
    this.selectArrow.classList.add('header__select_arrow_rotate')
  }

  closeSelectList() {
    this.selectList.style.maxHeight = null;
    this.selectList.classList.remove('header__select_list_opened')
    this.selectArrow.classList.remove('header__select_arrow_rotate')
  }

  addSelectedValue(element) {
    this.selectTitle.innerHTML = element.innerHTML;
    this.selectInput.value = element.innerHTML;
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
// Change color mode end

// start expertise
var acc = document.getElementsByClassName("expertise__button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function(e) {
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
  var aboutusThumbs = new Swiper('.articles__swiper', {
    loop: true,
    slidesPerView: 4,
    loopedSlides: 4,
    spaceBetween: 40,
    speed: 1000,
    slideToClickedSlide: false,
    allowTouchMove: true,
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
  });
}
// end articles

// start video
const preview = document.querySelector('.showreel__button');
const showreelvideo = document.getElementById('showreel__video');
const showreelmodal = document.querySelector('.showreel__modal');
const showreelmodalClose = document.querySelector('.showreel__modal_close');
if(!showreelvideo){} else {
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
  html.push('<button class="' + skin + '__button toggle">' + iconPlay + '</button>', '<div class="progress">', '<div class="progress__filled"></div>', '<div class="progress__line"><div id="progress__time"></div></div>', '<div id="progress__duration"></div>', '<div id="progress__currenttime"></div>', '</div>', '<button class="' + skin + '__button volume">' + iconVolumeMedium + '</button>', '<button class="' + skin + '__button fullscreen" title="Full Screen">' + iconExpand + '</button>');
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

// start index animation
let digital = document.querySelector('.digital');
let digitalinfo = document.querySelectorAll('.digital__info');
const digitalsl = document.querySelectorAll('.digital_social_list');
if(!digital){} else {
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

let breadcrumb = document.querySelector('.breadcrumbs__item');
let breadcrumbs = document.querySelectorAll('.breadcrumbs__list');
if(!breadcrumb){} else {
  function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});};
  let breadcrumbopt = {threshold: [0.5]};
  let breadcrumbserv = new IntersectionObserver(onEntry, breadcrumbopt);
  for (let elm of breadcrumbs) {breadcrumbserv.observe(elm);}
  [...breadcrumbs].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
}

// let footer = document.querySelector('.footer');
// let footerlist = document.querySelectorAll('.footer__list');
// let footerinfo = document.querySelectorAll('.footer__info');
// let footercontacts = document.querySelectorAll('.footer__contacts_list');
// let footersocial = document.querySelectorAll('.footer__social');
// if(!footer){} else {
//   let footerd = document.querySelectorAll('.footer');
//   function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});};
//   let footerdopt = {threshold: [0]};
//   let footerdserv = new IntersectionObserver(onEntry, footerdopt);
//   for (let elm of footerd) {footerdserv.observe(elm);}
  
//   let footerlistopt = {threshold: [0.5]};
//   let footerlistserv = new IntersectionObserver(onEntry, footerlistopt);
//   for (let elm of footerlist) {footerlistserv.observe(elm);}
  
//   [...footerlist].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
//   let footerinfoopt = {threshold: [0.5]};
//   let footerinfoserv = new IntersectionObserver(onEntry, footerinfoopt);
//   for (let elm of footerinfo) {footerinfoserv.observe(elm);}
  
//   [...footersocial].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
//   let footercontactsopt = {threshold: [0.5]};
//   let footercontactsserv = new IntersectionObserver(onEntry, footercontactsopt);
//   for (let elm of footercontacts) {footercontactsserv.observe(elm);}
// }
// end index animation