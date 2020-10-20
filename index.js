const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
  //     if (err) throw err
  //     res.writeHead(200, { 'Content-Type': 'text/html' })
  //     res.end(content)
  //   })
  // } else if (req.url === '/about') {
  //   fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
  //     if (err) throw err
  //     res.writeHead(200, { 'Content-Type': 'text/html' })
  //     res.end(content)
  //   })
  // }

  // Build File Path (so that we can access the public files to be rendered)
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : 
  req.url); 

  // Ext of the file 
  let extname = path.extname(filePath);

  // Initial Content Type
    // set to 'text/html' because it is the most common 
  let contentType = 'text/html'

  // Check Ext and Set ContentType 
  switch(extname) {
    case '.js':
      contentType = 'text/javascript'; 
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpeg':
      contentType = 'image/jpeg';
      break;
  }

  // Read File 
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        // Page Not Found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(200, { 'Content-Type': 'text/html' }) 
          res.end(content, 'utf8')
        })
      } else {
        // Some Server Error
        res.writeHead(500)
        res.end(`Server Error: ${err.code}`)
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(content, 'utf8')
    }
  })
}) 

const PORT = process.env.port || 5000
server.listen(5000, () => console.log(`Server running on port: ${PORT}`))