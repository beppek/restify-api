function github(server) {
    server.post({path: "/github/payload"}, (req, res, next) => {
        console.log("Something happened on github");
        return next();
    });
}
module.exports = github;