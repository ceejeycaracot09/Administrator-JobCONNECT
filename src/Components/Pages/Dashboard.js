import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const userUsageData = [
  { name: 'Job Seekers', usage: 80 },
  { name: 'Hirers', usage: 60 },
  { name: 'Job Post', usage: 45 },
  { name: 'Ratings and Feedback', usage: 30 },
];

const Dashboard = () => {
  return (
    <div>
      <div style={{ padding: '16px' }}>
        <Typography variant="h4">DASHBOARD</Typography>
        <Grid container spacing={2}>
          {userUsageData.map((user, index) => (
            <Grid item xs={3} key={index}>
              <Paper elevation={3} style={{ padding: '16px', textAlign: 'center', backgroundColor: '#EDAB00' }}>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="h4" color="primary">
                  {user.usage}%
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
