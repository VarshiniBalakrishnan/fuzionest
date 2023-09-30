import React from 'react';
import './Stopthink.css';
import { Link } from "react-router-dom";
// import Image from '../../public/assets/img/5.png'

const Stopthink = () => {
  return (
    <div className='stopthink' style={{marginTop: '7%'}}>
          <img src="assets/img/5.png" alt="img" class="left-image" id="stopthinkimage" style={{ width: '30%' }}/>
{/* 
       <img src={Image} alt="Image" className="left-image"  id="stopthinkimage" style={{ width: '30%' }} /> */}
      <div className="content">
       
        <div className="text-content">
          <h2 className='stopthinkheading'style={{marginTop: '5%'}}> Stop Thinking & Start Building!</h2>
          <p className='stopthinkpara' style={{marginTop: '3%'}}>Please contact us for further guidance and our expert will be in touch with you as soon as possible.</p>
          <Link
                  className='btn btn-border-base15'
                  data-aos='fade-right'
                  data-aos-delay='500'
                  data-aos-duration='1500'
                  to='/contact'
                   style={{ marginTop: '0%', marginBottom: '2.9%',  alignItems: 'center'}}
                >
                  Book A Demo
                   {/* <FaPlus /> */}
                </Link>
        </div>
        
      </div>
      <img src="assets/img/5.png" alt="img" class="right-image" style={{ width: '30%'}}/>
{/* 
      <img src={Image} alt="Image" className="right-image" style={{ width: '30%'}} /> */}
    </div>
  );
}

export default Stopthink;
