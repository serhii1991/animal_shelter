$(function() {

	$('.menu__btn').on('click', function() {
		$('.header__menu-list').slideToggle();
	});

	$(".friends__slider").slick({
		infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/friends-left-arrow.png" alt=""></button>',
  	nextArrow: '<button type="button" class="slick-next"><img src="img/icons/friends-right-arrow.png" alt=""></button>',
  	responsive: [
    {
      breakpoint: 860,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
	});

});