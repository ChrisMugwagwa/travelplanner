import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Avatar, Paper } from '@mui/material';
import { useUser } from '../context/UserContext';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Use FileReader to create a preview of the image
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Replace this with your actual save logic (e.g., API call)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Profile Image:', profileImage);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Profile
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'center', mb: 4 }}>
            <Avatar src={profileImage} sx={{ width: 80, height: 80 }} />
            <Button variant="contained" component="label">
              Upload Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Button>
          </Box>

        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Center the image upload section */}
          
          <Button variant="contained" onClick={handleSave} sx={{ mt: 2 }}>
            Save
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProfilePage;
