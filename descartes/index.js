const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
	console.log(`Server running ar http://${hostname}:${port}/`);
});

fs.readFile('./index.html', function (err, html) {
	if (err) {
		throw err;
	}
	
	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.write(html)
		res.end();
	});
});