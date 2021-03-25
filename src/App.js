import React from 'react';
import NavBar from './components/NavBar/Navbarside';
import About from "./components/About/About"
import FeaturedImage from "./components/FeaturedImage/Featureimagegrid"
import Services from "./components/Services/Services"
import Blogs from "./components/Blogs/Blogs"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'




import './App.css';

function App() {
	
	return (
		<Router>
        <NavBar/>
       

        


            <Switch>
            <Route exact path="/" component={FeaturedImage} />
            <Route  exact path="/about" component={About}/>
            <Route exact path="/service" component={Services}/>
            <Route path="/blogs" component={Blogs}/>
            <Route path="" component={(()=><h3>404 Not Found</h3>)}/>


            </Switch>
        </Router>
		
	);
}

export default App;