const http = require('http');

// Create Server Object
const server = http.createServer((req, res) => {
  // Write a Response
  res.write('Hello World') 
  res.end()
})

server.listen(5000, () => console.log('Server running on port: 5000'))