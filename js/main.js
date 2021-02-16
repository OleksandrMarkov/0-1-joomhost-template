$(function(){

$('.reviews-slider').slick({
	infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  dots: true,

/*responsive - from slider slick website*/
  responsive: [
    {
    	/*if screen width = 1020 - to break slider:
    	1 slide in 1 row*/
      breakpoint: 1020,
      settings: {
        slidesToShow: 1,
  		slidesToScroll: 1,
      }
    },
]

});


$('.btn-menu').on('click', function(){
$('.menu__list').slideToggle();
});



});