import React from 'react';
import { Query } from 'react-apollo';

import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

import Strategies from '../../Graphql/mocks';

import BannerTopBar from '../BannerTopBar';
import ViewItem from './ViewItem';

class View extends React.Component {
  render() {
    const { classes } = this.props;
    const strategyIndex = this.props.match.params.slug;
    const data = Strategies.subStrategies[strategyIndex];
    console.log('View data: ', data);
    return (
      <React.Fragment>
        <BannerTopBar
          size='small'
          title=''
          text=''
          backgroundUrl='https://superalgos.org/img/photos/events.jpg'
        />
        <div className='container'>
          <Link to='/strategizer' className={classes.backLink}>&larr; Back to all strategies</Link>
          <ViewItem strategy={data} index={strategyIndex} />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(View);
