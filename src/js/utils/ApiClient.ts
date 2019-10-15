import axios from "axios";
const { YOUTUBE_API_KEY } = process.env;
const ENDPOINT_URL = "https://www.googleapis.com/youtube/v3";

export default class ApiClint {
  static async search(q: string): Promise<any[]> {
    const { data } = await axios.get(`${ENDPOINT_URL}/search`, {
      params: {
        q,
        part: "snippet",
        key: YOUTUBE_API_KEY
      }
    });
    return data.items;
  }
}
