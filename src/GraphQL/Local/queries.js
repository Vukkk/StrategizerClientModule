import gql from 'graphql-tag';

export const GET_STRATEGIES = gql`
  query strategizer_StrategyByFb($fbSlug: String!) {
    strategizer_StrategyByFb(fbSlug: $fbSlug) {
      localStrategies @client {
        name
        entryPoint @type(name: "strategizer_EntryPoint"){
          situations @type(name: "strategizer_Situation"){
            name
            conditions @type(name: "strategizer_Condition"){
              name
              code
            }
          }
        }
        exitPoint @type(name: "strategizer_ExitPoint"){
          situations @type(name: "strategizer_Situation"){
            name
            conditions @type(name: "strategizer_Condition"){
              name
              code
            }
          }
        }
        buyPoint @type(name: "strategizer_BuyPoint"){
          situations @type(name: "strategizer_Situation"){
            name
            conditions @type(name: "strategizer_Condition"){
              name
              code
            }
          }
        }
        sellPoint @type(name: "strategizer_SellPoint"){
          situations @type(name: "strategizer_Situation"){
            name
            conditions @type(name: "strategizer_Condition"){
              name
              code
            }
          }
        }
        stopLoss @type(name: "strategizer_StopLoss"){
          phases @type(name: "strategizer_Phase"){
            name
            code
            situations @type(name: "strategizer_Situation"){
              name
              conditions @type(name: "strategizer_Condition"){
                name
                code
              }
            }
          }
        }
        sellOrder @type(name: "strategizer_SellOrder"){
          phases @type(name: "strategizer_Phase"){
            name
            code
            situations @type(name: "strategizer_Situation"){
              name
              conditions @type(name: "strategizer_Condition"){
                name
                code
              }
            }
          }
        }
        buyOrder @type(name: "strategizer_BuyOrder"){
          phases @type(name: "strategizer_Phase"){
            name
            code
            situations @type(name: "strategizer_Situation"){
              name
              conditions @type(name: "strategizer_Condition"){
                name
                code
              }
            }
          }
        }
      }
      fbSlug
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
`;

export default GET_STRATEGIES;
