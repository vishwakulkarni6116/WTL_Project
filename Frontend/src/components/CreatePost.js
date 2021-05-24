import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import MenuItem from '@material-ui/core/MenuItem';
import { CloudUpload, ContactsOutlined } from '@material-ui/icons';
const CreatePost = () => {
    const labels = [
        {
          value: 'placements',
          label: 'Placements',
        },
        {
          value: 'college_club',
          label: 'College Club',
        },
        {
          value: 'academics',
          label: 'Academics',
        },
        {
          value: 'other',
          label: 'Other',
        },
      ];
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [label, setLabel] = useState('Academics');
    const handleChange = (event) => {
        setLabel(event.target.value);
      };
    return ( 
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
            <div className="CreateLabel">
            <TextField
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
                </TextField>
            </div>
            <br/>
            <div className="CreateImage">
            {/* This is not working yet! */}
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                value={image}
                onChange = {(e) => setImage(image)}
                />
            <label htmlFor="raised-button-file">
            <Button variant="raised" color="primary" component="span" startIcon={<CloudUpload/>}>
                Upload an Image for your post
            </Button>
            </label> 
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
            <Button className=""
            onClick= {()=> console.log("posted")}
            variant="contained"
            color="primary"
            size="large"
            endIcon = {<SendIcon/>}
            >Post
            </Button>
        </div>
     );
}
 
export default CreatePost;