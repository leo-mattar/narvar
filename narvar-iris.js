document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  // --------------- HERO ANIMATION ---------------
  function heroAnimation() {
    const circle = document.querySelector(".c-img.iris-hero-circle");
    // const shape = document.querySelector(".c-img-contain.assist-hero-shape");
    // const images = document.querySelectorAll(".c-img.assist-hero");
    // const gradientLight = document.querySelector(
    //   ".c-img-contain.asset-hero-gradient-light"
    // );

    const tl = gsap.timeline({
      defaults: {
        duration: 1.2,
        ease: "power4.out",
      },
    });

    gsap.set(".c-iris-hero *", { y: 32 });
    gsap.set(".c-btn *", { opacity: 1, y: 0 });

    tl.to(circle, {
      rotation: 360,
      duration: 90,
      ease: "linear",
      repeat: -1,
    });

    tl.to(
      ".c-img-contain.iris-symbol",
      {
        opacity: 1,
      },
      "<"
    );

    tl.to(
      ".c-iris-hero *:not(.c-btn *)",
      {
        opacity: 1,
        stagger: 0.02,
        y: 0,
      },
      "<0.2"
    );
  }

  // --------------- NETWORK ANIMATION ---------------
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

  // --- BALLS ANIMATION
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
});
