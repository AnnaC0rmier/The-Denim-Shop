const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const SECRET = process.env.SECRET || 'shhhhh';
console.log('JWT_SECRET:', SECRET);
const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, SECRET, { maxAge: expiration });
      req.user = data;
    } catch (error) { 
      console.error('Invalid token:', error.message);
    }

    return req;
  },
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };
    return jwt.sign({ data: payload }, SECRET, { expiresIn: expiration });
  },
};
