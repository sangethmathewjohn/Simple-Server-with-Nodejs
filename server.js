 const express = require("express");
 const app = express();
 app.get("/",function(request,response){
     console.log(request);
     response.send("Hello WORLD");
 });
 app.listen(3000,function(){
     console.log("Server on port 3000");
 });
