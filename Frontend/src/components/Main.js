import React,{useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import FeaturedPost from './FeaturedPost';
import Loading from './Loading';
import axios from 'axios';



export default function Main(props) {

  // return(
  //   <div></div>)
  // }
  const posts =JSON.parse(localStorage.getItem("posts")).reverse()
  console.log(posts)
  var filteredPosts = posts.filter((post)=>post.tag==props.tag||props.tag=="Show All")

    return (
      <Grid item xs={12} md={8}>
        {filteredPosts.map((post) => (
        <FeaturedPost key={post._id} post={post}/>
      ))}
      </Grid>
    );

}

