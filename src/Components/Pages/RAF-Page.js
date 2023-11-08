import React from 'react';
import SideMenu from './SideMenu';
import Header from './Header';

const containerStyle = {
  display: 'flex',
  marginLeft: '320px',
  flexDirection: 'column',
  backgroundColor: '#f0f0f0',
};

const contentStyle = {
  flex: 1,
  padding: '20px',
  
  color: 'black',
  display: 'flex',
  flexDirection: 'row',
};

const columnStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};

const boxStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  marginBottom: '10px',
  width: '200px',
  height: '150px',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Add boxShadow for a shadow effect
};

const lineIndicatorStyle = {
  width: '100%',
  textAlign: 'center',
  fontSize: '24px',
};

function RatingsAndFeedBack() {
  return (
    <div style={containerStyle}>
      <Header />
      <SideMenu />
      <div style={contentStyle}>
        <div style={columnStyle}>
          <div style={boxStyle}>
            <h2>JobCONNECT</h2>
            <p>Number of Increases:</p>
            <div style={lineIndicatorStyle}>10</div>
          </div>
        </div>
        <div style={columnStyle}>
          <div style={boxStyle}>
            <h2>JobSeekers</h2>
            <p>Number of Increases:</p>
            <div style={lineIndicatorStyle}>20</div>
          </div>
        </div>
        <div style={columnStyle}>
          <div style={boxStyle}>
            <h2>Hirers</h2>
            <p>Number of Increases:</p>
            <div style={lineIndicatorStyle}>15</div>
          </div>
        </div>
        <div style={columnStyle}></div>
      </div>
    </div>
  );
}

export default RatingsAndFeedBack;
