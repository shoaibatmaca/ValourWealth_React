import React from 'react';
import '../DashboardSidebarComp/styles/progressbar.css';

const CircularProgressBar = ({ percentage, color }) => {
  const rotation = percentage * 3.6; 
  
  return (
    <div className="circular-progress">
      <div className="outer-circle">
        <div className="inner-circle">
          <div className="percentage">
            {percentage}<span className="percent-symbol">%</span>
          </div>
        </div>
      </div>
      
      <div 
        className="progress-circle" 
        style={{ 
          '--percentage': percentage,
          '--color': color 
        }}
      ></div>
    </div>
  );
};

const ProgressBarsDisplay = () => {
  return (
    <div className="container mb-5 p-0">
    <div className="progress_container shadow p-3">
        <div className="sec_heading ">
            <h2 className='text-white'>QBTS</h2>
        </div>
      <div className="row justify-content-center p-3">
      
        <div className="col-md-3 text-center">
          <CircularProgressBar percentage={45} color="#3CD4A0" />
          <h4 className='text-white'>progress</h4>
        </div>
        <div className="col-md-3 text-center">
          <CircularProgressBar percentage={75} color="#9333EA" />
          <h4 className='text-white'>Watched</h4>

        </div>
        <div className="col-md-3 text-center">
          <CircularProgressBar percentage={95} color="#F05252" />
          <h4 className='text-white'>Success rate</h4>

        </div>
      </div>
      </div>
    </div>
  );
};

export default ProgressBarsDisplay;
