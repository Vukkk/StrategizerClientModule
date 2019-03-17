import gql from 'graphql-tag';

export const LIST_STRATEGIES = gql`
  query teamsByOwnerQuery {
    teams_TeamsByOwner {
      id
      name
      slug
      profile{
        avatar
      }
      fb {
        id
        name
        slug
        avatar
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
    }
  }
`;
