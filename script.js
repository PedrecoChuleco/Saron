gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const smoother = ScrollSmoother.create({
  wrapper: ".smooth-wrapper", // corrigido
  content: ".smooth-content",
  smooth: 1,
});

// Hero pinado enquanto as seções sobem por cima
gsap.to(".hero video", {
  scale: 1.1,
  filter: "blur(10px)",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=100%",
    pin: true,
    pinSpacing: false, // o conteúdo já ocupa o espaço no fluxo
    scrub: 1,
  },
});

ScrollTrigger.create({
  trigger: ".about",
  start: "top 30%",
  onEnter: () => {
    gsap.to("header", {
      backgroundColor: "#ffffffba",
      ease: "none",
      duration: 0.3,
    });
  },
  onEnterBack: () => {
    gsap.to("header", {
      backgroundColor: "#ffffffba",
      ease: "none",
      duration: 0.3,
    });
  },

  onLeaveBack: () => {
    gsap.to("header", {
      backgroundColor: "#00000099",
      ease: "none",
      duration: 0.3,
    });
  },
});

// Hover dos links
document.querySelectorAll(".opt").forEach((opt) => {
  opt.addEventListener("mouseenter", () =>
    gsap.to(opt, { opacity: 0.7, duration: 0.4 })
  );
  opt.addEventListener("mouseleave", () =>
    gsap.to(opt, { opacity: 1, duration: 0.4 })
  );
});

// Links âncora (#about, #produtos) precisam do smoother
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length > 1) {
      e.preventDefault();
      smoother.scrollTo(id, true, "top top");
    }
  });
});
