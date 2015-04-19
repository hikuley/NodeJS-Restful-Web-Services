/**
 * Created by hikuley on 19.04.2015.
 */
var express = require("express");
var bodyParser = require("body-parser");


var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded


app.get("/", function (req, res) {
    res.send("Get method");
});

app.post("/", function (req, res) {
    var body = req.body;
    res.send("Post method");

});

app.delete("/user", function (req, res) {

    res.send("Delete method");

});

app.put("/user", function (req, res) {

    res.send("Put method");

});

var server = app.listen(3000, function () {
    /*here is server init function */
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});