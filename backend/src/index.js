import express from 'express';
import { connectDB } from './lib/db.js';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import storyRoute from './routes/story.routes.js';

dotenv.config(); 
const app = express();
app.use(express.json());
app.use(cookieParser());



app.use("/auth", authRoute);
app.use("/storys", storyRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  connectDB();
});