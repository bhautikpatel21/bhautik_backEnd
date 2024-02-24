const express = require('express');
const app = express();  // server create 
const port = 7070;
const morgan = require('morgan');

// middleware 

let myFun = (req,res,next) => {
    // consolo.log(req,query)

    if ((req.query.age) >= 18){
        next();
    }
    else {
        res.send('sorry! you have under below 18');
    }
}

// app.use(myFun);   // Application Level middleware

app.use(express.json());      // built-in 
app.use(morgan('dev'));
app.get('/',myFun,(req,res)=> {
    res.send('Welcome to Express JS');
});

app.post('/',(req,res)=> {
    res.send('post Methos');
});

app.listen(post, ()=> {
    console.log('Server start at http://localhost:7070');
})