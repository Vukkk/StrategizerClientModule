import gql from 'graphql-tag';

export const GET_STRATEGY = gql`
  query strategizer_StrategyByFb($fbSlug: String!) {
    strategizer_StrategyByFb(fbSlug: $fbSlug) {
      id
      fbSlug
      subStrategies {
        name
        active
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

export default GET_STRATEGY;
