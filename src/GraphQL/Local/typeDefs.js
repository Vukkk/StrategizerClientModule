import gql from 'graphql-tag';

export const UPSERT_STRATEGIES = gql`
  extend type strategizer_Strategy {
    upsertStrategy: [strategizer_SubStrategy]
  }
`;

export default UPSERT_STRATEGIES;
