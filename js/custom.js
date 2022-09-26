$(function(){

  "use strick"

  new WOW().init();


  setTimeout(function () {
    $(".preloader").fadeToggle()
   }, 1800);

  // backtotop js

  $(".backtotop i").on('click', function(){
    $("html,body").animate({
      scrollTop:0
    },1200)
  })

  $(window).on('scroll', function(){
    let scrolling = $(this).scrollTop()

    if(scrolling > 20){
      $(".backtotop i").fadeIn(500)
    }else{
      $(".backtotop i").fadeOut(500)
    }

    if(scrolling > 50){
      $(".menu").addClass("menu_ex")
    }else{
      $(".menu").removeClass("menu_ex")
    }
  })


  // team part js

  $('.team_slider').slick({
    dots: true,
    arrows:false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });






  // team part js

  $('.exp_slider').slick({
    dots: true,
    arrows:false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 1700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
































})