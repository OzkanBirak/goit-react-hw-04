import axios from "axios";

const ACCESS_KEY = "iEmI259Xi6-0RnaqKT-3gBqQ9q_rxYzFTmEpAa94gQw";

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const fetchImages = async (query, page = 1, perPage = 12) => {
  try {
    const response = await unsplash.get("/search/photos", {
      params: {
        query,
        page,
        per_page: perPage,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("API isteği başarısız oldu:", error);
    return [];
  }
};
