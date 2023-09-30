import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const FaqAreaOne = () => {
  return (
    <>
      {/*==================== Faq area start ====================*/}
      <div
        className='faq-area faq-area-margin-top bg-cover pd-top-90 pd-bottom-110'
        // style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
        <div className='container'>
          <div className='row pd-top-10' style={{width: '95%', paddingLeft: '8%'}}>
            <div
              className='col-xl-5 col-lg-6 col-md-8 order-lg-last'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner pt-lg-3'>
                <img
                  className='main-img'
                  src='assets/img/about/1/1.png'
                  alt='img'
                  style={{ paddingTop: '5%'}}
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
              <div className='section-title-faq mb-0 mt-4 mt-lg-0'>
                {/* <h6 className='sub-title'>SOME FAQ'S</h6> */}
                <h2 className='title' style={{marginTop: '10%', fontWeight: '800'}}>
                Live Tracking for Your Customers
                </h2>
                <p className='content'>
                Transparency enhances the overall customer experience by reducing uncertainty and providing accurate arrival time estimates.
                </p>
              </div>
              <div
                className='accordion accordion-inner '
                id='accordionExample'
              >
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingOne'>
                    <div
                      className='accordin-button'
                      //  type='button'
                      //  data-bs-toggle='collapse'
                      //  data-bs-target='#collapseOne'
                      // aria-expanded='true'
                      //  aria-controls='collapseOne'
                    >
                       
                       <div className="grid-container-aboutareaone faqareaone-grid" >
                       {/* style={{ display: 'flex', flexDirection: 'row',marginTop: '4%',fontWeight: '700' }}> */}
                <div className="grid-check-aboutareaone faqarea" >
                 {/* style={{ display: 'flex',  alignItems: 'flex-start' }}> */}
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#253284" }} />
                    <span>Transparency</span>
                  </div>
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#253284" }} />
                    <span>Trust and Reliability</span>
                  </div>
                </div>

                <div className="grid-check-aboutareaone grid2-about" >
                {/* style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}> */}
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#253284" }} />
                    <span>Accurate Expectations</span>
                  </div>
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#253284" }} />
                    <span>Competitive Edge</span>
                  </div>
                </div>
              </div>
                    </div>
                  </h2>
                  {/* <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  > */}
                    {/* <div className='accordionn-body'> */}
                    <p className='content' style={{marginTop: '5%', width: '98%'}}>
                    Live tracking in a food delivery application is crucial because it offers customers transparency, convenience, and peace of mind throughout the delivery process. It allows customers to monitor the real-time progress of their orders, from the moment it's prepared to the point of delivery.
                    </p>
                  </div>
                </div>
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






          <div className='container'>
  <div className='row ' style={{width: '95%', paddingLeft: '8%'}}>
    <div
      className='col-xl-5 col-lg-6 col-md-8'
      data-aos='fade-right'
      data-aos-delay='100'
      data-aos-duration='1500'
    >
      <div className='about-thumb-inner pt-lg-3'>
        <img
          className='main-img'
          src='assets/img/about/1/2.png'
          alt='img'
          //  style={{paddingTop: '14%'}}
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
      <div className='section-title-faq mb-0 mt-4 mt-lg-0'>
        {/* <h6 className='sub-title'>SOME FAQ'S</h6> */}
        <h2 className='title' style={{marginTop: '4%', fontWeight: '800'}}>
         
Customisable menu option for your customers
        </h2>
        <p className='content' style={{width: '105%'}}>
        Customizable menu feature within a food delivery app empowers customers to tailor their orders according to their preferences, dietary requirements, and cravings.  </p>
      </div>
      <div className='accordion accordion-inner ' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <div className='accordin-button'>
            <div className="grid-container-aboutareaone" >
                <div className="grid-check-aboutareaone" >
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#253284" }} />
                    <span>Personalization</span>
                  </div>
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#253284" }} />
                    <span>Enhanced Engagement</span>
                  </div>
                </div>

                <div className="grid-check-aboutareaone grid2-about" >
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#253284" }} />
                    <span>Flexibility</span>
                  </div>
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#253284" }} />
                    <span>Increased Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </h2>
          <div>
            <p className='content' style={{marginTop: '5%', width: '96%'}}>
            This feature not only enhances the customer experience but also promotes engagement and loyalty. Incorporating a customizable menu feature into a food delivery app not only adds value to the user experience but also positions the app as a versatile and customer-centric platform that caters to a wide array of tastes and needs.   </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className='container'>
  <div className='row ' style={{width: '95%', paddingLeft: '8%'}}>
    <div
      className='col-xl-5 col-lg-6 col-md-8 order-lg-last'
      data-aos='fade-left'
      data-aos-delay='100'
      data-aos-duration='1500'
    >
      <div className='about-thumb-inner pt-lg-3'>
        <img
          className='main-img'
          src='assets/img/about/1/3.png'
          alt='img'
          // style={{ marginLeft: '15%'}}
        />
      </div>
    </div>
    <div
      className='col-xl-7 col-lg-6'
      data-aos='fade-right'
      data-aos-delay='100'
      data-aos-duration='1500'
    >
      <div className='section-title-faq mb-0 mt-4 mt-lg-0'>
        <h2 className='title' style={{ fontWeight: '800' }}>
          Wallet feature for your customers
        </h2>
        <p className='content'>
          A wallet feature integrated into a food delivery app offers users a
          convenient and secure method to manage their funds for orders and
          transactions. It functions as a digital wallet within the app,
          allowing users to store money, make payments, and enjoy various
          benefits.
        </p>
      </div>
      <div className='accordion accordion-inner ' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <div className='accordin-button'>
              <div className="grid-container-aboutareaone" >
                <div className="grid-check-aboutareaone" >
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#253284" }} />
                    <span>Effortless Transactions</span>
                  </div>
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#253284" }} />
                    <span>Promotions and Loyalty</span>
                  </div>
                </div>

                <div className="grid-check-aboutareaone grid2-about" >
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#253284" }} />
                    <span>Speed and Convenience</span>
                  </div>
                  <div className="grid-item">
                    <FaCheckCircle style={{ color: "#253284" }} />
                    <span>Faster Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </h2>
          <p className='content' style={{ marginTop: '5%',width: '98%' }}>
            Incorporating a wallet feature into a food delivery app enhances user
            experience by providing a streamlined, secure, and flexible payment
            method. It encourages loyalty, repeat orders, and overall engagement
            while aligning with the convenience-driven nature of modern digital
            services.
          </p>
        </div>
      </div>
    </div>
  </div>
  <Link
    className='btn btn-border-base18'
    data-aos='fade-right'
    data-aos-delay='500'
    data-aos-duration='1500'
    to='/contact'
    // style={{  left: '37%' }}
  >
    Book A Demo
  </Link>
</div>
</div>
      {/* </div> */}
      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default FaqAreaOne;