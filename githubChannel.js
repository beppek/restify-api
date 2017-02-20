/**
 * Opens regular http channel for ngrok to communicate with
 * due to limitations with TLS tunnels in free version
 * */
const routes = require("./routes/github");
const restify = require("restify");
const bodyParser = require("body-parser");

function githubChannel() {
    const githubConfig = {name: "Github Channel"};
    const githubChannel = restify.createServer(githubConfig);
    githubChannel.use(bodyParser.json());
    routes(githubChannel);
    githubChannel.listen(4567, () => {
        console.log(`${githubChannel.name} listening on port 4567`);
    });
}

module.exports = githubChannel;