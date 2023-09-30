import React from "react";

const AboutAreaOne = () => {
  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}
      <div className='about-area pd-top-5'>
        <div className='container' style={{marginTop: '25%', width: '100%', marginLeft: '-1%'}}>
          <div className='row'>
          {/* <img
          className='animg-1 '
          src='assets/img/banner/33.png'
          alt='img' 
          style={{
            marginTop: '-29%'
          }}
        /> */}
{/* 
<div className="animate-img-1"
style={{ backgroundImage: 'url("./assets/img/banner/33.png")',
width: '100%', height: '100%' }}></div> */}

          {/* <img
                  className='animate-img-1'
                  src='assets/img/about/1/33.png'
                  alt='img'
                  style={{marginTop: '-20%'}}
                /> */}


            {/* <div className='col-lg-6'> */}
              {/* <div
                className='about-thumb-inner pe-xl-5 me-xl-5 '
                data-aos='fade-right'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <img
                  className='animate-img-1 top_image_bounce'
                  src='assets/img/about/2.png'
                  alt='img'
                />
                <img
                  className='animate-img-2 left_image_bounce'
                  src='assets/img/about/3.png'
                  alt='img'
                />
                <img
                  className='animate-img-3 top_image_bounce'
                  src='assets/img/banner/5.svg'
                  alt='img'
                />
                <img
                  className='main-img'
                  src='assets/img/about/1.png'
                  alt='img'
                />
              </div> */}
            {/* </div> */}
            <div
              className='col-lg-6 '
              data-aos='fade-right'
              data-aos-delay='100'
              data-aos-duration='1500'
              style={{marginTop:'-5%'}}
            >
              <div className='section-title aboutarea-title mt-5 mt-lg-0' 
              style={{
                // marginLeft: '50%', width: '150%'
              }}>
                {/* <h6 className='sub-title'>ABOUT US</h6> */}
                <h2 className='title' style={{
                  fontSize:'40px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: 'black',
                  
                }}>
                Why we're Different
                </h2>
                <p className='content mb-9 mb-xl-9' style={{
                  fontSize: '20px', fontWeight: 'bold', color: 'black', textAlign: 'center' , lineHeight: '120%'
                }}>
                Experience the power of Uber-like App Development Solution catering to over 300,000 on-demand customers
                </p>
                <div className='row' style={{width: '120%' , margin: '10px 10px', marginLeft: '-1%'}}>
                  <div className='col-md-5'>
                    <div className='single-about-inner' style={{marginTop: '15%', width: '75%'}}>
                      <div className='thumb mb-3 mb-4' >
                        <img src='assets/img/icon/111.png' alt='img' style={{width: '40px'}} />
                      </div>
                      <div className='details' >
                        <h5>White Label & Customization</h5>
                        <p style={{lineHeight: '140%', color: '#455065'}}>
                        Get fully white labeled on-demnad solution with your branding & logo, along with custimizations for both iOS and Andriod.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-5 mb-4'>
                    <div className='single-about-inner' style={{marginTop: '15%' , width: '75%'}}>
                      <div className='thumb mb-3' >
                        <img src='assets/img/icon/33.png' alt='img' style={{width: '40px'}} />
                      </div>
                      <div className='details' style={{padding: '0 0px', width: '100%'}} >
                        <h5>Scalable & Cost Effertive</h5>
                        <p style={{lineHeight: '140%',color: '#455065'}}>
                        Our Robust Technologies will be tailored to your on-demand business unique experience. needs, delivering a truly
                         </p>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-5'>
                    <div className='single-about-inner' style={{marginTop: '15%' , width: '75%'}}>
                      <div className='thumb mb-3 mb-4'>
                        <img src='assets/img/icon/66.png' alt='img' style={{width: '40px'}} />
                      </div>
                      <div className='details'>
                        <h5>24/7 Customer Suppport</h5>
                        <p style={{lineHeight: '140%',color: '#455065'}}>
                        Dedicated account manager to deal Get 24/7 technical support and a with all of your issues instantly.
                          </p>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-5 mb-4'>
                    <div className='single-about-inner' style={{marginTop: '15%' , width: '75%'}}>
                      <div className='thumb mb-3' >
                        <img src='assets/img/icon/55.png' alt='img' style={{width: '40px', alignItems: 'center'}} />
                      </div>
                      <div className='details' style={{padding: '0 0px', width: '100%'}} >
                        <h5>Uber Like In-App Chat</h5>
                        <p style={{lineHeight: '140%',color: '#455065'}}>
                        Stay instantly accessible to your customers through real-time in-app chat, facilitating seamless communication between clients and agents.
                         </p>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-5 mb-4'>
                    <div className='single-about-inner' style={{marginTop: '15%', width: '75%'}}>
                     <div className='thumb mb-3'>
                        <img src='assets/img/icon/22.png' alt='img' style={{width: '40px'}} />
                      </div>
                      <div className='details'>
                        <h5>Powerful Analytics</h5>
                        <p style={{lineHeight: '140%',color: '#455065'}}>
                        Get real-time insights & generate sates reports through the admin panel which helps you to grow your on-demand business.
                         </p>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-5 mb-4'>
                    <div className='single-about-inner' style={{marginTop: '15%', width: '75%'}}>
                      <div className='thumb mb-3'>
                        <img src='assets/img/icon/44.png' alt='img' style={{width: '40px' , marginTop: '-4px'}} />
                      </div>
                      <div className='details' style={{padding: '0 0px', width: '103%'}} >
                        <h5>Go Live In No Time</h5>
                        <p style={{lineHeight: '140%',color: '#455065'}}>
                        You can easily and swiftly transition to a live state, allowing you to connect and engage in no time with your audience or users.
                         </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutAreaOne;
