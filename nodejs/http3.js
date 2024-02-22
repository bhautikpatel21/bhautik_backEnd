const http = require ('http');

const server3 = http.createServer((req,res)=>{
    res.end('Welcome to third local server....');
});   // server create

server3.listen(5569,()=>{
    console.log('Server start at port 5569');
});