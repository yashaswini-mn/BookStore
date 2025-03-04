const express = require("express");
const router = require("./routes/bookRoute")
const cors=require("cors")
require("./connection/conn")
const app = express();
const port = 1000;
app.use(cors())
app.use("/book",router);
app.use(express.json());


app.get('/',(req, res)=>{
    res.send("hello world")
})
app.listen(port,()=>{
    console.log("App running at port number", port)
})