import React from 'react';
import SideMenu from './SideMenu';
import Header from './Header';

const containerStyle = {
  display: 'flex',
  marginLeft: '320px',
  flexDirection: 'column',
};

const contentStyle = {
  flex: 1,
  padding: '20px',
  backgroundColor: 'white',
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
  height: '120px',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
};

const searchBarStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
};

const mergedColumnStyle = {
  flex: 2,
};

const tableStyle = {
  flex: 1,
  padding: '20px',
};

const tableHeaderStyle = {
  backgroundColor: 'lightgray',
  textAlign: 'center',
  padding: '8px',
  borderBottom: '1px solid #ccc',
};

const tableRowStyle = {
  textAlign: 'center',
  padding: '8px',
  borderBottom: '1px solid #ccc',
};

const evenRowStyle = {
  backgroundColor: 'white',
};

const oddRowStyle = {
  backgroundColor: 'lightgray',
};

function JobPost() {
  return (
    <div style={containerStyle}>
      <Header />
      <SideMenu />
      <div style={contentStyle}>
        <div style={columnStyle}>
          <div style={boxStyle}>
            <h2>Job Post</h2>
            <p>Number of job posts: 50</p>
          </div>
        </div>
        <div style={columnStyle}>
          <div style={boxStyle}>
            <h2>Freelance</h2>
            <p>Number of freelance posts: 30</p>
          </div>
        </div>
        <div style={mergedColumnStyle}>
          <input type="text" style={searchBarStyle} placeholder="Search..." />
        </div>
      </div>
      <div style={tableStyle}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr style={tableHeaderStyle}>
              <th>ID</th>
              <th>JOBS</th>
              <th>COMPANY/HIRER</th>
              <th>DATE POSTED</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ ...tableRowStyle, ...evenRowStyle }}>
              <td>1</td>
              <td>Job 1</td>
              <td>Company A</td>
              <td>2022-01-15</td>
              <td>Active</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr style={{ ...tableRowStyle, ...oddRowStyle }}>
              <td>2</td>
              <td>Job 2</td>
              <td>Company B</td>
              <td>2022-02-20</td>
              <td>Inactive</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            {/* Add more rows with alternating row styles as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JobPost;
