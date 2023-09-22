document.addEventListener('DOMContentLoaded', (e) => {
	let floatingBlocks = document.querySelectorAll('[animation-floating-block]');
	floatingBlocks.forEach((block) => {
		block.addEventListener('mouseenter', (e) => block.classList.add('animation-floating'));
		block.addEventListener('mouseleave', (e) => block.classList.remove('animation-floating'));
	});
});
