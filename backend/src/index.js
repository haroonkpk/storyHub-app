import express from 'express';
import { connectDB } from './lib/db.js';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import storyRoute from './routes/story.routes.js';
import favoritesRoute from './routes/favorites.route.js';
import cors from 'cors';
import path from "path";

dotenv.config(); 
const __dirname = path.resolve();


const app = express();
app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use("/api/auth", authRoute);
app.use("/api/story", storyRoute);
app.use("/api/favorites", favoritesRoute);


// if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
//  }


app.listen(3000, () => {
  console.log('Server is running on port 3000');
  connectDB();
});