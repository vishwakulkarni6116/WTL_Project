import { useState } from "react";
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import { ThumbDown, ThumbUp } from "@material-ui/icons";
import NavBar1 from './NavBar1'
import NavBar from './NavBar'

const PostPage = ({post}) => {
    const [image, setImage] = useState('https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg');
    const [subtitle, setSubtitle] = useState("It's not really worth it man");
    const [label, setLabel] = useState('Academics');
    const [likes, setLikes] = useState(0);
    const user =JSON.parse(localStorage.getItem("user"))
    
    // fetch values here
    return (  
        <div className="PostPageClass">
            {user===null?<NavBar1 />:<NavBar/>}
            <div className="PostInfo">
                <Typography variant="caption" className="PostLabel">
                    {post.tag}
                </Typography>
                <Typography variant="caption" className="PostDate">
                    {post.date}
                </Typography>
                {/* label, date,author */}
            </div>
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
            <br/>
            <div className="PostBody">
                <Typography variant="body">
                    {post.body}
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