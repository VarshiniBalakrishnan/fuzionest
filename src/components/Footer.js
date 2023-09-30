// import React from 'react';
// import './Footer.css';
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebookF } from 'react-icons/fa'
// import image from './icon.png'
// import { FaLinkedinIn } from 'react-icons/fa'

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-row">
//         <div className="footer-column">
//           <h5 className="footer-heading" style={{color: 'white',  borderBottom: '1px solid #FFFFFF'}}>On-Demand Talent</h5>
//           <p>Hire Freelance Developers</p>
//           <p>Hire Freelance Designers</p>
//           <p>Hire Freelance Finance Experts</p>
//           <p>Hire Freelance Project Managers</p>
//           <p>Hire Freelance Product Managers</p>
//         </div>
//         <div className="footer-column">
//           <h5 className="footer-heading" style={{color: 'white',  borderBottom: '1px solid #FFFFFF'}}>Management Consulting</h5>
//           <p>Strategy Consulting</p>
//           <p>People & Organization Consulting</p>
//           <p>Innovations & Experience Consulting</p>
//           <h5 style={{color: 'white' , borderBottom: '1px solid #FFFFFF'}}>Technology Services</h5>
//           <p>Application Services</p>
//           <p>Cloud Services</p>
//           <p>Information Security Services</p>
//           <p>Quality Assurance Services</p>
//         </div>
//         <div className="footer-column">
//           <h5 className="footer-heading" style={{color: 'white' , borderBottom: '1px solid #FFFFFF'}}>About</h5>
//           <p>Top 3%</p>
//           <p>Clients</p>
//           <p>Freelance Jobs</p>
//           <p>Specialized Services</p>
//           <p>Utilities & Tools</p>
//           <p>Research & Analysis Center</p>
//           <p>About Us</p>
//         </div>
//         <div className="footer-column">
//           <h5 className="footer-heading" style={{color: 'white',  borderBottom: '1px solid #FFFFFF'}}>Contact</h5>
//           <p>Contact Us</p>
//           <p>Press Center</p>
//           <p>Careers</p>
//           <p>FAQ</p>
//         </div>
//       </div>
//       <div className="footer-row">
//         <p className='footerheading'>Fuzionest</p>
//         <p style={{width: '40%', letterSpacing: '-0.5px', marginTop: '10px'}}>The World's Top Talent, On demand</p>
//         <div className="icon-round" style={{ display: 'flex', justifyContent: 'center' }}>
//   <div className="round-icon">
//     <a href="#">
//       <FaFacebookF />
//     </a>
//   </div>
//   <div className="round-icon">
//     <a href="#">
//       <FaInstagram />
//     </a>
//   </div>
//   <div className="round-icon">
//     <a href="#">
//       <img src={image} alt="Description of the image" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
//     </a>
//   </div>
//   <div className="round-icon">
//     <a href="#">
//       <FaLinkedinIn />
//     </a>
//   </div>
// </div>

//       </div>
//       <div className="footer-row1">
//         Copyright-2023 Fuzionest, LLC | Privacy Policy  Website Terms  Accessibility
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import './Footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from 'react-icons/fa';
import image from './icon.png';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <h5 className="footer-heading">On-Demand Talent</h5>
          <p>Resource Hiring</p>
          <p>Hire Android Developers</p>
          <p>Hire iOS Developers</p>
          <p>Hire Web Developers</p>
          <p>Hire Full Stack Developers</p>
        </div>
        <div className="footer-column">
          <h5 className="footer-heading">Cloud Consulting</h5>
          <p>Cloud Cost Optimisation</p>
          <p>Supermarket App Clone</p>
          <p>Laundry Booking App Clone</p>
          <p>Pharmacy App Clone</p>
          <p>Salon Booking App Clone</p>
          {/* <h5 className="footer-heading">App Development</h5>
          <p>Android App Development</p>
          <p>iOS App Development</p>
          <p>Flutter App Development</p> */}
          
        </div>
        <div className="footer-column">
          <h5 className="footer-heading">App Development</h5>
          <p>Android App Development</p>
          <p>iOS App Development</p>
          <p>Flutter App Development</p>
          {/* <p>Specialized Services</p>
          <p>Utilities & Tools</p>
          <p>Research & Analysis Center</p>
          <p>About Us</p> */}
        </div>
        <div className="footer-column">
          <h5 className="footer-heading">Contact</h5>
          <p>About Us</p>
          <p>Contact Us</p>
          
          <p>Careers</p>
          
        </div>
      </div>
      <div className="footer-row">
        <p className="footerheading">Fuzionest</p>
        <p className='footerheading-para'>Making Businesses Resilient</p>
        <div className="icon-round">
          <div className="round-icon">
            <a href="#">
              <FaFacebookF />
            </a>
          </div>
          <div className="round-icon">
            <a href="#">
              <FaInstagram />
            </a>
          </div>
          <div className="round-icon">
            <a href="#">
              <img
                src={image}
                alt="Description of the image"
                style={{ height: '100%', width: '100%', objectFit: 'contain' }}
              />
            </a>
          </div>
          <div className="round-icon">
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-row1">
        Copyright-2023 Fuzionest, LLC | Privacy Policy Website Terms Accessibility
      </div>
    </footer>
  );
};

export default Footer;
