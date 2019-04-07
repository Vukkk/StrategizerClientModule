import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from '../styles';
import { withStyles } from '@material-ui/core/styles';

import ConditionName from './ConditionName';
import ConditionNameEdit from './ConditionNameEdit';
import ConditionCode from './ConditionCode';
import ConditionCodeEdit from './ConditionCodeEdit';

import { slugify } from '../../../utils';

export const ConditionView = (props) => (
  <React.Fragment>
    {(!props.edit || !(props.edit === 'name') || props.selected !== props.conditionIndex) && <ConditionName {...props} />}
    {props.edit === 'name' && props.selected === props.conditionIndex && <ConditionNameEdit {...props} />}
    {(!props.edit || !(props.edit === 'code') || props.selected !== props.conditionIndex) && <ConditionCode {...props} />}
    {props.edit === 'code' && props.selected === props.conditionIndex && <ConditionCodeEdit {...props} />}
  </React.Fragment>
)

export default withStyles(styles)(ConditionView);
