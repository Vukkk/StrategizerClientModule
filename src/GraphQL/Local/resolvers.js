import GET_STRATEGY from './queries'

export const strategyResolvers = {
  strategizer_Strategy: {
    strategizer_StrategyByFb: (strategies, _args, { cache }) => {
      const { localStrategies } = cache.readQuery({
        query: GET_STRATEGY
      });
      let data = localStrategies;
      if(data === null || data === ''){
        cache.writeData({ localStrategies: strategies });
        data = strategies;
      }

      return data;
    },
  },
};

export default strategyResolvers;
