const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db');
const dotenv = require('dotenv');
const app = express();
app.use(express.json());
const contacts = require('./routes/contactRoutes');

dotenv.config({ path: './database/config.env' });

connectDB();

app.use(cors());
app.use('/api/v1/contacts', contacts);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`app listen in ${PORT}`);
});
