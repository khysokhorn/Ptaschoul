import React from "react";

function header() {
  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto">
            <a href="index.html">
              <span>Com</span>pany
            </a>
          </h1>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>

              <li className="drop-down">
                <a href="">loCATION</a>
                <ul>
                  <li className="active">
                    <a href="about.html">Phnom Penh</a>
                  </li>
                  <li>
                    <a href="team.html">Siem Reap</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="services.html">Map</a>
              </li>
              <li>
                <a href="portfolio.html">Booking</a>
              </li>
              <li>
                <a href="pricing.html">Login/Register</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
