import React from 'react'
import { Typography,Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

function Header({title, subtitle}) {
    const theme= useTheme();
    const colors= tokens(theme.palette.mode);
  return (
    <div>
        <Box mb="30px" display="flex" gap="500px">
            <Typography 
            variant='h3'
            color={colors.greenAccent[400]}
            fontWeight="bold"
            sx={{mb: "5px"}}>
                {title}

            </Typography>
            <Typography variant='h4'  color={colors.grey[100]}>
                {subtitle}
            </Typography>

        </Box>
      
    </div>
  )
}

export default Header
