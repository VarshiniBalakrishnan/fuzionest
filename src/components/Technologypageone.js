import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Technologypageone = () => {
  return (
    <>
      {/* ================== BannerOne Start ==================*/}
       <div
        className='banner-area4  banner-area-1 pd-bottom-100 bg-cover'
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
        <div className='container' style={{marginTop: '3%'}}>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div className='banner-inner pe-xl-5'>
                 <h6
                  className='subtitle-technology'
                  data-aos='fade-right'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  How we work
                </h6> 
                <h2
                  className='titletechnology'
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-duration='1500'
                  style={{ color: 'white' , display: 'flex'}}
                >
                 The Way We Work: Our

Approach to Delivering

Results
                             </h2>

                           
                <p
                  className='contents-technology pe-xl-5'
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                  style={{ color: 'white', fontweight: 'lighter', lineHeight: '25px'}}
                >
                  At Fuzionest, We collaborate closely with clients to
                  create tailor-made solutions that drive business
                  success. Discover how we deliver software
                  development results with our expert approach tailored
                  to your business needs.
                   </p>


                   <div className="button-service">
  
  <Link
    className='btn btn-border-base17 btn-technopageone'
    data-aos='fade-right'
    data-aos-delay='500'
    data-aos-duration='1500'
    to='/contact'
    style={{backgroundColor: '#FFc600', color: 'black',marginTop: '5%'}}
    // style={{width: '40%', borderRadius: '40px', , border: '1px solid white'}}
  >
    Let’s make it together  <FaArrowRight  size={20} />
     {/* <FaPlus /> */}
  </Link>
  </div>

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
                  Hire Top Talent */}
                   {/* <FaPlus /> */}
                {/* </Link> */}

                {/* <Link
                  className='btn btn-border-base'
                  data-aos='fade-right'
                  data-aos-delay='500'
                  data-aos-duration='1500'
                  to='/about'
                  style={{width: '40%', borderRadius: '40px', background: 'transparent', border: '1px solid white'}}
              
                >
                  Apply as a Freelancer */}
                   {/* <FaPlus /> */}
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
        {/* </div> */}
        
      
      {/* ================== BannerOne End ==================*/}
    </>
  );
};

export default Technologypageone;
