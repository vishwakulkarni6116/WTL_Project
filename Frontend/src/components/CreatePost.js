import Typography from '@material-ui/core/Typography';
import React,{ useState,useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { CloudUpload, ContactsOutlined } from '@material-ui/icons';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import NavBar1 from './NavBar1'
import NavBar from './NavBar'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CreatePost = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [imageName, setImageName] = useState('Choose file');
  const [subtitle, setSubtitle] = useState('');
  const [tag, setTag] = useState('');
  const user =JSON.parse(localStorage.getItem("user"))
  const [error,setError] = useState('');
  const history = useHistory();
  const posts =JSON.parse(localStorage.getItem("posts"))

  useEffect(() => {
    console.log(imageName)
  },[imageName]);

  const handleChange = (event) => {
    setTag(event.target.value);
  };


    
    //userId to be added
    function handleSubmit(){
      const data = new FormData()
      data.append("file",image)
      data.append("upload_preset","wtl-project")
      data.append("cloud_name","vishwa-cloud")
      fetch("https://api.cloudinary.com/v1_1/vishwa-cloud/image/upload",{
        method:"post",
        body:data
      })
      .then(res=>res.json())
      .then(data=>{
        // setUrl(data.url)
        console.log(data.url)
        axios.post('/posts',{
          userId:user._id,
          title:title,
          subtitle:subtitle,
          body:body,
          tag:tag,
          image:data.url
        })
        .then(res=>{
          posts.push(res.data)
          res.data.userId = user;
          // localStorage.removeItem("posts")
          localStorage.setItem("posts",JSON.stringify(posts))
          setError("")
          console.log(posts);          
        })
        .then((data)=>{
          history.push('/');
        })
        .catch(err=>{
          setError("Error occure!!!") 
        })
      })
      .catch(err=>setError("Error occure!!!"))
    }

    return (
      <div>
        {user===null?<NavBar1 />:<NavBar/>}
        <div className="CreatePost">
        <h1>
            Create a post
        </h1>
        <div className="CreateTitle">
        
            <TextField
            className="outlined-basic1" label="Title" 
            variant="outlined"
            type="text" 
            required 
            value={title}
            onChange= {(e) => setTitle(e.target.value)}
            fullWidth
            
            />
        </div>
        <br/>
        <div className="CreateSubtitle">
        <TextField
            className="outlined-basic1" label="Subtitle" 
            variant="outlined"
            type="text" 
            value={subtitle}
            onChange= {(e) => setSubtitle(e.target.value)}
            multiline
            fullWidth
            />
        </div>
        <br/>
        <div >
        <FormControl variant="outlined" fullWidth className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Tag</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={tag}
          onChange={handleChange}
          label="Tag"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Machine Learning">Machine Learning</MenuItem>
          <MenuItem value="Cryptography">Cryptography</MenuItem>
          <MenuItem value="Artificial Intelligence">Artificial Intelligence</MenuItem>
          <MenuItem value="Web Development">Web Development</MenuItem>
          <MenuItem value="College Events">College Events</MenuItem>
          <MenuItem value="Blockchain">Blockchain</MenuItem>
          <MenuItem value="Mental Health">Mental Health</MenuItem>
          <MenuItem value="Android Developement">Android Developement</MenuItem>
          <MenuItem value="Books">Books</MenuItem>
          <MenuItem value="Philosophy">Philosophy</MenuItem>
          <MenuItem value="Data Science">Data Science</MenuItem>
        </Select>
      </FormControl>
        </div>
        {/* Temporary my code
        <div className="CreateLabel">
        <FormControl variant="outlined" fullWidth className={classes.formControl}>
          <InputLabel id="tagLabel" >Tag</InputLabel>
            <Select
            labelId="tagLabel"
            id="tag"
            value={tag}
            onChange={(e)=>{
              console.log(e.target.value)
              setTag(e.target.value)
            }}
            
            >
        <MenuItem value="">
            <em>None</em>
        </MenuItem>
        <MenuItem value="Academics">Academics</MenuItem>
        <MenuItem value="College Events">College Events</MenuItem>
        <MenuItem value="Placements">Placements</MenuItem>
        </Select>
    </FormControl>
    </div> */}
        {/* <TextField
            className="outlined-basic1" label="Label" 
            variant="outlined"
            type="text" 
            select
            value={label}
            // onChange= {(e) => setLabel(e.target.value)}
            multiline
            fullWidth
            >
            
            {labels.map((option) => (
        <MenuItem key={option.value} value={option.value}>
        {option.label}
        </MenuItem>
    ))}
            </TextField> */}
        
        <br/>
        <div className="CreateImage">
        {/* This is not working yet! */}
        {/* <input
            accept="image/*"
            style={{ display: 'none' }}
            id="raised-button-file"
            multiple
            type="file"
            value={image}
            onChange = {(e) => setImage(image)}
            /> */}
        {/* <label htmlFor="raised-button-file">
          <input type="file" onChange={(e)=>console.log(e.target.files)}></input>
        <Button variant="raised" color="primary" component="span" startIcon={<CloudUpload/>}>
            Upload an Image for your post
        </Button>
        </label>  */}
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupFileAddon01">
              Upload
            </span>
          </div>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
              onChange={(e)=>{
                setImageName(e.target.files[0].name);
                setImage(e.target.files[0]);
                
              }}
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              {imageName}
            </label>
          </div>
        </div>
        </div>
        <br/>
        <div className="CreateBody">
        <TextField
            className="outlined-basic1" label="Body" 
            variant="outlined"
            type="text" 
            required 
            value={body}
            multiline
            onChange= {(e) => setBody(e.target.value)}
            fullWidth
            rows = "20"
            />
        </div>
        <br/>
        <p style={{color:"red"}}>{error}</p>
        <Button className=""
        type="button"
        onClick= {handleSubmit}
        variant="contained"
        color="primary"
        size="large"
        endIcon = {<SendIcon/>}
        >Post
        </Button>
    </div>
    </div>
  );
}
 
export default CreatePost;