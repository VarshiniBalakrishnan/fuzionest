import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const GridExample = () => {
  return (
    <div className="containerservice">
        <div className="servicepageone-heading">
            <h2 className="content2" style={{marginTop: '10%', fontWeight: '700'}}>The Fuzionest Screening Process</h2>
            <p className="contentpara5" style={{ paddingTop: '30px'}}>Every candidate aspiring to join the Fuzionest network undergoes a screening procedure meticulously crafted to<br/>
assess their proficiency in the respective subject, level of professionalism, and adeptness in communication. The<br/>
comprehensive screening process typically spans several weeks to finalize.</p>
        </div>
      <div className="row justify-content-center gx-4" style={{ marginTop: '60px'}}>
        <div className="col-md-3 mb-4">
           <p className="service-steps">Step 1</p> 
           

           <div class="row">
  <div class="column" >
  <img
          className='animate-img-servicehome'
          src='assets/img/Servicehomepage1/1.png'
          alt='img'
        />
  </div>
  <div class="column" >
    
    <p className="service-percentage" style={{width: '180%', marginTop: '11px'}}> <span style={{fontWeight: '800',fontFamily: 'Inter, sans-serif'}}> 41 %</span><br/>of application pass</p>
  </div>
</div>
      
          <h6 className="servicehomepage-head6" style={{fontWeight: 'bolder', fontSize: '20px', marginBottom: '20px', marginTop: '15%'}}>Language and Personality</h6>
          <p className="servicehomepage-p">The first step of the screening process is a<br/>
comprehensive English language and<br/>
communication interview evaluation. We also<br/>
assess personality traits, looking for candidates<br/>
who are passionate and fully engaged in their<br/>
work.</p>
        </div>
        <div className="col-md-3 mb-4">
        <p className="service-steps">Step 2</p>

        <div class="row">
  <div class="column" >
  <img
          className='animate-img-servicehome'
          src='assets/img/Servicehomepage1/2.png'
          alt='img'
        />
  </div>
  <div class="column" >
    
    <p className="service-percentage" style={{width: '180%', marginTop: '11px'}}> <span style={{fontWeight: '800', fontFamily: 'Inter, sans-serif',}}>16.7 %</span><br/>of application pass</p>
  </div>
</div>
     
          <h6 className="servicehomepage-head6" style={{fontWeight: 'bolder', fontSize: '20px', marginBottom: '20px', marginTop: '15%'}}>In Depth Skill Review</h6>
          <p className="servicehomepage-p">We also test each applicant's technical<br/>
knowledge and problem solving ability through<br/>
various assessments. Every member of the<br/>
Fuzionest network is an expert in their domain,<br/>
and we typically only advance candidates with<br/>
exceptional results in this phase.</p>
        </div>
        <div className="col-md-3 mb-4">
        <p className="service-steps">Step 3</p>
        <div class="row">
  <div class="column" >
  <img
          className='animate-img-servicehome'
          src='assets/img/Servicehomepage1/3.png'
          alt='img'
        />
  </div>
  <div class="column" >
    
    <p className="service-percentage" style={{width: '180%', marginTop: '11px'}} > <span style={{fontWeight: '800', fontFamily: 'Inter, sans-serif'}}> 7.8 %</span><br/>of application pass</p>
  </div>
</div>
        
        
          <h6  className="servicehomepage-head6" style={{fontWeight: 'bolder', fontSize: '20px', marginBottom: '20px', marginTop: '15%'}}>Live Screening</h6>
          <p className="servicehomepage-p">Each candidate is interviewed by Fuzionest<br/>
screeners who are experts in their functional<br/>
domain. Our screeners provide specific live<br/>
exercises, looking for problem solving ability,<br/>
depth of experience, communication ability, and<br/>
creativity.</p>
        </div>
      </div>
      <div className="row justify-content-center gx-4">
        <div className="col-md-3 mb-4">
        <p className="service-steps">Step 4</p>
        <div class="row">
  <div class="column" >
  <img
          className='animate-img-servicehome'
          src='assets/img/Servicehomepage1/4.png'
          alt='img'
        />
  </div>
  <div class="column" >
    
    <p className="service-percentage" style={{width: '180%', marginTop: '11px'}}><span style={{fontWeight: '800',fontFamily: 'Inter, sans-serif',}}>7.3 %</span><br/>of application pass</p>
  </div>
</div>
  
          <h6 className="servicehomepage-head6" style={{fontWeight: 'bolder', fontSize: '20px', marginBottom: '20px', marginTop: '15%'}}>Test Projects</h6>
          <p className="servicehomepage-p">Each candidate is assigned a test project to<br/>
evaluate whether they can walk the walk." Test<br/>
projects take 1-3 weeks are comprehensive and<br/>
provide real world scenarios for candidates to<br/>
demonstrate their competence, thoroughness,<br/>
professionalism, and integrity.</p>
        </div>
        <div className="col-md-3 mb-4">
        <p className="service-steps">Step 5</p>
        <div class="row">
  <div class="column" >
  <img
          className='animate-img-servicehome'
          src='assets/img/Servicehomepage1/5.png'
          alt='img'
        />
  </div>
  <div class="column" >
    
    <p className="service-percentage" style={{width: '180%', marginTop: '11px'}}><span style={{fontWeight: '800', fontFamily: 'Inter, sans-serif'}}>7 % </span><br/>of application pass</p>
  </div>
</div>
       
       
          <h6 className="servicehomepage-head6" style={{fontWeight: 'bolder', fontSize: '20px', marginBottom: '20px', marginTop: '15%'}}>Continued Excellence</h6>
          <p className="servicehomepage-p">Members of the Fuzionest network maintain a<br/>
track record of excellence while working with<br/>
clients. As a quality first company's, our focus is<br/>
on the top for talent and the top for clients, and<br/>
this principle permeates through to every<br/>
engagement and every delivered project.</p>
        </div>
        {/* <div className="col-md-4" style={{height: '177px'}}>
        <img
          className='animate-img-service'
          src='assets/img/servicepageone/6.png'
          alt='img'
        />
          <h6>Clone App</h6>
        </div> */}
      </div>
    </div>
  );
};

export default GridExample;