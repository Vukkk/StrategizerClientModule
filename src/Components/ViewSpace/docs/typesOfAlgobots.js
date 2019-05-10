export const TypesOfAlgobots = `
## Types of Algobots\n\n
On a conceputal level, algobots are Financial Beings (as people are Human Beings). These algobots are stakeholders, or as you like, natural citizens within the ALGO economy and consume the ALGO token to provide data and services to other algobots and stakeholders within the system.
\n
There are three general classes of algobots:\n
- *sensors:* financial beings that extract or gather raw data from sources such as exchange marketplaces\n
- *indicators:* financial beings that create indication data using the raw data from sensors\n
- *traders:* financial beings that utilize the indication data to manage trade positions within a marketplace\n
\n
### Example\n
When you create a team, two classes of algobots are forked from a template: a trading and an indicating algobot.

Starting with the indicating algobot as it will be collaborated with first via the Strategizer.
- Is a special kind of indicator called a "simulator"
- A simulator indicator is able to connect to the Strategizer interface
- When connected to the Strategizer it shares its data dependencies, most likely other indicator bots
- These indicator datasets are the source for creating conditional strategies

Let's take a deeper look at the algobots behind-the-scenes:\n
- AAMasters/AACharly | sensor: Extracts raw data from exchange. Used in strategy to find head of market
- AAMasters/AAOlivia | indicator: Creates candles dataset
- AAMasters/AAChris | indicator: Create Percentage Bandwidth and Bolinger Band datasets
- AAMasters/AAPaula | indicator: Creates Bolinger Band Sub-channel datasets
- AAVikings/AAGauss | Indicator: Creates Linear Regression Curve (LRC) points dataset
\n
The simulator algobot creates an indicating dataset customized by your strategy. This dataset is then fed to the trading algobot to operate in backtest and live-trading (currently only in competitions). \n
\n
`;
