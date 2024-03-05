const express = require('express');
const productRoutes = express.Router();
const { addProduct,
    deleteProduct,
    getAllProduct,
    getProduct,
    replaceProduct,
    updateProduct
    } = require('../controller/product.controller');

        // Create Product
    productRoutes.post('/',addProduct);

        // Get All Product
    productRoutes.get('/',getAllProduct);

        // Get Single Product
    productRoutes.get('/single-product',getProduct);

        // Replace Single Product
    productRoutes.get('/replace-product',replaceProduct);
    
        // Update SIngle Product
    productRoutes.get('/update-product',updateProduct);

        // delete SIngle Product
    productRoutes.get('/delete-product',deleteProduct);
    
    module.exports = productRoutes;