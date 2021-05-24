//without login

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(2),
  },
  getStarted: {
    backgroundColor: '#F5F5F5',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar1() {
  const classes = useStyles(); 
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Button className={classes.button} color="inherit" href="/">HOME</Button>
            <Button className={classes.button} color="inherit">ABOUT US</Button>
            <Button className={classes.button} color="inherit" href="/contactus">CONTACT US</Button>
            <Typography align="right" className={classes.title}>
                <Button aria-controls="simple-menu" className={classes.button} color="inherit" aria-haspopup="true" href="/signin">
                  Log In
                </Button>
                <Button aria-controls="simple-menu" className={classes.getStarted}  aria-haspopup="true" href="/signup">
                   Get Started
                </Button>
                
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
