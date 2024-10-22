import React from 'react'
import Header from './Header'
import b3 from './assets/images/b2.png'

const Blog3 = () => {
    return (
        <>
            <div className="main-header-science2">
                <Header />


                {/* ----main-imgs */}
                <div className="container">

                    <div className="main-title" data-aos='fade-left' data-aos-delay='400'>

                        <span data-aos='fade-left' data-aos-delay='400'> </span>
                        <h1> IEEE Spectrum</h1>
                        <p></p>
                    </div>
                </div>


            </div>
            <section className='py-5'>
                <div className="container">
                    <div className="blog-con">
                        <h3>
                            The EV Transition Explained: Charger Infrastructure
                        </h3>
                        <p>
                            <b> Abstract</b>
                        </p>
                        <p>
                            The seamless adoption of electric vehicles (EVs) in the United States necessitates the development of extensive and effective charging infrastructure. Various charging systems have been proposed, including Direct Current Fast Charging, Battery Swapping, and Dynamic Wireless Power Transfer. While many studies have evaluated the charging costs and greenhouse gas (GHG) intensity of EVs, a comprehensive analysis comparing these systems and their implications across vehicle categories remains unexplored. This study compares the total cost of ownership (TCO) and GHG-intensity of EVs using these charging systems. Based on nationwide infrastructure deployment simulations, the change to TCO from adopting EVs varies by scenario, vehicle category, and location, with local fuel prices, electricity prices, and traffic volumes dramatically impacting results. Further, EV GHG-intensity depends on local electricity mixes and infrastructure utilizations. This research highlights the responsiveness of EV benefits resulting from technology advancements, deployment decisions, and policymaking.

                        </p>
                        <img src={b3} alt="b3" className='img-fluid' />

                        <p className='py-5'>
                            <p><b>Introduction</b></p>

                            <p>The ability to conveniently charge an EV away from home is a top concern for many EV owners. A 2022 survey of EV owners by Forbes indicates that 62 percent of respondents are so anxious about their EV range that travel plans have been affected. While “range anxiety” may be overblown, the need for an extensive and reliable external charging infrastructure is not.</p>

                            <h2 className='py-4'>Most experts agree the number of chargers needed in the United States within the decade is at least 20 times as many as exist today.</h2>
                            <p>
                                The Edison Electric Institute estimates that there will be 26 million EVs on the road, and it assumes that there will need to be 1.2 million L2 workplace, 2 million public L2, and 140,000 DC fast charging ports. On the other hand, if the United States meets the Biden Administration’s goal of making half of all new vehicles sold in 2030 zero-emissions vehicles, including battery electric, plug-in hybrid electric, or fuel cell electric vehicle—that is 48 million EVs—there will need to be 553,000 L2 workplace, 675,000 public L2 and 533,000 DC fast charging ports according to McKinsey & Co.

                                Regardless of which estimates come closest to reflecting reality, most experts agree the number of chargers needed in the United States within the decade is at least 20 times as many as exist today. This means installing hundreds of charging ports every day for the next decade at least. Some countries, like Ireland, estimate it needs 50 times as many fast charging ports as it has now, while Australia will need many times more that number given what it has in place currently.
                            </p>

                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Blog3