const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

//configure body parser to accept JSON as well as url encoded values
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

router.get('/', (req, res) => {
    res.send("Inside route.js");
});
// API endpoint will appear in routes/routes.js 
var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function() {
    console.log("Listening to port %s...", server.address().port);
})





