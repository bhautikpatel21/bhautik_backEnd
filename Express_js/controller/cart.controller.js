const Cart = require('../model/cart.model');

exports.addToCart = async (req,res) => {
    try {
        let cart = await Cart.findOne({
            user: req.user._id,
            cartItem: req.body.cartItem,
            isDelete: false
        });

        if(cart) {
            return res.json({ message: 'Cart alredy Exitst...'});
        }
        cart = await Cart.create({
            user: req.user._id,
            ...req.body
        });
        cart.save();
        res.json({ cart, message: 'Cart added'});
    }
    catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Interanal server Error'});
    }
};

exports.getAllCart = async (req,res) => {
    try {
        let carts = await Cart.find({user: req.user._id, isDelete: false});
        res.status(200).json(carts);
    }
    catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Intrnal Server Error'});
    }
}

exports.getCart = async (req,res) => {
    try { 
        let cart = await Cart.findOne({_id: req.query.cartId, isDelete: false});

        if(!cart) {
            return res.status(404).json({message: 'Cart not found'});
        }
        res.status(200).json(cart);
    }
    catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error'});
    }
};
exports.updateCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({_id: req.query.cartId});
        if (!cart) {
            return res.status(404).json({ message: ` Cart Not Found...${console.error()}` });
        }
        cart = await  Cart.findByIdAndUpdate(cart._id, {$set :{ ...req.body}}, { new: true}).populate('user').populate('cartItem');
        res.status(200).json({cart, message: `Cart Item Upadated Successfully...`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : `Internal Server Error.... ${console.error()}`});
    }
};

exports.deleteCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({_id: req.query.cartId });
        if (!cart) {
            return res.status(404).json({ message: `Cart Not Found...${console.error()}` });        
        }
        cart = await Cart.findOneAndUpdate(cart._id, { isDelete: true}, { new : true});
        console.log(cart._id);
        res.status(200).json({cart, message: `Cart Iteam Deleted Successfuly`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : `Internal Server Error.... ${console.error()}`});
    }
};