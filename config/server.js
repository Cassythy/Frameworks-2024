var express = require('express');
var consign = require("consign")
var app = express();
app.set('view engine','ejs'); //informa ao express que serpa usado ejs como engrenagem das views
app.set('views','./app/views'); // indica o caminho das viwes
app.use(express.static(".app/public/"));

consign().include("app/routes").into(app);

module.exports = app;