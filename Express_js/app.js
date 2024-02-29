const express =require("express")
const app = express();
const port = 7070;
const morgan = require('morgan');


// MIDDLEWARE

let myFun = (req, res, next) => {
    // console.log(req.query);

    if((req.query.age) >= 18 ) {

        next();

    } else 
    {
        res.send("Sorry! You have Under below 18");
    }
}

// app.use(myFun);  // Application leval middleware

app.use(express.json());  // Built-In
app.use(morgan('dev'));
app.get('/', myFun, (req,res) => {
    res.send("welcome to Express.js");
});

app.post('/',(req,res)=> {
    res.send ("Post Method ");
});
app.listen(port,() => {
    console.log("Server start at port http://localhost:7070");
});
