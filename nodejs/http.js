// http module

const http = require ('http');
const fs = require('fs');
const data = fs.readFileSync('./hello.json','utf-8');

const server = http.createServer((req,res)=> {
    res.setHeader('Dummy','Dummy value');
    // res.setHeader('content-type','text/html');
    // res.setHeader('content-type','application/json');
    res.end('Welcome to local server....');
});

// const server = http.createServer();
// server.on('request',(req,res) => {
// //     res.setHeader('Content-type','text/html');
// //     res.write('<h1 style="color:red" > Hello </h1>');
// //     res.write('{"hello":123}');
//     res.end(data);
// })

// server.listen(4567,() => {
// //     console.log(req.url);
// //     res.setHeader('Content-type','text/html');
//     res.end(data);
// })

server.listen(4567,()=>{
    console.log('Server start at port 4567');
});