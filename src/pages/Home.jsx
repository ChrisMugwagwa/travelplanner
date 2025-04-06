import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import SearchForm from '../components/SearchForm';
import HeroSection from '../components/HeroSection';
import ResultsList from '../components/ResultsList';
import OurServices from '../components/OurServices';
import BestPackages from '../components/BestPackages';

const Home = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <HeroSection />
      <OurServices />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: 200,
        backgroundImage: 'url(/worldmap.png)', // replace with your image URL
        backgroundSize: 'cover',      // makes the image cover the entire box
        backgroundPosition: 'center', // centers the image
        backgroundRepeat: 'no-repeat', // prevents the image from repeating
        background: 'linear-gradient(to bottom, #f9f9f9 0%, rgba(249,249,249,0) 50%),linear-gradient(to top,rgb(255, 255, 255) 0%, rgba(249,249,249,0) 40%), url("/worldmap.png") center/cover no-repeat'
      }}>
        <SearchForm />
      </Box>

      {/* Or if you still want a Grid layout for other content, you can do so,
          but remove 'maxWidth="sm"' and 'justifyContent="center"' 
          if you want it to span full width. */}
      <ResultsList />
      <BestPackages />
    </Container>
  );
};

export default Home;
