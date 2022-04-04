// Events module - built in module
// where you can create- , fire- and listen for- your own events.


//  craete event class with the help of events
const { on } = require("events");
const EventEmitter = require("events");

// create object of event class

const event= new EventEmitter();

/*event.on("hey", ()=>{
    console.log("I'm Akshata");
});

event.on("hey", ()=>{
    console.log("I'm good");
});

event.emit("hey");*/

// listening on event
event.on("hello", (sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("hello",200,"ok");       // emitting the event


