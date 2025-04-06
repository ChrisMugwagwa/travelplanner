import React, { useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  TextField,
} from '@mui/material';

// Use the same package data as in BestPackages.jsx
const packagesData = [
  {
    id: 1,
    title: "Backpack South Asia",
    duration: "3 Days, 2 Nights",
    price: "$500 / Person",
    image: "/asia.avif", // Replace with your actual image path
  },
  {
    id: 2,
    title: "Honeymoon Europe",
    duration: "3 Days, 2 Nights",
    price: "$800 / Person",
    image: "/europe.jpg", // Replace with your actual image path
  },
  {
    id: 3,
    title: "Adventure in New Zealand",
    duration: "3 Days, 2 Nights",
    price: "$600 / Person",
    image: "/newzealand.jpg", // Replace with your actual image path
  },
  {
    id: 4,
    title: "Urban Explorer",
    duration: "4 Days, 3 Nights",
    price: "$750 / Person",
    image: "/newyork.jpeg",
  },
];

const steps = ['Choose Destination', 'Select Date', 'Confirmation', 'Payment'];

const BookingStepper = ({ packageData }) => {
  const [activeStep, setActiveStep] = useState(0);
  // Preselect if packageData is passed, else null.
  const [selectedDestination, setSelectedDestination] = useState(packageData || null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleNext = () => setActiveStep(prev => prev + 1);
  const handleBack = () => setActiveStep(prev => prev - 1);

  // Step 0: Destination Selection
  const renderDestinationStep = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        {selectedDestination
          ? `Booking for ${selectedDestination.title}. Select another destination or continue.`
          : 'Please select your destination:'}
      </Typography>
      <Grid container spacing={2}>
        {packagesData.map((pkg) => (
          <Grid key={pkg.id} item xs={12} sm={6} md={4}>
            <Card
              sx={{
                cursor: 'pointer',
                border: selectedDestination?.id === pkg.id ? '2px solid #1976d2' : 'none',
              }}
              onClick={() => setSelectedDestination(pkg)}
            >
              <CardMedia
                component="img"
                height="140"
                image={pkg.image}
                alt={pkg.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {pkg.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {pkg.duration}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {pkg.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Button variant="contained" onClick={handleNext} disabled={!selectedDestination}>
          Next
        </Button>
      </Box>
    </Box>
  );

  // Step 1: Date Selection with Date Pickers
  const renderDateStep = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
      <Typography variant="h6">
        Select your travel dates:
      </Typography>
      <TextField
        label="Start Date"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <TextField
        label="End Date"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
    </Box>
  );

  // Step 2: Confirmation
  const renderConfirmationStep = () => (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        Please confirm your booking details:
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Destination: {selectedDestination ? selectedDestination.title : 'Not selected'}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Travel Dates: {startDate ? startDate : 'Not selected'} to {endDate ? endDate : 'Not selected'}
      </Typography>
    </Box>
  );

  // Step 3: Payment Details
  const renderPaymentStep = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
      <Typography variant="h6">
        Enter your payment details:
      </Typography>
      <TextField
        label="Card Number"
        variant="outlined"
        fullWidth
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <TextField
        label="Expiry Date"
        variant="outlined"
        fullWidth
        placeholder="MM/YY"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />
      <TextField
        label="CVV"
        variant="outlined"
        fullWidth
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
      />
    </Box>
  );

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return renderDestinationStep();
      case 1:
        return renderDateStep();
      case 2:
        return renderConfirmationStep();
      case 3:
        return renderPaymentStep();
      default:
        return <Typography>Unknown Step</Typography>;
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 2 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 2, minHeight: 250 }}>
        {renderStepContent(activeStep)}
      </Box>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: activeStep === 0 ? 'center' : 'space-between' }}>
        {activeStep !== 0 && (
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
        )}
        {activeStep > 0 && activeStep < steps.length - 1 && (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        )}
        {activeStep === steps.length - 1 && (
          <Button
            variant="contained"
            onClick={() => {
              // Replace this with your finish booking logic
              console.log({
                destination: selectedDestination,
                startDate,
                endDate,
                cardNumber,
                expiry,
                cvv,
              });
            }}
          >
            Finish
          </Button>
        )}
      </Box>
    </Box>
  );
  
};

export default BookingStepper;
