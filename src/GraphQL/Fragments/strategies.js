import gql from 'graphql-tag';

export const strategyMinimalInfo = gql`
  fragment StrategyMinimalInfo on teams_TeamsByOwner {
    id
    name
    slug
    fb {
      id
      name
      slug
      strategy {
        id
        fbId
        subStrategies {
          name
          entryPoint {
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
  }
`;

export const strategyFullInfo = gql`
  fragment StrategyFullInfo on teams_TeamsByOwner {
    id
    name
    slug
    fb {
      id
      name
      slug
      strategy {
        id
        fbId
        subStrategies {
          name
          entryPoint {
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
  }
`;
