export const TriggerOn = `
# Trigger On Event\n\n
Trigger On is a general strategy event that informs the algobot when to activate the strategy and to start searching for the trade event phases and situations.\n
\n
### Example
In the default Trigger On event for the \`Trend Following\` Strategy, a situation called "Price Collapsing" uses three conditions that look for indication that the market price is collapsing and that the algobot should then should start using trade events.\n
\n
The three conditions are:
- _%B Moving Average going up_: If the Percent Bandwith moving average starts going "up" and...
- _%B Bandwidth going up_: ...if the Percent Bandwidth is greater than the previouse for two periods and...
- _%Candles Min going down_: ...if ths previous minimum candle value is less the the previous for two periods, then...
\n
...this is a good situation to start executing the rest of this strategy.\n
\n
_Note: Remember, that this strategy is inverted as the overarching intent is to accumulate Bitcoin._\n
`;

export const TriggerOff = `
# Trigger Off Event\n\n
Trigger Off is a general strategy event that informs the algobot when to deactivate the strategy and stop trade event phases and situations.\n
`;

export const EntryPoint = `
# Entry Point Event\n\n
EntryPoint is a trade event that informs the algobot when to make a position (place a buy order) in the market.\n

_Note: Currently orders can be both limit/maker or market/taker orders depending on asking price created by the strategy._
`;

export const TakeProfit = `
# Take Profit Event\n\n
Take Profit is a trade event that informs the algobot when to release a position (place a sell order) in the market.\n

_Note: Currently orders can be both limit/maker or market/taker orders depending on asking price created by the strategy._
`;

export const StopLoss = `
# Stop Loss Event\n\n
Stop Loss is a trade event used for risk-management and to protect a trade from losing too much value. It should be noted that while stop losses increase safety, they are not guranteed to fill. \n

_Note: Currently orders can be both limit/maker or market/taker orders depending on asking price created by the strategy._
`;
