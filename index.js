const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const path = req.url;

    if (path === '/' || path === '/homepage.html') {
        fs.readFile('homepage.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('404 Not Found');
                return res.end();
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else if (path === '/aboutus.html') {
        fs.readFile('aboutus.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('404 Not Found');
                return res.end();
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else if (path === '/contactus.html') {
        fs.readFile('contactus.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('404 Not Found');
                return res.end();
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else if (path === '/enquiry.html') {
        fs.readFile('enquiry.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('404 Not Found');
                return res.end();
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else if (path === '/help.html') {
        fs.readFile('help.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('404 Not Found');
                return res.end();
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else {
        fs.readFile('style.css', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('404 Not Found');
                return res.end();
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            return res.end();
        });
    } 
}).listen(8000);

// server.listen(3000);