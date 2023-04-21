const mongoose= require('mongoose');

const userShema = new mongoose.Schema({
    Firstname:{
        type:String,
        required: true,
    },
    Lastname:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    Phone : {
        type:Number,
        required: true,
    },
    password : {
        type:String,
        required: true,
    },
},{
    timestamps: true,
}
);

const User = mongoose.model('User',userShema);

module.exports = User;