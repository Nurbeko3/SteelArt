(function () {
  "use strict";

  var wowAnimation = (function () {
    var wow = new WOW({
      animateClass: "animated",
      offset: 150,
      callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
      },
    });
    wow.init();
  })(function ($) {
    wowAnimation();
  })(jQuery);
})();


document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
      let navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
          navbar.classList.add("fixed-top");
      } else {
          navbar.classList.remove("fixed-top");
      }
  });
});
