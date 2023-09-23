let galleryObserver = new MutationObserver((observerEvent) => {
	if (Array.isArray(observerEvent)) {
		observerEvent.forEach((observeEvent) => {
			if (observeEvent.target.classList.contains('lg-inner')) {
				let target = observeEvent.target;
				let targetContent = target.closest('.lg-content');

				if (targetContent) {
					let buttonPrev = targetContent.querySelector('.lg-prev');
					let buttonNext = targetContent.querySelector('.lg-next');

					buttonPrev.innerHTML = `<div class="lg-icon__inner">
						<svg class="lg-arrow" xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" >
							<path d="M6.45055 3.77572e-05C6.75715 -0.00208891 7.05739 0.0887324 7.31277 0.260852C7.56814 0.432973 7.767 0.678544 7.88386 0.966076C8.00071 1.25361 8.03022 1.56999 7.96861 1.87465C7.907 2.17931 7.75707 2.45836 7.53806 2.67601L4.2257 6.018L7.53806 9.37486C7.8099 9.67077 7.95789 10.0622 7.95085 10.4666C7.94382 10.871 7.78231 11.2568 7.50035 11.5428C7.21839 11.8288 6.838 11.9926 6.43931 11.9998C6.04062 12.0069 5.65477 11.8568 5.36304 11.581L0.0867077 6.2291C0.0592332 6.20146 0.0374261 6.16858 0.0225443 6.13235C0.00766248 6.09611 5.19532e-07 6.05725 5.22963e-07 6.018C5.26394e-07 5.97875 0.00766249 5.93989 0.0225443 5.90365C0.0374261 5.86742 0.0592332 5.83454 0.0867078 5.8069L5.36304 0.454953C5.65203 0.163494 6.04302 -6.24142e-05 6.45055 3.77572e-05Z"/>
						</svg>
					</div>`;

					buttonNext.innerHTML = `<div class="lg-icon__inner">
						<svg class="lg-arrow" xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" >
							<path d="M1.54945 12C1.24285 12.0021 0.942608 11.9113 0.687234 11.7391C0.431861 11.567 0.232997 11.3215 0.116145 11.0339C-0.000707626 10.7464 -0.030221 10.43 0.0313897 10.1253C0.0930004 9.82069 0.242926 9.54164 0.46194 9.32399L3.7743 5.982L0.46194 2.62514C0.190104 2.32923 0.0421128 1.93785 0.0491476 1.53345C0.0561819 1.12905 0.217691 0.743201 0.49965 0.457202C0.781609 0.171203 1.162 0.00737838 1.56069 0.000243195C1.95938 -0.00689199 2.34523 0.143219 2.63696 0.418951L7.91329 5.7709C7.94077 5.79854 7.96257 5.83142 7.97746 5.86765C7.99234 5.90389 8 5.94275 8 5.982C8 6.02125 7.99234 6.06011 7.97746 6.09635C7.96257 6.13258 7.94077 6.16546 7.91329 6.1931L2.63696 11.545C2.34797 11.8365 1.95698 12.0001 1.54945 12Z"/>
						</svg>
					</div>`;
				}
			}
		});
	}
});

galleryObserver.observe(document.body, { childList: true, subtree: true });

if (document.querySelector('.about-gallery')) {
	lightGallery(document.querySelector('.about-gallery'), {
		// plugins: [lgZoom, lgThumbnail],
		licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
		speed: 500,
	});
}
