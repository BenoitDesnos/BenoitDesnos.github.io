const projects = document.querySelector(".proj-grid");
const projectsTitle = document.getElementById("projects__intro");
const containers = document.querySelectorAll(".container-even");

function projAnim(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      projects.classList.add("proj__anim--active");
      projectsTitle.classList.add("proj__anim--active");
      observerProjects.unobserve(entry.target);
    }
  });
}

const observerProjects = new IntersectionObserver(projAnim, options); // option defined at skills.js line 7//

observerProjects.observe(containers[1]);
