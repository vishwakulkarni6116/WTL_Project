import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import { ThumbDown, ThumbUp } from "@material-ui/icons";
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import NavBar1 from './NavBar1'
import NavBar from './NavBar'   
import Comments from './Comments'

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    cardHeader: {
        backgroundColor:'#50d5fa'
      },
  }));

const PostPage = (props) => {
    const classes = useStyles();
    const [image, setImage] = useState('https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg');
    const [subtitle, setSubtitle] = useState("It's not really worth it man");
    const [label, setLabel] = useState('Academics');
    
    const user =JSON.parse(localStorage.getItem("user"))
    const posts = JSON.parse(localStorage.getItem("posts"))
    var post = posts.filter((post)=>post._id==props.postId)[0];
    console.log(post)
    const [likes, setLikes] = useState(post.likes);
    const [dislikes, setDislikes] = useState(post.dislikes);
    // fetch values here
    return (  
        <div className="PostPageClass">
            {user===null?<NavBar1 />:<NavBar/>}
            
            <br/>
            <br/>
            <div className="PostTitle">
                <Typography variant="h3" >
                   {post.title} 
                </Typography>
            </div>
            <br/>
            <div className="PostSubtitle">
                <Typography variant="subtitle" >
                   {post.subtitle} 
                </Typography>

            </div>
            <br/>
            <div className="PostImage">
                <img src={post.image}  height="400" ></img>
            </div>
            <div className="PostInfo" >
                <Typography variant="caption" className="PostLabel" style={{margin:10}}>
                    {post.tag}
                </Typography>
                <Typography variant="caption" className="PostDate" style={{margin:10}}>
                    {post.date}
                </Typography>
                {/* label, date,author */}
            </div>
            <br/>
            <div className="PostBody">
                <Typography variant="body">
                    {post.body}
                </Typography>
            </div>
            <br/>
            <div className="LikeAndDislike">
                <Button variant="outlined" color="primary" startIcon={<ThumbUp/>} className="LikeButton"  onClick={()=>{
                    setLikes((pre)=>pre+1)
                    console.log(post.likes)}}
                    >{likes}</Button>
                
                <Button variant="outlined" color="secondary" startIcon={<ThumbDown/> } className="DislikeButton"  onClick={()=>setDislikes((pre)=>pre+1)} >{dislikes} </Button>
            </div>
            {/* // Comments */}
            <div>
            <br/><br/>
                <Container maxWidth="md">
                    <Grid container>
                        <Grid item xs={12}>
                            <Card>
                                <CardHeader
                                    title={<b><i>Visitor Feedbacks/Experience</i></b>}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <Comments id={post._id}/>
                                </CardContent> 
                                
                            </Card>
                        </Grid>
                    </Grid>
                    <br/><br/>
                </Container>
            </div>
        </div>
    );
}
 
export default PostPage;