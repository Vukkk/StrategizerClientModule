import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Card,
  Grid,
  Typography,
  Link
} from '@material-ui/core';

export class AlgobotsOnly extends React.Component {
  render () {
    const { classes, content, setView } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        className={classes.DocOnlyCont}
      >
        <Grid item xs={10}>
          <ReactMarkdown source={content} />
          <Typography variant="subtitle1">
            Learn more Superalgos algobot concepts:
          </Typography>
          <Typography variant="body1">
            • <Link color="secondary" variant="inherit" href='#algobot-types' onClick={e => setView(e, 'Run Strategy')}>Running your Strategy</Link>
          </Typography>
          <Typography variant="body1">
            • <Link color="secondary" variant="inherit" href='#strategy-sources'  onClick={e => setView(e, 'Trade With Strategy')}>Trade with Strategy</Link>
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(AlgobotsOnly);
