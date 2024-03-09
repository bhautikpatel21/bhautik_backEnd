const express = require('express');
const app = express();
const port = 8080;
const morgan = require('morgan');

const mongoose = require('mongoose');
// Database connection

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/User2');
}
main()
.then(()=>console.log('DB is connected...'))
.catch(err => console.log(err));

// MiddleWare 
app.use(express.json());
app.use(morgan('dev'));

const userRoutes= require('./Routes/user2.routes');
app.use('/api/user',userRoutes)

// const productRoutes = require('./Routes/product.routes');
// app.use('/products',productRoutes);

// const userRoutes = require('./Routes/user.routes');
// app.use('/users',userRoutes);

// const  product2Routes = require('./Routes/product2.routes');
// app.use('/products',product2Routes);

app.listen(port,()=> {
    console.log('server start at http://localhost:8080');
})