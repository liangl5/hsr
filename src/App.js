import styles from './App.css'
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
// import TimeClockExample from './components/Test';
// import SolveTab from './components/ClockInputForm'
import { darkTheme, lightTheme} from './components/Themes'
import CustomTimeClock from './components/CustomClock';


function App() {
  return (
    <Router>
        <ThemeProvider theme={lightTheme}>
          
          <Box className="App" sx={{height: '100%', minHeight: '100vh'}}>

            <Box class="flex-container">
                
                <Box class='left-column'>
                  {/* <SolveTab /> */}
                  asdf
                </Box>

                <Box class='right-column'>
                  <CustomTimeClock />
                </Box>
                
            </Box>

          </Box>
        </ThemeProvider>
      </Router>
  );
}

export default App;
