const http = require ('http');

const server5 = http.createServer((req,res)=>{
    res.end('Welcome to five local server....');
});   // server create

server5.listen(5571,()=>{
    console.log('Server start at port 5571');
});