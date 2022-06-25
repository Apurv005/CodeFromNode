const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Fisrt Web Server using NodeJS");
    }
    if(req.url === "/about"){
        res.end("About Page");
    }
    // res.end("Not Found");
    // res.end(`<h1> Page Not Find !!</h1><a href ="/"> click here </a>`);
});

server.listen(5000);
