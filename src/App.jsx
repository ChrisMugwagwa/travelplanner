import React, { useMemo, useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';  // Updated route component
import NavBar from './components/NavBar';
import { UserProvider } from './context/UserContext';
import { ActivitiesProvider } from './context/ActivitiesContext';
import BestPackages from './components/BestPackages';
import Profile from './pages/Profile'; // Assuming you have a Profile component
import Settings from './pages/Settings'; // Assuming you have a Settings component
import AboutUs from './pages/AboutUs'; // Assuming you have an AboutUs component    

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const theme = useMemo(() =>
    createTheme({
      palette: { mode: darkMode ? 'dark' : 'light' },
    }), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
      <UserProvider>
        <ActivitiesProvider>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Box component="main" sx={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/packages" element={<BestPackages />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/profile" element={<Profile />} /> {/* Profile route */}
                <Route path="/settings" element={<Settings />} /> {/* Settings route */}
                <Route path="/aboutus" element={<AboutUs />} /> {/* About Us route */}
              </Routes>
            </Box>
            <Footer />
          </Box>
        </ActivitiesProvider>
        </UserProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
