import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PaymentsIcon from '@mui/icons-material/Payments';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';

const SideMenuContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  left: '0px',
  width: '320px',
  height: '100%',
  backgroundColor: '#ffffff',
});

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '70px',
  backgroundColor: '#1A2E45',
});

const LogoImage = styled('img')({
  width: '100%',
  height: '100%',
  backgroundColor: '#EDAB00',
  margin: '2px',
});

const UserImage = styled('img')({
  // Add your user image styles here
});

const NavigationList = styled('div')({
  flexGrow: 1,
  overflowY: 'auto',
});

const NestedChoices = styled('div')({
  marginLeft: '16px',
});

const SideMenu = (props) => {
  const [openAccount, setOpenAccount] = React.useState(false);
  const [openCategory, setOpenCategory] = React.useState(false);
  const [openJobPost, setOpenJobPost] = React.useState(false);
  const [openOutsourceJob, setOpenOutsourceJob] = React.useState(false);

  const handleAccountClick = () => {
    setOpenAccount(!openAccount);
  };

  const handleCategoryClick = () => {
    setOpenCategory(!openCategory);
  };

  const handleJobPostClick = () => {
    setOpenJobPost(!openJobPost);
  };

  const handleOutsourceJobClick = () => {
    setOpenOutsourceJob(!openOutsourceJob);
  };

  return (
    <SideMenuContainer>
      <LogoContainer>
        <LogoImage
          src="rectangle-181@2x.png"
          alt="Logo"
        />
      </LogoContainer>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <UserImage
            src="user-image.png"
            alt="User"
          />
          <Typography variant="h6" gutterBottom>
            Christian Velez
          </Typography>
        </CardContent>
      </Card>
      <NavigationList>
        <List component="nav" aria-label="mailbox folders">
          <ListItem button component={Link} to="/Dashboard">
            <DashboardIcon /> {/* DashboardIcon here */}
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={handleAccountClick}>
            <PeopleIcon/>
            <ListItemText primary="Account" />
            {openAccount ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openAccount} timeout="auto" unmountOnExit>
            <NestedChoices>
              <ListItem button component={Link} to="/JobSeekerPage">
                <ListItemText primary="Jobseeker" />
              </ListItem>
              <ListItem button component={Link} to="/HirerPage">
                <ListItemText primary="Hirer" />
              </ListItem>
            </NestedChoices>
          </Collapse>
          <ListItem button onClick={handleCategoryClick}>
            <CategoryIcon/>
            <ListItemText primary="Category" />
            {openCategory ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openCategory} timeout="auto" unmountOnExit>
            <NestedChoices>
              <ListItem button component={Link} to="/JobPostPage">
                <ListItemText primary="Job Post" />
              </ListItem>
              <ListItem button component={Link} to="/OutsourceJobPage">
                <ListItemText primary="Outsource Job" />
              </ListItem>
            </NestedChoices>
          </Collapse>
          <ListItem button component={Link} to="/RAF-Page">
            <ReviewsIcon/>
            <ListItemText primary="Rating and Feedback's" />
          </ListItem>
          <Divider light />
          <ListItem button component={Link} to="/PaymentPage">
            <PaymentsIcon/>
            <ListItemText primary="Payment" />
          </ListItem>
        </List>
      </NavigationList>
    </SideMenuContainer>
  );
}

export default SideMenu;
