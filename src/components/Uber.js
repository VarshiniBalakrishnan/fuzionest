// import React from 'react'
// import "./Uber.css"
// const Uber = () => {
//   return (
//     <div className='service'>
//         <div className='heading'>
//             <h4 className='serviceheading1' style={{marginTop: '-3%', fontWeight: '900'}}>Bringing Uper like App Solution To All Industried</h4>
//             {/* <p className='para'>
//                 Experience the power of Uber-like App Development Solution  
//                 catering to over 300,000 on-demand customers</p>    
//         */}
       
//         </div>

//         <div class="card-container" style={{alignItems: 'center'}}>
//     <div class="card" style={{border: 'none', marginLeft: '15%'}}>
   
 
//   <div class="logoo-container">
//     <img src="assets/img/Uber/1.png" alt="img" class="logo-imagee" />
//   </div>


//       <h2 class="card-title1" >Food</h2>
//       <p class="card-content">Launch your Food delivery business and start delivering to customers doorsteps.</p>
//       <button className='submitbutton' type='submit'>Book A Demo</button>
//     </div>
//     <div class="card" style={{border: 'none'}}>
//     <div class="logoo-container">
//     <img src="assets/img/Uber/2.png" alt="img" class="logo-imagee" />
//   </div>
//       <h2 class="card-title1">Grocery</h2>
//       <p class="card-content">Aggregate local vendors and start
// selling groceries on-demand in the
// neighborhood.</p>
// <button className='submitbutton' type='submit'>Book A Demo</button>
//     </div>
//     <div class="card" style={{border: 'none'}}>
//     <div class="logoo-container">
//     <img src="assets/img/Uber/3.png" alt="img" class="logo-imagee" />
//   </div>
//       <h2 class="card-title1">Beauty</h2>
//       <p class="card-content">Onboard Salons and beauticians in
// the area and facilitate online
// appointment booking for customers.</p>
// <button className='submitbutton' type='submit'>Book A Demo</button>
//     </div>
//     <div class="card" style={{border: 'none'}}>
//     <div class="logoo-container">
//     <img src="assets/img/Uber/4.png" alt="img" class="logo-imagee" />
//   </div>
//       <h2 class="card-title1">Pharmacy</h2>
//       <p class="card-content">Allow customers to order medicines
// online and start delivering to
// customers doorsteps.

// </p>
// <button className='submitbutton' type='submit'>Book A Demo</button>
//     </div>
//     <div class="card" style={{border: 'none'}}>
//     <div class="logoo-container">
//     <img src="assets/img/Uber/5.png" alt="img" class="logo-imagee" />
//   </div>
//       <h2 class="card-title1">Pick up and delivery</h2>
//       <p class="card-content">Launch your own pick-up and
// delivery service like Postmates and
// earn by charging delivery fees</p>
// <button className='submitbutton' type='submit'>Book A Demo</button>
//     </div>
//     <div class="card" style={{border: 'none'}}>
//     <div class="logoo-container">
//     <img src="assets/img/Uber/6.png" alt="img" class="logo-imagee" />
//   </div>
//       <h2 class="card-title1">Home Services</h2>
//       <p class="card-content">Launch your own platform to help
// customers book handyman services
// on demand.</p>
// <button className='submitbutton' type='submit'>Book A Demo</button>
//     </div>

//     <div class="card" style={{border: 'none'}}>
//     <div class="logoo-container">
//     <img src="assets/img/Uber/7.png" alt="img" class="logo-imagee" />
//   </div>
//       <h2 class="card-title1">Laundry</h2>
//       <p class="card-content">Setup your online laundry/dry
// cleaning pick up and delivery service
// with our on-demand suite.</p>
// <button className='submitbutton' type='submit'>Book A Demo</button>
//     </div>
    
//   </div>
//     </div>
//   )
// }

// export default Uber




import React from 'react';
import './Uber.css';
import { Link } from "react-router-dom";

const Uber = () => {
  return (
    <div className='container service'>
      <div className='row'>
        <div className='col-12'>
          <h4 className='serviceheading1' style={{ marginTop: '-3%', fontWeight: '900' }}>
            Bringing Uber-like App Solution To All Industries
          </h4>
        </div>
      </div>

      <div className="row row-uber " style={{padding: '0 15%'}}>
        <div className="col-6 col6-uber"style={{border: 'none'}} >
          <div class="card" style={{border: 'none'}}>
            <div class="logoo-container">
              <img src="assets/img/Uber/1.png" alt="img" class="logo-imagee-uber" />
            </div>
            <h2 class="card-title1" >Food</h2>
            <p class="card-content">Launch your Food delivery business and start delivering to customers doorsteps.</p>
            <button className='submitbutton' type='submit'><Link to= "/contact">Book A Demo</Link></button>
          </div>
        </div>

        <div className="col-6 col6-uber">
          <div class="card " style={{border: 'none'}}>
            <div class="logoo-container">
              <img src="assets/img/Uber/2.png" alt="img" class="logo-imagee-uber" />
            </div>
            <h2 class="card-title1">Grocery</h2>
            <p class="card-content">Aggregate local vendors and start selling groceries on-demand in the neighborhood.</p>
            <button className='submitbutton' type='submit'><Link to= "/contact">Book A Demo</Link></button>
          </div>
        </div>

        <div className="col-6 col6-uber">
          <div class="card" style={{border: 'none'}}>
            <div class="logoo-container">
              <img src="assets/img/Uber/3.png" alt="img" class="logo-imagee-uber" />
            </div>
            <h2 class="card-title1">Beauty</h2>
            <p class="card-content">Onboard Salons and beauticians in the area and facilitate online appointment booking for customers.</p>
            <button className='submitbutton' type='submit'><Link to= "/contact">Book A Demo</Link></button>
          </div>
        </div>

        <div className="col-6 col6-uber">
          <div class="card" style={{border: 'none'}}>
            <div class="logoo-container">
              <img src="assets/img/Uber/4.png" alt="img" class="logo-imagee-uber" />
            </div>
            <h2 class="card-title1">Pharmacy</h2>
            <p class="card-content">Allow customers to order medicines online and start delivering to customers doorsteps.</p>
            <button className='submitbutton' type='submit'><Link to= "/contact">Book A Demo</Link></button>
          </div>
        </div>

        <div className="col-6 col6-uber">
          <div class="card" style={{border: 'none'}}>
            <div class="logoo-container">
              <img src="assets/img/Uber/5.png" alt="img" class="logo-imagee-uber" />
            </div>
            <h2 class="card-title1">Pick up and delivery</h2>
            <p class="card-content">Launch your own pick-up and delivery service like Postmates and earn by charging delivery fees.</p>
            <button className='submitbutton' type='submit'><Link to= "/contact">Book A Demo</Link></button>
          </div>
        </div>

        <div className="col-6 col6-uber">
          <div class="card" style={{border: 'none'}}>
            <div class="logoo-container">
              <img src="assets/img/Uber/6.png" alt="img" class="logo-imagee-uber" />
            </div>
            <h2 class="card-title1">Home Services</h2>
            <p class="card-content">Launch your own platform to help customers book handyman services on demand.</p>
            <button className='submitbutton' type='submit'><Link to= "/contact">Book A Demo</Link></button>
          </div>
        </div>

        <div className="col-6 col6-uber">
          <div class="card" style={{border: 'none'}}>
            <div class="logoo-container">
              <img src="assets/img/Uber/7.png" alt="img" class="logo-imagee-uber" />
            </div>
            <h2 class="card-title1">Laundry</h2>
            <p class="card-content">Setup your online laundry/dry cleaning pick up and delivery service with our on-demand suite.</p>
            <button className='submitbutton' type='submit'><Link to= "/contact">Book A Demo</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uber;
