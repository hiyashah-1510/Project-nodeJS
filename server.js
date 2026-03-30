const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 8008;

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    let fileName = "";

    switch (pathname) {

        case "/":
            fileName = "./pages/home.html";
            break;

        case "/about":
            fileName = "./pages/about.html";
            break;

        case "/contact":
            fileName = "./pages/contact.html";
            break;

        case "/data":

            const user = {
                name: "Rahul",
                email: "rahul@gmail.com"
            };

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(user));
            return;

        case "/user":

            const name = parsedUrl.query.name || "Guest";

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`<h1>Hello ${name}</h1>`);
            return;

        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 Page Not Found</h1>");
            return;
    }

    fs.readFile(fileName, (err, data) => {

        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Server Error");
        } 
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }

    });

});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});