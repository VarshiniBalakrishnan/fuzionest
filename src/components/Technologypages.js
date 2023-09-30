import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Technologypages = () => {
  return (
    <div className='background' style={{ backgroundColor: '#F6F6F6', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <p style={{ float: 'right', color: 'black', top: '10%', marginTop: '-6%' }}>02</p>
      <div className="row">
        <div className="footer-column" style={{ marginBottom: '5%', marginTop: '3%' }}>
          <h3 className='column4' style={{ color: '#253284', fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>Work process</h3>
        </div>
        <div className="footer-column" style={{ marginBottom: '5%', marginTop: '3%' }}>
          <p className='column4'></p>
        </div>
        <div className="footer-column" style={{ marginBottom: '5%', marginTop: '3%' }}>
          {/* <p className='column1'>We have a well-established Agile process for full-cycle
            software development. As an Agile company, we
            welcome changes. If you wish to bring your process,
            we’ll adjust to them quickly.</p> */}
        </div>

        <div className="row" style={{ borderTop: '3px solid black', marginLeft: '-8%', width: '100%' }}>
          <div className="footer-column" style={{ marginBottom: '5%', marginTop: '3%' }}>
            <p style={{ color: 'black' }}>01</p>
            <h3 style={{ color: '#253284' }}>Discovery</h3>
            <p className='column4'><FaMinus style={{ marginRight: '2%' }} />Initial request.</p>
            <p className='column4'><FaMinus style={{ marginRight: '2%' }} />High-level requirements document, sample links, etc.</p>
            <p className='column4'><FaMinus style={{ marginRight: '2%' }} />Mutual NDA.</p>
            <p className='column4'><FaMinus style={{ marginRight: '2%' }} />Discovery call.</p>
          </div>
          <div className="footer-column column11" style={{ marginBottom: '5%', marginTop: '3%', borderLeft: '3px solid black' }}>
            <p style={{ color: 'black' }}>02</p>
            <h3 style={{ color: '#253284', marginLeft: '5%' }}>Pre-Engagement</h3>
            <p className='column4' style={{ marginLeft: '5%' }}><FaMinus style={{ marginRight: '2%' }} />Estimation / Proposal.</p>
            <p className='column4' style={{ marginLeft: '5%' }}><FaMinus style={{ marginRight: '2%' }} />Negotiation.</p>
            <p className='column4' style={{ marginLeft: '5%' }}><FaMinus style={{ marginRight: '2%' }} />Scope definition and approval.</p>
            <p className='column4' style={{ marginLeft: '5%' }}><FaMinus style={{ marginRight: '2%' }} />Account Manager assignment.</p>
            <p className='column4' style={{ marginLeft: '5%' }}><FaMinus style={{ marginRight: '2%' }} />Planning.</p>
            <p className='column4' style={{ marginLeft: '5%' }}><FaMinus style={{ marginRight: '2%' }} />Requirements and Feasibility analysis.</p>
          </div>
          <div className="footer-column column11" style={{ marginBottom: '5%', marginTop: '3%', borderLeft: '3px solid black' }}>
            <p style={{ color: 'black' }}>03</p>
            <h3 style={{ color: '#253284', marginLeft: '5%' }}>Engagement</h3>
            <p className='column4' style={{ marginLeft: '5%' }}><FaMinus style={{ marginRight: '2%' }} />MSA AND SOW</p>
            <p className='column4' style={{ marginLeft: '5%' }}><FaMinus style={{ marginRight: '2%' }} />Interview.</p>
            <p className='column4' style={{ marginLeft: '5%' }}><FaMinus style={{ marginRight: '2%' }} />Evaluation and hiring negotiation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologypages;
