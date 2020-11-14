import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useState, useEffect } from 'react';

import axios from '../config/axios-config';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing() * 2,
    width: '50%',
  },
  fullWidth: {
    width: '50%',
  },
  halfWidth: {
    width: '50%',
  },
}));

export default function LeaderBoard() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<any>(null);

  useEffect(() => {
    axios.get('/users').then((resp) => {
      setUsers(resp.data);
      setIsLoading(false);
    });
  }, []);

  let rendered = <div>Loading...</div>;

  if (!isLoading && users !== null) {
    const userRows = users.map((user: any) => (
      <Box display="flex" flexDirection="row" borderBottom="dashed 1px black" key={user.id} className={classes.fullWidth}>
        <Typography variant="subtitle1" className={classes.margin} align="center">{user.name}</Typography>
        <Typography variant="subtitle1" className={classes.margin} align="center">{user.score}</Typography>
      </Box>
    ));

    rendered = (
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3">Leaderboard</Typography>
        <Box display="flex" flexDirection="row" borderBottom="solid 1px black" className={classes.fullWidth}>
          <Typography variant="subtitle1" className={classes.margin} align="center">Name</Typography>
          <Typography variant="subtitle1" className={classes.margin} align="center">Contributions</Typography>
        </Box>
        {userRows}
      </Box>
    );
  }

  return (
    <>{rendered}</>
  );
}
