const express = require('express');
const app = express();  // server create 
const port = 7071 ;
const path = require('path');
const morgan = require('morgan');

// middleware 

let myFun = (req,res,next) => {
     console.log(req,query)

    if ((req.query.age) >= 18){
        next();
    }
    else {
        res.send('sorry! you have under below 18');
    }
}

// app.use(myFun);   // Application Level middleware

app.use(express.json());      // built-in 
app.use(express.urlencoded({extended: true }));
app.use('/hello',express.static(path.join(__dirname,'Express_js','public')));

app.use(morgan('dev'));
app.get('/',myFun,(req,res)=> {
    res.send('Welcome to Express JS');
});

app.post('/',(req,res)=> {
    res.send('post Methos');
});

app.listen(port, ()=> {
    console.log('Server start at http://localhost:7071');
})