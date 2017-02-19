function users(server) {
    server.get({name: "users", path: "/users"}, (req, res, next) => {
        res.header("Allow", "POST");
        return res.send(405);
    });
}
module.exports = users;