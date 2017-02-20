/**
 * Github Routes
 * Listens to github webhooks
 * Sends data to firebase
 */
class Github {
    constructor(server) {
        this.server = server;
    }
    route() {
        /**
         * POST /github/payload
         */
        this.server.post({path: "/github/payload"}, (req, res, next) => {
            console.log("Something happened on github");
            res.send(200);
            return next();
        });

    }
}
module.exports = Github;