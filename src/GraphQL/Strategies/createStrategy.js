import gql from 'graphql-tag';

export const CREATE_STRATEGY = gql`
  mutation strategizer_CreateStrategy($fbSlug: String!) {
    strategizer_CreateStrategy(fbSlug: $fbSlug) {
      id
    }
  }
`;

export default CREATE_STRATEGY;
