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
    pointsRewarded: Int
    products: [ID]
}

type Query {
    categories: [Category]
    category(_id: ID!): Category
    product(_id: ID!): Product
    user(_id: ID!): User
    orders: [Order!]
}

type Mutation {
    addOrder(products: [ID]!): Order
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
}



`;

module.exports = typeDefs;
