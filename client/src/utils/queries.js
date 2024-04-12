import { gql } from '@apollo/client';

export const QUERY_CATEGORY = gql
`query Query($id: ID!) {
    category(_id: $id) {
      _id
      name
      products {
        _id
        image
        productName
        productPrice
        productSize
      }
    }
  }
  
`

export const QUERY_PRODUCT = gql
`query Query($id: ID!) {
  product(_id: $id) {
    image
    productName
    productPrice
    productSize
    _id
  }
}
`