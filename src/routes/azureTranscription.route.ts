import { Router } from "express";
import { createAzureTranscription } from "../controllers/azureTranscription.controller";

const router = Router();
router.post("/azure-transcription", createAzureTranscription);
export default router;
