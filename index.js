const restify = require("restify");
const fs = require("fs");
const config = require("./config");
const githubChannel = require("./githubChannel");
const Router = require("./routes/Router.js");
const FirebaseInterface = require("./firebase/FirebaseInterface");
// ------------------------------
// ---------- CONFIG ------------
const firebase = new FirebaseInterface();
firebase.initializeApp();

const serverOptions = {
    key: fs.readFileSync("./secrets/key.pem"),
    certificate: fs.readFileSync("./secrets/cert.pem"),
    name: config.name,
    version: config.version
};
const server = restify.createServer(serverOptions);
// -------------------------------
// ---------- Middleware ---------
server.use(restify.jsonBodyParser({ mapParams: true }));
server.use(restify.bodyParser({mapParams: false}));
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser({ mapParams: true }));
server.use(restify.fullResponse());

const router = new Router(server);
router.route();
// --------------------------------
// --------- Start Server ---------
server.listen(config.port, () => {
    console.log(`${config.name} listening at ${config.url}`);
});
// --------------------------------
// ----- Open Github Channel ------
githubChannel();
// --------------------------------