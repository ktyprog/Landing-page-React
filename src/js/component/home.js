import React from "react";

import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import Footer from "./footer";
import CardContainer from "./CardContainer";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<CardContainer />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}
