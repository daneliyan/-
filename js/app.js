$(document).ready(function () {

	// -------------------- Loader --------------------------
	onload = () => {
		const load = document.getElementById('load')

		setTimeout(() => {
			load.style.display = 'none'
		}, 2500)
	}

	// -------------------- Cursor --------------------------
	var rjs_cursor =  document.getElementById("rjs_cursor"); //Getting the cursor
	var body =  document.querySelector("body"); //Get the body element

	//Functions for showing and hiding the cursor
	//They are referenced the 
	function rjs_show_cursor(e) { //Function to show/hide the cursor
			if(rjs_cursor.classList.contains('rjs_cursor_hidden')) {
					rjs_cursor.classList.remove('rjs_cursor_hidden');
			}
			rjs_cursor.classList.add('rjs_cursor_visible');
	}

	function rjs_hide_cursor(e) {    if(rjs_cursor.classList.contains('rjs_cursor_visible')) {
			rjs_cursor.classList.remove('rjs_cursor_visible');
			}
			rjs_cursor.classList.add('rjs_cursor_hidden');
	}

	function rjs_mousemove(e) { //Function to correctly position the cursor
			rjs_show_cursor(); //Toggle show/hide
		
			var rjs_cursor_width = rjs_cursor.offsetWidth * 0.5;
			var rjs_cursor_height = rjs_cursor.offsetHeight * 0.5;

			var rjs_cursor_x = e.clientX - rjs_cursor_width; //x-coordinate
			var rjs_cursor_y = e.clientY - rjs_cursor_height; //y-coordinate
			var rjs_cursor_pos = `translate(${rjs_cursor_x}px, ${rjs_cursor_y}px)`;
			rjs_cursor.style.transform = rjs_cursor_pos;
	}

	//Eventlisteners
	window.addEventListener('mousemove', rjs_mousemove); //Attach an event listener
	body.addEventListener('mouseleave', rjs_hide_cursor);

	//Hover behaviour
	function rjs_hover_cursor(e) { rjs_cursor.classList.add('rjs_cursor_hover'); }
	function rjs_unhover_cursor(e) { rjs_cursor.classList.remove('rjs_cursor_hover'); }

		document.querySelectorAll('.cursor-hover-class').forEach(item => { //A custom class
			item.addEventListener('mouseover', rjs_hover_cursor);
			item.addEventListener('mouseleave', rjs_unhover_cursor);
		})


	// -------------------- svg --------------------------
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

	
	// -------------------- Scroll -------------------------

	$(".srolls").on("click", "a", function (event) {
		// исключаем стандартную реакцию браузера
		event.preventDefault();

		// получем идентификатор блока из атрибута href
		var id = $(this).attr('href'),

			// находим высоту, на которой расположен блок
			top = $(id).offset().top - 0;

		// анимируем переход к блоку, время: 800 мс
		$('body,html').animate({ scrollTop: top }, 800);
	});




	//end
});