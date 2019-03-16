import gql from 'graphql-tag';

export const strategyMinimalInfo = gql`
  fragment StrategyMinimalInfo on strategizer_Event {
    name
    host {
      alias
      firstName
      lastName
    }
  }
`;

export const strategyFullInfo = gql`
  fragment StrategyFullInfo on strategizer_Event {
    id
    name
    host{
      alias
      firstName
      lastName
    }
    formula{
      name
    }
    plotter{
      name
    }
  }
`;
