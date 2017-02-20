/**
 * Simple Ping route
 */
class Ping {
    constructor(server) {
        this.server = server;
    }

    route() {
        this.get(this.server);
    }

    /**
     * GET /ping
     */
    get(server) {
        /**
         * /ping
         * responds pong
         */
        server.get({name: "ping", path: "/ping"}, (req, res, next) => {
            res.send({answer: "pong"});
            return next();
        });
    }
}
module.exports = Ping;