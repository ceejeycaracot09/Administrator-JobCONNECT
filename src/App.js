import React from "react";
import './App.css';
import SignInAndSignUp from "./Components/Login/SignInAndSignUp";
import Dashboard from './Components/Pages/NavBar';
import JobSeekerPage from './Components/Pages/JobSeekerPage';
import JobPostPage from './Components/Pages/JobPostPage';
import OutsourceJobPage from './Components/Pages/OutsourceJobPage';
import RatingsAndFeedBack from './Components/Pages/RAF-Page';
import PaymentPage from './Components/Pages/PaymentPage';
import HirerPage from './Components/Pages/HirerPage';



import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<SignInAndSignUp/>}/>
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/JobSeekerPage" element={<JobSeekerPage />} />
                    <Route path="/HirerPage" element={<HirerPage />} />
                    <Route path="/JobPostPage" element={<JobPostPage />} />
                    <Route path="/OutsourceJobPage" element={<OutsourceJobPage />} />
                    <Route path="/RAF-Page" element={<RatingsAndFeedBack />} />
                    <Route path="/PaymentPage" element={<PaymentPage />} />
                </Routes>
            </div>
        </BrowserRouter>
  );
}

export default App;
