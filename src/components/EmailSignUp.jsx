import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const EmailSignUp = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSignUp = () => {
    // Replace this with your API call or other sign-up logic.
    console.log('Sign up email:', email);
    setStatus('Thank you for signing up!');
    if (onSignUp) onSignUp(email);
  };

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Stay Updated!
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Subscribe to our newsletter for the latest travel tips and exclusive deals.
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
      >
        <TextField
          label="Your Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </Box>
      {status && (
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          {status}
        </Typography>
      )}
    </Box>
  );
};

export default EmailSignUp;
