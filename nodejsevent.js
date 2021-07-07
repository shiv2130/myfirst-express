const EventEmitter = require('events');
const { setTimeout } = require('timers');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor quickly!!!');
  setTimeout(() => {
      console.log("Please turn of the motor it is a gentle reminder")
  }, 3000);
});
console.log("The Script is running")
console.log("The Script is still running")
myEmitter.emit('WaterFull');