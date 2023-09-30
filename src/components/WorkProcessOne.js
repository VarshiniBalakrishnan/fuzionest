import React from "react";

const WorkProcessOne = () => {
  return (
    <>
      {/*==================== Work Process One start ====================*/}
      <div className='work-process-area' >
        <div className='container'>
          <div className='section-title-work1 text-center'>
            <h6 className='sub-titles' style={{color: '#253284', marginBottom: '2%',marginTop: '5%'}}>CORE VALUES</h6>
            <h2 className='title'>
            The Standard by Which We Run Our Company
            </h2>
            <p style={{color: 'black', marginTop: '2%', width: '92%', textAlign: 'center', marginLeft: '3%'}} >At Fuzionest, our values influence every decision we make. Whether we’re considering giving employees the freedom to attend conferences or building a new
feature for our customers, our values hold us accountable to be the very best company we can be.</p>
          </div>
          <div className='row'>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/Aboutpage/bl1.png' alt='img' style={{textAlign: 'center',marginLeft: '38%',width: '60px'}} />
                </div>
                <div className='details'>
                  {/* <p className='process-count'>Work 01</p> */}
                  <h5 className='mb-3'style={{textAlign: 'center'}}>We Iterate to Success</h5>
                  <p className='content-work-process' style={{textAlign: 'center', color:'black',marginTop: '18%'}}>
                  Success isn’t a straight line. We<br/>

acknowledge our mistakes and<br/>

learn from them to move us<br/>

closer to where we want to go.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/Aboutpage/bl2.png' alt='img' style={{textAlign: 'center', marginLeft: '38%',width: '60px'}}/>
                </div>
                <div className='details'>
                  {/* <p className='process-count'>Work 02</p> */}
                  <h5 className='mb-3'style={{textAlign: 'center', lineHeight: '25px'}}>We Encourage Personal Growth</h5>
                  <p className='content' style={{textAlign: 'center', color:'black'}}>
                  Behind every great company are<br/>

great people. We invite<br/>

employees to become the best<br/>

version of themselves, both<br/>

personally and professionally.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/Aboutpage/bl3.png' alt='img' style={{textAlign: 'center',marginLeft: '38%',width: '60px'}}/>
                </div>
                <div className='details'>
                  {/* <p className='process-count'>Work 03</p> */}
                  <h5 className='mb-3'style={{textAlign: 'center'}}>We Go The Extra Mile</h5>
                  <p className='content' style={{textAlign: 'center', color:'black',marginTop: '16%'}}>
                  It’s easy to settle for mediocrity.<br/>

We believe in going above and<br/>

beyond, whether that’s solving<br/>

internal challenges or serving<br/>

our customers.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/Aboutpage/bl4.png' alt='img' style={{textAlign: 'center',marginLeft: '38%', width: '60px'}}/>
                </div>
                <div className='details'>
                  {/* <p className='process-count'>Work 04</p> */}
                  <h5 className='mb-3' style={{textAlign: 'center'}}>All While Having Fun</h5>
                  <p className='content' style={{textAlign: 'center' ,color:'black',marginTop: '16%'}}>
                  Work doesn’t have to be a<br/>

grind. Nor does it have to be<br/>

boring. We believe good work<br/>

comes from having fun not in<br/>

spite of it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process One end ====================*/}
    </>
  );
};

export default WorkProcessOne;
