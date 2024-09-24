import React, { useRef, useEffect, useState } from 'react';
import styles from './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';
import { lightTheme } from './components/Themes';
import CustomTimeClock from './components/CustomClock';
import RotationInput from './components/RotationInput';
import NavBar from './components/NavBar'; // Import the Navbar component
import SolveTab from './components/SolutionTab';

function App() {
  const leftColumnRef = useRef(null); // Create a ref for the left column
  const [columnWidth, setColumnWidth] = useState(600); // Set initial width to 400
  const [columnHeight, setColumnHeight] = useState(600); // Set initial height to 400

  useEffect(() => {
    const updateDimensions = () => {
      if (leftColumnRef.current) {
        const { clientWidth, clientHeight } = leftColumnRef.current;
        setColumnWidth(clientWidth - 20); // Subtracting some padding for scrollbar
        setColumnHeight(clientHeight - 20); // Adjust height as necessary
      }
    };

    // Update the dimensions when the component mounts and on window resize
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <Box className="App" sx={{ height: '100%', minHeight: '100vh' }}>
          {/* <NavBar />  */}
          {/* <Box className="flex-container" sx={{ marginTop: '64px' }}> */}
          <Box className="flex-container">
            <Box className="left-column" ref={leftColumnRef}>
              <CustomTimeClock size={Math.min(columnWidth, columnHeight)} />
              <RotationInput />
            </Box>

            <Box className="right-column">
              <SolveTab />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
