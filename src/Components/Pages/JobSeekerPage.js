import React from 'react';
import SideMenu from './SideMenu';
import Header from './Header'; // Import your Header component

const containerStyle = {
  display: 'flex', // Make the children of this container flex items
  marginLeft: '320px',
  flexDirection: 'column', // Stack elements vertically
};

const contentStyle = {
  display: 'flex', // Make the children of this container flex items
  flex: 1, // Allow the content to grow and take up the available space
  padding: '20px', // Add some padding for spacing
  backgroundColor: 'white', // Set the background color to white
  color: 'black', // Set the text color to black
  width: '100%', // Ensure the content takes up the available width
  flexDirection: 'row', // Layout columns horizontally
};

const columnStyle = {
  flex: 1, // Each column takes equal width
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const boxStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  marginBottom: '10px',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
};

const searchBarStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
};

const mergedColumnStyle = {
  flex: 2, // Make the last two columns merged as one (2 times the width of others)
};

const tableStyle = {
  flex: 1, // Make the table take up available space
  padding: '20px', // Add padding to the table
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

function JobSeeker() {
  return (
    <div style={containerStyle}>
      <Header /> {/* Include the Header component here */}
      <SideMenu />
      <div style={contentStyle}>
        <div style={columnStyle}>
          <div style={boxStyle}>
            <h2>Job Seeker</h2>
            <p>Number of job seekers: 100</p> {/* Replace with the actual number */}
          </div>
        </div>
        <div style={columnStyle}>
          <div style={boxStyle}>
            <h2>Verify User</h2>
            <p>Number of users verified: 50</p> {/* Replace with the actual number */}
          </div>
        </div>
        <div style={{ ...columnStyle, ...mergedColumnStyle }}>
          <input type="text" style={searchBarStyle} placeholder="Search..." />
        </div>
      </div>
      <div style={tableStyle}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr style={tableHeaderStyle}>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>USER SINCE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ ...tableRowStyle, ...evenRowStyle }}>
              <td>John Doe</td>
              <td>johndoe@example.com</td>
              <td>2022-01-15</td>
              <td>Active</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr style={{ ...tableRowStyle, ...oddRowStyle }}>
              <td>Jane Smith</td>
              <td>janesmith@example.com</td>
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

export default JobSeeker;
