document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  document.querySelector(".contact-form").reset();

  sendEmail(name, email, message);
}

function sendEmail(name, email, message) {
  Email.send({
    SecureToken: "cc6c4a67-df0f-4bcb-a1a9-ef089543e087",
    To: "kevinvaha.design@gmail.com",
    From: "kevinvaha.design@gmail.com",
    Subject: `${name} sent you an email`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Messege: ${message}`,
  }).then((message) => alert("Your email has been successfully sent"));
}

const tl3 = gsap.timeline({ defaults: { ease: "power1.out" } });

// On load
tl3.fromTo(
  ".menu-div",
  { opacity: 0, display: "none" },
  { opacity: 1, display: "flex", duration: 1 }
);
tl3.fromTo(".logo", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl3.fromTo(".contact", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

document.querySelector(".menu-div").addEventListener("click", function () {
  tl3.to(".logo", { opacity: 0, duration: 0.5 });
  tl3.to(".menu-div", { opacity: 0, display: "none", duration: 0.5 }, "-=0.5");
  tl3.to(".contact", { opacity: 0, duration: 0.5 }, "-=0.5");
  tl3.to(".nav-links", { x: "0%", duration: 1 });
  tl3.fromTo(
    ".nav-links li",
    { opacity: 0 },
    { opacity: 1, duration: 1, stagger: 0.2 }
  );
  tl3.to(".close", { opacity: 1, display: "inline-block", duration: 0 });
  tl3.to(".close-text", { opacity: 1, display: "inline-block", duration: 0 });
  tl3.to(".close-div", { opacity: 1, display: "block", duration: 0.5 });
});

document.querySelector(".close-div").addEventListener("click", function () {
  tl3.fromTo(
    ".nav-links li",
    { opacity: 1 },
    { opacity: 0, stagger: 0.16, duration: 0.5 }
  );
  tl3.to(".close", { opacity: 0, display: "none", duration: 0.5 }, "-=0.5");
  tl3.to(
    ".close-text",
    { opacity: 0, display: "none", duration: 0.5 },
    "-=0.5"
  );
  tl3.to(".close-div", { opacity: 0, display: "none", duration: 0.5 }, "-=0.5");
  tl3.to(".nav-links", { x: "100%", duration: 0.5 });
  tl3.to(".logo", { opacity: 1, duration: 0.5 });
  tl3.to(".menu-div", { opacity: 1, display: "flex", duration: 0.5 }, "-=0.5");
  tl3.to(".contact", { opacity: 1, duration: 0.5 }, "-=0.5");
});
