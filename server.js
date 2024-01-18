import * as dotenv from "dotenv";
import express from "express";
import connectDB from "./src/database/database.js";
import { courseRouter } from "./src/routes/index.js";

const app = express();
const port = process.env.PORT || 8081;

app.use("/course", courseRouter);
app.use(express.json());

dotenv.config();

app.listen(port, async () => {
  await connectDB();
});
