import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { connectDB } from '../../config/database';
import interviewRoutes from '../../routes/interview.routes';
import { errorHandler } from '../../middleware/error.middleware';
import { WebSocketServer } from 'ws';
import http from 'http';

// Load environment variables
config();

// Initialize Express app and HTTP server
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3006;

// WebSocket Server
const wss = new WebSocketServer({ server });

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('New WebSocket connection');
  
  ws.on('message', (message) => {
    console.log('Received:', message.toString());
    // Echo the message back to the client
    ws.send(`Echo: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/interview', interviewRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    service: 'interview-engine-service',
    websocket: 'active',
    clients: wss.clients.size
  });
});

// Error handling middleware
app.use(errorHandler);

// Connect to database and start server
const startServer = async () => {
  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log(`Interview Engine service running on port ${PORT}`);
      console.log(`WebSocket server is running on ws://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start Interview Engine service:', error);
    process.exit(1);
  }
};

startServer();

export { app, wss };
