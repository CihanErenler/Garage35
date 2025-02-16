import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.get("/api/storage/list", async (req, res) => {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/storage/search?image_width=300&sort=price|desc`,
      {
        headers: {
          APPID: process.env.API_KEY,
        },
      },
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "Proxy error" });
  }
});

app.get("/api/storage/latest", async (req, res) => {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/storage/search?image_width=300&sort=price|desc`,
      {
        headers: {
          APPID: process.env.API_KEY,
        },
      },
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "Proxy error" });
  }
});

app.get("/api/storage/vehicle/:registration/:vehicleType", async (req, res) => {
  try {
    const { registration, vehicleType } = req.params;
    const response = await fetch(
      `${process.env.API_BASE_URL}/storage/vehicle?registration=${registration}&vehicle_type=${vehicleType}`,
      {
        headers: {
          APPID: process.env.API_KEY,
        },
      },
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "Proxy error" });
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
