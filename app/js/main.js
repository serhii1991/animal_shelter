$(function() {

	$('.placeholder').click(function() {
		$(this).siblings('input').focus();
	});
	$('.form-control').focus(function() {
		$(this).siblings('.placeholder').hide();
	});
	$('.form-control').blur(function() {
		var $this = $(this);
		if ($this.val().length == 0)
			$(this).siblings('.placeholder').show();
	});
	$('.form-control').blur();

	$('.menu__btn').on('click', function() {
		$('.header__menu').slideToggle();
	});

	$(".friends__slider").slick({
		infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/friends-left-arrow.png" alt=""></button>',
  	nextArrow: '<button type="button" class="slick-next"><img src="img/icons/friends-right-arrow.png" alt=""></button>'
	});

});