import React from 'react'
import Carousel from "react-multi-carousel";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
// import card2 from '../Assets/images/card-2.png'
// import card3 from '../Assets/images/card-3.png'


const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (

        <>
           
            <div className="container">
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"

                >
                    <div className='new-car mx-3'>
                        <h5>Long Term Profitability</h5>
                        <p>Investing in electric vehicle (EV) chargers can provide long-term profitability by tapping into the growing EV market. As more people adopt electric vehicles, the demand for charging infrastructure increases, ensuring consistent revenue over time. Furthermore, businesses that install EV chargers may attract more customers and even earn additional income through charging fees, creating a sustainable revenue stream.
                        </p>
                    </div>
                    <div className='new-car mx-3'>
                        <h5>Enhanced CSR Profile of the Brand</h5>
                        <p>Installing EV chargers enhances a company’s Corporate Social Responsibility (CSR) profile by showcasing a commitment to environmental sustainability. Supporting green technologies like EVs can demonstrate to stakeholders, employees, and customers that the company is taking meaningful steps toward reducing carbon emissions and promoting a cleaner, greener future.</p>
                    </div>
                    <div className='new-car mx-3'>
                        <h5>A Part of Rapidly Expanding EV Market</h5>
                        <p>The EV market is expanding at a rapid pace as governments push for more sustainable transportation solutions. By investing in EV charging infrastructure, businesses can be a part of this dynamic market, positioning themselves at the forefront of a technological shift that promises to reshape industries and consumer behavior globally.</p>
                    </div>
                    <div className='new-car mx-3'>
                        <h5>Increased Customer Footprint</h5>
                        <p>Offering EV chargers can attract new customers who drive electric vehicles, especially in locations where charging stations are limited. These EV drivers are more likely to visit businesses that offer charging services, leading to higher foot traffic and possibly increased sales, particularly if they spend time at the business while their vehicle charges.</p>
                    </div>
                    <div className='new-car mx-3'>
                        <h5>Enhanced Customer Experience (Trending Amenity)</h5>
                        <p>EV charging stations are becoming a trending amenity, much like free Wi-Fi or parking. Providing customers with the convenience of charging their vehicle while shopping, dining, or using your services can significantly enhance the customer experience. This added value encourages customer loyalty and can set a business apart from competitors who lack such offerings.</p>
                    </div>
                    <div className='new-car mx-3'>
                        <h5>Contribution to Sustainability</h5>
                        <p>By investing in EV chargers, companies contribute directly to global sustainability efforts by supporting the adoption of electric vehicles, which reduce air pollution and reliance on fossil fuels. This can align the business with broader environmental goals and resonate with increasingly eco-conscious consumers.</p>
                    </div>
                    <div className='new-car mx-3'>
                        <h5>Future Proofing Business</h5>
                        <p>As governments push for more stringent emission standards and consumers shift towards eco-friendly transportation, investing in EV charging infrastructure helps future-proof businesses. Early adoption of EV chargers positions the company to meet the growing demand and stay ahead of regulatory changes and customer expectations, reducing the risk of being left behind in a changing market.</p>
                    </div>
                    <div className='new-car mx-3'>
                        <h5>Brand Reputation and Differentiation</h5>
                        <p>Having EV chargers can enhance a company's reputation as forward-thinking, environmentally responsible, and customer-centric. It differentiates the brand from competitors and can attract customers who value sustainability, innovation, and convenience. In many markets, consumers are drawn to businesses that align with their values, so showcasing a commitment to clean energy can positively impact brand perception.</p>
                    </div>
                    

                </Carousel>
                <div className="arrow-button mob-arrow">
                    <button className='l-arrow'><FaChevronLeft /></button>
                    <button className='r-arrow'><FaChevronRight/></button>
                </div>
            </div>


        </>
    )
}

export default Slider