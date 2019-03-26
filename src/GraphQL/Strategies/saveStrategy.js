import gql from 'graphql-tag';

export const SAVE_STRATEGY = gql`
  mutation strategizer_EditStrategy($id: ID!, $strategy: strategizer_StrategyInput!) {
    strategizer_EditStrategy(id: $id, strategy: $strategy) {
      id
      fbSlug
      subStrategies {
        name
        actif
        entryPoint {
          situations {
            name
            conditions {
              name
              code
            }
          }
        }
        exitPoint {
          situations {
            name
            conditions {
              name
              code
            }
          }
        }
        buyPoint {
          situations {
            name
            conditions {
              name
              code
            }
          }
        }
        sellPoint {
          situations {
            name
            conditions {
              name
              code
            }
          }
        }
        stopLoss {
          phases {
            name
            code
            situations {
              name
              conditions {
                name
                code
              }
            }
          }
        }
        sellOrder {
          phases {
            name
            code
            situations {
              name
              conditions {
                name
                code
              }
            }
          }
        }
        buyOrder {
          phases {
            name
            code
            situations {
              name
              conditions {
                name
                code
              }
            }
          }
        }
      }
    }
  }
`;

export default SAVE_STRATEGY;
