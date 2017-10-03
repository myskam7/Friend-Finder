
const express = requore("express")
const bodyParser = require("body-parser");
const path = require("path")



app.get("/reserve", function (req, res) {
    var userData = req.body;
    console.log(userData)
});


app.post("/api/tables", function (req, res) {

    if (newData.length < 5) {
        newData.push(req.body);
        res.json(true);
    }
    else {
        waitListData.push(req.body);
        res.json(false);
    }
});



app.post("/api/clear", function () {

    newData = [];


    console.log(newData);
});


module.exports = apiRoutes;