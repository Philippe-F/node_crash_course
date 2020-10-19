const os = require('os');

// Platform (widows(win32), mac(darwin), etc)
console.log(os.platform())

// CPU Architecture
console.log(os.arch()) 

// CPU Core Info
console.log(os.cpus())

// Free Memory 
console.log(os.freemem())

// Total Memory 
console.log(os.totalmem())

// Home Dir 
console.log(os.homedir())

// Uptime (in seconds)
console.log(os.uptime())