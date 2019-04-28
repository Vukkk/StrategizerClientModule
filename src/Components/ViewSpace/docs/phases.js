export const Phases = `
# Phases\n\n
Phases are unique to Take Profit and Stop Loss trade events. Phases will create Take Profit or Stop Loss positions when their phase code resolves to true. When the situations within a phase resolve true, the strategy will move out of that phase and release the position if it hasn't been already filled.
\n
There can be multiple phases defined within a Take Profit/Stop Loss trade event, and each phase may contain multiple situations — each defined by a single or multiple conditions.\n
\n
Currently only one conditional code defines when a phase creates .\n
\n
**To view phase code command options, click on the phase code edit button.**
`;
