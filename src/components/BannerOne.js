import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const BannerOne = () => {
  return (
    <>
      {/* ================== BannerOne Start ==================*/}
      {/* <div
        className='  banner-area-1 bannerone-pageone pd-bottom-100 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/banner/0.png")'}} // Adjust the background size as needed
        // height: '750px', marginTop: '-8%'}}
      >
         <div
        className=' banner-area-1  bannerone-pageone-1 pd-bottom-100 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/banner/gray.png")',  backgroundSize: 'cover'}} // Adjust the background size as needed
        // height: '767px', marginTop: '-13%'}}
      > */}

<div
        className='banner-area bg-relative banner-area-1 pd-bottom-100 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/banner/0.png")'}}
      >
          <div
        className='banner-area-home-page  banner-area-1 pd-bottom-100 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/banner/gray.png")'}}
      >
<img
          className='animate-imgggg '
          src='assets/img/banner/32.png'
          alt='img'
        />

<img
          className='animate-imggg '
          src='assets/img/banner/33.png'
          alt='img'
          
        />
       
        
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
              <div className='banner-inner pe-xl-5'>
                {/* <h6
                  className='subtitle'
                  data-aos='fade-right'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  DESIGNING FOR THE FUTURE
                </h6> */}
                <h2
                  className='title bannerone-title'
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-duration='1500'
                  style={{ color: 'white' }}
                >
                  Looking to Create an App Like Uber Eats?
                  We can Power It.             </h2>
                <p
                  className='content banner-content pe-xl-5'
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                  style={{ color: 'white', fontweight: 'lighter' }}
                >
                  Get Fully Customised White Labeled<br/>
                  Uber Like Apps for Your On-Demand Business
                   </p>


                   <div className="single-input-inner" style={{marginTop: '-1%'}} >
    <input
    data-aos='fade-right'
    data-aos-delay='500'
    data-aos-duration='1500'
      name="mail"
      type="email" // Change type to 'email'
      id="inputtext"
      placeholder="Enter your email address"
      required
      // style={{display:'flex', alignItems: 'center'}}
      // style={{"display: flex", align-items: "center"}}
    />
 

  
                <Link
                  className='btn btn-border-base16'
                  data-aos='fade-right'
                  data-aos-delay='500'
                  data-aos-duration='1500'
                  to='/contact'
                   style={{ marginLeft: '10%'}}
                >
                  Book A Demo
                   {/* <FaPlus /> */}
                </Link>
                </div>
              </div>
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
        </div>
        
      
      {/* ================== BannerOne End ==================*/}
    </>
  );
};

export default BannerOne;
