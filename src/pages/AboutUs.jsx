import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import FancyEmailSignUp from '../components/FancyEmailSignUp';

const AboutUs = () => {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', px: 2, py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>
      
      <Typography variant="body1" sx={{ mt: 2 }}>
        Welcome to Travel Buddy, your ultimate partner in crafting unforgettable journeys. Founded with a passion for exploration and a vision to transform travel, we have grown into a dedicated team committed to delivering tailor-made experiences that blend adventure, relaxation, and cultural discovery.
      </Typography>
      
      <Divider sx={{ my: 4 }} />
      
      <Typography variant="h4" gutterBottom>
        Our Story
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Travel Buddy began as a small startup with a big dream: to revolutionize the way people travel. Over the years, we have expanded our horizons, combining industry expertise with innovative technology to provide personalized travel solutions. Our journey is one of continuous learning, growth, and a commitment to helping you explore the world on your own terms.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        From the moment we set out, our goal has been to make travel planning effortless and enjoyable. We believe that every journey should be as unique as the traveler, and that is why our platform is built on flexibility, creativity, and a deep understanding of your needs.
      </Typography>
      
      <Divider sx={{ my: 4 }} />
      
      <Typography variant="h4" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Our mission is to provide personalized travel experiences that inspire, empower, and create lasting memories. We are dedicated to simplifying your travel planning process by offering insider tips, curated itineraries, and exclusive deals, all designed to turn your travel dreams into reality.
      </Typography>
      
      <Divider sx={{ my: 4 }} />
      
      <Typography variant="h4" gutterBottom>
        Our Team
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        At Travel Buddy, our team is our greatest asset. We are a group of passionate travelers, creative thinkers, and tech innovators working together to deliver the best travel experiences. Our diverse background allows us to see the world from different perspectives, ensuring that our recommendations are both comprehensive and uniquely tailored to your interests.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We are proud of our journey and remain committed to continuous improvement, constantly evolving our platform to meet the ever-changing needs of modern travelers.
      </Typography>
      
      <Divider sx={{ my: 4 }} />
      
      {/* Reusable Email Sign Up Component */}
      <FancyEmailSignUp />
    </Box>
  );
};

export default AboutUs;
