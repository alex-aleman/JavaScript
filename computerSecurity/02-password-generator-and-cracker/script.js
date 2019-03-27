//todo: evaluation should be made on strngs, not characters

window.onload = () => {
	document.getElementById('range').value = 6
}

function rand() {
	let randomNumber = Math.floor(Math.random() * 90) + 33
	if (randomNumber === 94 || randomNumber === 95 || randomNumber === 96) {
		randomNumber = rand()
	}
	return randomNumber;
}

function generate() {
	let password = "";
	for (let i = 0; i < document.getElementById('range').value; i++) {
		const r = rand()
		password = password + String.fromCharCode(r)
	}
	alert(password);
}

function calculate() {
	const input = document.getElementById('input').value

	var start = new Date();

	for (let i = 0; i < input.length; i++) {
		for(let j = 33; j < 123; j++) {
			if (j === input[i].charCodeAt(0)) {
				break;
			}
		}
	}

	var finish = new Date();

	alert(`it took ${finish - start} milliseconds to bruteforce that password!`)
}

function slide() {
	document.getElementById('value').innerHTML = document.getElementById('range').value
}