import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/css/style.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/icofont/icofont.min.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/venobox/venobox.css";

// Leaflet map
//import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

class Pages extends Component {
  render() {
    const { title, slide } = this.props;
    return (
      <div>
        {/* hero */}
        <section id="hero">
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{ backgroundImage: `url(${slide})` }}
              >
                <div className="carousel-container">
                  <div className="carousel-content animate__animated animate__fadeInUp">
                    <h2>
                      {title}
                    </h2>
                    <p>
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                      dolorem mollitia ut. Similique ea voluptatem. Esse
                      doloremque accusamus repellendus deleniti vel. Minus et
                      tempore modi architecto.
                    </p>
                    <div className="text-center">
                      <Link to="#" className="btn-get-started">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{ backgroundImage: `url(${slide})` }}
              >
                <div className="carousel-container">
                  <div className="carousel-content animate__animated animate__fadeInUp">
                    <h2>Lorem Ipsum Dolor</h2>
                    <p>
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                      dolorem mollitia ut. Similique ea voluptatem. Esse
                      doloremque accusamus repellendus deleniti vel. Minus et
                      tempore modi architecto.
                    </p>
                    <div className="text-center">
                      <Link to="#" className="btn-get-started">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{ backgroundImage: `url(${slide})` }}
              >
                <div className="carousel-container">
                  <div className="carousel-content animate__animated animate__fadeInUp">
                    <h2>Sequi ea ut et est quaerat</h2>
                    <p>
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                      dolorem mollitia ut. Similique ea voluptatem. Esse
                      doloremque accusamus repellendus deleniti vel. Minus et
                      tempore modi architecto.
                    </p>
                    <div className="text-center">
                      <Link to="#" className="btn-get-started">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon icofont-simple-left"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>

            <a
              className="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon icofont-simple-right"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>

            <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
          </div>
        </section>
      </div>
    );
  }
}

export default Pages;