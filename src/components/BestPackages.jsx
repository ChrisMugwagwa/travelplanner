import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Tabs,
  Tab,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Example package data including a category field
const packagesData = [
  {
    id: 1,
    title: "Backpack South Asia",
    duration: "3 Days, 2 Nights",
    price: "$500 / Person",
    category: "Best",
    image: "/asia.avif", // Replace with your actual image path
  },
  {
    id: 2,
    title: "Honeymoon Europe",
    duration: "3 Days, 2 Nights",
    price: "$800 / Person",
    category: "Honeymoon",
    image: "/europe.jpg", // Replace with your actual image path
  },
  {
    id: 3,
    title: "Adventure in New Zealand",
    duration: "3 Days, 2 Nights",
    price: "$600 / Person",
    category: "Hot Deals",
    image: "/newzealand.jpg", // Replace with your actual image path
  },
  {
    id: 4,
    title: "Urban Explorer",
    duration: "4 Days, 3 Nights",
    price: "$750 / Person",
    category: "Adventure",
    image: "/newyork.jpeg",
  },
  // ... add as many packages as needed
];

const categories = ["All", "Best", "Hot Deals", "Adventure", "Honeymoon"];

const BestPackages = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const filteredPackages =
    activeTab === "All"
      ? packagesData
      : packagesData.filter((pkg) => pkg.category === activeTab);

  return (
    <Box sx={{ py: 4, backgroundColor: '#fff', width: '100%' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Best Packages For You
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 4 }}>
        Book Your Next Trip in 3 Easy Steps
      </Typography>
      
      {/* Category Tabs */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          centered
        >
          {categories.map((cat) => (
            <Tab key={cat} label={cat} value={cat} />
          ))}
        </Tabs>
      </Box>
      
      <Grid container spacing={4} justifyContent="center">
        {filteredPackages.map((pkg) => (
          <Grid key={pkg.id} item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, mx: 'auto' }}>
              <CardMedia
                component="img"
                height="180"
                image={pkg.image}
                alt={pkg.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {pkg.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {pkg.duration}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {pkg.price}
                </Typography>
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() =>
                      navigate('/booking', { state: { packageData: pkg } })
                    }
                  >
                    Book Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BestPackages;
