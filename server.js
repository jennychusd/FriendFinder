// Dependencies
// ===========================================================
var express = require('express');
var bodyParser = require('body-parser');

// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port
var PORT = 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Router
// ===========================================================
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});