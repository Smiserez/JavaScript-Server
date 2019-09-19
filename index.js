const express = require("express");
const fs = require('fs');
const path = require('path');
const app = express();
var fileString;
 fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data)=> {
    if (err) throw err;
    fileString = data;
});
//=> is a replace for function
app.get("/", (req, res)=>{
    res.send(fileString)
})
app.get("/torturedance", (rq, res) =>
{
    fs.readFile(path.join(__dirname, 'other.html'), 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data);
    })
})
app.get("/:param", (req, res) =>{
    res.send("You requested "+ req.params["param"])
})

app.use(function(req, res){
    res.status(404).send("Page not found")
})

app.listen(8080, function(err){
    if(err)return console.log("Couldn't bring up the server");
    console.log("The server is running");
})
console.log("Hello node");
