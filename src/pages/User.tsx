import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import BackButton from '../components/BackButton';
import { useHomeStyles } from './theme';

const UserPage = () => {
  const classes = useHomeStyles();

  return (
    <Paper className={classes.tweetsWrapper} variant="outlined">
      <Paper className={classes.tweetsHeader} variant="outlined">
        <BackButton />

        <div>
          <Typography variant="h6">Andrey Shock</Typography>
          <Typography variant="caption" display="block" gutterBottom>
            65 твита
          </Typography>
        </div>
      </Paper>
    </Paper>
  );
};

export default UserPage;
