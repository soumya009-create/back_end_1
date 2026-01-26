const express=require("express")

const app=express() //server instance created
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get("/about",(req,res)=>{
    res.send("this is about page and i am going to learn about backend")
})
app.listen(3000)


