document.addEventListener('DOMContentLoaded', (event) => {
	seoIncreaseChart();
	ripdPieChart();
	ripdBarChar();
	ripdLineChart();
	reklamaPieChar();
});

const gridOptions = {
	color: 'rgba(236, 236, 236, 0.10)',
};

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

					grid: gridOptions,
					ticks: {
						color: '#49336B',
					},
				},
				x: {
					grid: gridOptions,
					ticks: {
						color: '#49336B',
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
			labels: ['', 'Jan', '', '', 'Feb', '', '', 'Mar', '', '', 'Apr', '', '', 'Mai', '', '', 'Jun', ''],
			datasets: [
				{
					base: -100,
					data: [-20, 0, 30, -20, 10, 56, -2, -10, 20, 8, 50, -16, 18, 16, -16, -16, 10, 40],
					backgroundColor: '#E63114',
					grouped: false,
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
					suggestedMin: -100,
					suggestedMax: 100,

					grid: gridOptions,
					ticks: {
						color: '#49336B',
					},
				},
				x: {
					grid: gridOptions,
					ticks: {
						autoSkip: true,
						color: '#49336B',
					},
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

					grid: gridOptions,
					ticks: {
						color: '#49336B',
					},
				},
				x: {
					grid: gridOptions,
					ticks: {
						color: '#49336B',
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

// Utils
function createRadialGradient3(context, c1, c2, c3) {
	const chartArea = context.chart.chartArea;
	if (!chartArea) {
		return;
	}

	const chartWidth = chartArea.right - chartArea.left;
	const chartHeight = chartArea.bottom - chartArea.top;

	const width = chartWidth;
	const height = chartHeight;
	const centerX = (chartArea.left + chartArea.right) / 2;
	const centerY = (chartArea.top + chartArea.bottom) / 2;
	const r = Math.min((chartArea.right - chartArea.left) / 2, (chartArea.bottom - chartArea.top) / 2);
	const ctx = context.chart.ctx;
	const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, r);
	gradient.addColorStop(0, c1);
	gradient.addColorStop(0.5, c2);
	gradient.addColorStop(1, c3);

	return gradient;
}
