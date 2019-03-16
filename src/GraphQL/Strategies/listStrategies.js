import gql from 'graphql-tag';
import { strategyMinimalInfo } from '../Fragments';

const STRATEGIZER_STRATEGIES = gql`
  query Strategies_Strategies{
    strategizer_Strategies {
      ...strategyMinimalInfo
    }
  }
  ${strategyMinimalInfo}
`;
export default {
  STRATEGIZER_STRATEGIES,
};
