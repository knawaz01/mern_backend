require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.DATABASE;

mongoose.connect(url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected successfully');
});


