import './App.css';
//import SinglePost from './components/SinglePost';
import NavBar from './components/NavBar';
import NavBar1 from './components/NavBar1';
import Login from './components/SignIn';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Switch, Route, Redirect, withRouter,BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import Bookmarks from './components/Bookmarks'
import PostPage from './components/PostPage';
import CreatePost from './components/CreatePost'
import ContactUs from './components/ContactUs';
import { Create, PostAdd } from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            
            <Route exact path='/' component={()=><Home/>}></Route>
            <Route exact path='/signin' component={()=><SignIn/>}></Route>
            <Route exact path='/signup' component={()=><SignUp/>}></Route>
            <Route exact path='/home' component={()=><Home/>}></Route>
            <Route exact path='/bookmarks' component={()=><Bookmarks/>}></Route>
            <Route exact path='/post' component={()=><PostPage/>}></Route>
            <Route exact path='/postadd' component={()=><CreatePost/>}></Route>
            <Route exact path='/contactus' component={()=><ContactUs/>}></Route>
          <Redirect to='/home'></Redirect>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
