const express = require('express');
const app = express();
const port = 7777;
const morgan = require('morgan');

// Middleware

app.use(express.json());
app.use(morgan('dev'));

const productRoutes = require('./Routes/product.routes');
app.use('/products',productRoutes);

app.listen (port,()=> {
    console.log('Server start at http://localhost:7777');
});