import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: '#f5f5f5',
        position: 'relative',
      }}
    >
      {/* Gradient overlay at the top */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50px', // Adjust height of the fade as needed
          background: 'linear-gradient(to bottom, rgb(255, 255, 255), #f5f5f5)',
          zIndex: 1,
        }}
      />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        sx={{ position: 'relative', zIndex: 2 }}
      >
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ mb: 1 }}>Company</Typography>
          <Link href="/about" sx={{ display: 'block', mb: 0.5 }}>About</Link>
          <Link href="/careers" sx={{ display: 'block', mb: 0.5 }}>Careers</Link>
          <Link href="/contact" sx={{ display: 'block' }}>Contact</Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ mb: 1 }}>Resources</Typography>
          <Link href="/blog" sx={{ display: 'block', mb: 0.5 }}>Blog</Link>
          <Link href="/help" sx={{ display: 'block', mb: 0.5 }}>Help/FAQ</Link>
          <Link href="/support" sx={{ display: 'block' }}>Support</Link>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 2, position: 'relative', zIndex: 2 }}
      >
        © 2025 Travel Buddy. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
