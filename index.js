const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

//set the port dynamically if 3000 is not available
var PORT = process.env.PORT || 3000; 

// CORS Middleware
app.use(cors());

// API endpoint will appear in routes/routes.js 
var routes = require("./routes/routes.js")(app);

// middleware to serve static files on server
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

var server = app.listen(PORT, function() {
    console.log("Listening to port %s...", server.address().port);
})