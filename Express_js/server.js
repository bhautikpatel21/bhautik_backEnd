// const express = require("express");
// const server = express();  //  Server Create

// server.get('/',(req,res) => {
//     res.end("Welocme To Express.Js");
// })
// server.get('/user',(req,res) => {
//     res.end("Welocme To User Page");
// })
// server.get('/product',(req,res) => {
//     res.end("Welocme To Products List");
// })
// server.get('/name',(req,res) => {
//     res.end(" Name Only Shared");
// })
// server.get('/',(req,res) => {
//     res.end("Welocme To Express");
// })

// server.listen(4000,()=>{
//         console.log("Server Start Port At http://localhost:4000");
// });

const express = require("express");
const server = express();
const path = require("path");

server.post("/" ,(req,res) => {
    res.send("post Method");
});
server.get("/" ,(req,res) => {
    res.end("Welcome to Express.Js");
});
server.put("/" ,(req,res) => {
    res.status(400).json({"massage" : "Put Call Method"});
});
server.patch("/" ,(req,res) => {
    res.sendFile(path.join(__dirname,"abc.txt"));
});
server.delete("/" ,(req,res) => {
    res.sendStatus(201);
});


server.listen(4040,() => {
    console.log("Server start At http://localhost:4040");

});