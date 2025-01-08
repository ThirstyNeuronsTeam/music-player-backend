const express = require("express");

const app = express();

/* app.get
app.post
app.patch
app.put
app.delete */

app.get("/songs",(req,res)=>{
    res.send(["1","2"])
})

app.get("/students",(req,res)=>{
    res.send(["rajesh","kumar"])
})


app.listen(4444,()=>{console.log("server started")})

//http , https , ip(127.0.0.1) , port(4444) , api name(/songs)

//http://127.0.0.1:4444/songs
