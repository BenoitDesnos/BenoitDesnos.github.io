const geaGrid = document.querySelector(".gea__grid");
const images = document.querySelectorAll(".formation__img");
const formationGea = document.querySelector(".gea");
const formationGendarmerie = document.querySelector(".gendarmerie");
const arrowLeft = document.querySelector(".arrow__left");
const arrowRight = document.querySelector(".arrow__right");
const popup = document.querySelector(".popup");
const cards = document.querySelectorAll(".cover");
const aboutDev = document.querySelector(".about__dev p");

function scrollRight() {
  formationGea.style.left = "-2000px";
  formationGea.style.transition = "left 0.7s ease-in-out";
  formationGendarmerie.style.left = "50%";
  formationGendarmerie.style.transition = "left 0.7s ease-in-out";
  arrowLeft.style.opacity = "1";
  arrowLeft.style.transition = "opacity 0.7s ease-in-out";
  arrowRight.style.opacity = "0";
  arrowRight.style.transition = "opacity 0.7s ease-in-out";
  arrowRight.style.animation = "none";

  animImage(1);
  animLines("gendarmerie");
  animSkills("gendarmerie");
}
function scrollLeft() {
  formationGea.style.left = "50%";
  formationGea.style.transition = "left 0.7s ease-in-out";
  formationGendarmerie.style.left = "2000px";
  formationGendarmerie.style.transition = "left 0.7s ease-in-out";
  arrowLeft.style.opacity = "0";
  arrowLeft.style.transition = "opacity 0.7s ease-in-out";
  arrowRight.style.opacity = "1";
  arrowRight.style.transition = "opacity 0.7s ease-in-out";
}

arrowLeft.addEventListener("click", scrollLeft);
arrowRight.addEventListener("click", scrollRight);

function injectHtml(tag) {
  const tree = document.querySelector("." + tag + "__tree");
  const lines = document.querySelectorAll("." + tag + "__tree > svg");
  let y = ["30", "85", "195", "250"];
  let yMobile = ["15", "42.5", "97.5", "125"];
  let rect = tree.getBoundingClientRect();
  x = rect.width;

  for (i = 0; i < 2; i++) {
    if (window.innerWidth < 700) {
      lines[i].innerHTML = `<path d="M2,70 C60,60 60,10 ${x},${yMobile[i]}"

     fill="none" stroke="black" stroke-width="2"/>`;
    } else {
      lines[i].innerHTML = `<path d="M0,140 C${x * 0.33},200 75,20  ${x},${
        y[i]
      }"
      
      fill="none" stroke="black" stroke-width="2"/>`;
    }
  }
  for (i = 2; i < 4; i++) {
    if (window.innerWidth < 700) {
      lines[i].innerHTML = `<path d="M2,70 C60,80 60,130 ${x},${yMobile[i]}"
      
      fill="none" stroke="black" stroke-width="2"/>`;
    } else {
      lines[i].innerHTML = `<path d="M0,140 C${x * 0.33},80 75,260 ${x},${y[i]}"
      
      fill="none" stroke="black" stroke-width="2"/>`;
    }
  }
}
function byPassOnResize() {
  injectHtml("gea");
  injectHtml("gendarmerie");
}

function animImage(x) {
  for (i = 0; i < images.length; i++) {
    if (window.innerWidth < 500) {
      images[x].style.transform = "translate(-50%, -50%)  scale(0.25)";
      images[x].style.opacity = "1";
      images[x].style.transition = "all 1s";
    } else if (window.innerWidth < 700) {
      images[x].style.transform = "translate(-50%, -50%)  scale(0.4)";
      images[x].style.opacity = "1";
      images[x].style.transition = "all 1s";
    } else if (window.innerWidth < 1000 && window.innerWidth >= 700) {
      images[x].style.transform = "translate(-50%, -50%) scale(0.5)";
      images[x].style.opacity = "1";
      images[x].style.transition = "all 1s";
    } else {
      images[x].style.transform = "translate(-50%, -50%) scale(0.8)";
      images[x].style.opacity = "1";
      images[x].style.transition = "all 1s";
    }
  }
}
function animLines(tag) {
  const lines = document.querySelectorAll("." + tag + "__tree > svg");
  for (let i = 0; i < lines.length; i++) {
    let delay = ["0.5s", "1s", "1.5s", "2s"];
    lines[
      i
    ].style.animation = `line-skills cubic-bezier(.15,.67,.81,1.39) 2s ${delay[i]} forwards`;
  }
}
function animSkills(tag) {
  const skills = document.querySelectorAll("." + tag + "__skills");
  for (let i = 0; i < skills.length; i++) {
    let delay = ["0.5s", "1s", " ", "1.5s", "2s"];
    skills[i].style.animation = `opacity-skills-about 2s ${delay[i]} forwards`;
  }
}

function showFormation() {
  let scrolledToBottom = window.scrollY + window.innerHeight;
  let pageHeight = document.body.offsetHeight; // ou document.body.offsetHeight
  if (window.innerWidth < 700) {
    pageHeight -= 1200;
  }
  let scrollValue = scrolledToBottom / pageHeight;
  if (scrollValue > 0.57 && scrollValue < 0.67) {
    animImage(0);
    animLines("gea");
    animSkills("gea");
  }
}

window.addEventListener("scroll", showFormation);
window.addEventListener("load", injectHtml("gea"));
window.addEventListener("load", injectHtml("gendarmerie"));
window.onresize = byPassOnResize;
popup.addEventListener("mouseover", () => {
  popup.style.display = "none";
});

//-----------Open text personnal description -------------
const readMore = document.getElementById("readMore");
console.log(aboutDev);
readMore.addEventListener("click", () => {
  aboutDev.classList.add("toggle");
  readMore.style.opacity = "0";
  readLess.style.opacity = "1";
  readLess.style.zIndex = "2";

  console.log("test");
});

console.log(aboutDev);
readLess.addEventListener("click", () => {
  aboutDev.classList.remove("toggle");
  readMore.style.opacity = "1";
  readLess.style.opacity = "0";
  readLess.style.zIndex = "0";
  console.log("test");
});
