// Server

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import authRoutes from "./routes/authRoutes.js";
import dealRoutes from "./routes/dealroutes.js";

dotenv.config(); // ✅ This must be before any process.env usage

const app = express();
const server = http.createServer(app);

// ✅ Direct MongoDB URI (Hardcoded for Render)
mongoose.connect(
  "mongodb+srv://karthickop6:iwillmakeitOP6%3F@greenassist.kesli1h.mongodb.net/greenassist?retryWrites=true&w=majority&appName=GreenAssist"
)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});
app.use("/api/auth", authRoutes);
app.use("/api/deals", dealRoutes);

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
