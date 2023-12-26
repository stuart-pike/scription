(function () {
  "use strict";
  // Can also be used with $(document).ready()
  $(document).ready(function () {
    $(".flexslider").flexslider({
      animation: "slide",
      slideshowSpeed: 3000,
      controlNav: true,
      directionNav: false,
      pauseOnHover: true,
      before: function () {
        $(".cta").css({ bottom: "-223px" });
      },
      after: function () {
        $(".cta").animate({ bottom: "+=223px" }, 500);
      },
    });
  });
})();
