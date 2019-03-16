import React from 'react';
import { Link } from 'react-router-dom';

import { ListItem, ListItemText } from '@material-ui/core';

export const ViewCondition = ({ name, condition, index }) => (
  <ListItem>
    <ListItemText primary={name} secondary={condition} />
  </ListItem>
)

export default ViewCondition;
