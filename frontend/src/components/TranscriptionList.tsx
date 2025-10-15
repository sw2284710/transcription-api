import { useQuery } from "@tanstack/react-query";
import { getRecentTranscriptions, Transcription } from "../api/transcriptionService";

export default function TranscriptionList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["transcriptions"],
    queryFn: getRecentTranscriptions,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading transcriptions</p>;

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-3">Recent Transcriptions</h2>
      <ul className="space-y-2">
        {data?.map((t: Transcription) => (
          <li
            key={t._id}
            className="p-3 border rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <p><strong>ID:</strong> {t._id}</p>
            <p><strong>Audio:</strong> {t.audioUrl}</p>
            <p><strong>Text:</strong> {t.transcription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
