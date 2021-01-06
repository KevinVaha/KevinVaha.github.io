const tl2 = gsap.timeline({ defaults: { ease: "power1.out" } });

tl2.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });
tl2.fromTo(".about-image", { opacity: 0 }, { opacity: 1, duration: 3 }, "-=3");
tl2.to(".logo", { opacity: 1, duration: 1 }, "-=3");
tl2.to(".menu-div", { opacity: 1, display: "flex", duration: 1 }, "-=3");

document.querySelector(".menu-div").addEventListener("click", function () {
  tl2.to(".logo", { opacity: 0, duration: 0.5 });
  tl2.to(".menu-div", { opacity: 0, display: "none", duration: 0.5 }, "-=0.5");
  tl2.to(".text", { opacity: 0, duration: 0.5 }), "-=0.5";
  tl2.to(".about-image", { opacity: 0, duration: 0.5 }), "-=0.5";
  tl2.to(".nav-links", { x: "0%", duration: 1 });
  tl2.fromTo(
    ".nav-links li",
    { opacity: 0 },
    { opacity: 1, duration: 1, stagger: 0.2 }
  );
  tl2.to(".close", { opacity: 1, display: "inline-block", duration: 0 });
  tl2.to(".close-text", { opacity: 1, display: "inline-block", duration: 0 });
  tl2.to(".close-div", { opacity: 1, display: "block", duration: 0.5 });
});

document.querySelector(".close-div").addEventListener("click", function () {
  tl2.fromTo(
    ".nav-links li",
    { opacity: 1 },
    { opacity: 0, stagger: 0.2, duration: 0.3 }
  );
  tl2.to(".close", { opacity: 0, display: "none", duration: 0.3 });
  tl2.to(
    ".close-text",
    { opacity: 0, display: "none", duration: 0.3 },
    "-=0.3"
  );
  tl2.to(".close-div", { opacity: 0, display: "none", duration: 0 });
  tl2.to(".nav-links", { x: "100%", duration: 0.5 });
  tl2.to(".logo", { opacity: 1, duration: 0.5 }, "-=0.2");
  tl2.to(".menu-div", { opacity: 1, display: "flex" });
  tl2.to(".text", { opacity: 1, duration: 0.5 });
  tl2.to(".about-image", { opacity: 1, duration: 0.5 }, "-=0.5");
});
