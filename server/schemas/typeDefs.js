const typeDefs = `
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    phoneNumber: String
    points: Int
    orders: [Order]
}

type Product {
    _id: ID
    productName: String
    productSize: [String]
    productPrice: Float
    productCategory: Category
    inStock: Int
    image: String
}

type Order {
    _id: ID
    totalPrice: Float
    orderDate: String
    pointsRewarded: Int
    products: [Product]
}

type Category {
    _id: ID
    name: String
    products: [Product]
}

type Checkout {
    session: ID
}

type Auth {
    token: ID
    user: User
}

input ProductInput {
    _id: ID
    name: String
    size: [String]
    image: String
    price: Float
    quantity: Int
}

input OrderInput {
    totalPrice: Float
    orderDate: String
    pointsRewarded: Int
    products: [ID]
}

type Query {
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ProductInput]): Checkout
}

type Mutation {
    addOrder(products: [ID]!): Order
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, orders: [OrderInput]): Auth
    login(email: String!, password: String!, phoneNumber: String, points: Int, orders: [OrderInput]): Auth
}



`;

module.exports = typeDefs;
