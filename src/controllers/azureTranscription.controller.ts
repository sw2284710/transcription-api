import { Request, Response } from "express";
import { AzureTranscriptionService } from "../services/azureTranscription.service";

const service = new AzureTranscriptionService();

export const createAzureTranscription = async (req: Request, res: Response) => {
  try {
    const { audioUrl, language } = req.body;
    if (!audioUrl) return res.status(400).json({ error: "audioUrl is required" });

    const record = await service.createAzureTranscription(audioUrl, language);
    return res.status(201).json({ _id: record._id, source: record.source });
  } catch (error: any) {
    console.error("Azure transcription error:", error);
    return res.status(500).json({ error: "Azure transcription failed" });
  }
};
