const secondHand = document.querySelector('#second-hand');
const minuteHand = document.querySelector('#minute-hand');
const hourHand = document.querySelector('#hour-hand');

setInterval(() => {
	const now = new Date();

	const seconds = (now.getSeconds() * 6) + 90;
	const minutes = (now.getMinutes() * 6) + 90;
	const hours = (now.getHours() * 30) + 90;

	secondHand.style.transform = `rotate(${seconds}deg)`;
	minuteHand.style.transform = `rotate(${minutes}deg)`;
	hourHand.style.transform = `rotate(${hours}deg)`;
}, 1000);
