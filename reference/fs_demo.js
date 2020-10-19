const fs = require('fs');
const path = require('path');

// Create Folder (async by default)
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
  if (err) throw err
  console.log('Folder Created....')

//   //Append to a File
  fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' Hello World!', err => {
    if (err) throw err
    console.log('File written to....')
  })
})

// Create and Write to File (overwrite whatever is already in the file)
  // '/test' is existing folder you want to create file in
  // 'hello.txt' is file you want to create 
  // 'hi cutie' is the text you want to add to hello.txt
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hi cutie', err => {
  if (err) throw err
  console.log('File written to....')
}) 

// Read File 
  // Put character encoding as the second perameter. If you do not the function will return 
  // a raw buffer, not the actual data.
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'UTF8', (err, data) => {
  if (err) throw err
  console.log(data)
})

// Rename a File 
fs.rename(path.join(__dirname, '/test', 'hello.txt'), 
path.join(__dirname, '/test', 'helloworld.txt'), err => {
  if (err) throw err
  console.log('File is renamed....')
})