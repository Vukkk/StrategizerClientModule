export const Introduction = `
## Running Your Strategy\n\n
The Strategizer enables you to create complex trading strategies by using conditional statements resulting in the power of autmated algorithmic trading at your fingertips!\n
\n
**The Strategizer:**
Though the purpose of the Strategizer is to lower the barriers of entry to automated trading, it is a complex tool and will be easiest with prior technical/quantitative trading experience.\n
At this point, because a default simulator strategy was forked with your team creation, you may skip diving into the Strategizer and move forward in using the Platform Demo. \n
So next up, let us put your strategy to work in the simulator:\n
- We need the simulator to create two strategy datasets for your trading bot:
    - For the Market period time scale (time increments greater than a day)
    - For the Daily period time scale (time increments less than a day)
- For Market, go up to "Clones" and choose "Create a Clone":
    - Under \`Team and Bot\` choose the option with "Simulator"
    - For Process Name: **Multi-Period-Market**
    - Start Day: It will take time for the simulator to process the strategy, so when calendar pops up, click on the year (2019) and choose _2018_, then click "Ok".
    - Click button "Clone Bot" and after a few moments a confirmation should appear.
- Repeat for Daily, go up to "Clones" and choose "Create a Clone":
    - Under \`Team and Bot\` choose the option with "Simulator"
    - For Process Name: **Multi-Period-Daily**
    - Start Day: It will take time for the simulator to process the strategy, so when calendar pops up, click back one month and choose the first day of the month, then click "Ok".
    - Click button "Clone Bot" and after a few moments a confirmation should appear.\n
- Now let's check your hard work and go up "Clones" and choose "Active Clones":
    - You should see two clones, one for **Multi-Period-Market** and one for **Multi-Period-Daily**
- 
\n
\n
`;
