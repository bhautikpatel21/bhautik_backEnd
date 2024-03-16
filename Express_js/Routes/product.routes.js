const express = require('express');
const productRoutes = express.Router();

const { 
    addProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct

} = require('../controller/product.controller');

   productRoutes.post('/add-product',addProduct);
   productRoutes.get('/get-product',getProduct);
   productRoutes.get('/get-all-product',getAllProducts);
   productRoutes.put('/update-product',updateProduct);
   productRoutes.delete('/delete-product',deleteProduct);

   module.exports = productRoutes ;