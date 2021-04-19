import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
            <li>
              <Link to="/">Home</Link>
            </li>

            <li className="drop-down">
              <Link to="/location">location</Link>
              <ul>
                <li className="active">
                  <Link to="/phnom-penh">Phnom Penh</Link>
                </li>
                <li>
                  <Link to="/siem-reap">Siem Reap</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/map">Map</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
            <li>
              <Link to="/register">Login/Register</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
