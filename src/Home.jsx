import { Link } from 'react-router-dom';
import './App.css';
import googleplay from './assets/images/googleplay.png'
import appstore from './assets/images/appstore.png'
import logo from './assets/images/logo.png'
import logo2 from './assets/images/move-g.png'
import Header from './Header';
import vec from './assets/images/vec-q.png'
import ev from './assets/images/ev.png'
import Slider from './Slider';
import { Card } from 'react-bootstrap';
import SliderSecond from './SliderSecond';
import twit from './assets/images/twit.png'
import insta from './assets/images/insta.png'
import fb from './assets/images/fb.png'
import linked from './assets/images/linked.png'
import Mapsection from './Mapsection';
import Testimonial from './Testimonial';
import { useState } from 'react';
import b1 from './assets/images/b1.png'
import b22 from './assets/images/b22.png'
import b2 from './assets/images/b2.png'
import MapEmbed from './Iframe';
import red from './assets/images/red.png'
import green from './assets/images/green.png'
// import Map from './Map';

function App() {
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const openModal = () => setShowModal(true);

  // Function to close the modal
  const closeModal = () => setShowModal(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic (e.g., API call)
    console.log("Form Data Submitted: ", formData);
  };
  return (
    <>
      <div className="main-header">
        <Header />


        {/* ----main-imgs */}
        <div className="container">

          <div className="main-title" data-aos='fade-left' data-aos-delay='400'>

            <span data-aos='fade-left' data-aos-delay='400'>Charging a</span>
            <h1>SUSTAINABLE <br /> FUTURE</h1>
          </div>
        </div>


      </div>

      {/* ----------map section--------------- */}

      <section className="map-section">
        <div className="top-1">
          {/* <Map/> */}

          <MapEmbed/>

        </div>
        <div className="top-map">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-8">

              </div>
              <div className="col-12 col-md-4">
                <div className="box-map" data-aos='fade-up' data-aos-delay='400'>
                  <div className="f-box py-4">
                    <img src={logo2} alt="logo" className='box-log' />
                    <p className='py-3'>We are expanding our base all over India. Come Join Hands with Us </p>
                  </div>
                  <div className="second-box">
                    <p><img src={green} alt="green" /> Avilable Chargers</p>
                    <p> <img src={red} alt="red" />Upcoming Chargers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* =========== banner-app======= */}
      <section className='banner-app' >
        <h3> WE ARE AVAILABLE ON </h3>
        <div className="d-flex px-3 apps">
          <Link to="https://play.google.com/store/apps/details?id=com.moveepower&hl=en&pli=1">
            <img src={googleplay} alt="googleplay" />
          </Link>
          <Link to="https://apps.apple.com/in/app/moveepower/id6670391662">
            <img src={appstore} alt="appstore" />
          </Link>
        </div>

      </section>
      <section id='about'>
        <div className="main-part">
          <div className="img-sec"></div>
          <div className="content-sec">
            <h2>Movee Power</h2>
            <p data-aos='fade-up' data-aos-delay='400'>Introducing Movee Power, the newest brand in the realm of Electric Vehicle (EV) charging solutions, is all set to revolutionize the way we think about energy and mobility. With an innovative approach to charging technology and a deep commitment to sustainability, Movee Power is getting geared to meet the future needs of a world on the brink of an electric mobility transformation.
              <br /><br /><span className='iner-sec'> We offer a comprehensive range of advanced, user-friendly charging stations that can be customized to meet every requirement; residential or commercial, business, government entity, or individual, you have access to the perfect charging solution tailored to your specific needs. All this comes accompanied with a service commitment that will power the future.</span>
            </p>
            <div className="vec">
              <img src={vec} alt="vec" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="content-sli" data-aos='fade-left' data-aos-delay='400'>
                <h2 data-aos='fade-left' data-aos-delay='400'>60kw DC Charger</h2>

                <div className="">
                  <h5>Input Voltage</h5>
                  <p>3 Phase</p>
                </div>
                <div className="">
                  <h5>Conectivity</h5>
                  <p>GSM, Ethernet, WiFi</p>
                </div>
                <div className="">
                  <h5>CMS</h5>
                  <p>Avilable</p>
                </div>
                <div className="">
                  <h5>Compatible</h5>
                  <p>4 wheelers</p>
                </div>
                <div className="">
                  <h5>Output Type</h5>
                  <p>CCS 2</p>
                </div>
                <div className="">
                  <h5>Warranty</h5>
                  <p>1 Year</p>
                </div>
                <div className="">
                  <h5>User Authentication</h5>
                  <p>RFID, Mobile App, OCPP 1.6J</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={ev} alt="" className='img-fluid' data-aos='fade-left' data-aos-delay='400' />
            </div>
          </div>
        </div>
      </section>

      <section className='slider-bg' id='product'> 
        <div className="container">
          <Mapsection />

        </div>
      </section>
      <section className='slider-banner'>
        <center>
          <h2 className='slider-title' data-aos='fade-up' data-aos-delay='400'>WHY INVEST IN AN EV CHARGER?</h2>
          <div className="" data-aos='fade-up' data-aos-delay='400'>
            <Slider data-aos='fade-up' data-aos-delay='400' />

          </div>
        </center>

      </section>

      <section className='py-5' id="blog">
        <div className="container">

          <center>
            <h2 className='slider-title' data-aos='fade-up' data-aos-delay='400'>BLOG</h2>
          </center>
          <div className="row">
            <div className="col-md-4 my-2">
              <Card >
                <Card.Img variant="top" src={b1} />
                <Card.Body className='p-3' style={{ backgroundColor: "#68BD45", color: "#fff", fontWeight: "300" }}>
                  <Card.Title>Science Direct</Card.Title>
                  <Card.Text>
                  An in-depth analysis of electric vehicle charging station infrastructure, policy implications, and future trends
                  </Card.Text>
                  <Link to="/science" className='buy-btns'>Read More</Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 my-2">
              <Card >
                <Card.Img variant="top" src={b22} />
                <Card.Body className='p-3' style={{ backgroundColor: "#68BD45", color: "#fff", fontWeight: "300" }}>
                  <Card.Title>Nature Communications</Card.Title>
                  <Card.Text>
                  Effects of electric vehicle charging stations on the economic vitality of local businesses
                  </Card.Text>
                  <Link to="/nature" className='buy-btn'>Read More</Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 my-2">
              <Card >
                <Card.Img variant="top" src={b2} />
                <Card.Body className='p-3' style={{ backgroundColor: "#68BD45", color: "#fff", fontWeight: "300" }}>
                  <Card.Title>IEEE Spectrum</Card.Title>
                  <Card.Text>
                  The EV Transition Explained Charger Infrastructure
                  </Card.Text>
                  <Link to="/ieee" className='buy-btn'>Read More</Link>
                </Card.Body>
              </Card>
            </div>


          </div>
        </div>

        <center>
          <h2 className='slider-title mt-5' data-aos='fade-up' data-aos-delay='400'>ARTICLE</h2>
        </center>
      </section>

      <section className='shape mt-4'>
        <div className="" data-aos='fade-up' data-aos-delay='400'>

          <SliderSecond />
        </div>
      </section>
      <section className='slider-banner'>
        <Testimonial />
      </section>
      <section className='banner-secs'>
        <div className="container">
          <div className="main-list">

            <h2 data-aos='fade-left' data-aos-delay='400'>TRUE DISRUPTORS <br /> ARE RARE!</h2>
            <button data-aos='fade-up' data-aos-delay='400' onClick={openModal}>GET IN TOUCH</button>
          </div>
        </div>

      </section>

      <section className='third-banner' id='contact'> 
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 p-md-4">
              <div className="bg-box" data-aos='fade-up' data-aos-delay='400'>
                <div className="bg-1" data-aos='fade-up' data-aos-delay='500'>
                  <h2>Interact With Us</h2>
                  <p>If you have any questions or need help, feel free to contact with our team. </p>
                </div>
                <div className="bg-2" data-aos='fade-up' data-aos-delay='500'>
                  <div className="detial">
                    <p className='lab'>Phone :</p>
                    <p>+91 87547 29955</p>
                  </div>
                  <div className="detial">
                    <p className='lab'>Mail :</p>
                    <p>support@movee.cab</p>
                  </div>
                  <div className="detial">
                    <p className='lab'>Location:</p>
                    <p>Miraturus Ventures Private Limited.,
                      No. 86, 1st Floor, Deivanayaki Complex, Sengupta Street, Ramnagar,
                      Coimbatore 641 009</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <footer>
        <div className="banner-app1">
          <div className="container">
            <div className="row">
              <div className="col-6  col-md-4">
                <img src={logo} alt="logo" className="footer-logo" />
              </div>
              <div className="col-6 col-md-4">
                <div className="social-logo">
                  <Link to="https://www.facebook.com/moveepower"><img src={fb} alt="fb" /></Link>
                  <Link to=""><img src={twit} alt="twit" /></Link>
                  <Link to=""><img src={linked} alt="linkedin" /></Link>
                  <Link to="https://www.instagram.com/movee_power/"><img src={insta} alt="insta" /></Link>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <h2 className='text-white'>We Are Available On</h2>
                <div className="app-link">
                  <Link to="https://play.google.com/store/apps/details?id=com.moveepower&hl=en&pli=1"><img src={googleplay} alt="playstore" /></Link>
                  <Link to="https://apps.apple.com/in/app/moveepower/id6670391662"><img src={appstore} alt="" /></Link>
                </div>
              </div>
            </div>
            <ul className='list-navs my-4'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="#about">About Us</Link></li>
              <li><Link to="#product">Product</Link></li>
              <li><Link to="#blog">Blog</Link></li>
              <li><Link to="#contact">Contact Us</Link></li>
            </ul>
            {/* <p className='text-white my-5 fs-5 text-center'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit illo possimus iste sapiente vitae ipsa dolorem obcaecati soluta vero! Doloremque.
              </p> */}
            <br />

            <div className="footer-bottom">
              &copy; 2024 Movee Power. All rights reserved.
            </div>


          </div>
        </div>
      </footer>


      {/* ================modal form ========== */}

      {showModal && (
        <div
          className="modal fade show"
          role="dialog"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content p-5">
              <center><h3>Contact Us</h3></center>
              <div className="close-btn" onClick={closeModal}>X</div>             <form onSubmit={handleSubmit}>
                {/* Name input */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email input */}
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Contact Number input */}
                <div className="form-group">
                  <label htmlFor="contact">Contact Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="contact"
                    name="contact"
                    placeholder="Enter your contact number"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Message text area */}
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-primary mt-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}


    </>
  );
}

export default App;
