export const Phases = `
# Phases\n\n
Phases are unique to Take Profit and Stop Loss trade events and manage what Take Profit or Stop Loss formula is passed to the Trader.\n
Take Profit and Stop Loss trade events sequentially start with the first phase. When the situations of the phase resolve true, the trade event moves to the next phase. The sequence is reset when the strategy event Trigger Off is fired and the strategy restarted with Trigger On. 
Phases have their own code element used to define formulas that are passed to Traders to create Take Profit (sell) positions or a Stop Loss positions.\n
\n
There can be multiple phases defined within a Take Profit/Stop Loss trade event, and each phase may contain multiple situations — each defined by a single or multiple conditions.\n
\n
**Phase code method options are viewable when editing the phase code.**
`;
