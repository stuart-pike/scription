(function () {
  $(document).ready(function () {
    const animationDuration = 200; // second
    const cssChangeDuration = 1000; // seconds (time of change CSS)
    const pauseDuration = 0; // seconds
    const listCount = $("#features ul li").length;
    $("#features ul").clone().appendTo("#features");

    function animateListItem(index) {
      const listItem = $("#features ul li").eq(index);
      listItem.css({
        color: "blue", // Change the color
        "font-weight": "bold", // Change the font weight
      });

      setTimeout(function () {
        // After changing CSS properties, start the animation
        $("#features").animate(
          { top: -30 * (index + 1) },
          animationDuration,
          "easeInQuad",
          function () {
            // After the animation, reset the style
            // listItem.css({
            //   color: "", // Reset the color
            //   "font-weight": "", // Reset the font weight
            // });

            // Pause for a couple of seconds before animating the next item
            setTimeout(function () {
              if (index < listCount - 1) {
                animateListItem(index + 1); // Move to the next list item
              } else {
                // If the last item, remove the first unordered
                $("#features ul").first().remove();
                $("#features ul").clone().appendTo("#features");
                $("#features").css("top", 0);

                // Continue the process indefinitely by starting over
                animateListItem(0);
              }
            }, pauseDuration);
          }
        );
      }, cssChangeDuration);
    }

    // Start the animation with the first list item
    animateListItem(0);
  });
})();
