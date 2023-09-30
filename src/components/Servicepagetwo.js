import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Servicepagetwo = () => {
  return (
    <>
      {/*==================== Faq area start ====================*/}
      <div
        className='faq-area faq-area-margin-top bg-cover pd-bottom-110'
        // style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >



<h3 Servicepagetwo-heading style={{textAlign: 'center', fontSize: '40px' , marginTop: '5%', marginBottom: '-3%', fontWeight: '700' }}>Why Fuzionest?</h3>


<div className='servicepagetwo-container'>
    
  <div className='row' style={{marginTop: '5%'}}>
    <div
      className='col-xl-5 col-lg-6 col-md-8'
      data-aos='fade-right'
      data-aos-delay='100'
      data-aos-duration='1500'
    >
      <div className='about-thumb-inner pt-lg-3'>
        <img
          className='Servicepagetwo-img'
          src='assets/img/servicepagetwo/1.png'
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
      <div className='section-title-service2 mb-0 mt-4 mt-lg-0'>
        {/* <h6 className='sub-title'>SOME FAQ'S</h6> */}
        <h3 className='title2' style={{marginTop: '15%', fontWeight: 'bold', marginBottom: '5%'}}>
        Innovation at the Core
        </h3>
        <p className='contents2' > 
          
        Fuzionest thrives on innovation. Our agency continually seeks out
      new technologies, frameworks, and methodologies to stay ahead in
the rapidly evolving world of software development. We embrace
change and use it to create cutting-edge solutions that give our
clients a competitive advantage.
   </p> 
      </div>
      {/* <div className='accordion accordion-inner ' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <div className='accordin-button'>
            <div className="grid-container" style={{ display: 'flex', flexDirection: 'row', marginTop: '4%' }}>
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
              </div>
            </div>
          </h2>
          <div>
            <p className='content' style={{marginTop: '5%'}}>
            This feature not only enhances the customer experience but also promotes engagement and loyalty. Incorporating a customizable menu feature into a food delivery app not only adds value to the user experience but also positions the app as a versatile and customer-centric platform that caters to a wide array of tastes and needs.   </p>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</div>









        <div className='servicepagetwo-container'>
          <div className='row'>
            <div
              className='col-xl-5 col-lg-6 col-md-8 order-lg-last'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner pt-lg-3'>
                <img
                  className='Servicepagetwo-img img2-service'
                  src='assets/img/servicepagetwo/2.png'
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
              data-aos='fade-right'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title-service2 mb-0 mt-4 mt-lg-0'>
                {/* <h6 className='sub-title'>SOME FAQ'S</h6> */}
                <h3 className='title3' style={{marginTop: '10%',fontWeight: 'bold',marginBottom: '5%'}}>
                Tailored Solutions
                </h3>
                <p className='contents3'>
                We understand that every client is unique, with distinct goals and
requirements. Our approach involves closely collaborating with
clients to understand their needs, objectives, and challenges. This
enables us to craft bespoke solutions that precisely address their
business needs and lead to tangible results. </p>
              </div>
              {/* <div
                className='accordion accordion-inner '
                id='accordionExample'
              >
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingOne'>
                    <div
                      className='accordin-button'
                       type='button'
                       data-bs-toggle='collapse'
                       data-bs-target='#collapseOne'
                      aria-expanded='true'
                       aria-controls='collapseOne'
                    > */}
                       
                       {/* <div className="grid-container" style={{ display: 'flex', flexDirection: 'row',marginTop: '4%' }}>
                <div className="grid-check" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#0217A2" }} />
                    <span>Transparency</span>
                  </div>
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#0217A2" }} />
                    <span>Accurate Expectations</span>
                  </div>
                </div>

                <div className="grid-check" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#0217A2" }} />
                    <span>Trust and Reliability</span>
                  </div>
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#0217A2" }} />
                    <span>Competitive Edge</span>
                  </div>
                </div>
              </div> */}
                    {/* </div>
                  </h2> */}
                  {/* <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  > */}
                    {/* <div className='accordionn-body'> */}
                    {/* <p className='content' style={{marginTop: '5%'}}>
                    Live tracking in a food delivery application is crucial because it offers customers transparency, convenience, and peace of mind throughout the delivery process. It allows customers to monitor the real-time progress of their orders, from the moment it's prepared to the point of delivery.
                    </p>
                  </div>
                </div> */}
                {/* <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingTwo'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      How long does it take for you to complete a project?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingTwo'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, search for
                      'lorem ipsum' will uncover
                    </div>
                  </div>
                </div> */}
                {/* <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      How much does it cost to work with your agency?
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, search for
                      'lorem ipsum' will uncover
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>






          <div className='servicepagetwo-container'>
  <div className='row'>
    <div
      className='col-xl-5 col-lg-6 col-md-8'
      data-aos='fade-right'
      data-aos-delay='100'
      data-aos-duration='1500'
    >
      <div className='about-thumb-inner pt-lg-3'>
        <img
          className='Servicepagetwo-img img2-service img22-service'
          src='assets/img/servicepagetwo/3.png'
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
      <div className='section-title-service2 mb-0 mt-4 mt-lg-0'>
        {/* <h6 className='sub-title'>SOME FAQ'S</h6> */}
        <h3 className='title2' style={{marginTop: '10%',fontWeight: 'bold',marginBottom: '5%'}}>
        Timely Delivery
        </h3>
        <p className='contents2' >
        We understand that time is of the essence in today's fast-paced
business environment. Our proven project management
methodologies and efficient processes allow us to deliver projects on
time, without compromising on quality. We believe in setting realistic
timelines and sticking to them.
  </p>
      </div>
      {/* <div className='accordion accordion-inner ' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <div className='accordin-button'>
            <div className="grid-container" style={{ display: 'flex', flexDirection: 'row', marginTop: '4%' }}>
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
              </div>
            </div>
          </h2>
          <div>
            <p className='content' style={{marginTop: '5%'}}>
            This feature not only enhances the customer experience but also promotes engagement and loyalty. Incorporating a customizable menu feature into a food delivery app not only adds value to the user experience but also positions the app as a versatile and customer-centric platform that caters to a wide array of tastes and needs.   </p>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</div>

{/* 
<div className='container'>
  <div className='row pd-top-120'>
    <div
      className='col-xl-5 col-lg-6 col-md-8 order-lg-last'
      data-aos='fade-left'
      data-aos-delay='100'
      data-aos-duration='1500'
    >
      <div className='about-thumb-inner pt-lg-3'>
        <img
          className='Servicepagetwo-img'
          src='assets/img/servicepagetwo/3.png'
          alt='img'
        />
      </div>
    </div>
    <div
      className='col-xl-7 col-lg-6'
      data-aos='fade-right'
      data-aos-delay='100'
      data-aos-duration='1500'
    >
      <div className='section-title mb-0 mt-4 mt-lg-0'>
        <h2 className='title' style={{ marginTop: '15%' }}>
        Timely Delivery
        </h2>
        <p className='content'>
        We understand that time is of the essence in today's fast-paced
business environment. Our proven project management
methodologies and efficient processes allow us to deliver projects on
time, without compromising on quality. We believe in setting realistic
timelines and sticking to them
        </p>
      </div> */}
      {/* <div className='accordion accordion-inner ' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <div className='accordin-button'>
              <div className="grid-container" style={{ display: 'flex', flexDirection: 'row' , marginTop: '4%' }}>
                <div className="grid-check" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#0217A2" }} />
                    <span>Effortless Transactions</span>
                  </div>
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#0217A2" }} />
                    <span>Speed and Convenience</span>
                  </div>
                </div>

                <div className="grid-check" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#0217A2" }} />
                    <span>Promotions and Loyalty</span>
                  </div>
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#0217A2" }} />
                    <span>Faster Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </h2>
          <p className='content' style={{ marginTop: '5%' }}>
            Incorporating a wallet feature into a food delivery app enhances user
            experience by providing a streamlined, secure, and flexible payment
            method. It encourages loyalty, repeat orders, and overall engagement
            while aligning with the convenience-driven nature of modern digital
            services.
          </p>
        </div>
      </div> */}
    {/* </div>
  </div> */}
  {/* <Link
    className='btn btn-border-base'
    data-aos='fade-right'
    data-aos-delay='500'
    data-aos-duration='1500'
    to='/about'
    style={{ width: '15%', left: '30%' }}
  >
    Book A Demo
  </Link> */}
{/* </div> */}
</div>
      {/* </div> */}
      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default Servicepagetwo;
