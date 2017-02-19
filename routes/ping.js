function ping(server) {
    server.get({name: "ping", path: "/ping"}, (req, res, next) => {
        return res.send({answer: "pong"});
    });
}
module.exports = ping;