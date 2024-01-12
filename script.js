gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// HOMEPAGE 2024 --- STICKY PRODUCTS SECTION
function productsSticky() {
  let stickyImg = $(".c-sticky-visual").find(".c-img-contain.sticky");

  $(".c-sticky-item").each(function (index) {
    let stickyContent = $(this);

    gsap.set(stickyContent, { autoAlpha: 0, y: 64 });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top center",
        end: "bottom center",
        onToggle: (isActive) => {
          stickyImg.css("opacity", "0");
          stickyImg.eq(index).css("opacity", "1");

          if (isActive) {
            tl.to(stickyContent, {
              y: 0,
              autoAlpha: 1,
              duration: 0.6,
              ease: "power2.inOut",
            });
          }
        },
      },
    });
  });
}

// HOMEPAGE 2024 --- PLATFORM ANIMATION
function platformGreenBall() {
  let tl = gsap.timeline({
    defaults: { repeat: -1 },
    scrollTrigger: {
      trigger: ".section.hm-platform",
      start: "top 70%",
    },
  });

  tl.to(
    ".green-ball-el",
    {
      duration: 7,
      repeatDelay: 0,
      ease: "power1.inOut",
      motionPath: {
        path: "#green-tpath",
        align: "#green-tpath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      stagger: 2.4,
    },
    "<"
  );
}

function platformOrangeBall() {
  let tl = gsap.timeline({
    defaults: { repeat: -1 },
    scrollTrigger: {
      trigger: ".section.hm-platform",
      start: "top 70%",
    },
  });

  tl.to(".orange-ball-el", {
    duration: 9,
    repeatDelay: 0,
    ease: "power1.inOut",
    motionPath: {
      path: "#orange-tpath",
      align: "#orange-tpath",
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
    },
    stagger: 2.8,
  });
}

function pulsateLogo() {
  let tl = gsap.timeline({
    defaults: {
      duration: 0.6,
      ease: "power1.inOut",
      transformOrigin: "center center",
      repeat: -1,
      repeatDelay: 4,
    },
    scrollTrigger: {
      trigger: ".section.hm-platform",
      start: "top 70%",
    },
  });

  tl.to(".logo-pulsate", { scale: 1.1 });
  tl.to(".logo-pulsate", { scale: 1 });
}

function pulsateBall() {
  const balls = $(".ball-pulsate");

  let tl = gsap.timeline({
    defaults: {
      duration: 0.6,
      ease: "power1.inOut",
      transformOrigin: "center center",
      repeat: -1,
      repeatDelay: 5,
    },
    scrollTrigger: {
      trigger: ".section.hm-platform",
      start: "top 70%",
    },
  });

  balls.each(function (index, ball) {
    tl.to(ball, { scale: 1.5 }).to(ball, {
      scale: 1,
      onComplete: function () {
        animateNextBall(index + 1);
      },
    });
  });

  function animateNextBall(index) {
    if (index < balls.length) {
      const nextBall = balls.eq(index);
      tl.to(nextBall, { scale: 1 });
    }
  }
}

let mm = gsap.matchMedia();

// DESKTOP
mm.add("(min-width: 992px)", () => {
  productsSticky();
  platformGreenBall();
  platformOrangeBall();
  pulsateLogo();
  pulsateBall();
  return () => {
    //
  };
});
