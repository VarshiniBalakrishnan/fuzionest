import React from 'react';
import './Stopthink.css';
// import Image from '../../public/assets/img/5.png'

const Servicehomepage3 = () => {
  return (
    <div className='stopthink' style={{marginTop: '7%'}}>
          <img src="assets/img/5.png" alt="img" class="left-image" id="stopthinkimage" style={{ width: '30%' }}/>
{/* 
       <img src={Image} alt="Image" className="left-image"  id="stopthinkimage" style={{ width: '30%' }} /> */}
      <div className="content">
       
        <div className="text-content">
          <h2 className='Servicehomepage3-heading' >Fuzionest Brings Together The Highest Echelon Of Talent<br/>
From Across The Globe, Comprising The Top 7%.</h2>
          {/* <p className='stopthinkpara' style={{marginTop: '3%'}}>Please contact us for further guidance and our expert will be in touch with you as soon as possible.</p>
          <button className="stopthinkbtn" type="submit">
            Book A Demo
          </button> */}
        </div>
        
      </div>
      <img src="assets/img/5.png" alt="img" class="right-image" style={{ width: '30%'}}/>
{/* 
      <img src={Image} alt="Image" className="right-image" style={{ width: '30%'}} /> */}
    </div>
  );
}

export default Servicehomepage3;
