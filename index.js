const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Inside route.js");
});


// CORS Middleware
app.use(cors());


// API endpoint will appear in routes/routes.js 
var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function() {
    console.log("Listening to port %s...", server.address().port);
})





