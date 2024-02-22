const http = require ('http');

const server2 = http.createServer((req,res)=>{
    res.end('Welcome to second local server....');
});   // server create

server2.listen(5568,()=>{
    console.log('Server start at port 5568');
});
