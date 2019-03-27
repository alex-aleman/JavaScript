window.onload = () => {
	document.getElementById('button1').addEventListener('click', () => caesar())
	document.getElementById('button2').addEventListener('click', () => decypher())
}

function caesar() {
	const cherryString = document.getElementById('string').value
	const parsedString = cherryString.replace(/\W|\d/g, '').toLowerCase()
	let output = ''
	for (i in parsedString) {
		if (parsedString[i] === 'z') output = output.concat('a')
		else output = output.concat(String.fromCharCode(parsedString[i].charCodeAt(0) + 1))
	}
	alert(output)
}

function decypher() {
	const cherryString = document.getElementById('string').value
	const parsedString = cherryString.replace(/\W|\d/g, '').toLowerCase()
	let output = ''
	for (i in parsedString) {
		if (parsedString[i] === 'a') output = output.concat('z')
		else output = output.concat(String.fromCharCode(parsedString[i].charCodeAt(0) - 1))
	}
	alert(output)
}