import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contactarea1 = () => {
  return (
    <div className='row'>
      <div
        className='col-lg-8'
        data-aos='fade-right'
        data-aos-delay='200'
        data-aos-duration='1500'
      ></div>
      <div
        className='col-lg-4'
        data-aos='fade-left'
        data-aos-delay='200'
        data-aos-duration='1500'
      >
        <div className='contact-titles mb-0' style={{ marginTop: '25%' }}>
          <h2 className='title' style={{ color: ' #253284',lineHeight: '140%' }}>
            Tell us about your project
          </h2>
          <p className='content contactarea-content' style={{ color: 'black', lineHeight: '300%' }}>
            Or give us a call at{' '}
            <span style={{ color: ' #253284' }}>
              {' '}
              <FaPhoneAlt style={{ marginLeft: '1%' }} /> +91-8438762921
            </span>{' '}
            and we will form a team for you
          </p>
          <form style={{marginLeft: '-2.5%'}}>
            <div className="container contactarea-container" >
              <div className="row">
                <div className="col-md-6 mb-8">
                  <input
                    name="name"
                    type="name"
                    className="form-control"
                    placeholder="Full Name*"
                    required
                    style={{ borderWidth: '2px', padding: '15px 20px' }}
                  />
                </div>
                <div className="col-md-6 mb-8">
                  <input
                    name="mail"
                    type="mail"
                    className="form-control second-row"
                    placeholder="E-mail*"
                    required
                    style={{ borderWidth: '2px',padding: '15px 20px' }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-8">
                  <input
                    name="phone"
                    type="phone"
                    className="form-control"
                    placeholder="Phone*"
                    required
                    style={{ borderWidth: '2px', width: '100%', padding: '15px 20px' }}
                  />
                </div>
                <div className="col-md-6 mb-8">
                  <input
                    name="company"
                    type="company"
                    className="form-control second-row"
                    placeholder="Company*"
                    required
                    style={{ borderWidth: '2px', width: '100%', padding: '15px 20px' }}
                  />
                </div>
              </div>
              <div className="row">
  <div className="col-12">
    <textarea
      name="message"
      rows="5"
      className="form-control center-placeholder"
      placeholder="Message"
      required
      style={{ borderWidth: '2px', width: '100%', padding: '5px 10px' }}
    />
  </div>
</div>

              <div className="row">
                <div className="col-12 text-center">
                  <Link
                    className='btn btn-border-base19'
                    data-aos='fade-right'
                    data-aos-delay='100'
                    data-aos-duration='1500'
                    to='/about'
                    style={{  borderWidth: '2px', float: 'left', marginLeft: '0%' }}
                  >
                    Send Message
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className='box-contact'>
          <div className='content-box' style={{ marginLeft: '8%' ,marginTop:'10%'}}>
            <img
              className=' animate-img-10'
              src='assets/img/banner/image 28.png'
              alt='img'
              style={{ width: '100px' }}
            />
            <h6 style={{ fontWeight: 'bold', marginTop: '3%' }}>Phone</h6>
            <p style={{lineHeight: "20%",color: '#253284'}}>+91-8438762921</p>

            <h6 style={{marginTop: '10%'}}>E-mail</h6>
            <p style={{lineHeight: "20%",color: '#253284'}}>contact@fuzionest.com</p>

            <h6 style={{marginTop: '10%'}}>Address</h6>
            <p style={{lineHeight: "130%", marginTop: '-1%',color: '#282832'}}>
              Tidel Park, Module No.12 Ground Floor
              <br />
              Elcot SEZ, Coimbatore IT Park Rd,
              <br />
              Coimbatore, Tamil Nadu 641014.
            </p>

            <h6 style={{marginTop: '8%'}}>Address</h6>
            <p style={{lineHeight: "130%",marginTop: '-1%', color: '#282832'}}>
              No. 11/4, Pooja Garden, Kalapatti Main
              <br />
              Rd, Civil Aerodrome Post, Coimbatore,
              <br />
              Tamil Nadu 641014.
            </p>
          </div>
        </div>
      </div>



      <div className='contact-g-map ' style={{marginBottom: '-15px'}}>
        <iframe src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29208.601361499546!2d90.3598076!3d23.7803374!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1589109092857!5m2!1sen!2sbd' />
      </div>



    </div>
  );
}

export default Contactarea1;

