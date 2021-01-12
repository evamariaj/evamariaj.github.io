/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict

// SLIDESHOW
var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8"]
var dotId = ["myDots1", "myDots2", "myDots3", "myDots4", "myDots5", "myDots6", "myDots7", "myDots8"]
showSlides(1, 1, 0);
showSlides(1, 1, 1);
showSlides(1, 1, 2);
showSlides(1, 1, 3);
showSlides(1, 1, 4);
showSlides(1, 1, 5);
showSlides(1, 1, 6);
showSlides(1, 1, 7);

function plusSlides(pSlidePage, pSlideShowNo) {
  //console.log("plusSlides " + slideIndex[pSlideShowNo] + " " + pSlidePage)	
  showSlides(1, slideIndex[pSlideShowNo] += pSlidePage, pSlideShowNo);
}

function currentSlide(pSlidePage, pSlideShowNo) {
  //console.log("currentSlide " + pSlidePage + " " + pSlideShowNo)	
  showSlides(0, pSlidePage, pSlideShowNo);	
}

function showSlides(pNext, pSlidePage, pSlideShowNo) {
  var i;	  
  var x = document.getElementsByClassName(slideId[pSlideShowNo]);
  var dots = document.getElementsByClassName(dotId[pSlideShowNo]);
  if (pSlidePage > x.length) { slideIndex[pSlideShowNo] = 1 }
  if (pSlidePage < 1) { slideIndex[pSlideShowNo] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

	
  if (pNext == 1) {  
	x[slideIndex[pSlideShowNo] - 1].style.display = "block";  
	dots[slideIndex[pSlideShowNo] - 1].className += " active";
  }	
  
  if (pNext == 0) {    
    slideIndex[pSlideShowNo] = pSlidePage;
	x[pSlidePage-1].style.display = "block";  
	dots[pSlidePage-1].className += " active";  
  }	
}


