export const PhaseApi = `
# Phase Code Methods\n\n
Phase code methods are used to create formulas that are passed to Traders to create Take Profit (sell) positions or a Stop Loss positions.

### Take Profit Phase Code\n
The Take Profit phase code starts with \`buyOrder = \`. Any of the conditional methods can be used.

_\`buyOrder = \` is counter intuitive to the expected \`sellOrder\` because this prototype uses a default strategy built to accumulate BTC. This variable will be clarified in future versions._

### Stop Loss Phase Code\n
The Stop Loss formula starts with \`newStopLoss =  \`. Any of the conditional methods can be used. Stop Loss also has special methods:
- \`newStopLoss =  \`
    - \`sellRate\`
    - \`stopLossPercentage\`
    - \`stopLossDecay\`
    - example: \`newStopLoss = sellRate + sellRate * (stopLossPercentage - stopLossDecay) / 100\`\n
`;
