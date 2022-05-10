// ------ Nav position on scroll --------------

const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const linkSelector = document.querySelectorAll(".nav__link");
const scrollTop = document.querySelector(".scroll-top-wrap");

function addClassLists() {
  linkSelector.forEach((links) => {
    links.classList.add("nav__link--scrolled");
  });
  header.classList.add("header--scrolled");
  nav.classList.add("nav--scrolled");
  scrollTop.classList.add("scroll-top-wrap--active");
}
function removeClassLists() {
  linkSelector.forEach((links) => {
    links.classList.remove("nav__link--scrolled");
  });
  nav.classList.remove("nav--scrolled");
  header.classList.remove("header--scrolled");
  scrollTop.classList.remove("scroll-top-wrap--active");
}

function navScroll() {
  if (window.scrollY > 1 && window.innerWidth <= 2000) {
    addClassLists();
  } else if (window.scrollY < 100) {
    removeClassLists();
  } else if (window.innerWidth >= 2000 && window.scrollY > 1) {
    addClassLists();
  }
}
window.addEventListener("scroll", navScroll);
//------- Anim logo --------------
const logo = document.querySelector(".circle");
function animLogoComputer() {
  logo.style.borderRadius = "50%";
  logo.style.animation = "rolling 2s linear forwards";
  setTimeout(() => {
    logo.style.animation = "none ";
    logo.style.borderRadius = "0px";
    return;
  }, 2000);
}
function animLogoMobile() {
  logo.style.borderRadius = "0";
  logo.style.animation = "none ";
}

const observerWidthPage = new ResizeObserver((entries) => {
  const isBig = entries[0].contentRect.width > 700;

  if (isBig) {
    logo.addEventListener("click", animLogoComputer);
  } else {
    logo.removeEventListener("click", animLogoComputer);
    logo.addEventListener("click", animLogoMobile);
  }
});
observerWidthPage.observe(header);

// voir rezise observer et intersection observer + quand on clique sur logo
//home en mobile nav ne se ferme pas et lorsque l'on scroll le nav se ferme mais pas le boutton

// ------ Nav mobile --------------

const hamburger = document.querySelector(".hamburger");
const pages = document.querySelectorAll(".nav__link, .logo");
const wholePage = document.querySelectorAll("article, aside");
const main = document.querySelector("main");

let clickCounter = 0;
let newWidth = window.innerWidth;
let updateOffset = 0;

//----- to reset nav position if standard non mobile nav's showing----
window.addEventListener("resize", function () {
  newWidth = window.innerWidth;
  console.log(newWidth);
  if (newWidth < 700) {
    hideNav();
    clickCounter = 0;
  } else if (newWidth >= 700) {
    updateOffset = main.offsetLeft;
    console.log(updateOffset);
    nav.style.left = `${updateOffset}px`;
  }
});

function hideNav() {
  nav.style.left = "-150px";
  hamburger.classList.remove("is-active");
}
function showNav() {
  nav.style.left = updateOffset;
  hamburger.classList.add("is-active");
}

function showHideNav() {
  clickCounter++;

  if (clickCounter % 2 === 0) {
    hideNav();
    clickCounter = 0;
  } else {
    showNav();
  }
}

wholePage.forEach((element) => {
  element.addEventListener("click", function () {
    clickCounter = 0;
    hideNav();
    if (window.innerWidth > 700) {
      nav.style.left = `${updateOffset}px`;
    }
  });
});

hamburger.addEventListener("click", showHideNav);

pages.forEach((page) => {
  page.addEventListener("click", function () {
    clickCounter = 0;
    hideNav();
    if (window.innerWidth > 700) {
      nav.style.left = `${updateOffset}px`;
    }
  });
});

// ------ Status presentation --------------
const target = document.getElementById("target");
const letter = document.createElement("span");
const space = document.createElement("span");
const anim = ["Autodidacte développeur web"];
let letterIndex = 0;

function createLetter() {
  target.appendChild(letter);
  letter.textContent += anim[0][letterIndex];
  letter.style.transition = " 0.3s ";
}

const loop = () => {
  setTimeout(() => {
    if (letterIndex < anim[0].length) {
      createLetter();
      letterIndex++;
      loop();
    }
  }, 70);
};
loop();
/* setTimeout(() => {
  loop();
}, 500); */

//------------ header mobile -------------

const headerContacts = document.querySelectorAll(".header__top__contacts");

function injectimages() {
  if (window.innerWidth < 700) {
    headerContacts[0].innerHTML = `<a href="tel:0767867799"><img src="./img/logo-telephone.svg" alt="tel"></a> `;
    headerContacts[1].innerHTML = ` <a href="mailto:benoit.desnos66@gmail.com"><img src="./img/logo-mail.svg" alt="mail"></a>`;
  } else {
    headerContacts[0].innerHTML = ` <a href="tel:0767867799"> (+33)7.67.86.77.99</a>`;
    headerContacts[1].innerHTML = ` <a href="mailto:benoit.desnos66@gmail.com">benoit.desnos66@gmail.com</a>`;
  }
}
window.addEventListener("load", injectimages);
window.addEventListener("resize", injectimages);

///---------Smooth Scroll ---------------
function smoothScroll() {
  const links = document.querySelectorAll(".smooth__scroll");
  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop - 40,
      behavior: "smooth",
    });
  }
}
smoothScroll();

// ----------- select nav link active according to scrollY ---------------

function linkIsActive() {
  const scrollY = window.scrollY + 70; //70 = navheight;
  const homeId = document.getElementById("home");
  const skillsId = document.getElementById("skills");
  const projectsId = document.getElementById("projects");
  const aboutId = document.getElementById("aboutid");
  const contactsId = document.getElementById("contacts");
  const scrollDown = document.getElementById("scroll__down");
  const scrollUp = document.getElementById("scroll__up");

  //console.log(homeId);
  let homeYOffset = offsetY(homeId);
  let skillsYOffset = offsetY(skillsId);
  let projectsYOffset = offsetY(projectsId);
  let aboutYOffset = offsetY(aboutId);
  let contactsYOffset = offsetY(contactsId);

  /*  console.log(homeYOffset);
  console.log(skillsYOffset);
  console.log(projectsYOffset);
  console.log(aboutYOffset);
  console.log(contactsYOffset);
  console.log(window.scrollY + " scrolly"); */

  function offsetY(el) {
    let rect = el.getBoundingClientRect();
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    /* console.log(scrollTop + "scrolltop");
    console.log(window.scrollY + " scrollY");
    console.log(rect); */
    return rect.top + scrollTop;
  }

  /*  console.log(skillsYOffset + " Skillsyoffset"); */

  if (scrollY >= homeYOffset && scrollY < skillsYOffset) {
    linkSelector.forEach((link) => {
      link.classList.remove("nav__link--active");
      scrollDown.innerHTML = `
      <a href="#skills" class="smooth__scroll "><span></span><span></span><span></span></a>
      `;
      scrollUp.style.transform = "translate(0%,-100%)";
      smoothScroll();
    });

    linkSelector[0].classList.add("nav__link--active");
  } else if (scrollY >= skillsYOffset && scrollY < projectsYOffset) {
    linkSelector.forEach((link) => {
      link.classList.remove("nav__link--active");
      scrollDown.innerHTML = `
      <a href="#projects" class="smooth__scroll "><span></span><span></span><span></span></a>
      `;
      scrollUp.style.transform = "translate(-100%,-100%)";

      scrollUp.innerHTML = `
      <a href="#home" class="smooth__scroll "><span></span><span></span><span></span></a>
      `;
      smoothScroll();
    });

    linkSelector[1].classList.add("nav__link--active");
  } else if (scrollY >= projectsYOffset && scrollY < aboutYOffset) {
    linkSelector.forEach((link) => {
      link.classList.remove("nav__link--active");
      scrollDown.innerHTML = `
      <a href="#aboutid" class="smooth__scroll "> <span></span><span></span><span></span></a>      
      `;
      scrollUp.style.transform = "translate(-100%,-100%)";
      scrollUp.innerHTML = `
      <a href="#skills" class="smooth__scroll "> <span></span><span></span><span></span></a>      
      `;
      smoothScroll();
    });

    linkSelector[2].classList.add("nav__link--active");
  } else if (scrollY >= aboutYOffset && scrollY < contactsYOffset) {
    linkSelector.forEach((link) => {
      link.classList.remove("nav__link--active");
      scrollDown.innerHTML = `
      <a href="#contacts" class="smooth__scroll "> <span></span><span></span><span></span></a>
      `;
      scrollDown.style.transform = "translate(-100%, 0%)";
      scrollUp.style.transform = "translate(-100%,-100%)";
      scrollUp.innerHTML = `
      <a href="#projects" class="smooth__scroll "> <span></span><span></span><span></span></a>
      `;
      smoothScroll();
    });

    linkSelector[3].classList.add("nav__link--active");
  } else if (scrollY >= contactsYOffset) {
    linkSelector.forEach((link) => {
      link.classList.remove("nav__link--active");
      scrollDown.innerHTML = `
      <a href="#contacts" class="smooth__scroll "> <span></span><span></span><span></span></a>
      `;
      scrollDown.style.transform = "translate(0%, 0%)";
      scrollUp.style.transform = "translate(-100%,-100%)";
      scrollUp.innerHTML = `
      <a href="#aboutid" class="smooth__scroll "> <span></span><span></span><span></span></a>
      `;
      smoothScroll();
    });

    linkSelector[4].classList.add("nav__link--active");
  }
}

window.addEventListener("scroll", linkIsActive);
window.addEventListener("load", linkIsActive);
