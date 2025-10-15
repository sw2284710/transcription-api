Transcription API (Express + TypeScript)

Quick start:

1. npm install
2. npm run dev
3. POST to `http://localhost:4000/api/transcription` with JSON body `{ "audioUrl": "https://example.com/sample.mp3" }`

MongoDB Indexing for Large Dataset

When the `transcriptions` collection grows beyond 100 million records, 
queries that filter by `createdAt` (e.g., last 30 days) benefit from an index.

Recommended Index - db.transcriptions.createIndex({ createdAt: -1 })


Part 3 – Scalability & System Design
handle 10k+ concurrent requests

1. We can containerize the service using Docker and deploy it to a cloud platform like AWS
2. We can configure horizontal autoscaling to automatically add or remove instances based on CPU/memory or request load.
3. We can process actual audio processing/transcription operation using a background queue like RabbitMQ.
4. Redis Caching - We can Redis cache to store recently fetched or processed transcriptions for a 
GET /transcriptions "# transcription-project" 
"# transcription-api" 


for logging I could use winston and swagger for API documentation but I have not used in this demo.
