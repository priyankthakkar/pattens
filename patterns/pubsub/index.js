const moduleA = require("./moduleA");
const moduleB = require("./moduleB");

// Initializes moduleB and subscribers to the event of type `customEvent`.
const eventHandler = moduleB.init();

console.log("calling customEvent");
// publishes customEvent which in turn will execute callback provided within moduleB.
moduleA.publishData("customEvent");

//using the handler to `customEvent`, we unsubscribe moduleB.
eventHandler.unsubscribe();
console.log("calling customEvent");

// event if we publish the event of type `customEvent` again, as moduleB is unsubscribed,
// the call back is not executed.
moduleA.publishData("customEvent");
