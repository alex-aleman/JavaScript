'use strict';

function calculate() {
	const amount = document.getElementById('amount');
	const apr = document.getElementById('apr');
	const years = document.getElementById('years');
	const zipcode = document.getElementById('zipcode');
	const payment = document.getElementById('payment');
	const total = document.getElementById('total');
	const totalinterest = document.getElementById('totalinterest');

	const principal = parseFloat(amount.value);
	const interest = parseFloat(apr.value) / 100 / 12;
	const payments = parseFloat(years.value) * 12;

	const x = Math.pow(1 + interest, payments);
	const monthly = (principal * x * interest) / (x - 1);

	if (isFinite(monthly)) {
		payment.innerHTML = monthly.toFixed(2);
		total.innerHTML = (monthly * payments).toFixed(2);
		totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);

		save(amount.value, apr.value, years.value, zipcode.value); // Función save() definida más adelante

		try {
			getLenders(amount.value, apr.value, years.value, zipcode.value);
		}		catch (err) {
		}// ¿Qué hacen try & catch?

		chart(principal, interest, monthly, payments);// Función chart() definida más adelante
	}	else {
		payment.innerHTML = '';
		total.innerHTML = '';
		totalinterest.innerHTML = '';
		chart();
	}
}

function save(amount, apr, years, zipcode) {
	if (window.localStorage) {
		localStorage.loanAmount = amount;
		localStorage.loanApr = apr;
		localStorage.loanYears = years;
		localStorage.loanZipcode = zipcode;
	}
}

window.onload = function () {
	if (localStorage && localStorage.loanAmount) {
		document.getElementById('amount').value = localStorage.loanAmount;
		document.getElementById('apr').value = localStorage.loanApr;
		document.getElementById('years').value = localStorage.loanYears;
		document.getElementById('zipcode').value = localStorage.loanZipcode;
	}
};

function getLenders(amount, apr, years, zipcode) {
	if (!window.XMLHttpRequest) {
		return;
	}

	const ad = document.getElementById('lenders');
	if (!ad) {
		return;
	}

	const url = 'getLenders.php' +
		'?amt=' + encodeURIComponent(amount) +
		'&apr=' + encodeURIComponent(apr) +
		'&yrs=' + encodeURIComponent(years) +
		'&zip=' + encodeURIComponent(zipcode);

	const req = new XMLHttpRequest();
	req.open('GET', url);
	req.send(null);

	// This is asyncrhonous, whatever that means
	req.onreadystatechange = function () {
		if (req.readyState === 4 && req.status === 200) {
			const response = req.responseText;
			const lenders = JSON.parse(response);

			let list = '';
			for (let i = 0; i < lenders.length; i++) {
				list += '<li><a ref=\'' + lenders[i].url + '\'>' + lenders[i].name + '</a>';
			}

			ad.innerHTML = '<ul>' + list + '</ul>';
		}
	};
}
