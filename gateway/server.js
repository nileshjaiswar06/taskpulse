const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Service endpoints
const services = {
  auth: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',
  user: process.env.USER_SERVICE_URL || 'http://localhost:3002',
  meeting: process.env.MEETING_SERVICE_URL || 'http://localhost:3003',
  ats: process.env.ATS_SERVICE_URL || 'http://localhost:3004',
  ai: process.env.AI_SERVICE_URL || 'http://localhost:3005',
  interview: process.env.INTERVIEW_SERVICE_URL || 'http://localhost:3006'
};

// Create proxy middleware for each service
Object.entries(services).forEach(([route, target]) => {
  app.use(`/api/${route}`, createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      [`^/api/${route}`]: '',
    },
  }));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Gateway service running on port ${PORT}`);
  console.log('Available services:');
  Object.entries(services).forEach(([name, url]) => {
    console.log(`- ${name}: ${url}`);
  });
});
