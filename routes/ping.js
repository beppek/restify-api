function ping(server) {
    server.get("/ping", (req, res, next) => {
        return res.send("Pong!");
    });
}
module.exports = ping;