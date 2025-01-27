const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/contact-me') {
        fs.readFile(path.join(__dirname, 'public', 'contact-me.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
        })
    } else {
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
        });
    }
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});