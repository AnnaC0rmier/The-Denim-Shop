const { User, Product, Order, Category } = require('../models')

const resolvers = {
    Query: {
        async user(parent, { _id }) {
            try {
                const user = await User.findById(_id);
                return user;
            } catch (error) {
                throw new Error(`Failed to fetch user: ${error.message}`);
            }
        },

        async orders(parent, args, context) {
          try{
            const userId = context.user.id
            const orders = await Order.find({userId}).populate('products')
            return orders
          }
          catch (error) {
            throw new Error (`failed to fetch user orders: ${error.message}`)
          }
        },

        async product(parent, {_id}) {
            try{
                const product = await Product.findById(_id)
                return product
            }
            catch (error) {
                throw new Error (`failed to fetch product: ${error.message}`)
            }
        },

        async categories() {
            try {
                const categories = await Category.find().populate('products');
                
                return categories;
            } catch (error) {
                throw new Error(`Failed to fetch categories: ${error.message}`);
            }
        },

        async category(parent, {_id}) {
            try {
                const category = await Category.findById(_id).populate('products');
                return category;
            } catch (error) {
                throw new Error(`Failed to fetch category: ${error.message}`);
            }
            
        }

       
    }
}

module.exports = resolvers;