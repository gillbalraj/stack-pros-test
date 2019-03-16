var Request = require("request");

Request.get("http://mysafeinfo.com/api/data?list=englishmonarchs&format=json", (error, response, body) =>{
    if(error){
        return console.log(error);
    }
    console.log(JSON.parse(body));
});
