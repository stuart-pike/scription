(function () {
  "use strict";

  const navLinks = document.querySelectorAll("nav ul li a");
  const headerTitle = document.querySelector("header .logo h1"); // Select the h1 element
  navLinks.forEach(function (eachLink) {
    eachLink.addEventListener("click", smoothScroll);
  });

  headerTitle.addEventListener("click", scrollToTop); // Add a click event listener to the h1 element

  function smoothScroll(event) {
    event.preventDefault();

    const targetID = event.target.getAttribute("href");
    scrollToElement(targetID);
  }

  function scrollToTop(event) {
    event.preventDefault();
    scrollToElement("#page"); // The 'id' of the h1 element at the top
  }

  function scrollToElement(targetID) {
    const targetSection = document.querySelector(targetID);
    const originalTop =
      Math.floor(targetSection.getBoundingClientRect().top) - 200;
    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
  }

  function smoothScroll(event) {
    event.preventDefault();

    const targetID = event.target.getAttribute("href");
    const targetSection = document.querySelector(targetID);
    // console.log(targetID, targetSection);
    // The Element.getBoundingClientRect() method returns a DOMRect object
    // providing information about the size of an element and its position
    // relative to the viewport.
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const originalTop =
      Math.floor(targetSection.getBoundingClientRect().top) - 200;
    // The Window.scrollBy() method scrolls the document in the window by the given amount.
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
  }

  window.addEventListener("load", function () {
    const posts = document.querySelectorAll("section");
    let postTops = [];
    let pageTop;
    let counter = 1;
    let prevCounter = 1;
    let doneResizing;

    //   console.log(posts[0].getBoundingClientRect().top + this.window.pageYOffset);
    resetPagePosition();
    // console.log(postTops);
    window.addEventListener("scroll", function () {
      pageTop = window.scrollY + 250;

      if (pageTop > postTops[counter]) {
        counter++;
        //console.log(`scrolling down ${counter}`);
      } else if (counter > 0 && pageTop < postTops[counter - 1]) {
        counter--;
        //console.log(`scrolling up ${counter}`);
      }
      if (counter != prevCounter) {
        navLinks.forEach(function (eachLink) {
          eachLink.removeAttribute("class");
        });
        const thisLink = document.querySelector(
          `nav ul li:nth-child(${counter}) a`
        );
        thisLink.className = "selected";
        prevCounter = counter;
      }
    });
    window.addEventListener("resize", function () {
      clearTimeout(doneResizing);
      doneResizing = setTimeout(function () {
        resetPagePosition();
        //console.log("done Resizing");
      }, 500);
    });
    function resetPagePosition() {
      postTops = [];

      posts.forEach(function (post) {
        postTops.push(
          Math.floor(post.getBoundingClientRect().top + window.scrollY)
        );
      });
      const pagePosition = window.scrollY + 250;
      counter = 0;

      postTops.forEach(function (post) {
        if (pagePosition > post) {
          counter++;
        }
      });

      navLinks.forEach(function (eachLink) {
        eachLink.removeAttribute("class");
      });
      const thisLink = document.querySelector(
        `nav ul li:nth-child(${counter}) a`
      );
      thisLink.className = "selected";
    }
  });
})();
