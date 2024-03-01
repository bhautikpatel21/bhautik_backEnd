const express = require('express');
const productsRoutes = express.Router();
const { addProduct,
    deleteProduct,
    getAllProducts,
    getProduct,
    replaceProduct,
    updateProduct,

} = require('../controller/product.controller');

// create Product 

productsRoutes.post('/',addProduct);

// Get All Products
productsRoutes.get('/',getAllProducts);

// Get Single Product 
productsRoutes.get('/single-product',getProduct);

// replace Single product
productsRoutes.patch('/update-product',updateProduct);

// Delete Sngle Product 
productsRoutes/delete('/delete-product',deleteProduct);

module.exports = productsRoutes;