import express from "express";
import dotenv from "dotenv";
import indexRoutes from "./routes/index.routes";
import connectDB from "./connectDB";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
dotenv.config();
app.use(bodyParser());
app.use(cors());

const PORT = process.env.PORT || 3004;

app.get("/healthCheck", (_, res) => res.send({ message: "Server is running" }));

app.use("/api/v1/", indexRoutes);

app.listen(PORT, () => {
  console.log(`Server running at the PORT ${PORT}`);
  connectDB();
});
