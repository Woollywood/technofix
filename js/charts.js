document.addEventListener('DOMContentLoaded', (event) => {
	seoIncreaseChart();
	ripdPieChart();
	ripdBarChar();
	ripdLineChart();
	reklamaPieChar();
});

function seoIncreaseChart() {
	const ctx = document.getElementById('seo-increase-chart');

	if (!ctx) {
		return;
	}

	new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun'],
			datasets: [
				{
					data: [11, 24, 12, -6, -22, -6, 12],
					borderColor: '#fff',
					backgroundColor: '#fff',
				},
				{
					data: [-22, -4, -22, 64, 12, 28, -22],
					borderColor: '#E63114',
					backgroundColor: '#E63114',
				},
			],
		},
		options: {
			plugins: {
				legend: {
					display: false,
				},
			},
			scales: {
				y: {
					beginAtZero: true,
					suggestedMin: 50,
					suggestedMax: 100,

					border: {
						color: 'rgba(236, 236, 236, 0.10)',
					},
				},
				x: {
					border: {
						color: 'rgba(236, 236, 236, 0.10)',
					},
				},
			},
			radius: 8,
		},
	});
}

function ripdPieChart() {
	const ctx = document.getElementById('ripd-pie-chart');

	if (!ctx) {
		return;
	}

	new Chart(ctx, {
		type: 'doughnut',
		data: {
			datasets: [
				{
					data: [240, 50, 50, 200, 460],
					backgroundColor: ['#ec604a ', '#e24e36 ', '#e63114', '#a9210c', '#76180A'],
					hoverOffset: 4,
				},
			],
		},
		options: {
			plugins: {
				legend: {
					display: false,
				},
			},
		},
	});
}

function ripdBarChar() {
	const ctx = document.getElementById('ripd-bar-chart');

	if (!ctx) {
		return;
	}

	new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun'],
			datasets: [
				{
					data: [-20, 0, 30, -20, 10, 56, -2, -10, 20, 8, 50, -16, 18, 16, -16, -16, 10, 40],
					backgroundColor: '#E63114',
				},
			],
		},
		options: {
			plugins: {
				legend: {
					display: false,
				},
			},
			scales: {
				y: {
					beginAtZero: true,
					suggestedMin: 50,
					suggestedMax: 100,
				},
			},
			elements: {
				bar: {
					borderRadius: 8,
				},
			},
		},
	});
}

function ripdLineChart() {
	const ctx = document.getElementById('ripd-line-chart');

	if (!ctx) {
		return;
	}

	new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun'],
			datasets: [
				{
					data: [11, 24, 12, -6, -22, -6, 12],
					borderColor: '#fff',
					backgroundColor: '#fff',
				},
				{
					data: [-22, -4, -22, 64, 12, 28, -22],
					borderColor: '#E63114',
					backgroundColor: '#E63114',
				},
			],
		},
		options: {
			plugins: {
				legend: {
					display: false,
				},
			},
			scales: {
				y: {
					beginAtZero: true,
					suggestedMin: 50,
					suggestedMax: 100,

					border: {
						color: 'rgba(236, 236, 236, 0.10)',
					},
				},
				x: {
					border: {
						color: 'rgba(236, 236, 236, 0.10)',
					},
				},
			},
			radius: 8,
		},
	});
}

function reklamaPieChar() {
	const ctx = document.getElementById('reklama-pie-chart');

	if (!ctx) {
		return;
	}

	new Chart(ctx, {
		type: 'doughnut',
		data: {
			datasets: [
				{
					data: [50, 50, 50, 50],
					backgroundColor: ['#391772  ', '#36166B  ', '#6A42AD ', '#462183 '],
					hoverOffset: 4,
				},
			],
		},
		options: {
			plugins: {
				legend: {
					display: false,
				},
			},
		},
	});
}
