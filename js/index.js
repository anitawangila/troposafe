//-------------navbar
$(document).ready(function(){
$(".fa-bars").click(function(){

$(this).toggleClass("fa-times");

$(".navbar").toggleClass("nav-toggle");

});

$(window).on("load scroll",function(){
    
$(".fa-bars").removeClass("fa-times");

$(".navbar").removeClass("nav-toggle");
})

$('.post-wrapper').slick({
  infinite: true,
  autoplaySpeed: 2000,
  autoplay:true,
  slidesToShow: 3,
  slidesToScroll: 4,
   nextArrow:$(".next"),
    prevArrow:$(".prev"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});
  

  $('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});


});






