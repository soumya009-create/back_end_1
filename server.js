const express=require("express")

const app=express() //server instance created
app.get('/',(req,res)=>{
    res.send("hello duggu mugguu")
})
app.get("/about",(req,res)=>{
    res.send("this is about page and i am going to learn about backend")
})
app.listen(3000)


