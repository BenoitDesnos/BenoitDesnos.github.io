const contacts = document.querySelectorAll(".contacts--animation");
const inputs = document.querySelectorAll("input:nth-child(-n+4)");
const select = document.querySelector("select");
const textArea = document.querySelector("textarea");
const submit = document.querySelector("input[type='submit']");

function contactsAnim(entries) {
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
          submit.classList.add("success");
          submit.value = "Message envoyé avec succès !";
          setTimeout(() => {
            submit.classList.remove("success");
            submit.value = "Valider !";
          }, 4000);
          inputs.forEach((input) => {
            input.value = "";
          });
          textArea.value = "";
        },
        function (error) {
          console.log("FAILED...", error);
          submit.classList.add("error");
          submit.value = "Oops un problème est survenu, joignez moi par mail !";
          setTimeout(() => {
            submit.classList.remove("error");
            submit.value = "Valider !";
          }, 4000);
          /* inputs.forEach((input) => {
            input.value = "";
          });
          textArea.value = ""; 
          Ne pas vider suite erreur pour permettre de copier*/
        }
      );
    });
}
