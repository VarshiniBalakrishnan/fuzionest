import React from 'react';
 import './Rslpagefour.css'; 

function Rslpagefour() {
  return (
    <div className="container">
      <div className="row rsl-row">
        <div className="col-md-4">
          <div className="card card-rsl " style={{border: 'none'}}>
            <img
              className="card-img-top"
              src="assets/img/rsl1/4.svg"
              alt="TreatMD"
            />
            <div className="card-body">
              <h3 className="card-title" style={{color: '#253284'}}>TreatMD</h3>
              <p className="card-text">Mobile App Development</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-rsl" style={{border: 'none'}}>
            <img
              className="card-img-top"
              src="assets/img/rsl1/3.svg"
              alt="Fanbread"
            />
            <div className="card-body">
              <h3 className="card-title" style={{color: '#253284'}}>Fanbread</h3>
              <p className="card-text">
                Wed & Mobile Development, Strategy, Design
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-rsl" style={{border: 'none'}}>
            <img
              className="card-img-top"
              src="assets/img/rsl1/2.svg"
              alt="Business News Outlet"
            />
            <div className="card-body">
              <h3 className="card-title" style={{color: '#253284'}}>Business News Outlet</h3>
              <p className="card-text">Mobile App Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rslpagefour;
