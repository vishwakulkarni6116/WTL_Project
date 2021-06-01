import React from 'react'
import NavBar1 from './NavBar1'
import NavBar from './NavBar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles, CardHeader, CardContent, List, ListItem, ListItemText, Divider,Link } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import DraftsIcon from '@material-ui/icons/Drafts';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 2),
    },
    cardHeader: {
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
        color:'#3446eb',
    },
    list: {
        width: "100%",
        backgroundColor: theme.palette.background.paper
    },
    fonts: {
        color:"#3446eb",
        fontWeight: "bold"
    },
}));


export default function ContactUs() {
    const classes = useStyles();
    const user =JSON.parse(localStorage.getItem("user"))
    const preventDefault = (event) => event.preventDefault();
    return (
        <React.Fragment>
            {user===null?<NavBar1 />:<NavBar/>}
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Please find below our contact information. 
                            Feel free to reach us. Our customer support team looks forward to helping you.
                        </Typography>
                    </Container>
                    <br/>
                    <Container maxWidth="sm">
                        <Card>
                            <CardHeader
                                className={classes.cardHeader}
                                title="Contact Details"
                            />   
                            <CardContent>
                                <List className={classes.list}>
                                    <Divider />
                                    <ListItem alignItems="center">
                                        <ListItemText
                                            primary={
                                                <div>
                                                    <Typography align="center" variant="h6" className={classes.fonts}>
                                                        Write to us on: 
                                                    </Typography>
                                                    <Typography align="center" variant="body1">
                                                        <DraftsIcon/><br/>
                                                        <a href="mailto:support@pict-community.com"     >
                                                            support@pict-communtiy.com  
                                                        </a>
                                                    </Typography>
                                                </div>
                                            }
                                        />   
                                    </ListItem>
                                    <Divider />
                                    <ListItem alignItems="center">
                                        <ListItemText
                                            primary={
                                                <div>
                                                    <Typography align="center" variant="h6" className={classes.fonts}>
                                                       Telephone No.
                                                    </Typography>
                                                    <Typography align="center" variant="body1">
                                                        <PhoneIcon/><br/>
                                                        (+91)-88888 88888 
                                                    </Typography>
                                                </div>
                                            }
                                        />   
                                    </ListItem>
                                    <Divider /> 
                                    <ListItem alignItems="center">
                                        <ListItemText
                                            primary={
                                                <div>
                                                    <Typography align="center" variant="h6" className={classes.fonts}>
                                                       Follow us on Instagram
                                                    </Typography>
                                                    <Typography align="center" variant="body1">
                                                        <InstagramIcon/><br/>
                                                        <Link href="https://www.instagram.com/adi.mantri/" onClick={preventDefault}>
                                                            @pict-community
                                                        </Link>
                                                    </Typography>
                                                </div>
                                            }
                                        />   
                                    </ListItem>
                                    <Divider />     
                                </List>
                            </CardContent>
                        </Card>
                    </Container>
                    <br/><br/>
                </div>
            </main>
        </React.Fragment>
                
    )
}