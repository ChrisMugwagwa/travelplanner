import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
  const { userProfile } = useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
        {/* Left column (empty) */}
        <Box />
        {/* Center column: Navigation Links */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </Link>
          <Link to="/aboutus" style={{ textDecoration: 'none', color: 'inherit' }}>
            About Us
          </Link>
          <Link to="/packages" style={{ textDecoration: 'none', color: 'inherit' }}>
            Packages
          </Link>
        </Box>
        {/* Right column: Profile Icon with Menu */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleProfileMenuOpen} color="inherit" size="large">
            {userProfile.profileImage ? (
              <img
                src={userProfile.profileImage}
                alt="Profile"
                style={{ width: 40, height: 40, borderRadius: '50%' }}
              />
            ) : (
              <AccountCircleIcon fontSize="large" />
            )}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                Profile
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
                Settings
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
