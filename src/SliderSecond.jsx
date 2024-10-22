import React from 'react'
import Carousel from "react-multi-carousel";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { Card } from 'react-bootstrap';
import b1 from './assets/images/b1.png'
import b22 from './assets/images/b22.png'
import b2 from './assets/images/b2.png'
import b3 from './assets/images/b3.png'


const SliderSecond = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
                <center>

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
                        <div className=' mx-3'>
                            <a className='a-text' href="https://www.sciencedirect.com/science/article/pii/S2352484722017346">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={b1} />
                                    <Card.Body className='p-3' style={{ backgroundColor: "#68BD45", color: "#fff", fontWeight: "300" }}>
                                        <Card.Title>Science Direct</Card.Title>
                                        <Card.Text>
                                            An in-depth analysis of electric vehicle charging station infrastructure, policy implications, and future trends
                                        </Card.Text>
                                        <p className="buy-btn">Read more</p>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className=' mx-3'>
                            <a className='a-text' href="https://www.nature.com/articles/s41467-024-51554-9">

                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={b22} />
                                    <Card.Body className='p-3' style={{ backgroundColor: "#68BD45", color: "#fff", fontWeight: "300" }}>
                                        <Card.Title>Nature Communications</Card.Title>
                                        <Card.Text>
                                        Effects of electric vehicle charging stations on the economic vitality of local businesses
                                        </Card.Text>
                                        <p className="buy-btn">Read more</p>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className=' mx-3'>
                            <a className='a-text' href="https://spectrum.ieee.org/the-ev-transition-explained-2658463735">


                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={b2} />
                                <Card.Body className='p-3' style={{ backgroundColor: "#68BD45", color: "#fff", fontWeight: "300" }}>
                                    <Card.Title>IEEE Spectrum</Card.Title>
                                    <Card.Text>
                                    The EV Transition Explained Charger Infrastructure
                                    </Card.Text>
                                    <p className="buy-btn">Read more</p>
                                </Card.Body>
                            </Card>
                            </a>
                        </div>

                        <div className=' mx-3'>
                            <a className='a-text' href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10762045/">


                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={b3} />
                                <Card.Body className='p-3' style={{ backgroundColor: "#68BD45", color: "#fff", fontWeight: "300" }}>
                                    <Card.Title>National Library of Medicine</Card.Title>
                                    <Card.Text>
                                    As a library, NLM provides access to scientific literature.
                                    </Card.Text>
                                    <p className="buy-btn">Read more</p>
                                </Card.Body>
                            </Card>
                            </a>
                        </div>



                    </Carousel>
                    <div className="arrow-button mob-arrow my-5">
                        <button className='l-arrow'><FaChevronLeft /></button>
                        <button className='r-arrow'><FaChevronRight /></button>
                    </div>
                </center >
            </div>


        </>
    )
}

export default SliderSecond