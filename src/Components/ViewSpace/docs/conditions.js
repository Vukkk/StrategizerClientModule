export const Conditions = `
# Conditions\n\n
Conditions are the heart of the strategizer and determine whether situations and phases are true and thus able to signal the trading bot when conditions are favorable for a given strategy or trade event.\n
\n
One or more conditions are used to define a given situation or phase.\n
\n
**All conditions must resolve to the boolean values of _true_ or _false_.** This means that the condition should not return a number or any other non-boolean values. E.g. \`bollingerBand.direction === 'down'\` will resolve to true or false, but just \`bollingerBand.direction\` will possibly return _up_, _down_ or _side_ and will cause the strategy to fail. \n\n
**Condition code method options are viewable when editing the condition code.**
`;
