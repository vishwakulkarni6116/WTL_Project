import { useState } from "react";
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import { ThumbDown, ThumbUp } from "@material-ui/icons";

const PostPage = () => {

    const [title, setTitle] = useState('Why you should stop investing in XXX');
    const [body, setBody] = useState(`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
    const [image, setImage] = useState('https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg');
    const [subtitle, setSubtitle] = useState("It's not really worth it man");
    const [label, setLabel] = useState('Academics');
    const [likes, setLikes] = useState(0);
    // fetch values here
    return (  
        <div className="PostPageClass">
            <h1>WELCOME</h1>
            <div className="PostInfo">
                <Typography variant="caption" className="PostLabel">
                    {label}
                </Typography>
                <Typography variant="caption" className="PostDate">
                    {`   23/23/2045   `}
                </Typography>
                {/* label, date,author */}
            </div>
            <br/>
            <br/>
            <div className="PostTitle">
                <Typography variant="h3" >
                   {title} 
                </Typography>
            </div>
            <br/>
            <div className="PostSubtitle">
                <Typography variant="subtitle" >
                   {subtitle} 
                </Typography>

            </div>
            <br/>
            <div className="PostImage">
                <img src={image}  height="400" ></img>
            </div>
            <br/>
            <div className="PostBody">
                <Typography variant="body">
                    {body}
                </Typography>
            </div>
            <br/>
            <div className="LikeAndDislike">
                <Button variant="outlined" color="primary" startIcon={<ThumbUp/>} className="LikeButton">Like</Button>
                
                <Button variant="outlined" color="secondary" startIcon={<ThumbDown/> } className="DislikeButton" >Dislike</Button>
            </div>
            // Comments
            <div></div>
        </div>
    );
}
 
export default PostPage;