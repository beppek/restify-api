const FirebaseInterface = require("../firebase/FirebaseInterface");
const firebase = new FirebaseInterface();

function users(server) {

    server.get({name: "users", path: "/users"}, (req, res, next) => {
        res.header("Allow", "POST");
        return res.send(405);
    });

    server.post({name: "users", path: "/users"}, (req, res, next) => {
        firebase.createUser(req.body)
            .then((user) => {
                console.log(user);
                return res.send(200, {displayName: user.displayName, uid: user.uid});
            })
            .catch((error) => {
                console.log(error);
                return res.send(error.code, {error: error.message});
            });
    });

}

module.exports = users;