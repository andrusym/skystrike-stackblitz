
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Core Routes
app.use('/api/dashboard', require('./routes/dashboard'));
app.use('/api/journal', require('./routes/journal'));
app.use('/api/summary', require('./routes/summary'));
app.use('/api/wealth', require('./routes/wealth'));
app.use('/api/config', require('./routes/config'));
app.use('/api/setup', require('./routes/setup'));
app.use('/api/admin', require('./routes/admin'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SkyStrike API running on port ${PORT}`));
