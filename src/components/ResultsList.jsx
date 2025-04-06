import React from 'react';
import { Grid, Box } from '@mui/material';
import ActivityCard from './ActivityCard';
import { useActivities } from '../context/ActivitiesContext';

const ResultsList = () => {
  const { activities } = useActivities();

  // Show only the first 9 items for demonstration
  const pageSize = 8;
  const displayedActivities = activities.slice(0, pageSize);

  return (
    <Box sx={{padding:2}}>
    <Grid container spacing={2} justifyContent="center">
      {displayedActivities.map((activity) => (
        <Grid 
          item 
          key={activity.id} 
          xs={12}      // full width on extra-small screens
          sm={4}       // 3 items per row on small screens
          md={3}       // 4 items per row on medium+ screens
          sx={{ display: 'flex', justifyContent: 'center' }}  // center each card within its grid cell
        >
          <ActivityCard activity={activity} />
        </Grid>
      ))}
    </Grid>
    </Box>
  );
};

export default ResultsList;
