import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import EmailSignUp from './EmailSignUp';

const teamImages = [
  '/headshot1.jpeg', // Replace with your actual team image paths
  '/headshot2.jpeg',
  '/headshot4.jpg',
];

const FancySignUpSection = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#f9f9f9', width: '100%' }}>
      {/* Team Images Section */}
      <Typography variant="h4" align="center" gutterBottom>
        Meet Our Team
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {teamImages.map((img, index) => (
          <Grid key={index} item xs={12} sm={8} md={6}>
            <Paper elevation={3} sx={{ overflow: 'hidden' }}>
              <Box
                component="img"
                src={img}
                alt={`Team member ${index + 1}`}
                sx={{
                  width: 200,
                  height: 200,
                  display: 'block',
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Email Sign-Up Section */}
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
        Stay Updated!
      </Typography>
      <Paper elevation={3} sx={{ maxWidth: 600, mx: 'auto', p: 4 }}>
        <EmailSignUp />
      </Paper>
    </Box>
  );
};

export default FancySignUpSection;
