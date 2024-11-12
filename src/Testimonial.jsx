import React from 'react'
import img1 from './assets/images/testi-img.jpeg'

const Testimonial = () => {
  return (
    <div className="carousel-container">

      <div className="container">
        <center>
          <h2 className='slider-title' data-aos='fade-up' data-aos-delay='400'>WHY INVEST IN AN EV CHARGER?</h2>
          <p className="px-5">Incredible attention to detail! Movee Power transformed our concept into a captivating visual story.</p>

        </center>
        <div className="testi-con">
          <img src={img1} alt="img1" />
          <div className="second-con">
            <h3>Sampath Kumar</h3>
            <p>Good initiate and I'm really impressed with their work</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
