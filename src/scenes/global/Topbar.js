import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { FaSearch, FaTelegram } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2} className="top_bar">
      {/* search */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <FaSearch />
        </IconButton>
      </Box>

      {/* sosial media icons */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <MdLightMode />: <MdDarkMode />}
        </IconButton>
        <IconButton>
          <FaTelegram />
        </IconButton>

        <IconButton>
          <MdEmail />
        </IconButton>

        <IconButton>
          <FaGithub />
        </IconButton>

        <IconButton>
          <FaLinkedin />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;
