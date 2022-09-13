$(document).ready(function () {

	$('.cat-inf').on('click', function () {
		$(this).toggleClass('active');
		$(this).next('.cart-bg').toggleClass('active');
	});

	// -------------------- header --------------------------

	$(window).scroll(function () {

		if ($(this).scrollTop() > 1) {
			$('header').addClass('sticky');

		}
		else {
			$('header').removeClass('sticky');

		}
	});

	
	//--------------- fancybox -----------
	$('[data-fancybox-popup]').fancybox({
		closeExisting: true,
		smallBtn: false,
		toolbar: false,
		autoFocus: false,
		hash: false,
		touch: false
	});


	// FANCYBOX CERTIFICATE
	// ====================

	$('[data-fancybox-certificate]').fancybox({
		transitionEffect: 'fade',
		animationEffect: false,
		clickContent: false,
		touch: true,
		loop: true,
		selector: '.cert-item',
		backFocus: false,
		lang: 'ru',
		hideScrollbar: false,
		i18n: {
			ru: {
				CLOSE: 'Закрыть',
				ZOOM: 'Увеличить',
				FULL_SCREEN: 'На весь экран',
			}
		},
		buttons: [
			"zoom",
			"fullScreen",
			"close"
		]
	});

	$('[data-fancybox-gallery]').fancybox({
		transitionEffect: 'fade',
		animationEffect: false,
		clickContent: false,
		touch: true,
		loop: true,
		selector: '.gal-img',
		backFocus: false,
		lang: 'ru',
		hideScrollbar: false,
		i18n: {
			ru: {
				CLOSE: 'Закрыть',
				NEXT: 'Впёред',
				PREV: 'Назад',
				FULL_SCREEN: 'На весь экран',
			}
		},
		buttons: [
			"fullScreen",
			"close"
		]
	});


	// -------------------- svg--------------------------
	function svg() {
		$('img[src$=".svg"]').each(function () {
			var $img = $(this);
			var imgURL = $img.attr('src');
			var attributes = $img.prop('attributes');
			if ($img.hasClass('svg')) {
				$.get(imgURL, function (data) {
					var $svg = jQuery(data).find('svg');
					$svg = $svg.removeAttr('xmlns:a');
					$.each(attributes, function () {
						$svg.attr(this.name, this.value);
					});
					$img.removeClass('svg').replaceWith($svg);
				}, 'xml');
			}
		});
	}
	svg();	

	// ----------------- carousel ----------------------


	$('.gt').owlCarousel({
		loop: true,
		nav: false,
		navText: ['', ''],
		dots: true,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		items: 1
	});


	

	$('.mng').owlCarousel({
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1220: {
				items: 4,
			}
		}
	});


	$('.ctg').owlCarousel({
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1220: {
				items: 2,
			}
		}
	});


	$('.pts').owlCarousel({
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1220: {
				items: 4,
			}
		}
	});


	$('.crti').owlCarousel({
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1220: {
				items: 4,
			}
		}
	});

	

	// -------------------- Scroll -------------------------

	$(".srolls").on("click", "a", function (event) {
		// исключаем стандартную реакцию браузера
		event.preventDefault();

		// получем идентификатор блока из атрибута href
		var id = $(this).attr('href'),

			// находим высоту, на которой расположен блок
			top = $(id).offset().top - 50;

		// анимируем переход к блоку, время: 800 мс
		$('body,html').animate({ scrollTop: top }, 800);
	});


	// -------------------------modal----------------------

	$('.to-state').on('click', function (event) {
		event.preventDefault();
		$('div').removeClass('active');
		$('.state').removeClass('active');
		var state = $(this).attr('data-state');
		$('.state[data-state=' + state + ']').addClass('active');
	});

	$('.close').on('click', function (event) {
		$(this).parents().removeClass('active');
	});

	jQuery(function ($) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $(".state-box"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам

				div.parents().removeClass('active'); // скрываем его
				$('body').removeClass('modal-open');
			}
		});
	});

	// ------------- Show More ---------------------
	$("article.style-desc").has("p:nth-child(1)").append('<div class="more"><span>Узнать больше</span><img src="img/icons/next.svg" alt=""></div>');
	$("article.style-desc .more").click(function () {
		var $this = $(this),
			$cards = $(this).closest('.style-desc');
		$cards.toggleClass('open');
		$this.find('span').html($cards.hasClass('open') ? 'Свернуть' : 'Узнать больше')
	});
	// -------------------- Acordion -------------------------



	
	//end
});