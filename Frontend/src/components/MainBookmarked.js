import React from 'react';
import Grid from '@material-ui/core/Grid';
import BookmarkedPosts from './BookmarkedPosts.js';



export default function Main(props) {
  console.log(props.posts)
  var filteredPosts = props.posts.filter((post)=>post.tag==props.tag||props.tag=="Show All")
  console.log(props.tag)

  return (
    <Grid item xs={12} md={8}>
      {filteredPosts.map((post) => (
      <BookmarkedPosts key={post.title} post={post} />
    ))}
    </Grid>
  );


}

