const { User, Product, Order, Category } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

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
            try {
                const userId = context.user.id;
                const orders = await Order.find({ userId }).populate('products');
                return orders;
            } catch (error) {
                throw new Error(`failed to fetch user orders: ${error.message}`);
            }
        },

        async product(parent, { _id }) {
            try {
                const product = await Product.findById(_id);
                return product;
            } catch (error) {
                throw new Error(`failed to fetch product: ${error.message}`);
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

        async category(parent, { _id }) {
            try {
                const category = await Category.findById(_id).populate('products');
                return category;
            } catch (error) {
                throw new Error(`Failed to fetch category: ${error.message}`);
            }
        }
    },

    Mutation: {
        async addUser(parent, { firstName, lastName, email, password }) {
            try {
                const user = await User.create({ firstName, lastName, email, password });
                const token = signToken(user);
                return { token, user };
            } catch (error) {
                throw new Error(`failed to create user: ${error.message}`);
            }
        },

        async login(parent, { email, password }) {
            try {
                const user = await User.findOne({ email });
                console.log(user);

                if (!user) {
                    throw new AuthenticationError();
                }

                const pw = await user.isCorrectPassword(password);

                if (!pw) {
                    throw new AuthenticationError();
                }

                const token = signToken(user);
                return { token, user };
            } catch (error) {
                throw new Error(`failed to login user: ${error.message}`);
            }
        },

        async addToOrder(parent, { products }, context) {
            if (context.user) {
                const order = new Order({ products });

                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

                return order;
            }

            throw new AuthenticationError();
        }
    }
};

module.exports = resolvers;
