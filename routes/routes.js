const ping = require("./ping");
const users = require("./users");

function routes(server) {
    ping(server);
    users(server);
};

module.exports = routes;