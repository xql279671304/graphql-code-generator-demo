import gql from 'graphql-tag'

export const GET_AUTHOR_LIST = gql`
  query ListAuthor($perPage: Int!, $page: Int!) {
    listAuthor(perPage: $perPage, page: $page) {
      count,
      list {
        id
        firstName
        lastName
        posts {
          title
          author
        }
      }
    }
  }
`

export const GET_AUTHOR = gql`
  query Author($id: Int!) {
    author(id: $id) {
      id
      firstName
      lastName
      posts {
        title
        author
      }
    }
  }
`

export const CREATE_AUTHOR = gql`
  mutation CreateAuthor($author: authorInPut) {
    createAuthor(author: $author)
  }
`

export const UPDATE_AUTHOR = gql`
  mutation UpdateAuthor($id: Int!, $author: authorInPut) {
    updateAuthor(id: $id, author: $author)
  }
`