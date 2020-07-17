import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import "font-awesome/css/font-awesome.min.css";
import "./assets/hamburgers.min.css";
import "popper.js";
import "bootstrap";

$(document).ready(function ($) {
  $(".hero").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: !0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          draggable: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          draggable: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          draggable: true,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    });
});

$("body").scrollspy({ target: "#main-nav" });
$("#main-nav a[href^='#']").on("click", function (e) {
  // prevent default anchor click behavior
  e.preventDefault();

  // store hash
  var hash = this.hash;

  // animate
  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top,
    },
    300,
    function () {
      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = hash;
    }
  );
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("main-nav").style.height = "80px";
    document.getElementById("main-nav").style.backgroundColor =
      "rgba(24, 23, 40, 1)";
    document.querySelector(".offcanvas-collapse.open").style.backgroundColor =
      "rgba(24, 23, 40, 1)";
    document.querySelector(".offcanvas-collapse.open").style.marginTop =
      "-20px";
  } else {
    document.getElementById("main-nav").style.height = "100px";
    document.getElementById("main-nav").style.backgroundColor =
      "rgba(24, 23, 40, 0.8)";
    document.querySelector(".offcanvas-collapse.open").style.backgroundColor =
      "rgba(24, 23, 40, 0.8)";
    document.querySelector(".offcanvas-collapse.open").style.marginTop = "0px";
  }
}

// offcanvas menu
$(function () {
  "use strict";

  $('[data-toggle="offcanvas"]').on("click", function () {
    $(".offcanvas-collapse").toggleClass("open");
  });
});

let hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});
