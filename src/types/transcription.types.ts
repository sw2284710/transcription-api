export interface TranscriptionRequest {
  audioUrl: string;
}

export interface TranscriptionResponse {
  _id: string;
  audioUrl: string;
  transcription: string;
  createdAt: Date;
}
