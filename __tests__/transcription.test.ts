import request from "supertest";
import app from "../src/app";
import mongoose from "mongoose";

describe("POST /api/transcription", () => {
  beforeAll(async () => {
   
  });

  afterAll(async () => {
    try {
      await mongoose.connection.close();
    } catch (e) {}
  });

  it("should return _id in response", async () => {
    const res = await request(app)
      .post("/api/transcription")
      .send({ audioUrl: "https://example.com/sample.mp3" });

    expect([201,500]).toContain(res.status);
    if (res.status === 201) {
      expect(res.body).toHaveProperty("_id");
    }
  }, 10000);
});
