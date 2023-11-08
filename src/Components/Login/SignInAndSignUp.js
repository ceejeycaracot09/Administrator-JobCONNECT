  import React, { useState } from "react";
  import { Container, Paper, Grid, Typography, TextField, Button } from "@mui/material";

  import { styled } from "@mui/system"; // Import 'styled' from '@mui/system'
  import { useNavigate } from "react-router-dom";

  // Adjust the path as needed


  const AuthContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: `url('./desktop--21@3x.jpg')`, // Use the imported image
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center", // Adjust as needed
    backgroundAttachment: "fixed", // This makes the background fixed
  });

  const MyPaper = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
  }));

  const headerStyles = {
    container: {
      display: "flex",
      alignItems: "center",
    },
    h3: {
      marginRight: "150px", // Add some spacing between h3 and the image
    },
  };

  const useStyles = {
    form: {
      width: "100%",
      marginTop: (theme) => theme.spacing(1),
    },
    submit: {
      margin: (theme) => theme.spacing(3, 0, 2),
    },
    item: {
      display: "flex",
      alignItems: "center",
    }
    
  };

  function AuthPage() {
    const [isSignIn, setIsSignIn] = useState(true);
    const navigate = useNavigate();

    const handleSignInSignUpToggle = () => {
      setIsSignIn(!isSignIn);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle authentication or form submission here
      navigate('/Dashboard');
    };

    return (
      <AuthContainer>
        <img
          src="./rectangle-180@2x.png" // Provide the path to your logo image
          alt="Logo"
          style={{ width: "400px", height: "auto"}}
        />
        <div style={headerStyles.container}>
          <h3 style={headerStyles.h3}>Already have <br/> an account?</h3>
          <img
            src="./frame@2x.png" // Provide the path to your image
            alt="Logo"
            style={{ width: "100px", height: "auto" }}
          />
        </div>  
        <Container component="main" maxWidth="xs">
          <MyPaper elevation={3}>
            <Typography component="h1" variant="h5">
              {isSignIn ? "Sign In" : "Sign Up"}
            </Typography>
            <form style={useStyles.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
              {isSignIn ? <></> : <TextField variant="outlined" margin="normal" required fullWidth name="confirmPassword" label="Confirm Password" type="password" id="confirmPassword" />}
              <Button type="submit" fullWidth variant="contained" color="primary" style={useStyles.submit}>
                {isSignIn ? "Sign In" : "Sign Up"}
              </Button>
              <Grid container>
                <Grid item>
                  <Button onClick={handleSignInSignUpToggle} color="primary">
                    {isSignIn ? "New User? Register Now" : "Already have an account? Log in"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </MyPaper>
        </Container>
      </AuthContainer>
    );
  }

  export default AuthPage;


