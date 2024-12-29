const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

http
  .createServer((req, res) => {
    if (req.url === '/') {
      const filePath = path.join(__dirname, 'templates', 'page.html');
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error loading the page');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Page not found');
    }
  })
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
