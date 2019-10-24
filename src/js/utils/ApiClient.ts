import axios from "axios";

const { YOUTUBE_API_KEY } = process.env;
const ENDPOINT_URL = "https://www.googleapis.com/youtube/v3";

export type SearchResult = gapi.client.youtube.SearchResult;

export default class ApiClint {
  static async search(q: string): Promise<SearchResult[]> {
    const { data } = await axios.get<gapi.client.youtube.SearchListResponse>(
      `${ENDPOINT_URL}/search`,
      {
        params: {
          q,
          part: "snippet",
          type: "video",
          key: YOUTUBE_API_KEY
        }
      }
    );
    return data.items!;
  }
}
