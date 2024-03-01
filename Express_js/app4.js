const express = require('express');
const app = express();
const port = 7777;
const morgan = require('morgan');
const products = require('./public.json');

// Middleware

app.use(express.json());
app.use(morgan('dev')); 

// End-point - CRUD

app.post('/products',(req,res)=> {
    // console.log(req.body);
    const product = req.body;
    products.push(product);
    // products.push({...req.body});
    res.status(201).json({message: 'Product is Added....'})
});

app.get('/products',(req,res)=> {
    res.status(200).json(products);
});

app.get('/products/single-product',(req, res)=> {
    const id = +req.query.id;
    let product = products.find((item)=> item.id === id)
    res.status(200).json(product);
});

// Replace single product

app.put('/products/replace-product',(req,res) => {
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id)
    let product = products[productIndex];
    products.splice(productIndex, 1 ,{...req.body});
    // console.log(product);
    res.status(200).json({message: 'Product Replace successfully....'});
});

//  Update Single product 

app.patch('/products/upadate-product',(req, res) => {
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id)
    let product = products[productIndex];
    let item = products.splice(productIndex, 1 , { ...product, ...req.body});
    // console.log(product);
    res.status(200).json({message: 'Product Update successFully.....'});
});

// Delete single Product 

app.delete('/products/delete-product',(req, res) => {
    const id = +req.query.id;
    let productsIndex = products.findIndex((item) => item.id === id)
    let product = products[productsIndex];
    let item = products.splice(productsIndex, 1);
    // console.log();
    res.status(200).json({message: 'product Delete succssFully....'});
});

app.listen (port,()=> {
    console.log('Server start at http://localhost:7777');
})
