import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { connectDB } from './config/database';
import atsRoutes from './routes/ats.routes';
import { errorHandler } from './middleware/error.middleware';

// Load environment variables
config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3004;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/ats', atsRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'ats-service' });
});

// Error handling middleware
app.use(errorHandler);

// Connect to database and start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`ATS service running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start ATS service:', error);
    process.exit(1);
  }
};

startServer();

export default app;
