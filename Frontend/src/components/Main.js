import React,{useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import FeaturedPost from './FeaturedPost';
import Loading from './Loading';
import axios from 'axios';

// const featuredPosts = [
//   {
//     title: 'Post Title',
//     date: 'Nov 12',
//     author: 'Aditi',
//     tag:'Web Developement',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     author: 'Aditi',
//     tag:'Machine Learning',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
//   {
//     title: 'New Post',
//     date: 'Nov 12',
//     author: 'Aditi' ,
//     tag:'Android Developement',     
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
//   {
//     title: 'Yet Another Post',
//     date: 'Nov 12',
//     author: 'Aditi' , 
//     tag:'Cryptography',  
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
// ];

export default function Main(props) {

const [featuredPosts,setFeaturedPosts] = useState([])
const [isLoading,setIsLoading] = useState(true);

useEffect(() => {
  axios.get('/posts')
  .then(res=>{
    console.log(res.data);
    setIsLoading(false);
    setFeaturedPosts(res.data)
  })
  .catch(err=>console.log(err))
},[]);

  
    return (
      <Grid item xs={12} md={8}>
        {featuredPosts.map((post) => (
        <FeaturedPost key={post.title} post={post} isLoading={isLoading}/>
      ))}
      </Grid>
    );

}

