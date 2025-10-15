import { useState } from "react";
import { createTranscription } from "../api/transcriptionService";
import { useQueryClient } from "@tanstack/react-query";

export default function TranscriptionForm() {
  const [audioUrl, setAudioUrl] = useState("");
  const [message, setMessage] = useState("");

  const queryClient = useQueryClient(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await createTranscription(audioUrl);
      setMessage(`Transcription created with ID: ${res._id}`);
      setAudioUrl("");

      queryClient.invalidateQueries({ queryKey: ["transcriptions"] });
    } catch (err: any) {
      setMessage("Failed to create transcription");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Create Transcription</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="url"
          value={audioUrl}
          onChange={(e) => setAudioUrl(e.target.value)}
          placeholder="Enter audio URL"
          required
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    </div>
  );
}
