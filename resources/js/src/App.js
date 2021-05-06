import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { getRequest, params, auth } from "./api/request";

import Home from './views/Homepage';
import Pages from './views/Pages';
import Booking from "./views/BookingPage";
import Map from './views/MapPage'
import Login from './views/Login'

import KhanRoute from './routes/KhanRoute';

import Header from './components/Header';
import Footer from './components/Footer';

import slide1 from "./assets/img/slide/slide-1.jpg";
import slide2 from "./assets/img/slide/slide-2.jpg";
import slide3 from "./assets/img/slide/slide-3.jpg";

const AuthContext = React.createContext();

export const Auth = AuthContext.Consumer;

export function useAuthContext() {
    return React.useContext(AuthContext);
}

const App = () => {
	const [khans, setKhans] = React.useState([]);
	const [isAuth, setAuth] = React.useState(false);
	const [loaded, setLoaded] = React.useState(false);
	
	React.useEffect(() => {
		getRequest(params.khans, (Khans) => setKhans(Khans));
		auth((_auth) => { setAuth(_auth); setLoaded(true) });
	}, []);
	//console.log(isAuth);
	return (
		<Router>
			<AuthContext.Provider value={ isAuth }>
			<Route component={Header} />
			<Route exact={true} path="/" component={Home} />
			<Route path="/home" component={Home} />
			<Route path="/location">
				<Pages slide={slide2} title={"Find your Favorite Location"} />
			</Route>
			<Route path="/about">
				<Pages slide={slide3} title={"About"} />
			</Route>
			<Route path="/login">
				<Login />
			</Route>
			<Route path="/contact">
				<Pages slide={slide2} title={"Contact"} />
			</Route>
			<Route path="/map" component = {Map} />
			<Route path="/booking">
			{ loaded ? (isAuth === true ? <Booking /> : <Login />) : null }
			</Route>
			<KhanRoute khans={khans}/>
			</AuthContext.Provider>
		</Router>
	);
}

export default App;