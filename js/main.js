 $(document).ready(function(){
    $('.wslider').slick({
        infinite: true,
        speed: 500,        
        slidesToShow: 1,
        cssEase: 'linear',        
        arrows: true,
        prevArrow: '<span class="slider-arrow left-arrow"><i class="fas fa-arrow-left"></i></span>',
         nextArrow:'<span class="slider-arrow right-arrow"><i class="fas fa-arrow-right"></i></span>',
        appendArrows:'.wslider_nav',
        dots: true,
        appendArrows: '.pagination-wslide',
        customPaging: (slider, i) => `<a>0${i + 1}</a>`,
        appendDots: '.numbers-wslide',
        dotsClass: '.numbers-wslide'
    });
     
     $('.nslider').slick({
         infinite: true,
         speed: 1000,
         fade: true,
         cssEase: 'linear',
         autoplay: 'true',
         autoplaySpeed: '3000',
         arrows: true,
         prevArrow: '<span class="slider-arrow left-arrow"><i class="fas fa-arrow-left"></i></span>',
         nextArrow:'<span class="slider-arrow right-arrow"><i class="fas fa-arrow-right"></i></span>',
         appendArrows:'.nslider_nav'
    });
     $('.kidsslider').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        speed: 1000,
        cssEase: 'linear',
        autoplay: true,
        arrows: true,
        prevArrow: '<span class="slider-arrow left-arrow"><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Назад</span>',
        nextArrow:'<span class="slider-arrow right-arrow">Вперёд&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></span>',
        appendArrows: '.pagination-kslide',
        customPaging: (slider, i) => `<a>0${i + 1}</a>`,
        appendDots: '.numbers-kslide',
        dotsClass: '.numbers-kslide',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
                }
            },
            {
                breakpoint: 576,
                settings:{
                    arrows: false,
                    centerMode: false
                }
            }
        ]
    });
     
     // to up
     $(".navbar").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
     $("#toup").click(function () {
            $('body,html').animate({scrollTop: 0}, 1500);
        });
}); 