import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ExploreIcon from '@mui/icons-material/Explore';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const OurServices = () => {
  // Fixed styling for each Paper card
  const paperStyle = {
    p: 5,
    textAlign: 'center',
    height: 250,           
    width: '100%',
    maxWidth: 300,         // Fixed maximum width to force wrapping
    boxSizing: 'border-box',
    overflow: 'hidden',
  };

  // Consistent text style for wrapping
  const textStyle = {
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'normal',
  };

  return (
    <Box sx={{ py: 4, backgroundColor: '#f9f9f9', width: '100%' }}>
      <Typography variant="h4" align="center" gutterBottom  sx={{
          color: 'inherit',
        }}>
        Our Services
      </Typography>
      <Grid container spacing={4} alignItems="stretch" justifyContent="center">
        {/* Service 1: Travel Buddy */}
        <Grid item xs={12} sm={4}>
          <Paper elevation={10} sx={paperStyle}>
            <FlightTakeoffIcon sx={{ fontSize: 48, mb: 2 }} color="primary" />
            <Typography variant="h6" gutterBottom sx={textStyle}>
              Travel Buddy
            </Typography>
            <Typography variant="body2" sx={textStyle}>
              Get insider tips and essential travel updates for your destination.
            </Typography>
          </Paper>
        </Grid>
        {/* Service 2: Local Insights */}
        <Grid item xs={12} sm={4}>
          <Paper elevation={10} sx={paperStyle}>
            <ExploreIcon sx={{ fontSize: 48, mb: 2 }} color="primary" />
            <Typography variant="h6" gutterBottom sx={textStyle}>
              Local Insights
            </Typography>
            <Typography variant="body2" sx={textStyle}>
              Plan trips seamlessly with curated itineraries that match your needs.
            </Typography>
          </Paper>
        </Grid>
        {/* Service 3: Tailored Travel */}
        <Grid item xs={12} sm={4}>
          <Paper elevation={10} sx={paperStyle}>
            <EventAvailableIcon sx={{ fontSize: 48, mb: 2 }} color="primary" />
            <Typography variant="h6" gutterBottom sx={textStyle}>
              Tailored Travel
            </Typography>
            <Typography variant="body2" sx={textStyle}>
              Tell us your preferences, and we'll curate the perfect travel suggestions.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurServices;
