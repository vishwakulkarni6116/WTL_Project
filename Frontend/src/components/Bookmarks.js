import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Sidebar from './Sidebar.js';
import MainBookmarked from './MainBookmarked';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar'

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
    return (
        <React.Fragment>
            <NavBar/>
            <CssBaseline/>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            YOUR BOOKMARKS
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Find the posts you wish to read later right here!
                        </Typography>
                    </Container>
                </div>
            </main>
            <CssBaseline/>
            <Container maxWidth="lg">
                <main>
                <Grid container spacing={5} className={classes.mainGrid}>
                    <MainBookmarked  />
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