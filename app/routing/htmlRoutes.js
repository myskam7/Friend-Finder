
module.exports = function htmlRoutes(app, __dirname, friends, path) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/app/public/home.html"));

    });

    app.get("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname, "/app/public/reserve.html"));
    });

    app.get("/api/friends", function (req, res) {
        res.send(friends);
    });

    app.post("/api/friends", function (res, req) {

        friends.push(res.body)
        console.log(res.body);
    })

}


