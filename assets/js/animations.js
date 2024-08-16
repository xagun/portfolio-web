document.addEventListener("DOMContentLoaded", () => {
  // Sidebar animation
  anime({
    targets: "#sidebar",
    translateX: [-250, 0],
    duration: 1000,
    easing: "easeOutExpo",
  });

  // Intro section animation
  anime({
    targets: "#intro .inner",
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: 500,
    easing: "easeOutExpo",
  });

  // Spotlight section animations
  anime({
    targets: "#one .spotlights section",
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: (el, i) => 500 + 300 * i,
    easing: "easeOutExpo",
  });

  // Features section animations
  anime({
    targets: "#two .features section",
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: (el, i) => 500 + 200 * i,
    easing: "easeOutExpo",
  });

  // Contact section animations
  anime({
    targets: "#three .split section",
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: (el, i) => 500 + 200 * i,
    easing: "easeOutExpo",
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      anime({
        targets: "html, body",
        scrollTop: targetElement.offsetTop,
        duration: 1000,
        easing: "easeInOutQuad",
      });
    });
  });
});

anime({
  targets: ".line-drawing-demo .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: true,
});
