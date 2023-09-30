import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Rslpagethree = () => {
  return (
    <div>
        
        <div className='container'>
  <div className='row pd-top-100' style={{padding: '0 5%', paddingTop: '4%'}}>
    <div
      className='col-xl-5 col-lg-6 col-md-8'
      data-aos='fade-right'
      data-aos-delay='100'
      data-aos-duration='1500'
    >

<h4 className='rsl-result' style={{color:'#253284', paddingLeft:' 5%', paddingTop: '20%',fontSize: '30px' }}>The Result</h4>

      <div className='about-thumb-inner pt-lg-3'>
        <img
          className='main-img'
          src='assets/img/rsl/14.svg'
          alt='img'
          style={{paddingTop: '5%'}}
        />
        {/* <img
          className='animate-img-bottom-right top_image_bounce'
          src='assets/img/about/5.png'
          alt='img'
        /> */}
      </div>
    </div>
    <div
      className='col-xl-7 col-lg-6'
      data-aos='fade-left'
      data-aos-delay='100'
      data-aos-duration='1500'
    >
      <div className='section-title1 mb-0 mt-4 mt-lg-0' >
        {/* <h6 className='sub-title'>SOME FAQ'S</h6> */}
        
        <h5 className='title-rsl-ft' style={{marginTop: '33%',color:'#253284'}}>
         
        Features:
        </h5>
        <h6 style={{lineHeight: '300%',color:'#253284',fontWeight: '600'}}>Luxury Made Easy:</h6>
        <p className='content' style={{color: '#455065'}}>
        Effortlessly book lavish limos through our app, redefining opulent travel with simplicity.  </p>

        <h6 style={{lineHeight: '300%',color:'#253284',fontWeight: '600'}}>Elite Assurance:</h6>
        <p style={{color: '#455065'}}>Expect impeccable rides from skilled chauffeurs, ensuring a VIP experience every time</p>
        <h6 style={{lineHeight: '300%',color:'#253284',fontWeight: '600'}}>Your Way, Anytime:</h6>
        <p style={{color: '#455065'}}>Choose from self, guest, future, or package bookings, catering to all your travel needs.</p>
      </div>
     
           
       
     
    </div>
  </div>
</div>


<div className='container'>
  <div className='row pd-top-120' style={{padding: '0 5%', marginTop:' 7%'}}>
    <div
      className='col-xl-5 col-lg-6 col-md-8 order-lg-last'
      data-aos='fade-left'
      data-aos-delay='100'
      data-aos-duration='1500'
    >
      <div className='about-thumb-inner pt-lg-3'>
        <img
          className='main-img'
          src='assets/img/rsl/15.svg'
          alt='img'
          style={{marginTop: '9%'}}
        />
      </div>
    </div>
    <div
      className='col-xl-7 col-lg-6'
      data-aos='fade-right'
      data-aos-delay='100'
      data-aos-duration='1500'
    >
      <div className='section-title-rsl3 mb-0 mt-4 mt-lg-0' style={{paddingLeft: '4%'}}>
        <h5 style={{color:'#253284',fontSize: '30px' }}>The application</h5>
        <h6 style={{color:'#253284',lineHeight: '300%',fontWeight: '600'}}>Cross Platform Convenience:</h6>
        <p style={{color: '#455065'}}>Elevate your ride experience with our app, available on Android and iOS devices.</p>
         <h6 style={{color:'#253284',lineHeight: '300%',fontWeight: '600'}}>Smart Saving, Personalized:</h6>
        <p style={{color: '#455065'}}>Enjoy battery-friendly app usage, tailor-made offers, and location-based promotions.</p>
        <h6 style={{color:'#253284',lineHeight: '300%',fontWeight: '600'}}>Real Time Ease:</h6>
        <p style={{color: '#455065'}}>Track nearby rides, ETA, and estimated fares effortlessly for various vehicle categories.</p>
        <h6 style={{color:'#253284',lineHeight: '300%',fontWeight: '600'}}>Seamless Connection:</h6>
        <p style={{color: '#455065'}}>Stay updated on rides, chat with drivers, and ensure smooth server connectivity.</p>
        <h6 style={{color:'#253284',lineHeight: '300%', fontWeight: '600'}}>Payment Made Simple:</h6>
        <p style={{color: '#455065'}}>Choose cash, card, or wallet, and access receipts anytime. Your ride, your way</p>
      </div>
     
      </div>
    </div>
  </div>





<div className='container-3' style={{padding: '0 31.7%'}} >

  <h3 style={{color:'#253284'}}>What our clients say about us:</h3>
  <div className='para-border' style={{borderLeft: '3px solid #E0E0E0', paddingLeft: '15px'}}>
  <p>"Rootstrap came in and created an exceptionally elegant label creation

application that will serve as a game-changer in the Datacom industry. The

aesthetic as well as the functionality of the app contribute greatly towards

making the job of labeling more streamlined and convenient. As proven

through customer interactions and feedback, the delivered product was very

well received. Additionally, we couldn t have been more pleased with the

experience of working with the Rootstrap team over the entire duration of

the project.</p>
<p style={{width: '88%'}}>Their development process and communication really helped us

save time and get the product out into the market quickly."</p>
</div>
<h6 style={{fontWeight: '700', marginTop: '3%', marginBottom: '10%'}}>Kellan OConnor - Head of New Product, Epson Ventures</h6>


 <Link
                  className='btn btn-border-base'
                  data-aos='fade-right'
                  data-aos-delay='500'
                  data-aos-duration='1500'
                  to='/about'
                   style={{width: '37%', left: '30%', marginBottom: '10%'}}
                >
                  Explore Our Work
             
                </Link> 
    </div>
    </div>

  )
}

export default Rslpagethree