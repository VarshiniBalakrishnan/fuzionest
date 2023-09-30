import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Job = () => {
  return (
    <>
      {/* ================== BannerOne Start ==================*/}
       <div
        className='banner-area4  banner-area-1 pd-bottom-100 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/banner/image.png")',  backgroundSize: 'cover'}} // Adjust the background size as needed
        // height: '750px',marginTop: '-7%'}}
      >
        <div
        className='banner-area  banner-area-1 pd-bottom-100 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/banner/gray.png")',  backgroundSize: 'cover'}}// Adjust the background size as needed
        // height: '768px', marginTop: '-13%'}}
      > 
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
                  className='title job-title'
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-duration='1500'
                  style={{ color: 'white',  textAlign: 'center' }}
                >
                 We’re Looking For Skilled People
                             </h2>
                <p
                  className='job-contents pe-xl-5'
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                  style={{ color: 'white', fontweight: 'lighter', lineHeight: '20px', marginTop: '40px',  textAlign: 'center', padding : '0 15%', marginLeft: '35%'}}
                >
                  We're your strategic partner in harnessing the power of technology to drive innovation, efficiency, and
growth. With a passion for creating exceptional solutions, we're dedicated to helping businesses of all
sizes navigate the ever-evolving digital landscape.
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
{/* <div className="button-service" style={{width: '100%', marginLeft: '60%'}}>
  
                <Link
                  className='btn btn-border-base'
                  data-aos='fade-right'
                  data-aos-delay='500'
                  data-aos-duration='1500'
                  to='/about'
                  style={{width: '40%', borderRadius: '40px', background: 'transparent', border: '1px solid white'}}
                >
                  Hire Top Talent
                   
                                   </Link> */}

                {/* <Link
                  className='btn btn-border-base'
                  data-aos='fade-right'
                  data-aos-delay='500'
                  data-aos-duration='1500'
                  to='/about'
                  style={{width: '40%', borderRadius: '40px', background: 'transparent', border: '1px solid white'}}
              
                >
                  Apply as a Freelancer */}
                 
                {/* </Link> */}
                {/* </div> */}
                {/* </div> */}
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

export default Job;
