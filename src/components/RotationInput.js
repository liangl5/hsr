import React from 'react';
import { useTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import BpCheckbox from './CustomCheckbox';

export default function RotationInput() {
  const theme = useTheme();
  
  // Define the combinations with their default checked values
  const combinations = [
    [true, false, false], // Combination 1
    [false, true, false], // Combination 2
    [false, false, true], // Combination 3
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ marginBottom: '15px', borderColor: theme.palette.background.ons }}
        color={theme.palette.background.on}
      >
        Ring Combinations
      </Typography>

      {combinations.map((checkedValues, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
          <Typography
            variant="body1"
            align="center"
            color={theme.palette.background.on}
          >
            Combination {index + 1}:
          </Typography>

          {['Inner', 'Middle', 'Outer'].map((label, idx) => (
            <Box key={idx} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 15px' }}>
              <Typography variant="body2" align="center" color={theme.palette.background.on}>{label}</Typography>
              <BpCheckbox defaultChecked={checkedValues[idx]} />
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
