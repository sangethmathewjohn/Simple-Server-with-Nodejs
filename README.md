# Simple-Server-with-Nodejs

Make a directory.

    mkdir node-server
    cd node-server

Create a nodejs file for server.

    touch server.js
 
Create package.json.
  
     npm init

Install expressjs.

    npm install expressjs
    

#### Server.js

         const express = require("express");
         const app = express();
         app.get("/",function(request,response){
             console.log(request);
             response.send("Hello WORLD");
         });
         app.listen(3000,function(){
             console.log("Server on port 3000");
         });

Server will be hosted on portno:3000 on your local host.

        localhost:3000
     
You should see Hello WORLD on the browser.
