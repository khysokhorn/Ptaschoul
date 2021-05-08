import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getRequest, params } from "../api/request";
import { Auth } from '../App';
 
class Header extends Component {
  constructor(props) {
	  super(props);
	  this.state = { auth: false };
  }
  componentDidMount() {
    getRequest(params.khans, (khans) => this.setState( {...this.state, khans} ));
  }

  render() {
    const { khans } = this.state || {};
    const { pathname:path } = this.props.location;
    const active = p => path === p ? "active" : "";
    const activeLocation = () => {
      if(khans) {
        const loc = khans.map(khan => khan.title);
        loc.push('location');
        for(const khan of loc)
          if(path === '/'+khan)
            return "active";
      }
      return "";
    };

	const handleClick = (e) => { 
		e.preventDefault();
		document.getElementById('logout-form').submit();
	};
	
    return (
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto">
            <Link to="/">
              <span>Ptas</span>Chuol
            </Link>
          </h1>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className={active('/')}>
                <Link to="/">Home</Link>
              </li>

              <li className={"drop-down " + activeLocation()}>
                <Link to="/location">location</Link>
                <ul>
                  {
                    khans ? khans.map((khan, i) => 
                    <li
                    key={khan.title}
                    className={active('/'+khan.title)}
                    >
                      <Link to={khan.title}>{khan.name}</Link>
                    </li>) : null
                  }
                </ul>
              </li>

              <li className={active('/map')}>
                <Link to="/map">Map</Link>
              </li>
              <li className={active('/booking')}>
                <Link to="/booking">Booking</Link>
              </li>
			  <Auth>
			  {
				  auth => auth ? null :
				  <li className={active('/register')}>
					<a href="/login">Login/Register</a>
				  </li>
			  }
			  </Auth>
              <li className={active('/contact')}>
                <Link to="/contact">Contact</Link>
              </li>
			  <Auth>
			  {
				  auth => auth ?  			  
				  <li className={active('/logout')}>
					<a href="/logout" onClick={handleClick}>Logout</a>
					<form id="logout-form" action="/logout" method="POST" className="d-none" />
				  </li>
				  : null
			  }
			  </Auth>
            </ul>
          </nav>
        </div>
      </header>
    )
  };
}

export default Header;