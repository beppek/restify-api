function ping(server) {
    server.get({name: "ping", path: "/ping"}, (req, res, next) => {
        res.send({answer: "pong"});
        return next();
    });
}
module.exports = ping;