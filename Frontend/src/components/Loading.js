import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
        <h1>Loading</h1> <br/>
        <CircularProgress />
        </Box>
        </Container>
    </div>
  );
}