if (document.querySelector(".our-cases__slider-top .our-cases__slider")) {
	let swiperTop = new Swiper('.our-cases__slider-top .our-cases__slider', {
		// Указываем класс нужного слайдера
				// Подключаем модули слайдера
				// для конкретного случая
				observer: true,
				observeParents: true,
				slidesPerView: 2,
				spaceBetween: 40,
				// autoHeight: true,
				speed: 800,
	
				navigation: {
					prevEl: ".our-cases__slider-top .our-cases__slider .swiper-button-prev-custom",
					nextEl: ".our-cases__slider-top .our-cases__slider .swiper-button-next-custom",
				},
				/*
				// Брейкпоинты
				breakpoints: {
					640: {
						slidesPerView: 1,
						spaceBetween: 0,
						autoHeight: true,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1268: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},
				*/
	});
}

if (document.querySelector(".our-clients__slider")) {
	let swiperTop = new Swiper('.our-clients__slider', {
		// Указываем класс нужного слайдера
				// Подключаем модули слайдера
				// для конкретного случая
				observer: true,
				observeParents: true,
				spaceBetween: 20,
				// autoHeight: true,
				speed: 800,
	
				navigation: {
					prevEl: ".swiper-button-prev-custom",
					nextEl: ".swiper-button-next-custom",
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					560: {
						slidesPerView: 3,
					},
					960: {
						slidesPerView: 5,
					},
				},
	});
}
