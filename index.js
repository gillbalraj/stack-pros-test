const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

// CORS Middleware
app.use(cors());

// API endpoint will appear in routes/routes.js 
var routes = require("./routes/routes.js")(app);

app.use(express.static(path.join(__dirname, 'stackpros-test/dist/stackpros-test')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'stackpros-test/dist/stackpros-test/index.html'));
});

var server = app.listen(3000, function() {
    console.log("Listening to port %s...", server.address().port);
})





