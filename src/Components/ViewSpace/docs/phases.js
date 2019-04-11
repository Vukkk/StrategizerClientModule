export const Phases = `
# Phases\n\n
Phases are unique to Take Profit and Stop Loss trade events and contain situations. Their situations are like all other situations and are defined by the conditions within. Phases define a period of time in which their child situations can be possible. To define this conditional period, phases have their own conditional "code" used to activate the phase.\n
\n
There can be multiple phases defined within a trade event, and each phase may contain multiple situations which in turn can be defined by multiple conditions.\n
\n
Currently only one conditional code defines when a phase is active.
`;
