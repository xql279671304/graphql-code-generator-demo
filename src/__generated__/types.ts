export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  id?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type Post = {
  __typename?: 'Post';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type AuthorList = {
  __typename?: 'AuthorList';
  count?: Maybe<Scalars['Int']>;
  list?: Maybe<Array<Maybe<Author>>>;
};

export type PostInPut = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type AuthorInPut = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<PostInPut>>>;
};

export type Mutation = {
  __typename?: 'mutation';
  createAuthor?: Maybe<Scalars['Boolean']>;
  updateAuthor?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateAuthorArgs = {
  id?: Maybe<Scalars['Int']>;
  author?: Maybe<AuthorInPut>;
};


export type MutationUpdateAuthorArgs = {
  id?: Maybe<Scalars['Int']>;
  author?: Maybe<AuthorInPut>;
};

export type Query = {
  __typename?: 'query';
  author?: Maybe<Author>;
  listAuthor?: Maybe<AuthorList>;
};


export type QueryAuthorArgs = {
  id: Scalars['Int'];
};


export type QueryListAuthorArgs = {
  perPage: Scalars['Int'];
  page: Scalars['Int'];
};
