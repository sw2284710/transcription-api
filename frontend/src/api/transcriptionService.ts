import axios from "axios";

const API_BASE = "http://localhost:4000/api"; // adjust for your backend

export interface Transcription {
  _id: string;
  audioUrl: string;
  transcription: string;
  createdAt: string;
}

export const createTranscription = async (audioUrl: string) => {
  const res = await axios.post(`${API_BASE}/transcription`, { audioUrl });
  return res.data;
};

export const getRecentTranscriptions = async (): Promise<Transcription[]> => {
  const res = await axios.get(`${API_BASE}/transcriptions`);
  return res.data;
};
