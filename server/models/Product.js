const mongoose = require('mongoose')
const {Schema} = mongoose


const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    productSize: [{
        type: String,
    }],
    productPrice: {
        type: Number,
        required: true
    },
    productCategory: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    inStock: {
        type: Number,
        required: true
    },
    image: {
        type: String
    }
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product