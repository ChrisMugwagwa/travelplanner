import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';

const ActivityCard = ({ activity }) => {
  const details = activity.details || {};

  return (
    <Card
      sx={{
        minWidth:300,
        height: 350,
        maxWidth: 300,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        mb: 2,
        overflow: 'hidden',
      }}
    >
      {details.photo?.images?.original?.url && (
        <CardMedia
          component="img"
          image={details.photo.images.original.url}
          alt={details.name}
          sx={{
            width: '100%',
            height: 200,
            objectFit: 'cover',
          }}
        />
      )}

      <CardContent
        sx={{
          overflowY: 'auto',
        }}
      >
        <Typography variant="h6">
          {details.name || activity.name}
        </Typography>

        {details.rating && (
          <Typography variant="body2" color="text.secondary">
            ⭐ {details.rating} ({details.num_reviews} reviews)
          </Typography>
        )}

        {details.description && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            {details.description}
          </Typography>
        )}

        {details.address_obj?.address_string && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            📍 {details.address_obj.address_string}
          </Typography>
        )}

        {details.price_level && (
          <Typography variant="body2" color="text.secondary">
            💵 {details.price_level}
          </Typography>
        )}

        <Box sx={{ mt: 2 }}>
          {details.web_url && (
            <Button
              variant="outlined"
              size="small"
              href={details.web_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on TripAdvisor
            </Button>
          )}
          {details.website && (
            <Button
              variant="text"
              size="small"
              href={details.website}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ml: 1 }}
            >
              Official Site
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
