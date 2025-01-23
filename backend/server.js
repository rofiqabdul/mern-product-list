import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import router from "./routes/product.routes.js";

const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();

app.use(express.json()); // allow us to accept JSON data in the body

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/product", router);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:5001/`);
});
