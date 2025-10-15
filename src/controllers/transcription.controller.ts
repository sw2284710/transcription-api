import { Request, Response } from "express";
import { TranscriptionService } from "../services/transcription.service";

const service = new TranscriptionService();

export const createTranscription = async (req: Request, res: Response) => {
  try {
    const { audioUrl } = req.body;
    if (!audioUrl) return res.status(400).json({ error: "audioUrl is required" });

    const record = await service.createTranscription(audioUrl);
    return res.status(201).json({ _id: record._id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getRecentTranscriptions = async (_req: Request, res: Response) => {
  try {
    const results = await service.getRecentTranscriptions();
    return res.json(results);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
