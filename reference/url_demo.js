const url = require('url');

const myUrl = new URL('http://mycoolwebsite.com/hello.html?id=100&status=active')

// Serialized URL (plain url as a string)
  // You can also use myUrl.toString()
console.log(myUrl.href) 

// Host (root Domain)
console.log(myUrl.host)

// Host Name 
  // The difference is that hostname doesn't include the port 
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

// Serialized Query 
console.log(myUrl.search)

// Params Object 
console.log(myUrl.searchParams)

// Add Params 
myUrl.searchParams.append('abc', 123)
console.log(myUrl.searchParams)

// Loop Through Params
myUrl.searchParams.forEach((val, name) => {
  console.log(`${name}: ${val}`)
})