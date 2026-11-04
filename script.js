gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
const links = document.querySelectorAll(".opt");

let smoother = ScrollSmoother.create({
  wropper: ".smooth-wrapper",
  content: ".smooth-content",
  smooth: 1,
});

links.forEach((opt) => {
  opt.addEventListener("mouseenter", () => {
    gsap.to(opt, { opacity: 0.7, duration: 0.4 });
  });

  opt.addEventListener("mouseleave", () => {
    gsap.to(opt, { opacity: 1, duration: 0.4 });
  });
});

let masterTl = gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: 1,
    trigger: ".animation-wrapper",
    start: "center center",
  },
});

masterTl.to(".about", { y: 0, ease: "none" });
masterTl.to(
  ".hero video",
  { scale: 1.1, filter: "blur(10px)", ease: "none" },
  "<"
);

masterTl.to("header", { backgroundColor: "#fff" }, "<");
