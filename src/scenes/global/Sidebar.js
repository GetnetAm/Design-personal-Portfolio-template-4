import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import {ColorModeContext, tokens } from "../../theme"

import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ContactsIcon from '@mui/icons-material/Contacts';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HelpIcon from '@mui/icons-material/Help';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import MapIcon from '@mui/icons-material/Map';
import { MdMenuOpen } from "react-icons/md";
import { RiMenuFold4Fill } from "react-icons/ri";
// import profileImge from "../../../images/user1.jpeg"
import profileImge from "../../images/user2.jpg"


import { useContext, useState } from "react";

const Item =({ title, to, icon, selected, setSelected})=>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
      
      <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      
       component={<Link to={to} />}> 
 <Typography>{title}</Typography>
      </MenuItem>
  )
}

const SidebarPart=()=> {
  // const theme= useTheme();
  // const colors= tokens(theme.palette.mode);
  // const [isCollapsed, setIsCollapsed]= useState(false);
  // const [selected, setSelected]= useState("Dashboard")

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode= useContext(ColorModeContext);
    const [isCollapsed, setIsCollapsed]= useState(false);
  const [selected, setSelected]= useState("Dashboard")
  return (
    <Box>
  
   <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <RiMenuFold4Fill  /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color:"black",
              fontSize:"30px",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h5" color="black">
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MdMenuOpen style={{color:"black", fontSize:"30px"}} />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="80px"
                  height="80px"
                  src={profileImge}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
                
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Getnet Amsalu
                </Typography>
                <Typography variant="h5" color="green">
                 Full Stack Developer
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Home"
              to="/"
              icon={<HomeIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              color="#3d3d3d"
              sx={{ m: "15px 0 5px 20px" }}
            >
              EDUCATION
            </Typography>
            <Item
              title="About"
              to={`/about`}
              icon={<PeopleAltIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Certeficate"
              to="/contacts"
              icon={<ContactsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Skills"
              to="/invoices"
              icon={<ReceiptIcon />}
              selected={selected}
              setSelected={setSelected}
            />
           

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              PORTFOLIO
            </Typography>
            <Item
              title="Portfolio"
              to="/forms"
              icon={<PersonIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Projects"
              to="/calendar"
              icon={<CalendarMonthIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
          

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              EXPERIANCE
            </Typography>
            <Item
              title="Experiance"
              to="/bar"
              icon={<BarChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SidebarPart
