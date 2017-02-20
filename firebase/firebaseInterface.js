const config = require("./config");
const admin = require("firebase-admin");
const firebase = require("firebase");

/**
 * Interface to abstract Firebase interactions from the rest of the API
 */
class FirebaseInterface {

    /**
     * Connect to Firebase
     */
    initializeApp() {
        admin.initializeApp(config.admin);
        firebase.initializeApp(config.firebase);
    }

    /**
     * Create user in Firebase
     * @param data - post data containing email, password, displayName and photoURL(optional)
     * @returns promise resolving with user's displayName, uid and jwt
     */
    createUser(data) {
        return new Promise((resolve, reject) => {
            const userImage = "http://downloadicons.net/sites/default/files/anonymous-user-icon-80332.png";
            const newUser = {
                email: data.email,
                emailVerified: true,
                password: data.password,
                displayName: data.displayName,
                photoURL: data.photoURL || userImage,
                disabled: false
            };

            admin.auth().createUser(newUser).then((user) => {
                user.getToken().then((token) => {
                    resolve({displayName: user.displayName, uid: user.uid, jwt: token});
                })
                .catch((error) => {
                    reject(error);
                });
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

    /**
     * Authentication against Firebase
     * expects @param email and @param password
     * @returns promise resolving with jwt
     */
    authenticateUser(email, password) {
        let auth = firebase.auth();
        return new Promise((resolve, reject) => {
            auth.signInWithEmailAndPassword(email, password).then((user) => {
                user.getToken().then((token) => {
                    resolve(token);
                })
                .catch((error) => {
                    reject(error);
                });
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
}

module.exports = FirebaseInterface;