
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { ColorModeContext, useMode } from './theme';
import Topbar from './scenes/global/Topbar';
import {Route, Routes } from "react-router-dom"
import Dashboard from './scenes/dashboard';
import SidebarPart from './scenes/global/Sidebar';
import AboutPage from './scenes/about/AboutPage';


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
          <Route path='/about' element= {<AboutPage />}/>
          
        </Routes>
      

      </main>

     
    </div>

    </ThemeProvider>
   
   </ColorModeContext.Provider>
  );
}

export default App;
