export const ConditionApi = `
# Condition Methods\n\n
Condition methods are used for conditionally defining situations. The available indicator methods are based on a simulator's dependencies.

## General 
There are common arithmetic and conditional operators used for building conditions as well as the generally available \`previous\` method.
- \`previous\`: _previous data value_. Used with any indicator method to compare data values from previous data cycle. Can also be chained so that data from multiple prior time increments back can be referred.
    - Example: In the default strategy's Trade Event > Entry Point > situation: "Min below lower bollingerBand" > condition: "3 Candles MIN below Lower Band" uses the code:\n\n
    candle.previous.previous.min < bollingerBand.previous.previous.movingAverage - bollingerBand.previous.previous.deviation && candle.previous.min < bollingerBand.previous.movingAverage - bollingerBand.previous.deviation && candle.min < bollingerBand.movingAverage - bollingerBand.deviation
    \n\n
#### Arithmetic\n
- \`+\`: _plus_. Add two values together.
- \`-\`: _minus_. Subtract one value from another.
- \`*\`: _multiply_. Multiple a value with another value.
- \`/\`: _divide_. Divide a value by another value.\n
\n
#### Conditionals\n
- \`=\`: _set value equal to_. Set variable on left side equal to value on right side.
- \`===\`: _is equal to_. If data on left side is equal to data on right, condition will resolve to true.
- \`!=\`: _not equal to_. If data on left side does not equal to data on right, condition will resolve to true.
- \`&&\`: _and_. If logic on left side and logic on right are **both** true or false, then whole condition resolves respectivley to true or false.
- \`||\`: _or_. If logic on left side **or** logic on right is true, then whole condition resolves to true. If neither logics resolve to true, then condition resolves to false.
- \`<\`: _less than_. If logic value on left side is _less than_ logic value on right, then condition resolves to true.
- \`<=\`: _less than or equal_. If logic value on left side is _less than_ or _equal to_ logic value on right, then condition resolves to true.
- \`>\`: _greater than_. If logic value on left side is _greater than_ logic value on right, then condition resolves to true.
- \`<=\`: _greater than or equal_. If logic value on left side is _greater   than_ or _equal to_ logic value on right, then condition resolves to true.\n 
\n 
## Indicators\n
#### Bollinger Bands\n
Bollinger Bands are an indicator that plots a set a of lines two standard deviations above and below a simple moving average. They are usually used to indicate when a market is oversold or overbought as standard deviation is measure of standard variance or volatility.\n 
- \`bollingerBand\`
    - \`begin\`, \`end\`, \`movingAverage\`, \`standarDeviation\`, \`deviation\`
        - example:
        \`bollingerBand.previous.movingAverage > bollingerBand.movingAverage\`
    - \`direction\` compared to  \`down\`, \`up\`, \`side\`
        - example: \`bollingerBand.direction === 'down'\`\n
\n
#### Percentage Bandwidth (%b)\n
Used in conjunction with Bollinger Bands, Percentage Bandwidth plots the closing asset price within a market increment as a percentage where the upper bands are 1.0, the moving average 0.5 and the lower band 0. Used for finding how close the asset price is to the bands and indicating possible trend change and divergence from current movement.\n
- \`percentageBandwidth\`
    - \`begin\`, \`end\`, \`value\`, \`movingAverage\`, \`bandwidth\`
        - example: \`percentageBandwidth.value > 0.75\`
    - \`direction\` compared to  \`down\`, \`up\`, \`side\`
        - example: \`percentageBandwidth.previous.direction === 'down' && percentageBandwidth.direction === 'down'\`\n
\n
#### Bollinger Channel\n
A bollinger channel starts when the moving average of bollinger bands turn from one direction to another, and it ends whenever the direction turn again.\n
- \`bollingerChannel\`
    - \`begin\`, \`end\`, \`direction\`, \`firstMovingAverage\`, \`lastMovingAverage\`, \`firstDeviation\`, \`lastDeviation\`
        - example: \`bollingerChannel.firstDeviation > bollingerChannel.previous.lastDeviation\`
    - \`direction\` compared to  \`down\`, \`up\`
        - example: \`bollingerChannel.direction === 'down'\`\n
\n
#### Bollinger SubChannel\n
A bollinger subchannel starts when the moving average of bollinger bands turn from one direction to another, and it ends whenever the direction turn again.\n
- \`bollingerSubChannel\`
    - \`begin\`, \`end\`, \`direction\`, \`period\`, \`firstMovingAverage\`, \`lastMovingAverage\`, \`firstDeviation\`, \`lastDeviation\`
        - example: \`bollingerSubChannel.firstMovingAverage > bollingerSubChannel.previous.firstMovingAverage\`
    - \`slope\` compared to  \`Steep\`, \`Medium\`, \`Gentle\`, \`Side\`
        - example: \`bollingerSubChannel.slope === 'Gentle'\`\n

`;
