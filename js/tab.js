(function () {
  "use strict";
  // Select all anchor tags and apply event listener
  $("#tabs > ul > li > a").click(function () {
    // Convert all acnchor tabs to background color
    $("#tabs > ul > li > a").css({ background: "#c8d6af", color: "#061923" });
    // this tab ( the one selected ) change to forground color
    $(this).css({ background: "#f7ffea", color: "#061923" });
    // save the attribute of the one selected to a constant.
    const thisTab = $(this).attr("href");
    // make the visible fade out and fade in the one selected
    $("#tabs > div:visible").fadeOut(200, function () {
      $(thisTab).fadeIn(200);
    });
  });
})();
