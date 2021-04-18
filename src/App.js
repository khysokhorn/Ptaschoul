import React, { Component } from "react";
import "./assets/css/style.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/icofont/icofont.min.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/animate.css/animate.min.css";
import "./assets/vendor/venobox/venobox.css";

// slder
import slide1 from "./assets/img/slide/slide-1.jpg";
import slide2 from "./assets/img/slide/slide-2.jpg";
import slide3 from "./assets/img/slide/slide-3.jpg";

// Leaflet map
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// java script
import { BrowserRouter as Router, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/HomePage";
import Rent from "./components/Rent";
import Cars from "./components/CarsSelectionPage";
import About from "./components/AboutPage";
import Faq from "./components/FaqPage";
import ProductSinglePage from "./components/ProductSinglePage";
import Login from "./components/LoginPage";
import SignUp from "./components/SignUpPage";

class App extends Component {
  render() {
    const position = [51.505, -0.09];
    return (
      <div>
        {/* header */}
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

        {/* body */}
        {/* hero */}
        <section id="hero">
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div class="carousel-inner" role="listbox">
              <div
                class="carousel-item active"
                style={{ backgroundImage: `url(${slide1})` }}
              >
                <div class="carousel-container">
                  <div class="carousel-content animate__animated animate__fadeInUp">
                    <h2>
                      Welcome to <span>Company</span>
                    </h2>
                    <p>
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                      dolorem mollitia ut. Similique ea voluptatem. Esse
                      doloremque accusamus repellendus deleniti vel. Minus et
                      tempore modi architecto.
                    </p>
                    <div class="text-center">
                      <a href="" class="btn-get-started">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="carousel-item"
                style={{ backgroundImage: `url(${slide2})` }}
              >
                <div class="carousel-container">
                  <div class="carousel-content animate__animated animate__fadeInUp">
                    <h2>Lorem Ipsum Dolor</h2>
                    <p>
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                      dolorem mollitia ut. Similique ea voluptatem. Esse
                      doloremque accusamus repellendus deleniti vel. Minus et
                      tempore modi architecto.
                    </p>
                    <div class="text-center">
                      <a href="" class="btn-get-started">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="carousel-item"
                style={{ backgroundImage: `url(${slide3})` }}
              >
                <div class="carousel-container">
                  <div class="carousel-content animate__animated animate__fadeInUp">
                    <h2>Sequi ea ut et est quaerat</h2>
                    <p>
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                      dolorem mollitia ut. Similique ea voluptatem. Esse
                      doloremque accusamus repellendus deleniti vel. Minus et
                      tempore modi architecto.
                    </p>
                    <div class="text-center">
                      <a href="" class="btn-get-started">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              class="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon icofont-simple-left"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>

            <a
              class="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon icofont-simple-right"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>

            <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
          </div>
        </section>
       
        {/* map  */}
       
        /* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
<TileLayer
  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={position}>
  <Popup>
    A pretty CSS3 popup. <br /> Easily customizable.
  </Popup>
</Marker>
</MapContainer> */

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

              <div className="row">
                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="icon-box iconbox-blue">
                    <div className="icon">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          stroke-width="0"
                          fill="#f5f5f5"
                          d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                        ></path>
                      </svg>
                      <i className="bx bxl-dribbble"></i>
                    </div>
                    <h4>
                      <a href="">Lorem Ipsum</a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon-box iconbox-orange ">
                    <div className="icon">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          stroke-width="0"
                          fill="#f5f5f5"
                          d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                        ></path>
                      </svg>
                      <i className="bx bx-file"></i>
                    </div>
                    <h4>
                      <a href="">Sed Perspiciatis</a>
                    </h4>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="icon-box iconbox-pink">
                    <div className="icon">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          stroke-width="0"
                          fill="#f5f5f5"
                          d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                        ></path>
                      </svg>
                      <i className="bx bx-tachometer"></i>
                    </div>
                    <h4>
                      <a href="">Magni Dolores</a>
                    </h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="icon-box iconbox-yellow">
                    <div className="icon">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          stroke-width="0"
                          fill="#f5f5f5"
                          d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
                        ></path>
                      </svg>
                      <i className="bx bx-layer"></i>
                    </div>
                    <h4>
                      <a href="">Nemo Enim</a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon-box iconbox-red">
                    <div className="icon">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          stroke-width="0"
                          fill="#f5f5f5"
                          d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"
                        ></path>
                      </svg>
                      <i className="bx bx-slideshow"></i>
                    </div>
                    <h4>
                      <a href="">Dele Cardo</a>
                    </h4>
                    <p>
                      Quis consequatur saepe eligendi voluptatem consequatur
                      dolor consequuntur
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="icon-box iconbox-teal">
                    <div className="icon">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          stroke-width="0"
                          fill="#f5f5f5"
                          d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"
                        ></path>
                      </svg>
                      <i className="bx bx-arch"></i>
                    </div>
                    <h4>
                      <a href="">Divera Don</a>
                    </h4>
                    <p>
                      Modi nostrum vel laborum. Porro fugit error sit minus
                      sapiente sit aspernatur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* footer */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>Company</h3>
                  <p>A108 Adam Street New York, NY 535022 United States</p>
                </div>

                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Terms of service</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Product Management</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Marketing</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Graphic Design</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Join Our Newsletter</h4>
                  <p>
                    Tamen quem nulla quae legam multos aute sint culpa legam
                    noster magna
                  </p>
                  <form action="" method="post">
                    <input type="email" name="email"></input>
                    <input type="submit" value="Subscribe"></input>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="container d-md-flex py-4">
            <div className="mr-md-auto text-center text-md-left">
              <div className="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>Company</span>
                </strong>
                . All Rights Reserved
              </div>
              <div className="credits">
                Designed by{" "}
                <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
              <a href="#" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="bx bxl-skype"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

/* <Router>
<ScrollToTop>
  <Route render={props => {
    let pageclassNameNameName = props.location.pathname === "/" ? "following-nav-bar" : "nav-background"
    return <Header pageclassNameNameName={pageclassNameNameName} />
  }} />
  <Route exact={true} path="/" component={Home}/>
  <Route path="/rent" component={Rent}/>
  <Route path="/cars/vehicles" component={Cars}/>
  <Route path="/vehicle/:id" component={ProductSinglePage}/>
  <Route path="/about" component={About}/>
  <Route path="/faqs" component={Faq}/>
  <Route path="/login" component={Login}/>
  <Route path="/sign-up" component={SignUp}/>
  <Footer />
</ScrollToTop>
</Router> */

// main contain

{
  /* main contain */
}

// open map
