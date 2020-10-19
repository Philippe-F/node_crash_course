// Much of the Node.js core API is built around an idiomatic asynchronous 
// event - driven architecture in which certain kinds of objects(called "emitters") 
// emit named events that cause Function objects("listeners") to be called.

const EventEmitter = require('events');

// Create Class

class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// My Event Listener (creating an event listener) 
  // .on() adds an event to the reciever 
myEmitter.on('event', () => console.log('Event Fired!'))

// Init Event 
myEmitter.emit('event')
