import * as Types from '../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type ListAuthorQueryVariables = Types.Exact<{
  perPage: Types.Scalars['Int'];
  page: Types.Scalars['Int'];
}>;


export type ListAuthorQuery = (
  { __typename?: 'query' }
  & { listAuthor?: Types.Maybe<(
    { __typename?: 'AuthorList' }
    & Pick<Types.AuthorList, 'count'>
    & { list?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Author' }
      & Pick<Types.Author, 'id' | 'firstName' | 'lastName'>
      & { posts?: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'Post' }
        & Pick<Types.Post, 'title' | 'author'>
      )>>> }
    )>>> }
  )> }
);

export type AuthorQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type AuthorQuery = (
  { __typename?: 'query' }
  & { author?: Types.Maybe<(
    { __typename?: 'Author' }
    & Pick<Types.Author, 'id' | 'firstName' | 'lastName'>
    & { posts?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & Pick<Types.Post, 'title' | 'author'>
    )>>> }
  )> }
);

export type CreateAuthorMutationVariables = Types.Exact<{
  author?: Types.Maybe<Types.AuthorInPut>;
}>;


export type CreateAuthorMutation = (
  { __typename?: 'mutation' }
  & Pick<Types.Mutation, 'createAuthor'>
);

export type UpdateAuthorMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  author?: Types.Maybe<Types.AuthorInPut>;
}>;


export type UpdateAuthorMutation = (
  { __typename?: 'mutation' }
  & Pick<Types.Mutation, 'updateAuthor'>
);


export const ListAuthorDocument = gql`
    query ListAuthor($perPage: Int!, $page: Int!) {
  listAuthor(perPage: $perPage, page: $page) {
    count
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
    `;

/**
 * __useListAuthorQuery__
 *
 * To run a query within a React component, call `useListAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAuthorQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useListAuthorQuery(baseOptions?: Apollo.QueryHookOptions<ListAuthorQuery, ListAuthorQueryVariables>) {
        return Apollo.useQuery<ListAuthorQuery, ListAuthorQueryVariables>(ListAuthorDocument, baseOptions);
      }
export function useListAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAuthorQuery, ListAuthorQueryVariables>) {
          return Apollo.useLazyQuery<ListAuthorQuery, ListAuthorQueryVariables>(ListAuthorDocument, baseOptions);
        }
export type ListAuthorQueryHookResult = ReturnType<typeof useListAuthorQuery>;
export type ListAuthorLazyQueryHookResult = ReturnType<typeof useListAuthorLazyQuery>;
export type ListAuthorQueryResult = Apollo.QueryResult<ListAuthorQuery, ListAuthorQueryVariables>;
export const AuthorDocument = gql`
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
    `;

/**
 * __useAuthorQuery__
 *
 * To run a query within a React component, call `useAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAuthorQuery(baseOptions?: Apollo.QueryHookOptions<AuthorQuery, AuthorQueryVariables>) {
        return Apollo.useQuery<AuthorQuery, AuthorQueryVariables>(AuthorDocument, baseOptions);
      }
export function useAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthorQuery, AuthorQueryVariables>) {
          return Apollo.useLazyQuery<AuthorQuery, AuthorQueryVariables>(AuthorDocument, baseOptions);
        }
export type AuthorQueryHookResult = ReturnType<typeof useAuthorQuery>;
export type AuthorLazyQueryHookResult = ReturnType<typeof useAuthorLazyQuery>;
export type AuthorQueryResult = Apollo.QueryResult<AuthorQuery, AuthorQueryVariables>;
export const CreateAuthorDocument = gql`
    mutation CreateAuthor($author: authorInPut) {
  createAuthor(author: $author)
}
    `;
export type CreateAuthorMutationFn = Apollo.MutationFunction<CreateAuthorMutation, CreateAuthorMutationVariables>;

/**
 * __useCreateAuthorMutation__
 *
 * To run a mutation, you first call `useCreateAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuthorMutation, { data, loading, error }] = useCreateAuthorMutation({
 *   variables: {
 *      author: // value for 'author'
 *   },
 * });
 */
export function useCreateAuthorMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuthorMutation, CreateAuthorMutationVariables>) {
        return Apollo.useMutation<CreateAuthorMutation, CreateAuthorMutationVariables>(CreateAuthorDocument, baseOptions);
      }
export type CreateAuthorMutationHookResult = ReturnType<typeof useCreateAuthorMutation>;
export type CreateAuthorMutationResult = Apollo.MutationResult<CreateAuthorMutation>;
export type CreateAuthorMutationOptions = Apollo.BaseMutationOptions<CreateAuthorMutation, CreateAuthorMutationVariables>;
export const UpdateAuthorDocument = gql`
    mutation UpdateAuthor($id: Int!, $author: authorInPut) {
  updateAuthor(id: $id, author: $author)
}
    `;
export type UpdateAuthorMutationFn = Apollo.MutationFunction<UpdateAuthorMutation, UpdateAuthorMutationVariables>;

/**
 * __useUpdateAuthorMutation__
 *
 * To run a mutation, you first call `useUpdateAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAuthorMutation, { data, loading, error }] = useUpdateAuthorMutation({
 *   variables: {
 *      id: // value for 'id'
 *      author: // value for 'author'
 *   },
 * });
 */
export function useUpdateAuthorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAuthorMutation, UpdateAuthorMutationVariables>) {
        return Apollo.useMutation<UpdateAuthorMutation, UpdateAuthorMutationVariables>(UpdateAuthorDocument, baseOptions);
      }
export type UpdateAuthorMutationHookResult = ReturnType<typeof useUpdateAuthorMutation>;
export type UpdateAuthorMutationResult = Apollo.MutationResult<UpdateAuthorMutation>;
export type UpdateAuthorMutationOptions = Apollo.BaseMutationOptions<UpdateAuthorMutation, UpdateAuthorMutationVariables>;