// link to node's http module
let http = require('http');

// start the web server using a callback function
// run the server at http://localhost:3000 & listen for http requests
http.createServer(function(request, response) {
    // send http status code
    response.writeHead(200);

    // send content
    response.write('<h1>First Node Page</h1>');
    response.write('<p>This page auto-restarts with Nodemon</p>');

    response.end();
}).listen(3000);

// print to the console that the server is running
console.log('Http Server running on port 3000');