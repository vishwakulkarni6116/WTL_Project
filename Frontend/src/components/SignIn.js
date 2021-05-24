import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {useHistory} from 'react-router'

const useStyles = makeStyles((theme) => ({
  paper: {
    //marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 35,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const history = useHistory();

  function handleSubmit(){
    // console.log("hello");
    // console.log("email"+email)
    // console.log("pass"+ password)
      axios.post("/users/signin",{
        emailId:email,
        password:password
      })
      .then(res=>{
        if(res.data.success===true){
          localStorage.setItem("user",JSON.stringify(res.data.user));
          setError("");
          // alert("succ"+res.data.user);
          history.push('/');
        }
        else{
          setError(res.data.err);
          // alert("fail"+res.data.err);
        }
      })
      .catch(err=>{
        console.log(err);
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <br></br>
      <Box border={1}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e)=>setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <p style={{color:"red"}}>{error}</p>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Box>
    </Container>
  );
}