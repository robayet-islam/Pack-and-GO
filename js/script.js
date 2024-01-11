// ======= Slick Slider Part Start =======// 
$('.popular_slider').slick({

  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows:false,
  centerMode:true,
  centerPadding: '0px',



  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 5,
         centerMode:false,


      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575.98,
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
				
// -------- Slick Slider Part End -------//
// ======== Counter Part Start =======//
  $('.counter').counterUp({
    delay: 10,
    time: 2000
});
// -------- Counter Part End -------//
 let main_menu = document.querySelector('.main_menu')

 window.addEventListener('scroll' , function(){
  let scrolling = this.scrollY

  if(scrolling > 200){
    main_menu.classList.add('menu_fixed')
  }else{
    main_menu.classList.remove('menu_fixed')
  }
 })




 AOS.init();