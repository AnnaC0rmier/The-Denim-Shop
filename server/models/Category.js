const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
