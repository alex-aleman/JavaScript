window.onload = () => {
	document.getElementById('button').addEventListener('click', () => main())
	document.getElementById('string').addEventListener('keydown', (e) => {
		if (e.keyCode === 13) main()
	})
}

function main() {
	const estados = document.getElementById('string').value
	const matrix = document.getElementById('matrix')
	console.log(estados)
		for (let i = 0; i < estados; i++) {
			const node = document.createElement('div')
			for (let j = 0; j < estados; j++) {
				const childNode = document.createElement('input')
					node.appendChild(childNode)
			}
		matrix.appendChild(node)
	}
}