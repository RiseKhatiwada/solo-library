require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Middlewares (must come before routes)
app.use(cors());
app.use(express.json()); // parse JSON bodies

// Connect to DB
const PORT = process.env.PORT || 5000;
connectDB(process.env.MONGO_URI);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('Library API running');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
