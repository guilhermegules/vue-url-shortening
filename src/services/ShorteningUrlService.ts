import type { ShortenUrlResponse } from "@/models/ShorteningServiceModel";

const API_URL = "https://api.shrtco.de/v2";

export default {
  async shorteningUrl(url: string) {
    const response = await fetch(`${API_URL}/shorten?url=${url}`);

    const shortenUrl: ShortenUrlResponse = await response.json();

    return shortenUrl;
  },
};
