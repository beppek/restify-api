const FirebaseInterface = require("../firebase/FirebaseInterface");
const firebase = new FirebaseInterface();

function users(server) {

    server.get({path: "/users"}, (req, res, next) => {
        res.header("Allow", "POST");
        res.send(405);
        return next();
    });

    server.post({path: "/users"}, (req, res, next) => {
        firebase.createUser(req.body)
            .then((user) => {
                res.send(200, {displayName: user.displayName, uid: user.uid});
                return next();
            })
            .catch((error) => {
                res.send(error.code, {error: error.message});
                return next();
            });
    });

}

module.exports = users;