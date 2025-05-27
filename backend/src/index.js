import express from 'express';
import { connectDB } from './lib/db.js';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';
dotenv.config(); 
const app = express();
app.use(express.json());




app.use("/auth", authRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  connectDB();
});