import Transcription from "../models/transcription.model";
import { retryDownload } from "../utils/retryDownload";

export class TranscriptionService {
  async createTranscription(audioUrl: string) {
    await retryDownload(audioUrl);
    const transcription = "transcribed text";

    const record = await Transcription.create({
      audioUrl,
      transcription,
      createdAt: new Date(),
    });
    return record;
  }

  async getRecentTranscriptions() {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    return Transcription.find({
      createdAt: { $gte: thirtyDaysAgo },
    }).sort({ createdAt: -1 });
  }
}
