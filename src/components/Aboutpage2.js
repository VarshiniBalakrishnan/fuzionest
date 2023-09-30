import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Aboutpage2 = () => {
  return (
    <div className='container'>
    <div className='row pd-top-120'>
      <div
        className='col-xl-5 col-lg-6 col-md-8'
        data-aos='fade-right'
        data-aos-delay='100'
        data-aos-duration='1500'
      >
        <div className='about-thumb-inner pt-lg-3'>
          <img
            className='main-img'
            src='assets/img/Aboutpage/1.png'
            alt='img'
          />
          {/* <img
            className='animate-img-bottom-right top_image_bounce'
            src='assets/img/about/5.png'
            alt='img'
          /> */}
        </div>
      </div>
      <div
        className='col-xl-7 col-lg-6'
        data-aos='fade-left'
        data-aos-delay='100'
        data-aos-duration='1500'
      >
        <div className='section-title-about2 mb-0 mt-4 mt-lg-0'>
          {/* <h6 className='sub-title'>SOME FAQ'S</h6> */}
          <h2 className='title' style={{marginTop: '10%', marginBottom: '5%'}}>
           
  Our Mission
          </h2>
          <p className='content-about-page' style={{color: '#242424'}}>
          Our mission is to empower businesses to thrive in the digital age by delivering cutting-edge software
solutions that streamline processes, enhance customer experiences, and unlock new opportunities. We
believe that technology should be a catalyst for positive transformation, and we're committed to making that
a reality for every client we work with. Our diverse skill set enables us to tackle complex challenges and turn
them into innovative solutions that drive real business impact.</p>
        </div>
        <div className='accordion accordion-inner ' id='accordionExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingOne'>
              <div className='accordin-button'>
              {/* <div className="grid-container" style={{ display: 'flex', flexDirection: 'row', marginTop: '4%' }}>
                  <div className="grid-check" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div className="grid-item">
                      <FaCheckCircle style={{ color: "#0217A2" }} />
                      <span>Personalization</span>
                    </div>
                    <div className="grid-item">
                      <FaCheckCircle style={{ color: "#0217A2" }} />
                      <span>Flexibility</span>
                    </div>
                  </div>
  
                  <div className="grid-check" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div className="grid-item">
                      <FaCheckCircle style={{ color: "#0217A2" }} />
                      <span>Enhanced Engagement</span>
                    </div>
                    <div className="grid-item">
                      <FaCheckCircle style={{ color: "#0217A2" }} />
                      <span>Increased Satisfaction</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </h2>
            <div>
              <p className='content' style={{marginTop: '5%', color: '#242424'}}>
              Your success is our success. We take a client-centric approach, focusing on understanding your unique
goals, challenges, and aspirations. From ideation to implementation, we collaborate closely with you to
ensure that the solutions we provide align perfectly with your vision and requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Aboutpage2