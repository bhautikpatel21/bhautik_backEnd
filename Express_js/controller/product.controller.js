const products = require('../public.json');

exports.addProduct = (req, res) => {
    // console.log(req.body);
    const product = req.body;
    products.push(product);
    // products.push({...req.body});
    res.status(201).json({message: 'product is added....'})
};

exports.getAllProducts = (req, res) => {
    res.status(200).json(products);
}

exports.getProduct = (req, res) => {
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id)
    let product = products[productIndex];
    products.splice(productIndex, 1, {...req.body});
    // console.log(product);
    res.status(200).json({ message: 'product Replace SuccessFully.....'});
};

exports.updateProduct = (req, res) => {
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id)
    let product = products[productIndex];
    let item = products.splice(productIndex, 1);
    // console.log(product);
    res.status(200).json({message: 'Product Delete SuccessFuly......'});
};