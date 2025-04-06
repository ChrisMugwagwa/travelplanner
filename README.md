// Folder Structure
// travel-activities-app/
// ├── build/               <-- React production build (after npm run build)
// ├── public/
// ├── src/
// │   ├── components/
// │   ├── pages/
// │   ├── api/
// │   ├── App.jsx
// │   ├── index.js
// │   ├── styles.css
// ├── server/
// │   ├── server.js
// │   └── .env
// ├── package.json (frontend)
// ├── README.md <-- customer deployment guide

// README.md
# Travel Activities App

This is a fullstack travel activity suggestion app, built with React (frontend) and Express (backend).

## 🔧 Prerequisites
- Node.js 18+
- An API key for TripAdvisor (and optional: Eventbrite, PredictHQ)

## 📦 Project Structure
- `src/` - React app source code
- `build/` - Auto-generated React production build
- `server/` - Express backend that serves APIs and static frontend

---

## 🚀 Setup Instructions

### 1. Clone the Repo & Install Dependencies
```bash
cd server
npm install
```

### 2. Add Your API Keys
Create a `.env` file in `server/`:
```
PORT=5000
TRIPADVISOR_API_KEY=your_tripadvisor_key_here
```

### 3. Build the Frontend
From the root directory:
```bash
npm run build
```
This creates a production-ready React app in `/build`.

### 4. Start the Server
```bash
cd server
node server.js
```
Or with PM2 for production:
```bash
pm install -g pm2
pm2 start server.js
```

### 5. View the App
Visit: [http://localhost:5000](http://localhost:5000)

---

## 🌍 Deployment
- Upload everything to your server
- Make sure ports are open (e.g., 80/443 or your chosen port)
- Configure your domain to point to the server
- Ensure `.env` is secure and not publicly accessible

---

## 📡 API Proxy Routes
Your frontend can hit these API endpoints:
- `/api/tripadvisor?lat=...&lon=...`

Feel free to expand `server.js` to support Eventbrite, PredictHQ, etc.

---

## 🛟 Support
If you need help deploying, configuring a domain, or adding other APIs, feel free to reach out!

---

// server/server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// TripAdvisor Proxy Route
app.get('/api/tripadvisor', async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const response = await axios.get('https://api.content.tripadvisor.com/api/v1/location/nearby_search', {
      headers: {
        'x-tripadvisor-api-key': process.env.TRIPADVISOR_API_KEY,
      },
      params: {
        latitude: lat,
        longitude: lon,
        category: 'attractions',
        radius: 10,
        language: 'en'
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('TripAdvisor API error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch data from TripAdvisor' });
  }
});

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../build')));

// Fallback to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
