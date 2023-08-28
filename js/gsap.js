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
});
