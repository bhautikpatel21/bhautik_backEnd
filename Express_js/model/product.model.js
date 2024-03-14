const mongoose = require ('mongoose');

const productSchma = mongoose.Schema ({

    title : {
        type: String
    },

    description: {
        type: String
    },

    price : {
        type: Number
    },

    catagory : {
        type: String
    }
});

module.exports = mongoose.model('product', productSchma);
