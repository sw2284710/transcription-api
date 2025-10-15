import mongoose, { Schema, Document } from "mongoose";

export interface ITranscription extends Document {
  audioUrl: string;
  transcription: string;
  createdAt: Date;
  source: string;
}

const TranscriptionSchema = new Schema<ITranscription>({
  audioUrl: { type: String, required: true },
  transcription: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  source: { type: String, default: "local" },
});

export default mongoose.model<ITranscription>("Transcription", TranscriptionSchema);
