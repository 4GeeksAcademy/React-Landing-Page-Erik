import React from "react";
import NavBar from "./NavBar";
import Carousel from "./Carousel";
import Card from "./Card";
import Footer from "./Footer";
//create your first component
const Home = () => {
	return (
		<div className="mainContainer">
			<NavBar/>
			<Carousel/>
			<div className="container d-flex gap-5 mt-4 mb-3">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
			<Footer/>
		</div>
	);
};
 
export default Home;