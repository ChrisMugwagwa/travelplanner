import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Typography,
} from '@mui/material';
import { fetchCoordinates } from '../api/fetchCoordinates';
import { fetchActivities } from '../api/fetchActivities';
import { useActivities } from '../context/ActivitiesContext';

const SearchForm = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('attractions');
  const [radius, setRadius] = useState(10);

  // The 3 new fields from the PDF
  const [budget, setBudget] = useState('');
  const [season, setSeason] = useState('');

  const { setActivities } = useActivities();

  const handleSearch = async () => {
    const coords = await fetchCoordinates(location);
    if (coords) {
      const results = await fetchActivities(coords.lat, coords.lng, category, radius);
      setActivities(results);
    }
    console.log('Budget:', budget);
    console.log('Season:', season);
  };

  return (
    // Outer Box spans full width but uses flex to center its child
    <Box
      sx={{
        width: '100%',
        my: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Grid container is centered and takes full width */}
      <Grid container spacing={4} alignItems="stretch" justifyContent="center">
        {/* 1) LOCATION */}
        <Grid item xs={12} md={4}>
          <TextField
            label="Location"
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* 2) CATEGORY */}
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel sx={{ minWidth: '120px' }}>Category</InputLabel>
            <Select
              sx={{ minWidth: '120px' }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="hotels">Relaxation</MenuItem>
              <MenuItem value="attractions">Adventure</MenuItem>
              <MenuItem value="restaurants">Honeymoon</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* 4) BUDGET */}
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel sx={{ minWidth: '120px' }}>Budget</InputLabel>
            <Select
              sx={{ minWidth: '120px' }}
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              label="Budget"
            >
              <MenuItem value="500-800">$500 - $800</MenuItem>
              <MenuItem value="800-1500">$800 - $1500</MenuItem>
              <MenuItem value="1500-2000">$1500 - $2000</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* 5) SEASON */}
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel sx={{ minWidth: '120px' }}>Season</InputLabel>
            <Select
              sx={{ minWidth: '120px' }}
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              label="Season"
            >
              <MenuItem value="spring">Spring</MenuItem>
              <MenuItem value="summer">Summer</MenuItem>
              <MenuItem value="winter">Winter</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSearch} fullWidth>
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchForm;
