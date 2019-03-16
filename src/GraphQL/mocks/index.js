export const Strategies = {
  _id: "SOMEIDE12341234",
  fbId: "",
  subStrategies: [{
    name: "Strategy 1",
    entryPoint: {
      situations: [{
        name: "Situation 1",
        conditions: [{
          name: "Condition 1",
          code: "Condition that does something conditionally",
        },
        {
          name: "Condition 2",
          code: "Condition that does something conditionally",
        },
        {
          name: "Condition 3",
          code: "Condition that does something conditionally",
        }
      ],
    },
    {
      name: "Situation 2",
      conditions: [{
        name: "Condition 1",
        code: "Condition that does something conditionally",
      },
      {
        name: "Condition 2",
        code: "Condition that does something conditionally",
      },
      {
        name: "Condition 3",
        code: "Condition that does something conditionally",
      }
    ],
    }
  ],
    },
    exitPoint: {
      situations: [{
        name: "exitPoint Situation 1",
        conditions: [{
          name: "exitPoint condition 1",
          code: "exitPoint condition code",
        }],
      }],
    },
    sellPoint: {
      situations: [{
        name: "sellPoint Situation 1",
        conditions: [{
          name: "sellPoint condition 1",
          code: "sellPoint condition code",
        }],
      }],
    },
    buyPoint: {
      situations: [{
        name: "String",
        conditions: [{
          name: "String",
          code: "String",
        }],
      }],
    },
    stopLoss: {
      phases: [{
        name: "String",
        code: "String",
        situations: [{
          name: "String",
          conditions: [{
            name: "String",
            code: "String",
          }],
        }],
      }],
    },
    buyOrder: {
      phases: [{
        name: "String",
        code: "String",
        situations: [{
          name: "String",
          conditions: [{
            name: "String",
            code: "String",
          }],
        }],
      }],
    },
    sellOrder: {
      phases: [{
        name: "String",
        code: "String",
        situations: [{
          name: "String",
          conditions: [{
            name: "String",
            code: "String",
          }],
        }],
      }],
    },
  }]
};

export default Strategies;
