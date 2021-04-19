import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './views/Homepage';
import Pages from './views/Pages';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// slider
import slide2 from "./assets/img/slide/slide-2.jpg";
import slide3 from "./assets/img/slide/slide-3.jpg";

const App = () => {
	return (
		<Router>
			<ScrollToTop>
				{/* Header */}
				<Route render={Header} />

				{/* Body */}
				<Route exact={true} path="/" component={Home} />
				<Route path="/location">
					<Pages slide={slide2} title={"Find your Favorite Location"} />
				</Route>
				<Route path="/phnom-penh">
					<Pages slide={slide3} title={"Phnom Penh"} />
				</Route>
				<Route path="/siem-reap">
					<Pages slide={slide2} title={"Siem Reap"} />
				</Route>
				<Route path="/about">
					<Pages slide={slide3} title={"About"} />
				</Route>
				<Route path="/register">
					<Pages slide={slide2} title={"Register"} />
				</Route>
				<Route path="/map">
					<Pages slide={slide3} title={"Map"} />
				</Route>
				<Route path="/contact">
					<Pages slide={slide2} title={"Contact"} />
				</Route>
				<Route path="/booking">
					<Pages slide={slide3} title={"Booking"} />
				</Route>

				{/* Footer */}
				<Route render={Footer} />
			</ScrollToTop>
		</Router>
	);
}

export default App;