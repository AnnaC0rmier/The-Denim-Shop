const db = require('./connection');
const { User, Product, Category, Order } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');
  await cleanDB('Order', 'orders')

  const categories = await Category.insertMany([
    { name: 'Women' },
    { name: 'Men' }
  ]);

  console.log('Categories seeded');

  const products = await Product.insertMany([
    {
      productName: 'Flare Jean',
      productSize: ['0', '00', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'],
      productCategory: categories[0]._id,
      productPrice: 70.99,
      inStock: 50
    },
    {
      productName: 'Ripped Jean',
      productSize: ['0', '00', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'],
      productCategory: categories[0]._id,
      productPrice: 94.55,
      inStock: 50
    },
    {
      productName: 'Denim Jacket',
      productSize: ['xs','sm', 'md', 'lg', 'xl', '2x', '3x'],
      productCategory: categories[0]._id,
      productPrice: 124.99,
      inStock: 20
    },
    {
      productName: 'lightwash jean',
      productSize: ['0', '00', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'],
      productCategory: categories[0]._id,
      productPrice: 54.99,
      inStock: 50
    },
    {
      productName: 'Skinny Jean',
      productSize: ['28', '30', '32', '34', '36', '38', '40', '42', '44', '46'],
      productCategory: categories[1]._id,
      productPrice: 54.99,
      inStock: 50
    },
    {
      productName: 'Distressed Jean',
      productSize: ['28', '30', '32', '34', '36', '38', '40', '42', '44', '46'],
      productCategory: categories[1]._id,
      productPrice: 84.99,
      inStock: 50
    },
    {
      productName: 'Straight Leg',
      productSize: ['28', '30', '32', '34', '36', '38', '40', '42', '44', '46'],
      productCategory: categories[1]._id,
      productPrice: 74.99,
      inStock: 50
    },
    {
      productName: 'Darkwash Jean',
      productSize: ['28', '30', '32', '34', '36', '38', '40', '42', '44', '46'],
      productCategory: categories[1]._id,
      productPrice: 85.99,
      inStock: 50
    }
  ]);

  console.log('Products seeded');
  const orders = await Order.insertMany([
    {
      totalPrice: 100,
      pointsRewarded: 100,
      products: [
        products[0]._id,
        products[1]._id,
        products[2]._id
      ]
    },
   
  ]);
  console.log('Orders seeded');


  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      orders[0]._id 
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
    orders: [
      orders[0]._id 
    ]
  });

  console.log('Users seeded');

  process.exit();
});




