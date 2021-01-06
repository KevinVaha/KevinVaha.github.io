gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  ".lm",
  { rotationX: -20, rotationY: -15 },
  {
    scrollTrigger: {
      trigger: ".lm",
      start: "top center",
      scrub: 3,
    },
    rotationX: 20,
    rotationY: 15,
    duration: 2,
    ease: "power1.out",
  }
);
gsap.fromTo(
  ".db",
  { rotationX: -20, rotationY: -15 },
  {
    scrollTrigger: {
      trigger: ".db",
      start: "top center",
      scrub: 3,
    },
    rotationX: 20,
    rotationY: 15,
    duration: 2,
    ease: "power1.out",
  }
);
gsap.fromTo(
  ".mo",
  { rotationX: -20, rotationY: -15 },
  {
    scrollTrigger: {
      trigger: ".mo",
      start: "top center",
      scrub: 3,
    },
    rotationX: 20,
    rotationY: 15,
    duration: 2,
    ease: "power1.out",
  }
);

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

document.querySelector(".menu-div").addEventListener("click", function () {
  tl.to(".logo", { opacity: 0, duration: 0.5 });
  tl.to(".menu-div", { opacity: 0, display: "none", duration: 0.5 }, "-=0.5");
  tl.to(".line", { opacity: 0, duration: 0.5 }, "-=0.5");
  tl.to(".nav-links", { x: "0%", duration: 1 }, "-=0.3");
  tl.fromTo(
    ".nav-links li",
    { opacity: 0 },
    { opacity: 1, duration: 1, stagger: 0.2 }
  );
  tl.to(".close", { opacity: 1, display: "inline-block", duration: 0.5 });
  tl.to(
    ".close-text",
    { opacity: 1, display: "inline-block", duration: 0.5 },
    "-=0.5"
  );
  tl.to(".close-div", { opacity: 1, display: "block", duration: 0.5 }, "-=0.5");
});

document.querySelector(".close-div").addEventListener("click", function () {
  tl.fromTo(
    ".nav-links li",
    { opacity: 1 },
    { opacity: 0, stagger: 0.2, duration: 0.3 }
  );
  tl.to(".close", { opacity: 0, display: "none", duration: 0.3 });
  tl.to(".close-text", { opacity: 0, display: "none", duration: 0.3 }, "-=0.3");
  tl.to(".close-div", { opacity: 0, display: "none", duration: 0.3 }, "-=0.3");
  tl.to(".nav-links", { x: "100%", duration: 0.5 });
  tl.to(".logo", { opacity: 1, duration: 0.3 });
  tl.to(".menu-div", { opacity: 1, display: "flex", duration: 0.3 }, "-=0.3");
  tl.to(".line", { opacity: 1, duration: 0.5 }, "-=0.3");
});

const tl1 = gsap.timeline({ defaults: { ease: "power1.out" } });

//slider animation
tl1.to(".hide-text", { y: "0%", duration: 1, stagger: 0.25 });
tl1.to(".slider", { x: "100%", duration: 1.5, delay: 1.5 });
tl1.to(".intro", { x: "100%", duration: 1 }, "-=1.5");
// animating content out
tl1.to(".logo", { opacity: 0, display: "none", duration: 0 }, "-=2.5");
tl1.to(".menu-div", { opacity: 0, display: "none", duration: 0 }, "-=2.5");
tl1.to(".hero-content", { opacity: 0, duration: 0 }, "-=2.5");
tl1.to(".image", { opacity: 0, display: "none", duration: 0 }, "-=2.5");
tl1.to(".content", { opacity: 0, duration: 0 }, "-=2.5");
// animating content in
tl1.to(".logo", { opacity: 1, display: "block", duration: 1 });
tl1.to(".menu-div", { opacity: 1, display: "flex", duration: 1 }, "-=1");
tl1.to(".content", { opacity: 1, duration: 1 }, "-=1");
tl1.to(".image", { opacity: 1, display: "block", duration: 1 }, "-=1");
tl1.to(".hero-content", { opacity: 1, duration: 1 }, "-=1");
