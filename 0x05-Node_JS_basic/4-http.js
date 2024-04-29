const http = require('http');

//create a http server
const app = http.createServer((req, res) => {
	//Set response status code to 200 meaning OKAY
	res.statusCode = 200;

	//Set the content type to plain text
	res.setHeader('Content-Type', 'text/plain');

	//Send the response Body
	res.end('Hello Holberton School!\n');
});

//Listen on pert 1245
app.listen(1245);

//Export the app variable
module.exports = app;
