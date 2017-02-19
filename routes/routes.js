const ping = require("./ping");

function routes(server) {
    ping(server);
};

module.exports = routes;