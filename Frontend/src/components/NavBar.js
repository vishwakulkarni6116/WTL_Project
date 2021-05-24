import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar1() {
  const classes = useStyles(); 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }; 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Button className={classes.button} color="inherit">HOME</Button>
            <Button className={classes.button} color="inherit">ABOUT US</Button>
            <Button className={classes.button} color="inherit">CONTACT US</Button>
            <Typography align="right" className={classes.title}>
                <Button aria-controls="simple-menu" onClick={handleClick} className={classes.button} color="inherit" aria-haspopup="true" >
                  mantriaditi10
                </Button>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <StyledMenuItem>
                        <ListItemIcon>
                            <AddIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Create Post" />
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <BookmarksIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Bookmarks" />
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <ExitToAppIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </StyledMenuItem>
                </StyledMenu>
                
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
