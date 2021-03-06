const FirebaseInterface = require("../firebase/FirebaseInterface");
const firebase = new FirebaseInterface();

/**
 * User Routes
 */
class Users {

    constructor(server) {
        this.server = server;
    }

    route() {
        this.get(this.server);
        this.post(this.server);
    }

    /**
     * GET /users/*
     */
    get(server) {
        /**
         * /users
         * Method not allowed
         */
        server.get({path: "/users"}, (req, res, next) => {
            res.header("Allow", "POST");
            res.send(405);
            return next();
        });
    }

    /**
     * POST /users/*
     */
    post(server) {
        /**
         * /users
         * Creates new user
         * Expects email, password, displayName and photoURL(optional)
         * returns displayName, uid and jwt
         */
        server.post({path: "/users"}, (req, res, next) => {
            firebase.createUser(req.body).then((data) => {
                res.send(200, {displayName: data.displayName, uid: data.uid, jwt: data.jwt});
                return next();
            })
            .catch((error) => {
                res.send(error.code, {error: error.message});
                return next();
            });
        });
    }

}

module.exports = Users;