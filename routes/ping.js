/**
 * Simple Ping route
 */
class Ping {
    constructor(server) {
        this.server = server;
    }

    route() {
        /**
         * GET /ping
         * responds pong
         */
        this.server.get({name: "ping", path: "/ping"}, (req, res, next) => {
            res.send({answer: "pong"});
            return next();
        });

    }
}
module.exports = Ping;