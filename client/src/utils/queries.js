import { gql } from '@apollo/client';

export const QUERY_CATEGORY = gql
`query Query($id: ID!) {
    category(_id: $id) {
      _id
      name
      products {
        image
        productName
        productPrice
        productSize
      }
    }
  }
  
`