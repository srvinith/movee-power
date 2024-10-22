import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ev3 from './assets/images/ev-3.3.webp'
import ev15 from './assets/images/ev15.webp'
import ev22 from './assets/images/ev22.webp'
import ev30 from './assets/images/ev30.webp'
import ev60 from './assets/images/ev60.webp'
import ev7 from './assets/images/ev7.4.webp'
import ev10 from './assets/images/ev-10.webp'

const Mapsection = () => {
  return (
    <Carousel
   
    
    className='slider-bg'>

      <div className="slider-1">
        <div className="row d-flex flex-column-reverse flex-md-row">
          <div className="col-md-8">
            <div className="slider-content">
              <h2>Our Product</h2>

              <div className="list-of-item">
                <h4>3.3 KW AC CHARGER</h4>

                <span>Compatible - 2|3 Wheelers</span><br />
                <span>Input VOltage - 1 Phase</span><br />
                <span>User Authentication - RFID | Mobile App | OCPP 1.6J</span><br />
                <span>Contectivity -GSM | Ethernet | WiFi</span><br />
                <span>Mounting - Wall | Pole Mounting</span><br />
                <span>Warranty - 1 Year</span><br />
                <span>CMS - Available</span> <br /><br />
                <a href="tel:+918754729955" className='buy-btn'>Buy Now</a>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src={ev3} alt="ev" className='img-fluid' />
          </div>
        </div>
        <img src={ev3} alt="ev" className='imgsd' />
      </div>

      <div className="slider-1">
        <div className="row d-flex flex-column-reverse flex-md-row">
          <div className="col-md-8">
            <div className="slider-content">
              <h2>Our Product</h2>

              <div className="list-of-item">
                <h4>7.4 KW AC CHARGER</h4>

                <span>Compatible - 4 Wheelers</span><br />
                <span>Input VOltage - 1 Phase</span><br />
                <span>User Authentication - RFID | Mobile App | OCPP 1.6J</span><br />
                <span>Contectivity -GSM | Ethernet | WiFi</span><br />
                <span>Mounting - Wall | Pole Mounting</span><br />
                <span>Warranty - 1 Year</span><br />
                <span>CMS - Available</span> <br /><br />
                <a href="tel:+918754729955" className='buy-btn'>Buy Now</a>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src={ev7} alt="ev" className='img-fluid' />
          </div>
        </div>
        <img src={ev7} alt="ev" className='imgsd' />
      </div>

      <div className="slider-1">
        <div className="row d-flex flex-column-reverse flex-md-row">
          <div className="col-md-8">
            <div className="slider-content">
              <h2>Our Product</h2>

              <div className="list-of-item">
                <h4>10 KW AC CHARGER</h4>

                <span>Compatible - 2 Wheelers</span><br />
                <span>Input VOltage - 1 Phase</span><br />
                <span>User Authentication - RFID | Mobile App | OCPP 1.6J</span><br />
                <span>Contectivity -GSM | Ethernet | WiFi</span><br />
                <span>Mounting - Wall | Pole Mounting</span><br />
                <span>Warranty - 1 Year</span><br />
                <span>CMS - Available</span> <br /><br />
                <a href="tel:+918754729955" className='buy-btn'>Buy Now</a>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src={ev10} alt="ev" className='img-fluid' />
          </div>
        </div>
        <img src={ev10} alt="ev" className='imgsd' />
      </div>


      <div className="slider-1">
        <div className="row d-flex flex-column-reverse flex-md-row">
          <div className="col-md-8">
            <div className="slider-content">
              <h2>Our Product</h2>

              <div className="list-of-item">
                <h4>15 KW AC CHARGER</h4>

                <span>Compatible - 4 Wheelers</span><br />
                <span>Input VOltage - 1 Phase</span><br />
                <span>User Authentication - RFID | Mobile App | OCPP 1.6J</span><br />
                <span>Contectivity -GSM | Ethernet | WiFi</span><br />
                <span>Mounting - Wall | Pole Mounting</span><br />
                <span>Warranty - 1 Year</span><br />
                <span>CMS - Available</span> <br /><br />
                <a href="tel:+918754729955" className='buy-btn'>Buy Now</a>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src={ev15} alt="ev" className='img-fluid' />
          </div>
        </div>
        <img src={ev15} alt="ev" className='imgsd' />
      </div>

      <div className="slider-1">
        <div className="row d-flex flex-column-reverse flex-md-row">
          <div className="col-md-8">
            <div className="slider-content">
              <h2>Our Product</h2>

              <div className="list-of-item">
                <h4>22 KW AC CHARGER</h4>

                <span>Compatible - 4 Wheelers</span><br />
                <span>Input VOltage - 1 Phase</span><br />
                <span>User Authentication - RFID | Mobile App | OCPP 1.6J</span><br />
                <span>Contectivity -GSM | Ethernet | WiFi</span><br />
                <span>Mounting - Wall | Pole Mounting</span><br />
                <span>Warranty - 1 Year</span><br />
                <span>CMS - Available</span> <br /><br />
                <a href="tel:+918754729955" className='buy-btn'>Buy Now</a>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src={ev22} alt="ev" className='img-fluid' />
          </div>
        </div>
        <img src={ev22} alt="ev" className='imgsd' />
      </div>

      <div className="slider-1">
        <div className="row d-flex flex-column-reverse flex-md-row">
          <div className="col-md-8">
            <div className="slider-content">
              <h2>Our Product</h2>

              <div className="list-of-item">
                <h4>30 KW DC CHARGER</h4>

                <span>Compatible - 4 Wheelers</span><br />
                <span>Input VOltage - 3 Phase</span><br />
                <span>User Authentication - RFID | Mobile App | OCPP 1.6J</span><br />
                <span>Contectivity -GSM | Ethernet | WiFi</span><br />
                <span>Mounting - Wall | Pole Mounting</span><br />
                <span>Warranty - 1 Year</span><br />
                <span>CMS - Available</span> <br /><br />
                <a href="tel:+918754729955" className='buy-btn'>Buy Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src={ev30} alt="ev" className='img-fluid' />
          </div>
        </div>
        <img src={ev30} alt="ev" className='imgsd' />
      </div>
      
      <div className="slider-1">
        <div className="row d-flex flex-column-reverse flex-md-row">
          <div className="col-md-8">
            <div className="slider-content">
              <h2>Our Product</h2>

              <div className="list-of-item">
                <h4>60 KW DC CHARGER</h4>

                <span>Compatible - 4 Wheelers</span><br />
                <span>Input VOltage - 3 Phase</span><br />
                <span>User Authentication - RFID | Mobile App | OCPP 1.6J</span><br />
                <span>Contectivity -GSM | Ethernet | WiFi</span><br />
                <span>Mounting - Wall | Pole Mounting</span><br />
                <span>Warranty - 1 Year</span><br />
                <span>CMS - Available</span> <br /><br />
                <a href="tel:+918754729955" className='buy-btn'>Buy Now</a>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src={ev60} alt="ev" className='img-fluid' />
          </div>
        </div>
        <img src={ev60} alt="ev" className='imgsd' />
      </div>



    </Carousel>

  );
};

export default Mapsection;
