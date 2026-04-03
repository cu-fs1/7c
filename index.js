import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import loggerMiddleware from "./middleware/logger.middleware.js";
import errorMiddleware from "./middleware/error.middleware.js";
import logger from "./config/logger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// Base Route
app.get("/", (req, res) => {
  res.send("Welcome to the 7c API!");
});

// Error Handling Middleware (must be last)
app.use(errorMiddleware);


// Start Server
app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
