const config = require("./config");
const restify = require("restify");
const routes = require("./routes/routes.js");

const server = restify.createServer({
    name: config.name,
    version: config.version
});

server.use(restify.jsonBodyParser({ mapParams: true }));
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser({ mapParams: true }));
server.use(restify.fullResponse());

server.listen(config.port, () => {
    console.log(`${config.name} listening at ${config.url}`);
});

routes(server);