const config = require("./config");
const restify = require("restify");
const fs = require("fs");

const githubChannel = require("./githubChannel");
const routes = require("./routes/routes.js");
const FirebaseInterface = require("./firebase/FirebaseInterface");
const firebase = new FirebaseInterface();
const serverOptions = {
    key: fs.readFileSync("./secrets/key.pem"),
    certificate: fs.readFileSync("./secrets/cert.pem"),
    name: config.name,
    version: config.version
};

const server = restify.createServer(serverOptions);

server.use(restify.jsonBodyParser({ mapParams: true }));
server.use(restify.bodyParser({mapParams: false}));
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser({ mapParams: true }));
server.use(restify.fullResponse());
firebase.initializeApp(server);
routes(server);

server.listen(config.port, () => {
    console.log(`${config.name} listening at ${config.url}`);
});

githubChannel();