import axios from "axios";

export const retryDownload = async (url: string, retries = 3): Promise<string> => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Downloading audio (attempt ${attempt})...`);
      await new Promise((res) => setTimeout(res, 200));
      /* const resp = await axios.get(url, { responseType: "arraybuffer", timeout: 5000 });
        return Buffer.from(resp.data).toString("base64");*/
      return "mock_audio_data";
    } catch (err) {
      console.error(`Download attempt ${attempt} failed.`);
      if (attempt === retries) throw err;
    }
  }
  throw new Error("Failed to download audio after retries");
};
