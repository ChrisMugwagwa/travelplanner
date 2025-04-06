import React from 'react';
import { Box, Typography } from '@mui/material';

function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative', // allows the overlay to position absolutely within this Box
        width: '100%',
        height: 500, // adjust as needed
        backgroundImage: 'url("/hero.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: 'white',
          textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
        }}
      >
        Travel Buddy
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: 'white',
          textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
          my: 2,
        }}
      >
        Personalized Travel, Perfectly Tailored To You
      </Typography>

      {/* Gradient overlay to fade from transparent to white at the bottom */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '80px', // adjust the height of the fade effect as needed
          background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))',
        }}
      />
    </Box>
  );
}

export default HeroSection;
