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

Run the server.

        nodejs sever.js

Server will be hosted on portno:3000 on your local host.

        localhost:3000
     
You should see Hello WORLD on the browser.

### Multiple Pages

         const express = require("express");
         const app = express();
         app.get("/",function(request,response){
             console.log(request);
             response.send("Hello WORLD");
         });
         app.get("/contact",function(request,response){

            response.send("Contact page");
        }); 
        app.get("/about",function(request,response){
            console.log(request);
            response.send("about page");
        });
         app.listen(3000,function(){
             console.log("Server on port 3000");
         });


Everytime you make a change in the script you always need to rerun the server.

To view the pages:

        localhost:3000/contact
        localhost:3000/about


Nodemon is a utility to avoid that.

### NODEMON

Install Nodemon 

    sudo npm intall -g nodemon

Now run the server using nodemon.

        nodemon server.js
        
Make change to server.js file.

         const express = require("express");
         const app = express();
         app.get("/",function(request,response){
             console.log(request);
             response.send("Hello WORLD");
         });
         app.get("/contact",function(request,response){

            response.send("Contact page");
        }); 
        app.get("/about",function(request,response){
            console.log(request);
            response.send("about page");
        });
        app.get("/nodemon",function(request,response){
            console.log(request);
            response.send("nodemon page");
        });

         app.listen(3000,function(){
             console.log("Server on port 3000");
         });
        
Now you will be able to browse :'localhost:3000/nodemon'

