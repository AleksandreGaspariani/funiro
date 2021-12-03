$(document).ready(function(){

    $('.slide-carousel').owlCarousel({
        loop:true,
        margin:20,
        // rtl: true,
        nav:true,
        navText: [
            '<i class="fas fa-arrow-left"></i>',
            '<i class="fas fa-arrow-right"></i>'
        ],
        stagePadding: 20,
        lazyLoad: true,
        // dots: true,
        smartSpeed:1500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                dotsEach: true
            },
            600:{
                items:2,
                dotsEach: true
            },
            1000:{
                items:3,
                dotsEach: true
            }
        }
    });


    $('.tips-carousel').owlCarousel({
        loop:true,
        margin:30,
        // rtl: true,
        autoplay: true,
        nav:true,
        navText: [
            '<i class="fas fa-arrow-left"></i>',
            '<i class="fas fa-arrow-right"></i>'
        ],
        stagePadding: 20,
        dots: true,
        smartSpeed:1500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                dotsEach: true
            },
            600:{
                items:2,
                dotsEach: true
            },
            1000:{
                items:3,
                dotsEach: true
            }
        }
    });

    $('.inspiration-carousel').owlCarousel({
        // loop:true,
        margin:10,
        // rtl: true,
        // autoplay: true,
        nav:true,
        navText: [
            '<i class="fas fa-arrow-left"></i>',
            '<i class="fas fa-arrow-right"></i>'
        ],
        stagePadding: 20,
        dots: true,
        smartSpeed:2500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                dotsEach: true
            },
            600:{
                items:1,
                dotsEach: true
            },
            1000:{
                items:2,
                dotsEach: true
            }
        }
    });

});
