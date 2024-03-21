const mongoose = require('mongoose')
const {Schema} = mongoose


const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
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
    }
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product