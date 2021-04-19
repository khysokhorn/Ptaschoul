import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/css/style.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/icofont/icofont.min.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/venobox/venobox.css";

// slder
import slide1 from "../assets/img/slide/slide-1.jpg";
import slide2 from "../assets/img/slide/slide-2.jpg";
import slide3 from "../assets/img/slide/slide-3.jpg";

// Leaflet map
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

//Data
import { getRequest, params } from "../api/request";

class Homepage extends Component {

  componentDidMount() {
    getRequest(params.khans, (Khans) => this.setState({ Khans }));
  }

  render() {
    const position = [51.505, -0.09];
    const { Khans } = this.state || {};

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
                style={{ backgroundImage: `url(${slide1})` }}
              >
                <div className="carousel-container">
                  <div className="carousel-content animate__animated animate__fadeInUp">
                    <h2>
                      Welcome to <span>PtasChuol</span>
                    </h2>
                    <p>
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                      dolorem mollitia ut. Similique ea voluptatem. Esse
                      doloremque accusamus repellendus deleniti vel. Minus et
                      tempore modi architecto.
                    </p>
                    <div className="text-center">
                      <a href="#hero" className="btn-get-started">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{ backgroundImage: `url(${slide2})` }}
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
                      <a href="#hero" className="btn-get-started">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{ backgroundImage: `url(${slide3})` }}
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
                      <a href="#hero" className="btn-get-started">
                        Read More
                      </a>
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

        {/* map  */}

        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>

        {/* body contain */}
        <main id="main">
          {/* Service Selection */}

          <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Location in Phnom Penh</h2>
                <p>
                  Laborum repudiandae omnis voluptatum consequatur mollitia ea
                  est voluptas ut
                </p>
              </div>

              <div className="row justify-content-center">
                {
                  Khans ? Khans.map(Khan => (
                    <div
                      key={Khan.name}
                      className="col-lg-3 col-md-6 d-flex align-items-stretch m-3"
                    >
                      <Link className="hover-text-decoration-none" to={`/${Khan.title}`}>
                      <div className="card">
                        <img className="card-img-top" src={Khan.img} alt={Khan.name} />
                        <span class="bg-theme"></span>
                        <div className="card-body bg-dark">
                          <h5 className="text-white">{Khan.name}</h5>
                        </div>
                      </div>
                      </Link>
                    </div>
                  )) : null
                }
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Homepage;