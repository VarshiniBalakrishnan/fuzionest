import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Servicehomepage2 = () => {
  return (
    <>
      {/* ================== BannerOne Start ==================*/}
       <div
        className='banner-area5  banner-area-1 pd-bottom-100 bg-cover'
        // style={{ backgroundImage: 'url("./assets/img/banner/0.png")',  backgroundSize: 'cover', // Adjust the background size as needed
        // height: '750px'}}
      >
         {/* <div
        className='banner-area  banner-area-1 pd-bottom-100 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/banner/gray.png")',  backgroundSize: 'cover', // Adjust the background size as needed
        height: '767px', marginTop: '-13%'}}
      >  */}
{/* <img
          className='animate-imgggg '
          src='assets/img/banner/2.png'
          alt='img'
        />

<img
          className='animate-imggg '
          src='assets/img/banner/33.png'
          alt='img'
          style={{
           
          }}
        />
       
         */}
        {/* <img
          className='animate-img-1 top_image_bounce'
          src='assets/img/banner/2.png'
          alt='img'
        />
        <img
          className='animate-img-2 left_image_bounce'
          src='assets/img/banner/5.svg'
          alt='img'
        /> */}
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div className='banner-inner-homepage2 pe-xl-5'>
                {/* <h6
                  className='subtitle'
                  data-aos='fade-right'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  DESIGNING FOR THE FUTURE
                </h6> */}
                <h2
                  className='title servicehomepage2-title'
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-duration='1500'
                  style={{ color: 'black' }}
                >
                 The Fuzionest Talent Pool
                             </h2>
                <p
                  className='content5 pe-xl-5'
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                   style={{ color: 'black' }}
                >
                 Our holistic approach to resource hiring encompasses a deep understanding of industry trends, cutting edge
technologies, and evolving job roles, enabling us to provide insightful guidance and solutions. In a rapidly changing
business landscape, we stay ahead by continuously refining our strategies, embracing innovation, and adapting to
new challenges. Our track record of consistently delivering value and empowering businesses to thrive makes us
the best choice for resource hiring a partner you can trust to build your team for sustained success.
                   </p>

{/* 
                   <div className="single-input-inner" style={{marginTop: '-5%'}} >
    <input
      name="mail"
      type="email" // Change type to 'email'
      id="inputtext"
      placeholder="Enter your email address"
      required
      // style={{display:'flex', alignItems: 'center'}}
      // style={{"display: flex", align-items: "center"}}
    />
  */}
<div className="button-service2" style={{width: '100%'}}>
  
                <Link
                  className='btn btn-border-base10'
                  data-aos='fade-right'
                  data-aos-delay='500'
                  data-aos-duration='1500'
                  to='/contact'
                  style={{width: '40%', borderRadius: '40px', background: 'transparent', border: '1px solid #088759', height: '50px', lineHeight: '300%'}}
                >
                  Hire Top Talent
                   {/* <FaPlus /> */}
                </Link>

                <Link
                  className='btn btn-border-base10'
                  data-aos='fade-right'
                  data-aos-delay='500'
                  data-aos-duration='1500'
                  to='/about'
                  style={{width: '40%', borderRadius: '40px', background: 'transparent', border: '1px solid #088759', height: '50px', lineHeight: '300%'}}
              
                >
                  Apply as a Talent
                   {/* <FaPlus /> */}
                </Link>
                </div>
                
                {/* </div> */}
              </div>
              <p className="content8">The screening process may vary or be changed as needed at the company s discretion</p>
            </div>
            <div className='col-xl-4 col-lg-5 col-md-8 offset-xl-2 offset-lg-1'>
              <div
                className='banner-thumb mt-5 mt-lg-0 ms-4 ms-lg-0'
                data-aos='fade-left'
                data-aos-delay='100'
                data-aos-duration='1500'
              >

                
                {/* <img
                  className='banner-animate-img banner-animate-img-1 top_image_bounce'
                  src='assets/img/banner/2.png'
                  alt='img'
                />*/}
                {/* <img
                  className='banner-animate-img banner-animate-img-2'
                  src='assets/img/banner/3.svg'
                  alt='img'
                />  */}
                {/* <img
                  className='banner-animate-img banner-animate-img-3 left_image_bounce'
                  src='assets/img/banner/4.svg'
                  alt='img'
                /> */}
                {/* <img
                  className='main-img'
                  src='assets/img/banner/1.png'
                  alt='img'
                /> */}


              </div>
              {/* <div className="banner-img">
        <img
                  className='main-img'
                  src='assets/img/banner/33.png'
                  alt='img'
                  style={{marginTop: '120%'}}
                />
        </div> */}
            </div>
            
            </div>
          </div>
        
        </div>
        {/* </div> */}
        
      
      {/* ================== BannerOne End ==================*/}
    </>
  );
};

export default Servicehomepage2;
