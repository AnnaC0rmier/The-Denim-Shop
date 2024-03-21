const mongoose = require('mongoose')
const {Schema} = mongoose


const orderSchema = new Schema ({
    totalPrice: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date(),
        required: true
    },
    pointsRewarded: {
        type: Number,
        required: true
    },
    products: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order