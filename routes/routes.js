const ping = require("./ping");
const users = require("./users");
const authentications = require("./authentications");

function routes(server) {
    ping(server);
    users(server);
    authentications(server);
};

module.exports = routes;