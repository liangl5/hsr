import * as React from 'react';
import Radio from '@mui/material/Radio';
import {useTheme} from '@mui/material';
import { Box, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';

export default function RowRadioButtonsGroup({circleType, initialState}) {
    const theme = useTheme();
    const [selectedValue, setSelectedValue] = React.useState(initialState);

    const handleChange = (event) => {
        console.log(event)
        setSelectedValue(event.target.value);
    };
    
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
        <Typography
            variant="body1"
            align="left"
            color={theme.palette.background.on}
            sx={{width: '100px'}}
          >
            {circleType}:
        </Typography>


        <Radio value="1" checked={1 <= selectedValue} onClick={handleChange} size="small"/>
        <Radio value="2" checked={2 <= selectedValue} onClick={handleChange} size="small"/>
        <Radio value="3" checked={3 <= selectedValue} onClick={handleChange} size="small"/>
        <Radio value="4" checked={4 <= selectedValue} onClick={handleChange} size="small"/>

    </Box>
  );
}