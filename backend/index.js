const express = require("express");
const route = require("./routes/bookRoute")
require("./connection/conn")
const app = express();
const port = 3000;

app.use("book",route);

app.get('/',(req, res)=>{
    res.send("hello world")
})
app.listen(port,()=>{
    console.log("App running at port number", port)
})