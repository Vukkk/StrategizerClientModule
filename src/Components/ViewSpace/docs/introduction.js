export const Introduction = `
# Welcome to the Strategizer\n\nTeams create financial beings. Every financial being (FB/algobot) has one strategy.\n\nThis strategy is made up of multiple sub-strategies. (Why not all just strategies and no singular top strategy? Because the FB can only run one main strategy at a time, and if you had variations, then it should just be a different FB.\n\nEach sub-strategy is made up of seven given strategy events:\n
- Trigger\n
- Rejected\n
- EntryPoint\n
- TakeProfit\n
- StopLoss\n
- BuyOrder\n
- SellOrder\n
\n\n
The first four events can be considered indicator events (eg, Trigger is when a strategy actually starts).
All indicator events can have multiple situations. And each situation can have multiple conditions. The conditions available are based on the datasets and other indicator bots tied to the simulator bot (the indicator bot that uses the strategizer) For example conditions based on Bolinger Bands or Candles.
\n\n
The last three are order events. They are like indicator events, except their situations are combined into groups call phases. And these situations have conditions just like the other events. So over a given phase defined by some condition, multiple situations might occur based on their own set of conditions.
`;
