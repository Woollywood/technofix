const ranges = new Map();
ranges.set('requests', [200, 400, 600, 800, 1000]);
ranges.set('age', [0, 2, 5, 7, 10]);
ranges.set('select', [1, 1.2, 1.2, 1.6, 1.4, 1.15, 1, 1.1, 1.15, 1.1, 1.05]);
ranges.set('result', {
	200: {
		0: 67000,
		2: 64000,
		5: 62000,
		7: 60000,
		10: 60000,
	},
	400: {
		0: 113900,
		2: 108800,
		5: 105400,
		7: 102000,
		10: 102000,
	},
	600: {
		0: 160800,
		2: 153600,
		5: 148800,
		7: 144000,
		10: 144000,
	},
	800: {
		0: 207700,
		2: 198400,
		5: 192200,
		7: 186000,
		10: 186000,
	},
	1000: {
		0: 254600,
		2: 243200,
		5: 235600,
		7: 228000,
		10: 228000,
	},
});

class Calculator {
	constructor() {
		this._resultTag = document.querySelector('[data-calculator-result]');
		this._requestsInputs = document.querySelectorAll('[data-calculator-input]');
		this._select = document.querySelector('.calculator__range select');

		this._requestsInputs.forEach((input) => {
			const type = input.dataset.calculatorInput;
			this.inputsHandler(type, input);

			input.addEventListener('input', (e) => {
				this.inputsHandler(type, input);
			});
		});

		this.selectHandler(this._select.value);
		document.addEventListener('selectCallback', (event) => {
			const originalSelect = event.detail.select;
			const value = originalSelect.value;
			this.selectHandler(value);
		});
	}

	inputsHandler(type, input) {
		const value = input.value;

		switch (type) {
			case 'requests':
				this.requestsHandler(value);
				break;
			case 'age':
				this.ageHandler(value);
				break;
			default:
				break;
		}
	}

	requestsHandler(value) {
		this._requestsValue = ranges.get('requests').find((val) => val >= value * 10);
		this.calculateResult();
	}

	ageHandler(value) {
		this._ageValue = ranges.get('age').find((val) => val >= value / 10);
		this.calculateResult();
	}

	selectHandler(value) {
		this._selectValue = ranges.get('select')[value];
		this.calculateResult();
	}

	calculateResult() {
		this.resultRender(this._selectValue * ranges.get('result')[this._requestsValue][this._ageValue]);
	}

	resultRender(value) {
		this._resultTag.innerHTML = value;
	}
}

document.addEventListener('DOMContentLoaded', (event) => {
	const calculator = new Calculator();
});
