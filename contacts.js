const contacts = document.querySelectorAll(".contacts--animation");

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
/*  
let pseudo = "";
let enterprise = "";
let Email = "";
let Téléphone = "";

const inputs = document.querySelectorAll("input");
console.log(inputs);
const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: pseudo,
    Entreprise: enterprise,
    Email: Email,
    Téléphone: Téléphone,
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", (e) => {
  pseudo = inputs[0].value;
  enterprise = inputs[1].value;
  Email = inputs[2].value;
  Téléphone = inputs[3].value;
  
  fetch("http://localhost:3000/posts", init2).then(() =>
  console.log("data envoyée")
  );
});

/* 
document.querySelector("input[type=submit]").addEventListener("click", (e) => {
  pseudo = inputs[0].value;
  enterprise = inputs[1].value;
  Email = inputs[2].value;
  Téléphone = inputs[3].value;
  
  console.log(inputs[0].value);
  console.log(inputs[1].value);
  console.log(inputs[2].value);
  console.log(inputs[3].value);
  
  fetch("http://localhost:3000/posts", init2).then(() =>
  console.log("data envoyée")
  );
});
*/
/* 
console.log(pseudo);
console.log(enterprise);
console.log(Email);
console.log(Téléphone);

 */
