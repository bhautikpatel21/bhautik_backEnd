const mongoose = require('mongoose');

const productSchma = mongoose.Schema ({

    title : {
        type: String
    },

    description: {
        type: String
    },

    price: {
        type: Number
    },

    catagory : {
        type: String
    },

    isDelete: {
        type: Boolean,
        default : false
    }
});

module.exports = mongoose.model('products', productSchma);
