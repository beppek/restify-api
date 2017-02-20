const FirebaseInterface = require("../firebase/FirebaseInterface");
const firebase = new FirebaseInterface();

function authentications(server) {
    server.post({path: "/authentications"}, (req, res, next) => {
        firebase.authenticateUser(req.body.email, req.body.password)
            .then((user) => {
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
        // return next();
    });
}
module.exports = authentications;