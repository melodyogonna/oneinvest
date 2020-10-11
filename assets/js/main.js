$(document).ready(function () {
  AOS.init();
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
  });
});
