const path = require('path'); 

// Base File Name
console.log(path.basename(__filename))

// Directory Name (__dirname does same thing)
console.log(path.dirname(__filename))

// File Extension 
console.log(path.extname(__filename))

// Create Path Object
console.log(path.parse(__filename))

// Concatenate Paths (concat all parameters passed into .join())
console.log(path.join(__filename, 'hello', 'cutie.html'))

