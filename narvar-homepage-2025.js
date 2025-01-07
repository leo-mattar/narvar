document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // --- HERO ANIMATION
  function heroAnimation() {
    const shape = document.querySelector(".c-img.new-hm");

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
  }

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
          onToggle: isActive => {
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

  // --- BOXES ANIMATION
  function boxesAnimation() {
    const boxes = document.querySelectorAll(".c-box");

    boxes.forEach(box => {
      const circles = box.querySelectorAll(".c-box-circle");

      gsap.to(circles, {
        duration: 7,
        ease: "linear",
        y: 300,
        stagger: 2,
        repeat: -1,
      });
    });
  }

  function init() {
    heroAnimation();
    boxesAnimation();
    productsSticky();
  }

  init();
});
