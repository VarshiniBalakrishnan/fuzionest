import React from 'react';
import { Link } from 'react-router-dom';

const Servicepagefour = () => {
  return (
    <div className='servicepagefour-container'>
      <div className='row ' style={{marginTop: '-5%'}}>
        <div
          className='col-xl-5 col-lg-6 col-md-8 mb-4 mb-md-0 order-lg-last'
          data-aos='fade-left'
          data-aos-delay='100'
          data-aos-duration='1500'
        >
          <div className='about-thumb-inner pt-lg-3'>
            <img
              className='Servicepagefour-img'
              src='assets/img/servicepagefour/1.png'
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
          <div className='servicepage-section-title mb-0 mt-4 mt-lg-0'>
            <h1 className='servicepagefour-title' style={{ marginTop: '10%'}}>
              GET A FREE<br />CONSULTATION
            </h1>
            <p className='servicepagefour-content' style={{color: 'black'}} >
              Get in touch with us for a free consult on the scope of your project
            </p>

            <form>
              <div className="row">
              <div className="col-md-10 mb-3">
                  <input
                    name="name"
                    type="name"
                    className="form-control"
                    placeholder="Full Name"
                    required
                    style={{ borderWidth: '2px' , marginBottom: '8px' }}
                  />
                </div>
                <div className="col-md-10 mb-3">
                  <input
                    name="mail"
                    type="mail"
                    className="form-control"
                    placeholder="E-mail"
                    required
                    style={{ borderWidth: '2px' , marginBottom: '8px' }}
                  />
                </div>
                <div className="col-md-10 mb-3">
                  <input
                    name="phone"
                    type="phone"
                    className="form-control"
                    placeholder="Phone"
                    required
                    style={{ borderWidth: '2px' , marginBottom: '8px' }}
                  />
                </div>
                <div className="col-md-10 mb-3">
                  <input
                    name="company"
                    type="company"
                    className="form-control"
                    placeholder="Company"
                    required
                    style={{ borderWidth: '2px',  marginBottom: '8px'  }}
                  />
                </div>
              
              
                <div className="col-md-10 mb-3">
                  <textarea
                    name="message"
                    rows="5"
                    className="form-control"
                    placeholder="Message"
                    required
                    style={{ borderWidth: '2px', marginBottom: '8px'  }}
                  />
                </div>
                <div className="col-9 text-center">
                  <Link
                    className='btn btn-border-base17'
                    data-aos='fade-right'
                    data-aos-delay='100'
                    data-aos-duration='1500'
                    to='/about'

                   
                  >
                    Send Message
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicepagefour;
