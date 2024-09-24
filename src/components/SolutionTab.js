import React, { useState } from 'react';
import {useTheme} from '@mui/material';
import { Box, Typography } from '@mui/material';
import RadioButtonGroup from './RadioButtonGroup';
import Button from '@mui/material/Button';


function SolveTab() {
    const theme = useTheme();

    return (
        <Box>
            <Typography
                variant="h4"
                align="center"
                sx={{ }}
                color={theme.palette.background.on}
            >
                Circles Present
            </Typography>

            <Box sx={{paddingTop: '10px', marginBottom: '20px'}}>
                <RadioButtonGroup circleType='Inner Ring' initialState='2'/>
                <RadioButtonGroup circleType='Middle Ring' initialState='1'/>
                <RadioButtonGroup circleType='Outer Ring' initialState='3'/>
            </Box>

            <Box sx={{paddingTop: '10px', marginBottom: '30px'}}>
                <Button variant="outlined" sx={{width: '100px', marginRight: '20px', fontWeight: '600', border: '2px', borderStyle: 'solid'}}>Solve</Button>
                <Button 
                    variant="outlined" 
                    sx={{ 
                        width: '100px', 
                        borderColor: 'red',
                        border: '2px', 
                        borderStyle: 'solid',
                        color: 'red',
                        '&:hover': { 
                            borderColor: 'darkred', 
                            color: 'darkred',
                        },
                        fontWeight: '600', 
                    }}
                >
                    Reset
                </Button>            
            </Box>
        </Box>
    )
}

export default SolveTab;