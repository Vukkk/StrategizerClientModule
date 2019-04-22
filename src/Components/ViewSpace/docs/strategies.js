export const Strategies = `
# Strategies\n\n
Strategies, of course, are built in the Strategizer. All strategies are run within a simulator algobot and generate a "strategic" indicator dataset that instructs your trading bot when and how to trade.\n
\n
Strategies are usually built around a general purpose. For example, the template provides two main directions:\n
- *Trend Following*: A strategy that looks for emerging trends and aims to "ride" that trend as much as possible.\n
- *Range Trading*: A strategy that looks for a range bound market or when the market is moving sideways rather than up or down. Also known as a mean-reversion strategy.\n
\n
**Important Note:** The overarching purpose of the template strategies is to _accumulate_ Bitcoin. This means that the strategies uses logic that is _generally_ inverse to an overarching strategy desiring to accumulate USDT.\n
`;
