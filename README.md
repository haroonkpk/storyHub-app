# 📚 StoryHub

**StoryHub** is a full-stack storytelling web application built using the **MERN stack**. It allows users to explore categorized stories, view episodes, and manage favorites. This repo contains both frontend and backend code in a single structured folder.

---

## 📁 Project Structure
### storyHub/
- ├── backend/ # Express.js + MongoDB (API and Auth)
- ├── frontend/ # React + TailwindCSS + Zustand (User Interface)
- ├── package.json # Root-level config

---

## 🚀 Tech Stack

### Frontend
- React
- Tailwind CSS + DaisyUI
- Zustand (State Management)
- React Router
- Axios
- Lucide Icons
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- CORS, dotenv

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/haroonkpk/storyHub.git
cd storyHub
```
### 2. Install Dependencies

```bash

npm install
```

## 3. Environment Variables

### Backend: Create a .env file in the backend/.env
```
MONGO_URI=your mongoDB url

JWT_SECRET=yuor jwt secret

CLOUDINARY_CLOUD_NAME=your cloud name
CLOUDINARY_API_KEY=your cloudnary api key
CLOUDINARY_API_your cloudnary api
```
## 4. Run the App
### Start Backend
```bash
cd backend
npm run dev
```
Make sure MongoDB is running locally or in the cloud (MongoDB Atlas).

## 5. Start Frontend
```bash
cd frontend
npm run dev
```
---
# ✨ Features
- 🔐 User Signup/Login with JWT

- 🏠 Homepage with story categories

- 📚 View stories and related episodes

- ❤️ Add/Remove stories from favorites

- 🖼️ Episode images with description

- 🎨 Responsive UI (TailwindCSS + DaisyUI)

- 🧑‍💻 Admin support (can add/edit stories)

# 🛠️ Folder Details
### backend/
- Express.js server

- Mongoose models

- Auth and story routes

- JWT authentication

### frontend/
- React SPA with React Router

- Zustand for global state

- Reusable components

- API calls using Axios

- UI animations with Framer Motion

-  Dark mode toggle

## 📌 TODO (Upcoming Improvements)

- 🔍 Search functionality

- 🧠 AI Summarization: Automatically summarize long stories into short overviews using AI

- 🤖 AI Story Telling: Generate new stories or episodes using AI based on selected categories


