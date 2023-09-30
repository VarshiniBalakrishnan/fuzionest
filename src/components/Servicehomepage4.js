import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Servicehomepage4 = () => {
    return (
        <footer className="bg-white text-black py-4">
            <div className="container" >
                <div className="row" style={{borderBottom: '3px solid #D9D9D9'}}>
                    <h5 className="footer-heading" style={{ marginTop: '5%',   }}>Fuzionest Developers</h5>

                    <div className="footer-column" style={{ marginBottom: '5%', marginTop: '3%'}}>
                        <p className='column44'>AWS Developers</p>
                        <p className='column44'>Algorithm Developers</p>
                        <p className='column44'>Blockchain Developers</p>
                    </div>

                    <div className="footer-column" style={{ marginBottom: '5%', marginTop: '3%' }}>
                        <p className='column44'>Kotlin Developers</p>
                        <p className='column44'>Go Engineers</p>
                        <p className='column44'>React Developers</p>
                    </div>

                    <div className="footer-column" style={{ marginBottom: '5%', marginTop: '3%' }}>
                        <p className='column44'>Flutter Developers</p>
                        <p className='column44'>PHP Developers</p>
                        <p className='column44'>Swift UI Developers</p>
                    </div>

                    <div className="footer-column" style={{ marginBottom: '5%', marginTop: '3%' }}>
                        <p className='column44'>Node Developers</p>
                        <p className='column44'>Swift Developers</p>
                    </div>
                </div>

                <div className="row" style={{ borderBottom: '3px solid #D9D9D9'}}>
                    <h5 className='footer-heading' style={{ paddingLeft: '10%', paddingRight: '2%'}}>Fuzionest Designers</h5>
                    <p className='servicepage4-design' style={{textAlign: 'center',  color: 'black' }}>UI/UX Designers</p>
                </div>

                {/* <div className="row" style={{ alignItems: 'center', color: '#253284', borderBottom: '3px solid #D9D9D9' }}>
                    <div className="col4" style={{marginBottom: '6%', fontWeight: '900'}} >Learn How Enterprises Benefit From Fuzionest Experts<FaArrowRight size={25} style={{marginLeft: '1%'}}/></div>
                </div> */}

                <div className="row" style={{  marginBottom: '5%', width: '100%' }}>
                    <div className="col4 servicepage4-col4" style={{marginBottom: '2%', fontWeight: '900'}}>Join the Fuzionest Community.</div>
 <div className="button-servicehomepage4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
  <Link
    className='btn btn-servicehomepage4'
    data-aos='fade-right'
    data-aos-delay='500'
    data-aos-duration='1500'
    to='/contact'
    style={{  borderRadius: '40px', background: 'transparent', border: '1px solid #088759', textAlign: 'center', textDecoration: 'none',  fontSize: '14px' }}
  >
    Hire Top Talent
  </Link>
  <p data-aos='fade-right'
    data-aos-delay='500'
    data-aos-duration='1500'
    style={{ margin: '0 1rem', fontSize: '14px', color: 'black' }}>Or</p>
  <Link
    className='btn btn-servicehomepage4'
    data-aos='fade-right'
    data-aos-delay='500'
    data-aos-duration='1500'
    to='/about'
    style={{  borderRadius: '40px', background: 'transparent', border: '1px solid #088759', textAlign: 'center', textDecoration: 'none',  fontSize: '14px' }}
  >
    Apply as a Talent
  </Link>
</div>

                </div>
            </div>
        </footer>
    );
};

export default Servicehomepage4;
