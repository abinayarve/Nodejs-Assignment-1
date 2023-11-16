const express=require("express");
const app=express();
const path=require("path");

app.get("/h",(req,res)=>{
    res.sendFile(path.join(__dirname,"homepage.html"));
})

app.get("/m",(req,res)=>{
    res.sendFile(path.join(__dirname,"menupage.html"));
})

app.get("/c",(req,res)=>{
    res.sendFile(path.join(__dirname,"contact.html"));
})

app.listen(2445,()=>{
    console.log("server running");
})