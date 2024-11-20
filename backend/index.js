import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import booksRoute from './routes/booksRoute.js';
import registerRoute from './routes/registerRoute.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/books', booksRoute);
app.use('/api/users', registerRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
