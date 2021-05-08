import React from "react";
import { Route } from "react-router-dom";

import Pages from '../views/Pages';
import HouseView from '../views/HouseView';
const slide2 = 'https://a.cdn-hotels.com/gdcs/production66/d41/07b19af0-8ab2-492e-97af-1ba8c6cac50a.jpg';


const KhanRoute = (props) => {
	const { khans } = props;
	return (
		khans.map((khan, i) => 
			<Route key={i + khan.title} exact path={`/${khan.title}`}>
				<Pages slide={slide2} title={khan.name} />
				<HouseView />
			</Route>
		)
	);
}

export default KhanRoute;