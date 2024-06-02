
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { ColorModeContext, useMode } from './theme';
import Topbar from './scenes/global/Topbar';
import {Route, Routes } from "react-router-dom"
import Dashboard from './scenes/dashboard';
import SidebarPart from './scenes/global/Sidebar';


function App() {
  const [theme, colorMode]= useMode();
  return (
   <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <SidebarPart />
      <main className='content'>
        <Topbar />
        <Routes>
          <Route path='/' element= {<Dashboard />}/>
          
        </Routes>
      

      </main>

     
    </div>

    </ThemeProvider>
   
   </ColorModeContext.Provider>
  );
}

export default App;
