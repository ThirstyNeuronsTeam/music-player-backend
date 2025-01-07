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

app.listen(4444,()=>{console.log("server started")})