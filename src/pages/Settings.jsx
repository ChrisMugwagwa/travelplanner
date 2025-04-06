import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Paper,
} from '@mui/material';
import { useUser } from '../context/UserContext';

const SettingsPage = () => {
  const { userProfile } = useUser();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSaveSettings = () => {
    // Replace with your actual save logic (API calls, etc.)
    console.log('Notifications:', notificationsEnabled);
    console.log('Change Password:', { currentPassword, newPassword, confirmPassword });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Settings
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
          }}
        >
          {/* Notifications */}
          <Typography variant="h6" gutterBottom>
            Notifications
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={notificationsEnabled}
                onChange={(e) => setNotificationsEnabled(e.target.checked)}
                color="primary"
              />
            }
            label="Enable Notifications"
            sx={{ width: '100%', justifyContent: 'center' }}
          />

          {/* Change Password */}
          <Typography variant="h6" gutterBottom>
            Change Password
          </Typography>
          <TextField
            label="Current Password"
            variant="outlined"
            type="password"
            fullWidth
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <TextField
            label="New Password"
            variant="outlined"
            type="password"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            label="Confirm New Password"
            variant="outlined"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button variant="contained" onClick={handleSaveSettings} sx={{ mt: 3 }}>
            Save Settings
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SettingsPage;
