import React from "react";
import { Route } from "react-router-dom";

import Pages from '../views/Pages';
import HouseView from '../views/HouseView';
import slide2 from "../assets/img/slide/slide-2.jpg";

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