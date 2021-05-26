import './App.css';
//import SinglePost from './components/SinglePost';
import {useState,useEffect} from 'react'
import Login from './components/SignIn';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import Bookmarks from './components/Bookmarks'
import PostPage from './components/PostPage';
import CreatePost from './components/CreatePost'
import ContactUs from './components/ContactUs';
import { Create, PostAdd } from '@material-ui/icons';
import Loading from './components/Loading';
import axios from 'axios'


function App() {

  const [posts,setPosts] = useState([])
const [isLoading,setIsLoading] = useState(true);

useEffect(() => {
  axios.get('/posts')
  .then(res=>{
    console.log(res.data);
    

    setPosts(res.data)
    localStorage.setItem("posts",JSON.stringify(res.data));
    setIsLoading(false);
  })
  .catch(err=>console.log(err))
},[]);

  const postWithId=({match})=>{
    return(
      <div>
        <PostPage post={posts.filter((post)=>post._id==match.params.id)[0]}/>
      </div>
    )
  }


  if(isLoading===true){
    return(
      <Loading/>
    )
  }
  else{
    console.log(posts)
  return (
    <div className="App">
      {/* {user===null?<NavBar1 />:<NavBar/>} */}
      <BrowserRouter>
          <Switch>
            
            <Route exact path='/' component={()=><Home posts={posts}/>}></Route>
            <Route exact path='/signin' component={()=><SignIn/>}></Route>
            <Route exact path='/signup' component={()=><SignUp/>}></Route>
            <Route exact path='/home' component={()=><Home posts={posts}/>}></Route>
            <Route exact path='/bookmarks' component={()=><Bookmarks/>}></Route>
            <Route exact path='/post' component={()=><PostPage/>}></Route>
            <Route exact path='/post/:id' component={postWithId}></Route>
            <Route exact path='/createpost' component={()=><CreatePost/>}></Route>
            <Route exact path='/contactus' component={()=><ContactUs/>}></Route>
          <Redirect to='/home'></Redirect>
          </Switch>
        </BrowserRouter>
    </div>
  );
  }
}

export default App;
