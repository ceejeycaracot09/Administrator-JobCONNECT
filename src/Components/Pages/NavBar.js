import React from 'react';
import SideMenu from "./SideMenu";
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import Header from "./Header";
import PageHeader from './Dashboard';
import PeopleOutlineTwoTone from '@mui/icons-material/PeopleOutlineTwoTone';

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
});

const dashboardStyles = {
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
};

function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div style={dashboardStyles.appMain}>
        <Header />
        <PageHeader
          title="Page Header"
          subTitle="Page description"
          icon={<PeopleOutlineTwoTone fontSize="large" />}
        />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default NavBar;
