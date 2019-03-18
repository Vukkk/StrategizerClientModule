import gql from 'graphql-tag';

export const LOCAL_STRATEGIES = gql`
  extend type strategizer_Strategy {
    localStrategies: [strategizer_SubStrategy]
  }
`;

export default LOCAL_STRATEGIES;
