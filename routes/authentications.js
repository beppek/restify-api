const FirebaseInterface = require("../firebase/FirebaseInterface");
const firebase = new FirebaseInterface();

/**
 * Authentication routes
 */
class Authentications {

    constructor(server) {
        this.server = server;
    }

    route() {
        this.server.post({path: "/authentications"}, (req, res, next) => {
            firebase.authenticateUser(req.body.email, req.body.password).then((token) => {
                res.send(token);
                return next();
            })
            .catch((error) => {
                console.log(error);
                // TODO: Send error code
                return next();
            });
        });
    }
}

module.exports = Authentications;