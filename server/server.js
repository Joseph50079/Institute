import express from 'express';
import router from './routes/index.js';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv'; // dotenv can be imported
import { google } from 'googleapis'; // googleapis supports import syntax
import db from './models/index.cjs'; // Ensure the file exports correctly as an ES module // Already using ES module syntax
import axios from 'axios';
// Configure dotenv
dotenv.config();

// Initialize express app
const app = express();

// CORS options
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());





app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the server!' });
});



const SCOPES = ['https://www.googleapis.com/auth/calendar'];

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// Generate URL for Admin to Authenticate
app.get('/auth', (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  res.redirect(authUrl);
});

// Handle Google OAuth Callback
app.get('/auth/callback', async (req, res) => {
  const code = req.query.code;
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  res.send('Authentication successful! You can now close this window.');
});

app.use('/api', router);
// Start the server




// Start the server
db.sequelize.sync({ alter: true, force: false }).then((req) => {
  console.log('Database connected');
  console.log(Object.keys(db));
  app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
  });
}).catch((err) => {
  console.log("Error can't connect to the database", err);
});

