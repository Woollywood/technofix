gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', (e) => {
	let mm = gsap.matchMedia();
	let progressLine = document.querySelector('.progress-stages__scale');
	if (progressLine) {
		prepareBlocks();

		let circles = Array.from(document.querySelectorAll('.progress-stages__circle')).slice(1);
		let firstCircle = document.querySelector('.progress-stages__circle');
		firstCircle.style.cssText = 'animation: none;';
		let circlesProgress = [];
		mm.add('(min-width: 1067px)', () => {
			gsap.to(progressLine, {
				y: '100%',
				duration: 3,
				ease: 'Power0.easeNone',
				scrollTrigger: {
					trigger: '.progress-stages',
					start: 'top center',
					end: 'bottom top',
					scrub: true,

					onEnter: (e) => {
						firstCircle.classList.add('_achieved');
						getRelatedBlock(firstCircle.dataset.relatedBlockId).classList.add('block-stages--active');
					},

					onLeaveBack: (e) => {
						firstCircle.classList.remove('_achieved');
						getRelatedBlock(firstCircle.dataset.relatedBlockId).classList.remove('block-stages--active');
					},

					onUpdate: (e) => {
						let lineBox = progressLine.getBoundingClientRect();
						circles.forEach((circle) => {
							let circleBox = circle.getBoundingClientRect();

							if (e.direction === 1) {
								if (lineBox.bottom > circleBox.top && !circlesProgress.includes(circle)) {
									circlesProgress.push(circle);
									circle.classList.add('_achieved');
									getRelatedBlock(circle.dataset.relatedBlockId).classList.add(
										'block-stages--active'
									);
								}
							} else {
								if (lineBox.bottom < circleBox.top && circlesProgress.includes(circle)) {
									circlesProgress.splice(circlesProgress.indexOf(circle), 1);
									circle.classList.remove('_achieved');
									getRelatedBlock(circle.dataset.relatedBlockId).classList.remove(
										'block-stages--active'
									);
								}
							}
						});
					},
				},
			});
		});

		function prepareBlocks() {
			let cols = document.querySelectorAll('.work-stages__col');
			let circles = document.querySelectorAll('.progress-stages__circle');

			cols.forEach((col, colIndex) => {
				let blocks = col.querySelectorAll('.work-stages__block');

				let blockIndex = colIndex;
				blocks.forEach((block) => {
					block.dataset.blockId = blockIndex;
					blockIndex += 2;
				});
			});

			circles.forEach((circle, index) => {
				circle.dataset.relatedBlockId = index;
			});
		}

		function getRelatedBlock(id) {
			return document.querySelector(`[data-block-id="${id}"]`);
		}
	}

	let isAnimated = false;
	if (document.querySelector('.approach')) {
		let blocks = gsap.utils.toArray('.approach__block');

		let circleStaticList = [];
		let circleStaticList1 = document.querySelectorAll('.circle--static-1');
		let circleStaticList2 = document.querySelectorAll('.circle--static-2');
		let circleStaticList3 = document.querySelectorAll('.circle--static-3');
		let circleStaticList4 = document.querySelectorAll('.circle--static-4');
		circleStaticList.push(circleStaticList1);
		circleStaticList.push(circleStaticList2);
		circleStaticList.push(circleStaticList3);
		circleStaticList.push(circleStaticList4);

		let circleAnimatedList = [];
		let circleAnimatedList1 = document.querySelectorAll('.circle--animated-1');
		let circleAnimatedList2 = document.querySelectorAll('.circle--animated-2');
		let circleAnimatedList3 = document.querySelectorAll('.circle--animated-3');
		let circleAnimatedList4 = document.querySelectorAll('.circle--animated-4');
		circleAnimatedList.push(circleAnimatedList1);
		circleAnimatedList.push(circleAnimatedList2);
		circleAnimatedList.push(circleAnimatedList3);
		circleAnimatedList.push(circleAnimatedList4);

		let t1 = gsap.timeline();
		gsap.to('.approach', {
			scrollTrigger: {
				trigger: '.approach',
				start: 'top, 50%',
				onEnter: () => {
					const durationArray = [3.7, 1.7, 1.3, 1.1];

					blocks.forEach((block, index) => {
						t1.to(block, {
							duration: durationArray[index],
							onComplete: () => {
								block.classList.add('approach__block--active');
								circleStaticList[index].forEach((circle) => (circle.style.display = 'none'));
								circleAnimatedList[index].forEach((circle) => (circle.style.display = 'block'));
							},
						});
					});

					let path = document.querySelectorAll('.path--progress');
					if (path && !isAnimated) {
						anime({
							targets: path,
							strokeDashoffset: [anime.setDashoffset, 0],
							easing: 'easeInOutSine',
							duration: 12000,
						});
					}

					isAnimated = true;
				},
			},
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
			easing: 'easeInOutSine',
		});

		anime({
			targets: [path3, path4],
			translateY: 250,
			translateX: 250,
			direction: 'reverse',
			easing: 'easeInOutSine',
		});
	}

	if (document.querySelector('.order-animation')) {
		let path1 = document.querySelectorAll('.order-path--01');
		let path2 = document.querySelectorAll('.order-path--02');
		let path3 = document.querySelectorAll('.order-path--03');

		anime({
			targets: path1,
			opacity: [0, 1],
			loop: true,
			direction: 'alternate',
			easing: 'easeInOutSine',
		});

		anime({
			targets: path2,
			opacity: [0, 1],
			loop: true,
			delay: 200,
			direction: 'alternate',
			easing: 'easeInOutSine',
		});

		anime({
			targets: path3,
			opacity: [0, 3],
			loop: true,
			delay: 400,
			direction: 'alternate',
			easing: 'easeInOutSine',
		});
	}

	if (document.querySelector('.gsap-row')) {
		gsap.from('.gsap--from-right', {
			xPercent: 100,
			opacity: 0,
			duration: 3,
			ease: 'sine',
			scrollTrigger: {
				trigger: 'gsap-row',
				start: 'center center',
			},
		});

		gsap.from('.gsap--from-left', {
			xPercent: -100,
			opacity: 0,
			duration: 3,
			ease: 'sine',
			scrollTrigger: {
				trigger: 'gsap-row',
				start: 'center center',
			},
		});
	}

	if (document.querySelectorAll('[data-gsap]')) {
		let elements = document.querySelectorAll('[data-gsap]');
		elements.forEach((element) => {
			let type = element.dataset.gsap;

			let tween = null;
			switch (type) {
				case 'from-left':
					tween = gsap.from(element, {
						opacity: 0,
						xPercent: -40,
						scrollTrigger: {
							trigger: element,
							start: 'top 70%',
							end: 'center center',
							scrub: 1,
							onLeave: (e) => {
								element.classList.add('animation-completed');
							},
							onLeaveBack: (e) => {
								element.classList.remove('animation-completed');
							},
						},
					});
					break;
				case 'from-right':
					tween = gsap.from(element, {
						opacity: 0,
						xPercent: 40,
						scrollTrigger: {
							trigger: element,
							start: 'top 70%',
							end: 'center center',
							scrub: 1,
							onLeave: (e) => {
								element.classList.add('animation-completed');
							},
							onLeaveBack: (e) => {
								element.classList.remove('animation-completed');
							},
						},
					});
					break;
				default:
					throw new Error('Unknown type of gsap data');
			}
		});
	}
});
