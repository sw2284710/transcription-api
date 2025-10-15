import Transcription from "../models/transcription.model";
import axios from "axios";

export class AzureTranscriptionService {
  async createAzureTranscription(audioUrl: string, language = "en-US") {
    console.log(`Mock downloading ${audioUrl}`);
    await new Promise((res) => setTimeout(res, 300));

    const transcription = await this.transcribeWithAzure(audioUrl, language);

    const record = await Transcription.create({
      audioUrl,
      transcription,
      source: "azure",
      createdAt: new Date(),
    });

    return record;
  }

  private async transcribeWithAzure(audioUrl: string, language: string): Promise<string> {
    const key = process.env.AZURE_SPEECH_KEY;
    const region = process.env.AZURE_REGION;

    if (!key || !region) {
      console.warn("Missing Azure credentials, returning mock transcription.");
      return `mocked ${language} transcription text`;
    }

    //API call with retry
    const maxRetries = 3;
    let delay = 500;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await axios.post(
          `https://${region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=${language}`,
          { audioUrl },
          {
            headers: {
              "Ocp-Apim-Subscription-Key": key,
              "Content-Type": "application/json",
            },
            timeout: 5000,
          }
        );
        return response.data?.DisplayText || "transcribed text from Azure";
      } catch (error: any) {
        console.error(`Azure API error -`, error.message);
        if (attempt === maxRetries) throw new Error("Azure transcription failed after retries");
        await new Promise((res) => setTimeout(res, delay));
        delay *= 2; 
      }
    }
    throw new Error("Unexpected failure");
  }
}
