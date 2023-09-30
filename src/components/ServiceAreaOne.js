import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import serviceList from "../scripts/serviceList";

const ServiceAreaOne = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      <div className="service-area-page-5" style={{backgroundColor: '#F5F5F5', marginBottom: '10%'}}>
      <div className='service-area bg-relative ' style={{
       
      }}>
        {/* <img
          className='position-bottom-left top_image_bounce'
          src='assets/img/icon/4.png'
          alt='img'
        /> */}
        <div className='container'  > 
          <div className='section-titles text-center' >
            {/* <h6 className='sub-title'>CREATIVE SERVICES</h6> */}
            <h2 className='title' style={{ fontWeight: '900'}}>
            Connecting Stakeholders
            </h2>
            <p style={{ color: 'black', fontWeight: '700'}}>With our on-demand business modules</p>
          </div>
          <div className='row' style={{background: '#253284', marginTop: '8%',height: '4%'}}>
            {serviceList.slice(0, 3).map((data, index) => (
              <div className='col-lg-4 col-md-5' key={index}>
                <div className='single-service-inner text-center' style={{background: '#253284'}}>
                  <div className='thumb serviceareaone-thumb'>
                    <img src={data.img} alt='img' style={{height: '150px'}} />
                  </div>

                  
                  <div className='details'>
                    <h5 style={{color: "white", alignItems: 'center'}}>
                      <Link to='/service-details'>{data.title}</Link>
                    </h5>
                    <p style={{color: 'white', height: '120px', width:  '80%', textAlign: 'center', lineHeight: '140%'}}>{data.des}</p>
                    {/* <Link className='btnn btn-border-base2'  to='/service-details' style={{color: 'white', fontWeight: '700', marginTop:' 0%'}} >
                    
                 
                      Learn More <FaAngleRight size={25}  className="rounded-icon" style={{marginLeft:'2%'}}/>
                   
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link
                  className='btn btn-border-base btn-bottom'
                  data-aos='fade-right'
                  data-aos-delay='500'
                  data-aos-duration='1500'
                  to='/contact'
                   style={{ marginTop: '0%', left: '44%', alignItems: 'center'}}
                >
                  Book A Demo
                   {/* <FaPlus /> */}
                </Link>
      </div>
      </div>
      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaOne;
