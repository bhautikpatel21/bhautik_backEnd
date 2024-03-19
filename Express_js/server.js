require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
// Database connection

async function main() {
    // await mongoose.connect('mongodb://127.0.0.1:27017/User2');
    // await mongoose.connect('mongodb+srv://bdudhat293:282868b@cluster0.zig8w5h.mongodb.net/bhautik');
    await mongoose.connect(process.env.MONGO_DB_URL);
}
main()
.then(()=>console.log('DB is connected...'))
.catch(err => console.log(err));

// MiddleWare 
// let imagePath = path.join(__dirname,'public','images');
// app.use(express.json());
// app.use(morgan('dev'));
// app.use('/public/images', express.static(imagePath));

const cartRoutes = require('./Routes/cart.routes');
app.use('/api/cart',cartRoutes);

// const userRoutes= require('./Routes/user.routes');
// app.use('/api/user',userRoutes)

// const  productRoutes = require('./Routes/product.routes');
// app.use('/api/products',productRoutes);

// const orderRoutes = require('./Routes/order.routes'); 
// app.use('/api/order',orderRoutes);

app.listen(port,()=> {
    console.log(`server start at http://localhost:${port}`);

})