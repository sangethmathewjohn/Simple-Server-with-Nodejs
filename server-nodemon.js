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
