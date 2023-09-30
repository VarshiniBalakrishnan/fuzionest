import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Servicepageone = () => {
  return (
    <div className="containerservice" style={{alignItems: 'center'}}>
      <div className="servicepageone-heading">
        <h4 className="content2" style={{ fontWeight: '900' ,fontFamily: 'Inter, sans-serif'}}>OUR SERVICES</h4>
        <p className="contentpara2" style={{ lineHeight: '20px', marginTop: '20px'}}>
          As a mobile app development company, we have a wide <br/>range of services that will help your business.
        </p>
      </div>
      <div className="row justify-content-center gx-4 mb-4">
        <div className="col-md-1 mb-4 grid-sevice">
          <img
            className='animate-img-services'
            src='assets/img/servicepageone/1.png'
            alt='img'
          />
          <h6 style={{marginTop: '15%', lineHeight: '20px', marginBottom :'30%'}}>iOS App<br />Development</h6>
        </div>
        <div className="col-md-1 mb-4">
          <img
            className='animate-img-services'
            src='assets/img/servicepageone/2.png'
            alt='img'
          />
          <h6 style={{marginTop: '15%', lineHeight: '20px', marginBottom :'30%'}}>Android App<br />Development</h6>
        </div>
        <div className="col-md-1 mb-4">
          <img
            className='animate-img-services'
            src='assets/img/servicepageone/3.png'
            alt='img'
          />
          <h6 style={{marginTop: '15%', lineHeight: '20px', marginBottom :'30%'}}>Resource<br />Hiring</h6>     
        </div>
      </div>
      <div className="row justify-content-center gx-4 mb-4">
        <div className="col-md-1 mb-4" style={{height: '238px'}}>
          <img
            className='animate-img-services'
            src='assets/img/servicepageone/4.png'
            alt='img'
          />
          <h6 style={{marginTop: '15%', lineHeight: '20px'}}>Cross Platform<br />Development</h6>
        </div>
        <div className="col-md-1 mb-4" style={{height: '238px'}}>
          <img
            className='animate-img-servicess'
            src='assets/img/servicepageone/5.png'
            alt='img'
            style={{marginTop: '3%'}}
          />
          <h6 style={{marginTop: '22%', lineHeight: '20px'}}>Web App<br />Development</h6>
        </div>
        <div className="col-md-1 mb-4" style={{ height: '238px' }}>
          <img
            className='animate-img-services'
            src='assets/img/servicepageone/6.png'
            alt='img'
          />
          <h6 style={{marginTop: '22%', lineHeight: '20px'}}>Clone App</h6>
        </div>
      </div>
    </div>
  );
};

export default Servicepageone;

