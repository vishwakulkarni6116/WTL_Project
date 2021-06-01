import React,{useState} from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Sidebar from './Sidebar.js';
import MainBookmarked from './MainBookmarked';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar'
import NavBar1 from './NavBar1'
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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
    const posts = JSON.parse(localStorage.getItem("posts"))
    const [maintag,setMainTag] = useState('Show All');
    var filteredPosts = posts.filter((post)=>post.userId._id==user._id);

    console.log(filteredPosts)
    return (
        <React.Fragment>
            {user===null?<NavBar1 />:<NavBar/>}
            <CssBaseline/>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            MY POSTS
                        </Typography>
                    </Container>
                </div>
            </main>
            <CssBaseline/>
            <Container maxWidth="lg">
                <main>
                <Grid container spacing={5} className={classes.mainGrid}>
                    <MainBookmarked posts={filteredPosts.reverse()} tag={maintag}/>
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