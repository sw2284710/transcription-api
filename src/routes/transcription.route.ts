import { Router } from "express";
import { createTranscription, getRecentTranscriptions } from "../controllers/transcription.controller";

const router = Router();

router.post("/transcription", createTranscription);
router.get("/transcriptions", getRecentTranscriptions);

export default router;
