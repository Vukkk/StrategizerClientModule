import gql from 'graphql-tag';

export const eventMinimalInfo = gql`
  fragment EventMinimalInfo on events_Event {
    name
    host {
      alias
      firstName
      lastName
    }
  }
`;

export const eventFullInfo = gql`
  fragment EventFullInfo on events_Event {
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
