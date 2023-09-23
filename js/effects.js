document.addEventListener('DOMContentLoaded', (e) => {
	let floatingBlocks = document.querySelectorAll('[animation-floating-block]');
	floatingBlocks?.forEach((block) => {
		block.addEventListener('mouseenter', (e) => block.classList.add('animation-floating'));
		block.addEventListener('mouseleave', (e) => block.classList.remove('animation-floating'));
	});

	let tarifs = document.querySelectorAll('.sermtarif_border');
	tarifs?.forEach((block) => {
		block.addEventListener('mouseenter', (e) => block.closest('.sermtarif_block').classList.add('_hover'));
		block.addEventListener('mouseleave', (e) => block.closest('.sermtarif_block').classList.remove('_hover'));
	});

	let tarifsPd = document.querySelectorAll('.tarifsmm_pd');
	tarifsPd.forEach((block) => {
		block.addEventListener('mouseenter', (e) => {
			let parentBlock = block.closest('.tarifsmm.tarifsmm--second');
			if (!parentBlock) {
				parentBlock = block.closest('.tarifsmm');
			}
			parentBlock.classList.add('_hover');
		});
		block.addEventListener('mouseleave', (e) => {
			let parentBlock = block.closest('.tarifsmm.tarifsmm--second');
			if (!parentBlock) {
				parentBlock = block.closest('.tarifsmm');
			}
			parentBlock.classList.remove('_hover');
		});
	});
});
