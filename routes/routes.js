const axios = require('axios');

var appRouter = function(app){

    // GET data form mysafeinfo.com
    app.get("/", function(req, res) {
        // use AXIOS for sending http request
        axios.get('http://mysafeinfo.com/api/data?list=englishmonarchs&format=json', {headers: {
            'Accept-Charset': 'utf-8' }
        })
        .then((response) => {
            res.send(response.data);
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
    })
}

// exporting appRouter to be used by service, inside Angular code
module.exports = appRouter;



