(function ($) {
  "use strict";

  $(document).ready(function () {
    $(function () {
      $("#header").load("./header.html", function () {
        // testimonial sliders
        $(".testimonial-sliders").owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          responsive: {
            0: {
              items: 1,
              nav: false,
            },
            600: {
              items: 1,
              nav: false,
            },
            1000: {
              items: 1,
              nav: false,
              loop: true,
            },
          },
        });

        // homepage slider
        $(".homepage-slider").owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          nav: true,
          dots: false,
          navText: [
            '<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>',
          ],
          responsive: {
            0: {
              items: 1,
              nav: false,
              loop: true,
            },
            600: {
              items: 1,
              nav: true,
              loop: true,
            },
            1000: {
              items: 1,
              nav: true,
              loop: true,
            },
          },
        });

        // logo carousel
        $(".logo-carousel-inner").owlCarousel({
          items: 4,
          loop: true,
          autoplay: true,
          margin: 30,
          responsive: {
            0: {
              items: 1,
              nav: false,
            },
            600: {
              items: 3,
              nav: false,
            },
            1000: {
              items: 4,
              nav: false,
              loop: true,
            },
          },
        });

        // count down
        if ($(".time-countdown").length) {
          $(".time-countdown").each(function () {
            var $this = $(this),
              finalDate = $(this).data("countdown");
            $this.countdown(finalDate, function (event) {
              var $this = $(this).html(
                event.strftime(
                  "" +
                    '<div class="counter-column"><div class="inner"><span class="count">%D</span>Days</div></div> ' +
                    '<div class="counter-column"><div class="inner"><span class="count">%H</span>Hours</div></div>  ' +
                    '<div class="counter-column"><div class="inner"><span class="count">%M</span>Mins</div></div>  ' +
                    '<div class="counter-column"><div class="inner"><span class="count">%S</span>Secs</div></div>'
                )
              );
            });
          });
        }

        // projects filters isotop
        $(".product-filters li").on("click", function () {
          $(".product-filters li").removeClass("active");
          $(this).addClass("active");

          var selector = $(this).attr("data-filter");

          $(".product-lists").isotope({
            filter: selector,
          });
        });

        // isotop inner
        $(".product-lists").isotope();

        // magnific popup
        $(".popup-youtube").magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
        });

        // light box
        $(".image-popup-vertical-fit").magnificPopup({
          type: "image",
          closeOnContentClick: true,
          mainClass: "mfp-img-mobile",
          image: {
            verticalFit: true,
          },
        });

        // homepage slides animations
        $(".homepage-slider").on("translate.owl.carousel", function () {
          $(".hero-text-tablecell .subtitle")
            .removeClass("animated fadeInUp")
            .css({ opacity: "0" });
          $(".hero-text-tablecell h1")
            .removeClass("animated fadeInUp")
            .css({ opacity: "0", "animation-delay": "0.3s" });
          $(".hero-btns")
            .removeClass("animated fadeInUp")
            .css({ opacity: "0", "animation-delay": "0.5s" });
        });

        $(".homepage-slider").on("translated.owl.carousel", function () {
          $(".hero-text-tablecell .subtitle")
            .addClass("animated fadeInUp")
            .css({ opacity: "0" });
          $(".hero-text-tablecell h1")
            .addClass("animated fadeInUp")
            .css({ opacity: "0", "animation-delay": "0.3s" });
          $(".hero-btns")
            .addClass("animated fadeInUp")
            .css({ opacity: "0", "animation-delay": "0.5s" });
        });

        // stikcy js
        $("#sticker").sticky({
          topSpacing: 0,
        });

        $(window).scroll(function () {
          if ($(this).scrollTop()) {
            $("#toTop").fadeIn();
          } else {
            $("#toTop").fadeOut();
          }
        });

        $("#toTop").click(function () {
          $("html, body").animate({ scrollTop: 0 }, 200);
        });

        //mean menu
        $(".main-menu").meanmenu({
          meanMenuContainer: ".mobile-menu",
          meanScreenWidth: "992",
        });

        // search form
        $(".search-bar-icon").on("click", function () {
          $(".search-area").addClass("search-active");
        });

        $(".close-btn").on("click", function () {
          $(".search-area").removeClass("search-active");
        });

        const pageName =
          window.location.href.split("/")[
            window.location.href.split("/").length - 1
          ];

        if (pageName.includes("contact")) {
          document
            .getElementById("contact-li")
            .classList.add("current-list-item");
        } else if (pageName.includes("about")) {
          document
            .getElementById("about-li")
            .classList.add("current-list-item");
        } else if (pageName.includes("shop")) {
          document
            .getElementById("medicine-li")
            .classList.add("current-list-item");
        } else if (pageName.includes("anti-anxi")) {
          document
            .getElementById("anti-anxiety-li")
            .classList.add("current-list-item");
        } else if (pageName.includes("pain-relief")) {
          document
            .getElementById("pain-relief-li")
            .classList.add("current-list-item");
        } else if (pageName.includes("sleeping-tablets")) {
          document
            .getElementById("sleeping-tablets-li")
            .classList.add("current-list-item");
        } else if (pageName.includes("nootropics")) {
          document
            .getElementById("nootropics-li")
            .classList.add("current-list-item");
        } else if (pageName.includes("checkout")) {
        } else if (pageName.includes("single")) {
        } else if (pageName.includes("cart")) {
        } else {
          document.getElementById("home-li").classList.add("current-list-item");
        }
      });
    });

    $(function () {
      $("#footer").load("./footer.html");
    });
  });

  jQuery(window).on("load", function () {
    jQuery(".loader").fadeOut(1000);
  });
})(jQuery);
