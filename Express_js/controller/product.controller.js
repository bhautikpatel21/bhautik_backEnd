const Product = require('../model/product.model');
// const bcrypt = require('bcrypt');

exports.addProduct = async (req,res) => {
    try {
        const {title,description,price,catagory } = req.body;
        // console.log(req.body) 
        let newProduct =   await Product.create ({
            title,
            description,
            price,
            catagory
        });
        newProduct.save();
        res.status(201).json ({product : newProduct, message : 'new product Added'});
    } catch (error)
      {
        console.log(error);
        res.status(500).json({Message : 'Internal Server Error'})
      }
}

exports.getAllProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).json(products);
  } catch (error){
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error'});
  }
};

exports.getProduct = async (req,res) => {
  try {
    let productId = req.query.productId;
    // let user = await User.findById(userId);
    let product = await Product.findById({_id: productId, isDelete:false});

    if(!product) {
       return res.status(404).json({message: 'product not found'});
    }
    res.status(200).json(product);
  }
  catch(error) {
    console.log(error);
    res.status(500).json({ message : 'Internal Server Error'});
  }
};

exports.updateProduct = async (req,res) => {
  try {
    let productId = req.query.productId;
    let product = await Product.findById(productId);
    if(!product) {
       return res.status(404).json({message: 'User product found'});
    }
    // user = await User.findByIdAndUpadate(user._id, { $set: {...req.body} }, { new: true});
    product = await Product.findOneAndUpdate({_id:product._id},{ $set: {...req.body} }, { new: true});
    res.status(200).json({product, message: 'User Updated...'});
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error'});
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    let productId = req.query.productId;
    let product = await Product.findById(productId);

    if(!product) {
      return res.status(404).json({ message: 'User not found...'});
    }
    // user = await User.findByIdandDelete(user._id);
    product = await Product.findOneAndDelete({_id:product._id});
    res.status(200).json({product, message: 'User deleted...'});
  }
  catch(error) {
    console.log(error);
    res.status(500).json({ message: 'Interanal server Error'});
  }
};