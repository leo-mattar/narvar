document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  function heroAnimation() {
    const shape = document.querySelector(".c-img-contain.assist-hero-shape");
    const images = document.querySelectorAll(".c-img.assist-hero");
    const gradientLight = document.querySelector(
      ".c-img-contain.asset-hero-gradient-light"
    );

    gsap.to(shape, {
      rotation: -360,
      duration: 90,
      ease: "linear",
      repeat: -1,
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
    });

    gsap.set(".hero-div_text", { y: "5em" });

    tl.to(".hero-div_text", { opacity: 1, y: 0, ease: "power2.out" });
    tl.to(images[0], { opacity: 1 }, "<0.3");
    tl.to(images[1], { opacity: 1 }, "<1.2");
    tl.to(images[0], { opacity: 0 }, "<");
    tl.to(gradientLight, { opacity: 0.5 }, "<");
    tl.to(images[2], { opacity: 1 }, "<1.2");
    tl.to(images[1], { opacity: 0 }, "<");
    tl.to(gradientLight, { opacity: 1 }, "<");
  }

  function networkAnimation() {
    const glow = document.querySelector(".c-img.assist-logo-glow");

    const tl = gsap.timeline({
      defaults: { ease: "linear", duration: 2.4 },
      repeat: -1,
      repeatDelay: 3,
    });

    tl.to(glow, { opacity: 0.65 });
    tl.to(glow, { opacity: 1 });
  }

  function howItWorksSection() {
    const triggerSection = document.querySelector(".accordion-module");
    const tabs = document.querySelector(".tab-menu_content.assist");
    const images = document.querySelectorAll(
      ".c-img-contain.assist-tabber img"
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerSection,
        start: "top bottom",
      },
      defaults: {
        ease: "power3.out",
        duration: 1.2,
      },
    });

    gsap.set(tabs, { y: "8em", opacity: 0 });
    gsap.set(images, { y: "4em", opacity: 0 });

    tl.to(tabs, { y: 0, opacity: 1 });
    tl.to(images, { y: 0, opacity: 1, stagger: 0.2 }, "<0.3");
  }

  // --- NETWORK ANIMATION
  function assistBallOne() {
    const assistPath = document.querySelector("#assist-path-1");
    const assistBall = document.querySelectorAll(".c-assist-ball-1");

    let tl = gsap.timeline({
      defaults: { repeat: -1 },
      scrollTrigger: {
        trigger: "#network-section",
        start: "top 70%",
      },
    });

    tl.to(assistBall, {
      duration: 7,
      repeatDelay: 0,
      ease: "power1.inOut",
      motionPath: {
        path: assistPath,
        align: assistPath,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 1,
        end: 0,
      },
      opacity: 0,
      stagger: 2.4,
    });
  }

  assistBallOne();

  function assistBallTwo() {
    const assistPath = document.querySelector("#assist-path-2");
    const assistBall = document.querySelectorAll(".c-assist-ball-2");

    let tl = gsap.timeline({
      defaults: { repeat: -1 },
      scrollTrigger: {
        trigger: "#network-section",
        start: "top 70%",
      },
    });

    tl.to(assistBall, {
      duration: 8,
      repeatDelay: 0,
      ease: "power1.inOut",
      motionPath: {
        path: assistPath,
        align: assistPath,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 1,
        end: 0,
      },
      opacity: 0,
      stagger: 2.6,
    });
  }

  assistBallTwo();

  function assistBallThree() {
    const assistPath = document.querySelector("#assist-path-3");
    const assistBall = document.querySelectorAll(".c-assist-ball-3");

    let tl = gsap.timeline({
      defaults: { repeat: -1 },
      scrollTrigger: {
        trigger: "#network-section",
        start: "top 70%",
      },
    });

    tl.to(assistBall, {
      duration: 9,
      repeatDelay: 0,
      ease: "power1.inOut",
      motionPath: {
        path: assistPath,
        align: assistPath,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 1,
        end: 0,
      },
      opacity: 0,
      stagger: 2.8,
    });
  }

  assistBallThree();

  function assistBallFour() {
    const assistPath = document.querySelector("#assist-path-4");
    const assistBall = document.querySelectorAll(".c-assist-ball-4");

    let tl = gsap.timeline({
      defaults: { repeat: -1 },
      scrollTrigger: {
        trigger: "#network-section",
        start: "top 70%",
      },
    });

    tl.to(assistBall, {
      duration: 10,
      repeatDelay: 0,
      ease: "power1.inOut",
      motionPath: {
        path: assistPath,
        align: assistPath,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 1,
        end: 0,
      },
      opacity: 0,
      stagger: 3,
    });
  }

  assistBallFour();

  function assistBallFive() {
    const assistPath = document.querySelector("#assist-path-5");
    const assistBall = document.querySelectorAll(".c-assist-ball-5");

    let tl = gsap.timeline({
      defaults: { repeat: -1 },
      scrollTrigger: {
        trigger: "#network-section",
        start: "top 70%",
      },
    });

    tl.to(assistBall, {
      duration: 11,
      repeatDelay: 0,
      ease: "power1.inOut",
      motionPath: {
        path: assistPath,
        align: assistPath,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 1,
        end: 0,
      },
      opacity: 0,
      stagger: 3.2,
    });
  }

  assistBallFive();

  ////
  ///
  //

  heroAnimation();
  networkAnimation();
  howItWorksSection();
});
