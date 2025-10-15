import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TranscriptionForm from "./components/TranscriptionForm";
import TranscriptionList from "./components/TranscriptionList";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-center py-6">Transcription App</h1>
        <TranscriptionForm />
        <TranscriptionList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
