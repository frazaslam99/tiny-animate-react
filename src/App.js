import React from 'react';
import NavBar from './components/NavBar/NavBar';
import About from "./components/About/About"
import FeaturedImage from "./components/FeaturedImage/Featureimagegrid"
import Services from "./components/Services/Services"
import Blogs from "./components/Blogs/Blogs"



import './App.css';

function App() {
	return (
		<div className="App">
			<NavBar />
			 <FeaturedImage />
			<About />
			 <Services />	
			<Blogs />
		
			   
		</div>
	);
}

export default App;