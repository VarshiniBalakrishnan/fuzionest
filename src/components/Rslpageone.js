import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Rslpageone = () => {
  return (
    <>
      {/* ================== BannerOne Start ==================*/}
      <div
        className='banner-area bg-relative banner-area-1 pd-bottom-100 bg-cover'
        style={{backgroundColor: '#253284',  backgroundSize: 'cover', // Adjust the background size as needed
        height: '797px', marginTop: '-10%' }}
      >
          {/* <div
        className='banner-area  banner-area-1 pd-bottom-100 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/banner/gray.png")',  backgroundSize: 'cover', // Adjust the background size as needed
        height: '767px', marginTop: '-11.8%'}}
      > */}
        <img
          className='animate-img-home'
          src='assets/img/rsl/5.svg'
          alt='img'
          style={{height: '65%',marginTop: '2%'}}
        />
        {/* <img
          className='animate-img-2 '
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
                  className='title6-rsl'
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-duration='1500'
                  style={{color: 'white', fontSize: '65px',  fontWeight: '600'}}
                >
                  R S L

                </h2>
                <p
                  className='content6 pe-xl-5'
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                  style={{color: 'white', fontSize: '30px'}}
                >
                 Mobile Development  </p>
                {/* <Link
                  className='btn btn-border-base'
                  data-aos='fade-right'
                  data-aos-delay='300'
                  data-aos-duration='1500'
                  to='/about'
                >
                  Discover More <FaPlus />
                </Link> */}
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
                /> */}
                {/* <img
                  className='banner-animate-img banner-animate-img-2'
                  src='assets/img/banner/3.svg'
                  alt='img'
                />
                <img
                  className='banner-animate-img banner-animate-img-3 left_image_bounce'
                  src='assets/img/banner/4.svg'
                  alt='img'
                />
                <img
                  className='main-img'
                  src='assets/img/banner/1.png'
                  alt='img'
                /> */}
              </div>
            </div>
          </div>
        </div>
        </div>
      {/* </div> */}
      {/* ================== BannerOne End ==================*/}
    </>
  );
};

export default Rslpageone;
