/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: Guest Event
Version: 1.0.0
-------------------------------------------------------------------*/


        // main Slider
        $('.main_header_slider ').owlCarousel({
            loop:true,
            center: false,
            nav:true,
            navText:[" <div  class='nav-btn prev-slide'><img src='assets/images/icons/arrow_right01.svg'></div>","<div class='nav-btn next-slide'><img src='assets/images/icons/arrow_left02.svg'></div>"],
            dots:false,
            autoplay:true,
            autoplayHoverPause: false,
            autoplayTimeout:5000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })



        
        // memory sldier
        $('.memory_card_slider ').owlCarousel({
            loop:true,
            margin:30,
            center: false,
            nav:false,
            dots:false,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:2,
                1000:{
                    items:4
                }
            }
        })




     // partnerSlider
        $('#brand_slider').owlCarousel({
            loop:true,
            margin:15,
            center: false,
            nav:false,
            dots:false,
            autoplay:true,
            smartSpeed:4000,
            autoplayHoverPause: false,
            autoplayTimeout:4000,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:6
                }
            }
        })

           // partnerSliderTwo
           $('#brand_slider_two').owlCarousel({
            loop:true,
            rtl:true,
            margin:15,
            center: false,
            nav:false,
            dots:false,
            autoplay:true,
            smartSpeed:4000,
            autoplayHoverPause: false,
            autoplayTimeout:4000,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:2
                },
                800:{
                  items:2
              },
                1000:{
                    items:6
                }
            }
        })

        // AOS Animation
        AOS.init({
            duration: 1200,
        })

    // testimonial
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items: 1,
    autoplay:true,
    loop:false,
    autoplay:true,
    slideSpeed: 2000,
    nav: false,
    dots: false,
    responsiveRefreshRate: 200,
    // navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })

    .owlCarousel({
      items: slidesPerPage,
      autoplay:true,
      loop:false,
      dots: false,
      nav: false,
      navText:[" <div  class='nav-btn prev-slide'><img src='assets/images/icons/arrow_right.svg'></div>","<div class='nav-btn next-slide'><img src='assets/images/icons/arrow_left.svg'></div>"],
      margin:20,
      // center:true,
      smartSpeed: 200,
      slideSpeed: 500,
      URLhashListener: true,
      startPosition: 'URLHash',
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100,
      responsive: {
        0: {
          items: 1,
        },

        600: {
          items: 1,
        },

        1000: {
          items: 3,
        }
      }
    }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    var current = el.item.index;

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");

    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();

    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }

    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });





  // menu
  $(document).ready(function(){
    $(".event_menu_icon").click(function(){
      $(".event_menu").addClass("active");
    });
    $(".event_menu_shift").click(function(){
        $(".event_menu").removeClass("active");
      });

    
  });