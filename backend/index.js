import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDB } from './config/db.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB(process.env.MONGODB_URI);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
