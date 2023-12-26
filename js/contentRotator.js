(function () {
  "use strict";

  let counter = 1;

  function contentRotator() {
    $(`#rotator blockquote:nth-child(${counter})`).fadeIn(1500, function () {
      if ($(this).is("#rotator blockquote:last-child")) {
        setTimeout(function () {
          $(`#rotator blockquote:nth-child(${counter})`).fadeOut(
            1500,
            function () {
              counter = 1;
              contentRotator();
            }
          );
        }, 3000);
      } else {
        setTimeout(() => {
          $(`#rotator blockquote:nth-child(${counter})`).fadeOut(
            1500,
            function () {
              counter++;
              contentRotator();
            }
          );
        }, 3000);
      }
    });
  }
  contentRotator();
})();
