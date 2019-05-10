export const Introduction = `
## Welcome to the Strategizer\n\n
The Strategizer enables you to create complex trading strategies by using conditional statements resulting in the power of autmated algorithmic trading at your fingertips!\n
\n
**The Strategizer:**
- connects indicators to a simulation engine called the Trading Intelligence Engine\n
- brings together the data of multiple indicators for reacting to the varying conditions in the market\n
- utilizes conditions that enable management of general strategy activation as well as fine-tuned trade events\n
\n
**How it works**
- When you created a team, a Trader and a Simulator were forked and given the name you provided. The Simulator comes preloaded with a default strategy.\n
- The default strategy is then edited by the Strategizer.\n
- The Simulator then uses the edited strategy to create a new trading strategy dataset that is provided to the Trader.\n
- The Trader then executes the trading strategy via backtests or live trading.\n
- How the Trader uses the strategy:\n
    - When the strategy event Trigger On is fired (when Trigger On situations resolve to true based on their conditions) the strategy is activated.\n
    - Now that the strategy is active, the Trade Events are available for the Trader to make positions.
    - The Entry Point is where the Trader makes a buy position in the trade cycle.
    - Take Profit events are managed by phases and the Trader will make sell positions defined by the situations within the Take Profit phases.
    - Stop Loss events are also managed by phases and the Trader will make stop loss positions defined by the situations within the Stop Loss phases.
    - When the strategy Trigger Off is fired, the strategy is deactivated. Events are reset and will start from their initial phases when the strategy Triggers On again.
\n\n
### What's Next?\n
Though the purpose of the Strategizer is to lower the barriers-of-entry to automated trading, it is still a complex tool and use is easier with technical/quantitative trading knowledge.\n\n
As a default strategy was forked when you created a team, continue with the demo and run this strategy by going up to Clones, choosing [_Create Clone_](/clones/add) and running a Simulator for both the Market and Daily Periods. Then view the results in [Charts](/charts). 
\n
\n
### Diving Deeper\n
- Explore the Strategizer by clicking on the different components to reveal more options and information about that component. Tooltips will also appear on many of the components when you hover the mouse cursor over them.
- Click on the \`STRATEGIZER DOCS\` button to learn more about the various Strategizer topics.
\n
**A note about the default strategy**\n
_The default strategy is set in the BTC/USDT (Bitcoin/USD Tether) market with the purpose to _accumulate_ Bitcoin. This means that the strateg will try to grow the holding amount of Bitcoin rather than USDT and thus the conditions within the Strategizer will logically be the inverse of conditions used to obtain more USDT._\n
`;
