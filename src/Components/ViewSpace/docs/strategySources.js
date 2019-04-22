export const StrategySources = `
## Strategy Sources\n\n
Teams own financial beings (a.k.a algobots) that compete in competitions. Two types of financial beings are cloned when you create your team:\n
- a trading algobot\n
- a indicator (simulator) algobot\n
\n
These algobots however also require data about the market they are working in as well as other datasets that indicate what is going on in the market from different perspectives. Other algobots behind the scenes are:\n
- AACharly | sensor: Extracts raw data from exchange. Used in strategy to find head of market
- AAOlivia | indicator: Creates candle dataset
- AAChris | indicator: Create Percentage Bandwidth and Bolinger Band datasets
- AAPaula | indicator: Creates Bolinger Band Sub-channel datasets
- AAGauss | Indicator: Creates Linear Regression Curve (LRC) points dataset
\n
The simulator algobot creates an indicator dataset customized by your strategy. This dataset is then fed to the trading algobot to operate in backtest and live-trading (currently only in competitions). \n
\n
`;
