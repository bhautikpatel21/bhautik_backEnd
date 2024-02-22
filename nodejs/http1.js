//  http Module 

const http = require ('http');

const server1 = http.createServer((req,res)=>{
    res.end('Welcome to first local server....');
});   // server create

server1.listen(5567,()=>{
    console.log('Server start at port 5567');
});