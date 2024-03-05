const mongoose  = require('mongoose');

const userSchema = mongoose.Schema ({



    firstName : String,
    lastName : {
        type : String
    },
    gender : { 
        type : String,
        enum : ['Male','Female']
    },
    email : {
        type : String
    },
    passworld : {
        type : String
    },
    age : {
        type : String 
    }
});

module.exports = mongoose.model('users',userSchema);