gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', (e) => {
	let blocks = document.querySelectorAll('.work-stages__block');

	let mm = gsap.matchMedia();
	mm.add('(min-width: 1067px)', () => {
		gsap.to('.progress-stages__scale', {
			y: '100%',
			duration: 3,
			ease: 'Power0.easeNone',
			scrollTrigger: {
				trigger: '.progress-stages',
				start: 'top center',
				end: 'bottom top',
				scrub: true,
			},
		});

		blocks.forEach((block) => {
			gsap.to(block, {
				scrollTrigger: {
					trigger: block,
					start: `${block.dataset.scrollTrigger ?? 25}% 50%`,
					onEnter: (e) => {
						block.classList.add('block-stages--active');
					},

					onLeaveBack: (e) => {
						block.classList.remove('block-stages--active');
					},
				},
			});
		});
	});

	if (document.querySelector('.approach')) {
		let blocks = gsap.utils.toArray('.approach__block');
		let t1 = gsap.timeline();
		gsap.to('.approach', {
			scrollTrigger: {
				trigger: '.approach',
				start: 'top, 50%',
				markers: true,
				onEnter: () => {
					blocks.forEach(block => {
						t1.to(block, {
							duration: 3,
							onComplete: () => {
								block.classList.add('approach__block--active');
							},
						})
					})
				}
			}
		})
	}

	let path = document.querySelector('#path--state');
	if (path) {
		anime({
			targets: path,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			duration: 15000,
			direction: 'alternate',
			loop: true,
		});
	}

	if (document.querySelector('.seo-main__right')) {
		let path1 = document.querySelectorAll('.seo-path--01');
		let path2 = document.querySelectorAll('.seo-path--02');

		let path3 = document.querySelectorAll('.seo-path--03');
		let path4 = document.querySelectorAll('.seo-path--04');

		anime({
			targets: [path1, path2],
			translateY: -250,
			translateX: 250,
			direction: 'reverse',
			easing: 'easeInOutSine'
		  });

		  anime({
			targets: [path3, path4],
			translateY: 250,
			translateX: 250,
			direction: 'reverse',
			easing: 'easeInOutSine'
		  });
	}
});
