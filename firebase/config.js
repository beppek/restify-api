var admin = require("firebase-admin");

module.exports = {
    admin: {
        credential: admin.credential.cert("./firebase/secrets/serviceAccountKey.json"),
        apiKey: "AIzaSyBgho2yeayuwLcq345ucNz-sZmzjjtxXyo",
    },
    firebase: {
        authDomain: "beppek-github-webhooks.firebaseapp.com",
        databaseURL: "https://beppek-github-webhooks.firebaseio.com",
        storageBucket: "beppek-github-webhooks.appspot.com",
        messagingSenderId: "230580723467"
    }
};