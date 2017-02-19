const config = require("./config");
const admin = require("firebase-admin");

class FirebaseInterface {

    initializeApp() {
        admin.initializeApp(config);
    }

    createUser(data) {
        const userImage = "http://downloadicons.net/sites/default/files/anonymous-user-icon-80332.png";
        return new Promise((resolve, reject) => {
            admin.auth().createUser({
                email: data.email,
                emailVerified: true,
                password: data.password,
                displayName: data.displayName,
                photoURL: data.photoURL || userImage,
                disabled: false
            })
                .then((user) => {
                    resolve(user);
                })
                .catch((error) => {
                    let code;
                    switch (error.code) {
                        case "auth/email-already-exists":
                            code = 409;
                            break;
                        default:
                            code = 400;
                            break;
                    }
                    let message = error.message;
                    reject({code: code, message: message});
                });
        });
    }
}

module.exports = FirebaseInterface;