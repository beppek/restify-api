function users(server) {
    server.get({name: "users", path: "/users"}, (req, res, next) => {
        res.header("Allow", "POST");
        return res.send(405);
    });
    server.post({name: "users", path: "/users"}, (req, res, next) => {
       console.log(req.body);
       return res.send(200);
    });
}
module.exports = users;