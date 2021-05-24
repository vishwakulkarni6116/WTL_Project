import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
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
    width: '100%', // Fix issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [regId,setRegId] = useState("");
  const [passingYear,setPassingYear] = useState(0);
  const [dept,setDept] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const history = useHistory();

  function handleSubmit(){
    axios.post('/users/signup',{
      lname:lname,
      fname:fname,
      regId:regId,
      passingYear:passingYear,
      dept:dept,
      emailId:email,
      password:password

    })
    .then((res)=>{
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
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                onChange={(e)=>setFname(e.target.value)}
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={(e)=>setLname(e.target.value)}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="regid"
                label="PICT Registration ID"
                name="regid"
                onChange={(e)=>setRegId(e.target.value)}
                autoComplete="regid"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="passingyear"
                name="passingyear"
                variant="outlined"
                required
                fullWidth
                id="passingyear"
                onChange={(e)=>setPassingYear(e.target.value)}
                label="Passing Year"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="dept"
                label="Department"
                name="dept"
                onChange={(e)=>setDept(e.target.value)}
                autoComplete="dept"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                onChange={(e)=>setEmail(e.target.value)}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <p style={{color:"red"}}>{error}</p>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
      </Box>
    </Container>
  );
}