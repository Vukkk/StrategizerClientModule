export const ConditionApi = `
# Conditions Commands\n\n
Condition commands available to the situation. Theseare dependent on the indicating data provided to the simulator.

### Arithmetic\n
- \`+\`: _plus_. Add two values together.
- \`-\`: _minus_. Subtrace one value from another.
- \`*\`: _multiply_. Multiple a value with another value.
- \`/\`: _divide_. Divide a value by another value.\n
\n
### Conditionals\n
- \`=\`: _set value equal to_. Set variable on left side equal to value on right side.
- \`===\`: _is equal to_. If data on left side is equal to data on right, condition will resolve to true.
- \`!=\`: _not equal to_. If data on left side does not equal to data on right, condition will resolve to true.
- \`&&\`: _and_. If logic on left side and logic on right are **both** true or false, then whole condition resolves respectivley to true or false.
- \`||\`: _or_. If logic on left side **or** logic on right is true, then whole condition resolves to true. If neither logics resolve to true, then condition resolves to false.
- \`<\`: _less than_. If logic value on left side is _less than_ logic value on right, then condition resolves to true.
- \`<=\`: _less than or equal_. If logic value on left side is _less than_ or _equal to_ logic value on right, then condition resolves to true.
- \`>\`: _greater than_. If logic value on left side is _greater than_ logic value on right, then condition resolves to true.
- \`<=\`: _greater than or equal_. If logic value on left side is _greater   than_ or _equal to_ logic value on right, then condition resolves to true.
### General
- \`previous\`: _previous data value_. Used to compare data values from previous data cycle. E.g. previous hour high price to compare against current hour high price.
    - Example: In the default strategy's Trade Event 'Entry Point' situation: "Min below lower bollingerBand", the condition "3 Candles MIN below Lower Band" uses the code:
    - \`\`\`candle.previous.previous.min < bollingerBand.previous.previous.movingAverage - bollingerBand.previous.previous.deviation && candle.previous.min < bollingerBand.previous.movingAverage - bollingerBand.previous.deviation && candle.min < bollingerBand.movingAverage - bollingerBand.deviation\`\`\`
    - \`previous\` is used to indicate the prior time increment of a data value and can also be chained so that data from multiple prior time increments back can be referred.\n 
### Indicators\n
#### Bolinger Bands\n


`;
