

const EventEmitter = require('event');
const { EventEmitter } = require('node:stream');

const eventEmitter = new EventEmitter();
function sayHelo() {
    console.log('helo!');
    
}

eventEmitter.on('greet', ()=> {
    console.log('hello world');
    
})

eventEmitter.emit('greet');