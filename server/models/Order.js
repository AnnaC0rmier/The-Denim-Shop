const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    totalPrice: {
        type: Number,
        required: true
    },
    pointsRewarded: {
        type: Number,
        required: true
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }]
});


orderSchema.pre('save', async function(next) {
   
    this.totalPrice = this.products.reduce((total, product) => total + product.productPrice, 0);

   
    this.pointsRewarded = Math.ceil(this.totalPrice);

    next();
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
