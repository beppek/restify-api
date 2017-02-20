const Ping = require("./Ping");
const Users = require("./Users");
const Authentications = require("./Authentications");

/**
 * Route injections
 */
class Router {
    constructor(server) {
        this.pingRoutes = new Ping(server);
        this.userRoutes = new Users(server);
        this.authRoutes = new Authentications(server);
    }
    route() {
        this.pingRoutes.route();
        this.userRoutes.route();
        this.authRoutes.route();
    }
}

module.exports = Router;