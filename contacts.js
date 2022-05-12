const contacts = document.querySelectorAll(".contacts--animation");
const inputs = document.querySelectorAll("input:nth-child(-n+4)");
const select = document.querySelector("select");
const textArea = document.querySelector("textarea");
console.log(inputs);

/* let optionsContacts = {
  root: document.querySelector("#contacts > section"),
  rootMargin: "0px",
  threshold: 0.5,
}; */

function contactsAnim(entries) {
  /* console.log("test"); */

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      contacts[0].style.animation = "translateY 1.3s 0.5s forwards";
      contacts[1].style.animation = "bounce 1.3s 0.5s forwards";

      observerContacts.unobserve(entry.target);
    }
  });
}

const observerContacts = new IntersectionObserver(contactsAnim, options);
contacts.forEach((contact) => {
  observerContacts.observe(contact);
});

function sendForm() {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_mbshy4c", "contact_form", this).then(
        function () {
          console.log("SUCCESS!");
          inputs.forEach((input) => {
            input.value = "";
          });
          textArea.value = "";
        },
        function (error) {
          console.log("FAILED...", error);
          inputs.forEach((input) => {
            input.value = "";
          });
          textArea.value = "";
        }
      );
    });
}
