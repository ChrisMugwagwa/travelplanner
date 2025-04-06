import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import BookingStepper from './BookingStepper';

const BookingPage = () => {
  const location = useLocation();
  const packageData = location.state?.packageData;

  return (
    <Box sx={{ p: 4 }}>
      {packageData ? (
        <>
          <Typography variant="h4" align="center" gutterBottom>
            Booking for {packageData.title}
          </Typography>
          <BookingStepper packageData={packageData} />
        </>
      ) : (
        <>
          <Typography variant="h4" align="center" gutterBottom>
            Start Your Booking
          </Typography>
          <BookingStepper />
        </>
      )}
    </Box>
  );
};

export default BookingPage;
