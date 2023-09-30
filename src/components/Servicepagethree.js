import React from 'react'

const Servicepagethree = () => {
  return (
    <div
    className='faq-area faq-area-margin-top bg-cover '
    // style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
  >



<h3 className='Servicepagethree-heading' style={{textAlign: 'center', fontSize: '40px' ,  lineHeight: '50px'}}>Recent Work InFocus</h3>
<h3 className='Servicepagethree-heading1' style={{textAlign: 'center', fontSize: '40px',lineHeight: '50px' }}>RSL - Car Booking Service</h3>
<p className='servicepagethree-content'>Royal Smart Limousine LLC is a full chauffeured service transportation company providing<br/>
close to 500 top-notch service fleet to a vast array of clientele utilizing almost every type of<br/>
luxury vehicle available in the chauffeured limousine services industry.</p>

<div className='servicepagetwo-container'>

<div className='row '>
<div
  className='col-xl-5 col-lg-6 col-md-8'
  data-aos='fade-right'
  data-aos-delay='100'
  data-aos-duration='1500'
>
  <div className='about-thumb-inner pt-lg-3'>
    <img
      className='Servicepagetwoimg-img'
      src='assets/img/servicepagethree/img1.png'
      alt='img'
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
  <div className='section-title-service3 mb-0 mt-4 mt-lg-0'>
  
    {/* <h6 className='sub-title'>SOME FAQ'S</h6> */}
    <div className="image-text-container">
  <img
    className='Servicepagethree-img1'
    src='assets/img/servicepagethree/rsl.png'
    alt='img'
    style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '20%' }} // Adjust the spacing between image and text
  />
  <p style={{ display: 'inline-block', margin: '10px', verticalAlign: 'middle', marginLeft: '-8px', letterSpacing: '3px' }}>R S L</p>
</div>

    <h3 className='servicepagethree-title' style={{ fontWeight: '700', }}>
    Key features of RSL Car<br/>
Booking Service
    </h3>
    <ul className='servciepagethree-list'>
        <li style={{marginLeft: '20px'}}><img
      className='Servicepagethree-img'
      src='assets/img/servicepagethree/img2.png'
      alt='img'
      style={{width: '20px', marginRight: '10px'}}
    />Cross-Platform Convenience</li>
        <li style={{marginLeft: '20px'}}><img
      className='Servicepagethree-img'
      src='assets/img/servicepagethree/img3.png'
      alt='img'
      style={{marginRight: '10px',width: '20px'}}
    />Smart Saving, Personalized</li>
        <li style={{marginLeft: '20px'}}><img
      className='Servicepagethree-img'
      src='assets/img/servicepagethree/img4.png'
      alt='img'
      style={{marginRight: '10px',width: '20px'}}
    />Real-Time Ease</li>
        <li style={{marginLeft: '20px'}}><img
      className='Servicepagethree-img'
      src='assets/img/servicepagethree/img5.png'
      alt='img'
      style={{marginRight: '10px',width: '20px'}}
    />Seamless Connection</li>
        <li style={{marginLeft: '20px'}}><img
      className='Servicepagethree-img'
      src='assets/img/servicepagethree/img6.png'
      alt='img'
      style={{marginRight: '10px',width: '20px'}}
    />Payment Made Simple</li>
    </ul>
    {/* <p className='content' style={{fontSize: '16px'}}>
    Fuzionest thrives on innovation. Our agency continually seeks out
new technologies, frameworks, and methodologies to stay ahead in
the rapidly evolving world of software development. We embrace
change and use it to create cutting-edge solutions that give our
clients a competitive advantage.
</p> */}
  </div>
  {/* <div className='accordion accordion-inner ' id='accordionExample'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingOne'>
        <div className='accordin-button'>
        <div className="grid-container" style={{ display: 'flex', flexDirection: 'row', marginTop: '4%' }}>
            <div className="grid-check" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="grid-item">
                <FaCheckCircle style={{ color: "#0217A2" }} />
                <span>Personalization</span>
              </div>
              <div className="grid-item">
                <FaCheckCircle style={{ color: "#0217A2" }} />
                <span>Flexibility</span>
              </div>
            </div>

            <div className="grid-check" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="grid-item">
                <FaCheckCircle style={{ color: "#0217A2" }} />
                <span>Enhanced Engagement</span>
              </div>
              <div className="grid-item">
                <FaCheckCircle style={{ color: "#0217A2" }} />
                <span>Increased Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </h2>
      <div>
        <p className='content' style={{marginTop: '5%'}}>
        This feature not only enhances the customer experience but also promotes engagement and loyalty. Incorporating a customizable menu feature into a food delivery app not only adds value to the user experience but also positions the app as a versatile and customer-centric platform that caters to a wide array of tastes and needs.   </p>
      </div>
    </div>
  </div> */}
</div>
</div>
</div>

</div>






  )
}

export default Servicepagethree