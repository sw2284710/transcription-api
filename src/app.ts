import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import transcriptionRoutes from "./routes/transcription.route";
import azureRoutes from "./routes/azureTranscription.route";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", transcriptionRoutes);
app.use("/api", azureRoutes);

export default app;
