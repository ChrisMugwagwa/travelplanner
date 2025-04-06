const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Geocode text location to lat/lng using OpenCage
app.get('/api/geocode', async (req, res) => {
  const { location } = req.query;
  if (!location) return res.status(400).json({ error: 'Location required' });

  try {
    const geoRes = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
      params: {
        q: location,
        key: process.env.OPENCAGE_API_KEY
      }
    });

    const coords = geoRes.data.results[0].geometry;
    res.json(coords); // { lat: ..., lng: ... }

  } catch (err) {
    console.error('Geocoding error:', err);
    res.status(500).json({ error: 'Geocoding failed' });
  }
});

// TripAdvisor Nearby Search using lat/lng
app.get('/api/tripadvisor', async (req, res) => {
  const { lat, lng, category = 'attractions', radius } = req.query;
  if (!lat || !lng) return res.status(400).json({ error: 'Latitude and longitude required' });
  console.log("HERE", lat, lng, `"${lat}","${lng}"`)
  try {
    const tripRes = await axios.get('https://api.content.tripadvisor.com/api/v1/location/nearby_search', {
      params: {
        latLong: `${lat},${lng}`,
        category,
        radius,
        language: 'en',
        key: process.env.TRIP_ADVISOR_API_KEY
      }
    });

    res.json(tripRes.data.data || []); // return the list of locations

  } catch (err) {
    console.error('TripAdvisor error:', err?.response?.data || err.message);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/tripadvisor/details', async (req, res) => {
  const { id } = req.query;
  console.log("HERE3", id)
  if (!id) return res.status(400).json({ error: 'Location ID is required' });

  try {
    const [detailRes, photoRes] = await Promise.all([
      axios.get(`https://api.content.tripadvisor.com/api/v1/location/${id}/details`, {
        params: {
          language: 'en',
          key: process.env.TRIP_ADVISOR_API_KEY
        },
      }),
      axios.get(`https://api.content.tripadvisor.com/api/v1/location/${id}/photos`, {
        params: { language: 'en', key: process.env.TRIP_ADVISOR_API_KEY, limit: 3 },
      })
    ]);

    const details = detailRes.data;
    const photos = photoRes.data?.data || [];

    if (photos.length > 0) {
      details.photo = photos[0];
    }
    for (let i = 0; i < 3; i++) {
      details.photo = photos[i] ?? null;
    }


    res.json(detailRes.data);
  } catch (err) {
    console.error('TripAdvisor detail error:', err?.response?.data || err);
    res.status(500).json({ error: err.message });
  }
});

// Serve frontend (React build)
app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
