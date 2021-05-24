import React from 'react'
import Container from '@material-ui/core/Container'
import NavBar1 from './NavBar1'
import NavBar from './NavBar'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Sidebar from './Sidebar.js';
import Main from './Main';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 2),
      },
    mainGrid: {
        marginTop: theme.spacing(3),
      },
}));

const sidebar = {
    title: 'FILTER THE CONTENT',
    description:
      'Discover more of what matters to you!',
    tags: [
      { title: 'Machine Learning',  },
      { title: 'Crytography',  },
      { title: 'Artificial Intelligence',  },
      { title: 'Web Developement', },
      { title: 'College Events',  },
      { title: 'Blockchain',  },
      { title: 'Mental Health',  },
      { title: 'Android Developement',  },
      { title: 'Books',  },
      { title: 'Philosophy',  },
      { title: 'Data Sceince',  },
    ],
  };

export default function Home() {
    const classes = useStyles();
    const user =JSON.parse(localStorage.getItem("user"))
    

    const navbar = ()=>{
        if(user==null){
            return(
                <NavBar/>
            )
        }
        else{
            return(
                <NavBar1/>
            )
        }
      }

    return (
        <React.Fragment>
            {user===null?<NavBar1 />:<NavBar/>}
            <CssBaseline/>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            PICT BLOGSPOT
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            A place to explore ideas, speak your mind and network with your peers.
                        </Typography>
                    </Container>
                </div>
            </main>
            <CssBaseline/>
            <Container maxWidth="lg">
                <main>
                <Grid container spacing={5} className={classes.mainGrid}>
                    <Main  />
                    <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    tags={sidebar.tags}
                    /> 
                </Grid>
                </main>
            </Container>
        </React.Fragment>
    )
}