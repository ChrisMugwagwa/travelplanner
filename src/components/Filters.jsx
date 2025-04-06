import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, Box, Slider, Typography } from '@mui/material';

const Filters = ({ onApply }) => {
  const [category, setCategory] = useState('');
  const [radius, setRadius] = useState(10);

  const handleApply = () => {
    onApply({ category, radius });
  };

  return (
    <Box sx={{ mt: 2 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)} label="Category">
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
          <MenuItem value="restaurants">Restaurants</MenuItem>
        </Select>
      </FormControl>

      <Typography gutterBottom>Search Radius (km)</Typography>
      <Slider
        value={radius}
        onChange={(e, newValue) => setRadius(newValue)}
        min={1}
        max={50}
        step={1}
        valueLabelDisplay="auto"
      />

      <Button variant="outlined" fullWidth sx={{ mt: 2 }} onClick={handleApply}>
        Apply Filters
      </Button>
    </Box>
  );
};

export default Filters;

