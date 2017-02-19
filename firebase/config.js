var admin = require("firebase-admin");

module.exports = {
    credential: admin.credential.cert("./secrets/serviceAccountKey.json"),
    // apiKey: "AIzaSyBgho2yeayuwLcq345ucNz-sZmzjjtxXyo",
    // authDomain: "beppek-github-webhooks.firebaseapp.com",
    databaseURL: "https://beppek-github-webhooks.firebaseio.com",
    // storageBucket: "beppek-github-webhooks.appspot.com",
    // messagingSenderId: "230580723467"
};