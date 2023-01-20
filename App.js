const express=require("express");
const app=express();

app.get("/",(req,resp)=>{
    resp.sendFile("./public/demo.html",{root:__dirname});
});
app.listen(3000);