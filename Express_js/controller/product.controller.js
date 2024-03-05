const products = require('../product.json');

exports.addProduct = (req,res) => {
     console.log(req.body);   
     const product = req.body;  
     products.push(product);
     // product.push({...req.body});
     res.status(201).json({ message : "Product Is Added...."});
};

exports.getAllProduct = (req,res) => {
    res.status(201).json(product);

};
exports.getProduct = (req,res) => {
    const id = +req.query.id;
    // console.log(id);
    let product = products.find((item) => item.id === id);
    res.status(200).json(product);
};

exports.replaceProduct = (req,res) => {
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id) 
    let product = products[productIndex];
    products.splice(productIndex,1 ,{...req.body});
    // console.log(product);
    res.status(200).json({ message : 'Products Replace SucessFully...'});

};

exports.updateProduct = (req,res) => {
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id) 
    let product = products[productIndex];
    let item = products.splice(productIndex,1 ,{ ...product, ...req.body});
    // console.log(products);
    res.status(200).json({ message : ' Products update SucessFully...'});

};

exports.deleteProduct = (req,res) => { 
    const id = req.query.id;
    let productIndex = products.findIndex((item) => item.id === id) 
    let product = products[productIndex];
    products.splice(productIndex,1);
    // console.log(products);
    res.status(200).json({ message :' Products Delete SucessFully...'});

};