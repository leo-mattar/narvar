// --- GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});

let mm = gsap.matchMedia();

// --- GLOBAL - RELOAD AT THE TOP
window.addEventListener("beforeunload", function () {
  history.scrollRestoration = "manual";
});

// --- LENIS
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// --- HEADER PROGRESS BAR
let progressBar = gsap.timeline({
  scrollTrigger: {
    trigger: ".c-section.hr-hero-section",
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".c-section.hr-section.brand-last",
    scrub: 1,
  },
});

progressBar.to(".c-bar", {
  width: "100%",
  ease: "none",
});

// --- PARALLAX
function parallax() {
  let parallaxEl = document.querySelectorAll("[parallax]");

  parallaxEl.forEach((item) => {
    let parallaxY = parseFloat(item.getAttribute("data-parallax-y")) || 0;
    let screenWidth = window.innerWidth;

    if (item.getAttribute("parallax") !== "mobile-false" || screenWidth > 991) {
      let tl = gsap.timeline({
        defaults: { ease: "none" },
      });

      tl.to(item, {
        yPercent: parallaxY,
        scrollTrigger: {
          trigger: item,
          start: "clamp(top bottom)",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  });
}

// --- HR PATTERN
function hrPattern() {
  let pattern = document.querySelector(".c-hr-pattern .c-img");

  gsap.to(pattern, {
    yPercent: 15,
    scrollTrigger: {
      trigger: pattern,
      start: "clamp(top bottom)",
      end: "bottom top",
      scrub: 1,
    },
  });
}

// --- HEADER MOBILE
function headerMobile() {
  let navBtn = document.querySelector(".c-nav-btn");
  let menuIsOpen = false;

  let navControl = gsap.timeline({
    paused: true,
    defaults: { ease: "power3.inOut", duration: 0.6 },
  });

  navControl.fromTo(
    ".c-header-nav",
    {
      display: "none",
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    {
      display: "flex",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
  );

  navControl.to(".c-nav-bar.is-1", { rotation: 45, y: 6 }, 0);
  navControl.to(".c-nav-bar.is-2", { width: 0 }, 0);
  navControl.to(".c-nav-bar.is-3", { rotation: -45, y: -6 }, 0);

  navBtn.addEventListener("click", function () {
    menuIsOpen ? navControl.reverse() : navControl.restart();
    menuIsOpen = !menuIsOpen;
  });
}

// --- NOTIFICATIONS BAR
function notificationBar() {
  let bar = document.querySelector(".c-hr-bar");
  let closeBtn = document.querySelector(".hr-bar-close");

  if (bar) {
    if (sessionStorage.getItem("hrBar") !== "closed") {
      bar.classList.add("visible");
    }

    closeBtn.addEventListener("click", function () {
      sessionStorage.setItem("hrBar", "closed");
      bar.classList.add("not-visible");
    });
  }
}

// --- INIT
function init() {
  notificationBar();
}

init();

// --- MATCHMEDIA - DESKTOP
mm.add("(min-width: 992px)", () => {
  parallax();
  hrPattern();
  return () => {
    //
  };
});

// --- MATCHMEDIA - TABLET AND MOBILE
mm.add("(max-width: 991px)", () => {
  headerMobile();
  return () => {
    //
  };
});
