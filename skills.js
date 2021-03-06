let skillAnimSoft = document.querySelectorAll(".hover-skills-soft");
let skillAnimHard = document.querySelectorAll(".hover-skills-hard");
const imageAnim = document.querySelector(".observer-img");
const titleSkills = document.getElementById("skills__intro");
const skills = document.querySelectorAll(".container-skills");
const skillsTitle = document.querySelectorAll(".container__skills  h1");

const covers = document.querySelectorAll(".covers");

let options = {
  rootMargin: "-20% 0px",
  treshold: 0,
};

// animation titre compétences

function coversAnim(entries) {
  if (window.innerWidth < 700) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        for (let x = 0; x < covers.length; x++) {
          covers[x].style.animation =
            "cover-skills 1500ms ease-in-out 2400ms 1 normal none running";
          skillsTitle[x].style.animation =
            "reveal-text 1500ms ease-in-out 2400ms forwards";
        }
      }
    });
  }
}

const observerCovers = new IntersectionObserver(coversAnim, options);
covers.forEach((cover) => {
  observerCovers.observe(cover);
});

// animation compétences

function skillsAnim(entries) {
  //console.log(entries);
  let animationTiming = [` 0.3s `, ` 0.6s `, ` 0.9s `, ` 1.2s `];

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      for (let x = 0; x < animationTiming.length; x++) {
        skillAnimSoft[
          x
        ].style.animation = `skills-anim-left 1.2s linear ${animationTiming[x]} forwards, opacity-skills 1.2s linear ${animationTiming[x]} forwards `;
        skillAnimHard[
          x
        ].style.animation = `skills-anim-right 1.2s linear ${animationTiming[x]} forwards, opacity-skills 1.2s linear ${animationTiming[x]} forwards `;
      }
      imageAnim.style.animation = "opacity-skills 1s linear forwards ";
      titleSkills.style.animation = "opacity-skills 1s linear forwards";
      observerSkills.unobserve(entry.target);
    }
  });
}

const observerSkills = new IntersectionObserver(skillsAnim, options);
observerSkills.observe(skills[0]);

/* ------------------------mixblendmode over on container odd-------------------------- */
/* const containerOdd = document.querySelectorAll("aside");
const mouses = document.querySelectorAll(".mouse");

containerOdd.forEach((container) => {
  container.addEventListener("mouseover", () => {
    window.addEventListener("mousemove", test);
    mouses.forEach((mouse) => {
      mouse.style.opacity = "1";
    });
  });
});
containerOdd.forEach((container) => {
  container.addEventListener("mouseout", () => {
    window.removeEventListener("mousemove", test);
    mouses.forEach((mouse) => {
      mouse.style.opacity = "0";
    });
  });
});
skills[0].addEventListener("mouseover", () => {
  window.addEventListener("mousemove", test);
  mouses.forEach((mouse) => {
    mouse.style.opacity = "1";
  });
});
skills[0].addEventListener("mouseover", () => {
  window.removeEventListener("mousemove", test);
  mouses.forEach((mouse) => {
    mouse.style.opacity = "0";
  });
});
function test(e) {
  mouses.forEach((mouse) => {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
  });
} */
