const events = require("events")

const EventEmitter = new events.EventEmitter

// function print() {
//     console.log("hi");
// }

// //method to assign an event with a name
// EventEmitter.on("demo", print)
// EventEmitter.addListener("myEvent", print)

// //method to execute an event
// EventEmitter.emit("demo")

// //method to remove an event
// EventEmitter.removeListener("demo")
// EventEmitter.removeAllListeners("myEvent")

EventEmitter.on("print", () => {
    console.log("hi its print 1");
})
EventEmitter.on("print", () => {
    console.log("hi its print 2");
})

let print3 = () => {
    console.log("print 3");
}
EventEmitter.addListener("print", print3)

EventEmitter.removeListener("print", print3)
EventEmitter.removeAllListeners("print")
EventEmitter.emit("print")