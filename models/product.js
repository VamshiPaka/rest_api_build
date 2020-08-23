const mongoose=require('mongoose');

const ProductSchema = mongoose.Schema({
    product_name:{
        type: String,
        required: true
    },
    product_desc:{
        type: String,
        required: true
    },
    product_price:{
        type: String,
        required: true
    },
    product_category:{
        type: String,
        required: true
    },
    date_added:{
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product_model',ProductSchema);