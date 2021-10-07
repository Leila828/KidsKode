function toggle() {
  if (jQuery(".toggle .toggle-title").hasClass("active")) {
    jQuery(".toggle .toggle-title.active")
      .closest(".toggle")
      .find(".toggle-inner")
      .show();
  }
  jQuery(".toggle .toggle-title").click(function () {
    if (jQuery(this).hasClass("active")) {
      jQuery(this)
        .removeClass("active")
        .closest(".toggle")
        .find(".toggle-inner")
        .slideUp(200);
    } else {
      jQuery(this)
        .addClass("active")
        .closest(".toggle")
        .find(".toggle-inner")
        .slideDown(200);
    }
  });
}
function pop() {
  const viewBtn = document.querySelector(".view-modal"),
    popup = document.querySelector(".popup"),
    close = popup.querySelector(".clos");
  //  field = popup.querySelector(".field"),
  //input = field.querySelector("input"),
  //copy = field.querySelector("button");

  viewBtn.onclick = () => {
    popup.classList.toggle("show");
  };
  close.onclick = () => {
    viewBtn.click();
  };
  /*
  copy.onclick = () => {
    input.select(); //select input value
    if (document.execCommand("copy")) {
      //if the selected text copy
      field.classList.add("active");
      copy.innerText = "Copied";
      setTimeout(() => {
        window.getSelection().removeAllRanges(); //remove selection from document
        field.classList.remove("active");
        copy.innerText = "Copy";
      }, 3000);
    }
  };*/
}

function parent() {
  //jQuery time
  var current_fs, next_fs, previous_fs; //fieldsets
  var left, opacity, scale; //fieldset properties which we will animate
  var animating; //flag to prevent quick multi-click glitches

  $(".next").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale current_fs down to 80%
          scale = 1 - (1 - now) * 0.2;
          //2. bring next_fs from the right(50%)
          left = now * 50 + "%";
          //3. increase opacity of next_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({
            transform: "scale(" + scale + ")",
            position: "absolute",
          });
          next_fs.css({ left: left, opacity: opacity });
        },
        duration: 800,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        easing: "easeInOutBack",
      }
    );
  });

  $(".previous").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    $("#progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale previous_fs from 80% to 100%
          scale = 0.8 + (1 - now) * 0.2;
          //2. take current_fs to the right(50%) - from 0%
          left = (1 - now) * 50 + "%";
          //3. increase opacity of previous_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({ left: left });
          previous_fs.css({
            transform: "scale(" + scale + ")",
            opacity: opacity,
          });
        },
        duration: 800,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        easing: "easeInOutBack",
      }
    );
  });

  $(".submit").click(function () {
    return false;
  });
}

function navbar() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      /*height in pixels when the navbar becomes non opaque*/
      $(".navbar").addClass("opaque");
    } else {
      $(".navbar").removeClass("opaque");
    }
  });
}

function slider() {
  // Images Area Images
  let imagesAreaImages = document.querySelectorAll(".images-area img");
  // Images Area First Image
  let imagesAreaFirstImage = document.querySelector(".images-area .firstImage");

  // Previous And Next Buttons
  let previousBtn = document.querySelector(".previous-btn");
  let nextBtn = document.querySelector(".next-btn");

  // Pagination Area
  let paginationArea = document.querySelector(".pagination-area");

  // Current Image Count
  let currentImageCount = 1;

  // Slider Controler Function
  let sliderController;
  // Create Pagination Spans Function
  let createPaginationSpans;

  // Every Click On Buttons
  previousBtn.addEventListener("click", previousImage);
  nextBtn.addEventListener("click", nextImage);

  // Previous Image Function
  function previousImage() {
    // If The currentImageCount Is 1
    if (currentImageCount === 1) {
      return false;
    } else {
      // Else
      // Minus One From currentImageCount
      currentImageCount--;
      // Call Function sliderController();
      sliderController();
    }
  }

  // Next Image Function
  function nextImage() {
    // If The currentImageCount Is imagesAreaImages.length
    if (currentImageCount === imagesAreaImages.length) {
      return false;
    } else {
      // Else
      // Plus One To currentImageCount
      currentImageCount++;
      // Call Function sliderController();
      sliderController();
    }
  }

  // Create Pagination Spans [Circls] Function
  (function createPaginationSpans() {
    // Loop On All The Images Slider
    for (var i = 0; i < imagesAreaImages.length; i++) {
      // Create Span
      let paginationSpan = document.createElement("span");
      // Append The Span
      paginationArea.appendChild(paginationSpan);
    }
  })();

  // Slider Controler Function
  (sliderController = function () {
    // Get All The pagination Spans
    let paginationCircls = document.querySelectorAll(".pagination-area span");

    // Call Remore All Active Class Function
    removeAllActive(paginationCircls);

    // Call Remore Active Button Function
    activeButton();

    // The currentImageCount Minus One
    let currentImageMinusOne = currentImageCount - 1;

    // Set Active Class On Current Pagination
    paginationCircls[currentImageMinusOne].classList.add("active");

    // Move The images Area First Image
    imagesAreaFirstImage.style.marginLeft = `-${600 * currentImageMinusOne}px`;
    console.log(600 * currentImageMinusOne);
  })();

  // Remove All Active Class Function
  function removeAllActive(targetElement) {
    for (var i = 0; i < targetElement.length; i++) {
      targetElement[i].classList.remove("active");
    }
  }

  // Check Active Button Function
  function activeButton() {
    // If The Current Image Count Equle 1
    currentImageCount === 1
      ? // Hide The Previous Button
        previousBtn.classList.add("disabled")
      : // Else: Show The Previous Button
        previousBtn.classList.remove("disabled");

    // If The Current Image Count Equle imagesAreaImages.length
    currentImageCount === imagesAreaImages.length
      ? // Hide The Next Button
        nextBtn.classList.add("disabled")
      : // Else: Show The Next Button
        nextBtn.classList.remove("disabled");
  }

  // Move Slider Image Every 3 Second
  setInterval(() => {
    // If The Current Image Count Not Equle imagesAreaImages.length
    if (currentImageCount != imagesAreaImages.length) {
      // Plus One
      currentImageCount++;
      // Call Function sliderController();
      sliderController();
    } else {
      // else
      // Make currentImageCount Equle 1
      currentImageCount = 1;
      // Call Function sliderController();
      sliderController();
    }
  }, 3000);
}
