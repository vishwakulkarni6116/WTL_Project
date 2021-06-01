import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from "@material-ui/core";
import Loading from "./Loading";
import axios from "axios";
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';



const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  fonts: {
    fontWeight: "bold"
  },
  inline: {
    display: "inline"
  }
}));

// const comments = [
//     {
//         id:1,
//         name:'Aditi',
//         email:'mantriaditi10@gmail.com',
//         body:'Mind Numbing Ride!! Must Try!'
//     },
//     {
//         id:2,
//         name:'Vishwa',
//         email:'vishwakulkarni6116@gmail.com',
//         body:'One of the Finest Roller Coasters!'
//     },
//     {
//         id:3,
//         name:'Atharva',
//         email:'atharvalipare@gmail.com',
//         body:'Indoor experience was amazing.'
//     },
// ];

export default function Comments(props){
  console.log("hiii")
  const classes = useStyles();
  const [comments, setcomments] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [feedback, setfeedback] = useState("")
  const user=JSON.parse(localStorage.getItem("user"))
  const [change, setchange] = useState(true)


  useEffect(()=>{
    axios.get('/comments')
    .then(comments=>{
      console.log(comments.data)
      setcomments(comments.data)
    })
    .then(()=>{
      setisLoading(false)
      console.log(comments)
    })
    .catch(err=>console.log(err))
  },[change])

  function handleSubmit(){
    axios.post('/comments',{
        userId:user._id,
        comment:feedback,
        postId:props.id
    })
    .then(res=>{
        console.log(res)
        var obj={
            userId:user,
            comment:feedback,
            postId:props.id
        }
        comments.push(obj)
        
        setchange(false)
        setfeedback("")
        
    })
    .catch(err=>console.log(err))
  }

  if(isLoading==true){
    return(
      <Loading/>
    )
  }
  else{
    if(comments){
    return (
      <List className={classes.root}>
        {comments.filter((comment)=>comment.postId==props.id).map((comment) => {
          console.log("Comment", comment);
          return (
            <React.Fragment key={comment._id}>
              <ListItem key={comment._id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src="/broken-image.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography className={classes.fonts}>
                      {comment.userId.name.fname} {comment.userId.name.lname}
                    </Typography>
                  }
                  secondary={
                      <>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                      </Typography>
                      {` - ${comment.comment}`}
                      </>
                  }
                />
              </ListItem>
              <Divider />
              
            
            </React.Fragment>
          );
        })}
        <br></br>
        <Container maxWidth="xl">
        <Grid container>
                <Grid item xs={12}>
                    <Card>
                        
                        <CardActions>
                            <TextField
                                id="outlined-multiline-static"
                                label="Add your Feedback/Experience"
                                multiline
                                fullWidth
                                rows={2}
                                value={feedback}
                                variant="outlined"
                                onChange={(e) => setfeedback(e.target.value)}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={handleSubmit}
                            >
                                Add
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
      </List>
    );
    }
  }
};
