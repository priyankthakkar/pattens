const pubsub = require("./pubsub");

/**
 * Initializes moduleB as a subscriber to pubsub model for an event of type customEvent.
 *
 * @name init
 * @function
 * @returns {object} returns an handler to the customEvent using which user can unsubscriber from the event when no longer needed.
 */

const init = () => {
    const eventHandler = pubsub.subscribe("customEvent", data => {
        console.log(`custome event is called with ${JSON.stringify(data)}`);
    });
    return eventHandler;
};

module.exports = {
    init
};
