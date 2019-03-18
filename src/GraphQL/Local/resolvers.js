import GET_STRATEGY from './queries'

export const strategyResolvers = {
  strategizer_Strategy: {
    upsertStrategy: (strategy, _args, { cache }) => {
      const { strategizer_StrategyByFb } = cache.readQuery({
        query: GET_STRATEGY
      });
      return strategizer_StrategyByFb.includes(strategy.fbSlug);
    },
  },
};

export default strategyResolvers;
