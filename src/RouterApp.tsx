import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/layout/Header';
import { Box } from '@mui/material';
import Home from './pages/Home';
import { themeColors } from './styles/mui';
const RouterApp = () => {
    return (
    <Box sx={{bgcolor:themeColors.primary, minHeight:'100vh'}}>
        <Header />
        <Box>
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Box>
    </Box>
    );
};

export default RouterApp;