import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

import productRouter from "./routes/productRouter";

const app: Application = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRouter);

export default app;
