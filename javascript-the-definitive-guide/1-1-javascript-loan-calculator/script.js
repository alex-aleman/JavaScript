"use strict";

function calculate() {
	const amount = document.getElementById("amount");
	const apr = document.getElementById("apr");
	const years = document.getElementById("years");
	const zipcode = document.getElementById("zipcode");
	const payment = document.getElementById("payment");
	const total = document.getElementById("total");
	const totalinterest = document.getElementById("totalinterest");

	const principal = parseFloat(amount.value);
	const interest = parseFloat(apr.value) / 100 / 12;
	const payments = parseFloat(years.value) * 12;
}