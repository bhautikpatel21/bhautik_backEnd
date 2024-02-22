const http = require ('http');

const server4 = http.createServer((req,res)=>{
    res.end('Welcome to four local server....');
});   // server create

server4.listen(5570,()=>{
    console.log('Server start at port 5570');
});