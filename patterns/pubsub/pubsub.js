let subscribers = [];

/**
 * For the given event, executes callback functions for the all the subscribers.
 *
 * @name publish
 * @function
 * @param {string} event Name of the event.
 * @param {object} data data to be passed to the callback function. It's optional.
 * @returns {undefined}
 */

const publish = (event, data = {}) => {
    if (!subscribers[event]) {
        return;
    }

    subscribers[event].forEach(callback => {
        callback(data);
    });
};

/**
 * Unsubscribes the subscriber for the given event.
 *
 * @name unsubscribe
 * @function
 * @param {string} event event name
 * @param {number} index location of the subscriber in subscribers list for the given event.
 * @returns {undefined}
 */

const unsubscribe = (event, index) => {
    if (isNaN(index)) {
        return;
    }
    console.log("Unsubscribing....");
    subscribers[event].splice(index, 1);
    console.log(`Unsubscribed for event: ${event}`);
    x;
};

/**
 * This methods accepts the event to be subscribed and a callback to executed and when event is actually triggered.
 *
 * @name subscribe
 * @function
 * @param {string} event event name.
 * @param {function} callback a callback function to be executed when the event is triggerred.
 * @returns {object} It returns an object which contains function, a function which helps to unsubscribe from the event.
 */

const subscribe = (event, callback) => {
    if (!subscribers[event]) {
        subscribers[event] = [];
    }

    const index = subscribers[event].push(callback) - 1;
    return {
        unsubscribe: () => {
            unsubscribe(event, index);
        }
    };
};

module.exports = {
    publish,
    subscribe
};
