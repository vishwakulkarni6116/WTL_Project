import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import NavBar1 from './NavBar1'
import NavBar from './NavBar'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// import Sidebar from './Sidebar.js';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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
      sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
      },
      sidebarSection: {
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
      { title: 'Web Development', },
      { title: 'College Events',  },
      { title: 'Blockchain',  },
      { title: 'Mental Health',  },
      { title: 'Android Development',  },
      { title: 'Books',  },
      { title: 'Philosophy',  },
      { title: 'Data Sceince',  },
      { title: 'Show All',  },
    ],
  };



export default function Home(props) {
    const classes = useStyles();
    const user =JSON.parse(localStorage.getItem("user"))
    const [maintag,setMainTag] = useState('Show All');

    useEffect(() => {
        console.log(maintag)
    });

    return (
        <React.Fragment>
            {user===null?<NavBar1 />:<NavBar/>}
            <CssBaseline/>
            <main >
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
                    {console.log(maintag)}
                    <Main tag={maintag}/>
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

    function Sidebar(props) {
        const classes = useStyles();
        const { tags, description, title } = props;
      
        return (
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox} >
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
              <Typography>{description}</Typography>
            </Paper>
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
              TAGS
            </Typography>
            <div>
            {tags.map((tag) => (
              <Button  size="small" variant="outlined" color="primary" onClick={()=>setMainTag(tag.title)}>
                {tag.title}
              </Button>  
            ))}
            </div >
          </Grid>
        );
      }
    
      Sidebar.propTypes = {
        tags: PropTypes.array,
        description: PropTypes.string,
        title: PropTypes.string,
      };

}

