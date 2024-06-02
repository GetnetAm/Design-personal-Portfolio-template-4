import { Box, Button, Typography, useTheme } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';
import { tokens } from '../../theme';
import gcPhoto from "../../images/gc.jpg"

function Dashboard() {
  const theme= useTheme();
  const colors= tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Getnet Amsalu" subtitle="Software Developer" />

      </Box>

      {/* Grid */}
      <Box display="flex"
      gridTemplateColumns="repeat(6, 1fr)"
      gridAutoRows="140px"
      gap="5px">

        <Box 
        gridColumn="span 4"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center">
          <Typography
          variant='h3'
          fontWeight="500">
            My Name is Getnet Amsalu Hailu<br />
          </Typography>
          <br />
          <Typography
          variant='h4'
          fontWeight="400">
            Software Developer
          </Typography>
          <br />

          <Typography>
          I have Bsc. in software Engineering form Debre Berehan University
           currently i was working in Moti engineering as software enginer 
          </Typography>

        </Box>
        <Box 
        gridColumn="span 2"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center">
          <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="450px"
                  height="600px"
                  mt="100px"
                  src={gcPhoto}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
                
              </Box>


        </Box>
   

      </Box>


      {/* Rows */}
      <Box gridColumn="span 8"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}>
        <Box
        mt="25px"
        p="0 30px"
        display="flex"
        justifyContent="space-between"
        alignItems="center">
          <Typography
          variant='h5'
          fontWeight="600"
          color={colors.grey[100]}>
            Revenue Generated

          </Typography>
          <Typography
          variant='h3'
          fontWeight="500"
          color={colors.greenAccent[500]}>
            435345

          </Typography>

        </Box>
        

      </Box>

    </Box>
  )
}

export default Dashboard;
