const pubsub = require("./pubsub");

/**
 * for the given event, it pubishes event along with dummy data.
 *
 * @name publishData
 * @function
 * @param {string} event event name.
 * @returns {undefined}
 */

const publishData = event => {
    const data = {
        message: "PUBLISHED_DATA"
    };

    pubsub.publish(event, data);
};

module.exports = {
    publishData
};
