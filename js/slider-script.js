if (document.querySelector('.our-cases__slider-top .our-cases__slider')) {
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
			prevEl: '.our-cases__slider-top .our-cases__slider .swiper-button-prev-custom',
			nextEl: '.our-cases__slider-top .our-cases__slider .swiper-button-next-custom',
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

if (document.querySelector('.our-clients__slider')) {
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
			prevEl: '.swiper-button-prev-custom',
			nextEl: '.swiper-button-next-custom',
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

if (document.querySelector('.work-stages__slider')) {
	let swiperTop = new Swiper('.work-stages__slider', {
		// Указываем класс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		observer: true,
		observeParents: true,
		// autoHeight: true,
		speed: 800,

		navigation: {
			prevEl: '.work-stages__button-prev',
			nextEl: '.work-stages__button-next',
		},

		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			726: {
				slidesPerView: 1.5,
				spaceBetween: 25,
			},
		},
		on: {
			init: function (e) {
				let slides = e.slides;
				let dataIndex = [];
				slides.forEach((slide) => {
					dataIndex.push(slide.ariaLabel.split('/').map((slide) => slide.trim())[0]);
				});

				slides.forEach((slide, index) => (slide.dataset.slideIndex = dataIndex[index]));

				if (window.innerWidth <= 1068) {
					let wrapperWidth = slides.reduce(
						(width, slide) => (width += slide.clientWidth + Number.parseInt(slide.style.marginRight)),
						0
					);
					slides[0].parentNode.style.cssText += `--wrapper-width: ${wrapperWidth}px`;
					slides[0].parentNode.style.cssText += `--slide-width: ${slides[0].clientWidth}px`;
					document.querySelector('.work-stages__slider-wrapper-outer').style.cssText +=
						slides[0].parentNode.style.cssText += `--slide-width: ${slides[0].clientWidth}px`;
				}

				window.addEventListener('resize', (resizeEv) => {
					if (window.innerWidth <= 1068) {
						let wrapperWidth = slides.reduce(
							(width, slide) => (width += slide.clientWidth + Number.parseInt(slide.style.marginRight)),
							0
						);
						slides[0].parentNode.style.cssText += `--wrapper-width: ${wrapperWidth}px`;
						slides[0].parentNode.style.cssText += `--slide-width: ${slides[0].clientWidth}px`;
						document.querySelector('.work-stages__slider-wrapper-outer').style.cssText +=
							slides[0].parentNode.style.cssText += `--slide-width: ${slides[0].clientWidth}px`;
					}
				});
			},
		},
	});
}
