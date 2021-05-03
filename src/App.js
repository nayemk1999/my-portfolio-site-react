import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AboutContainer from './components/AboutContainer/AboutContainer';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home/Home';
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer';
import Resume from './components/Resume/Resume';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/projects'>
          <ProjectsContainer />
        </Route>
        <Route path='/resume'>
          <Resume />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/blogs'>
          <Blogs />
        </Route>
        <Route path='/about-me'>
          <AboutContainer />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
