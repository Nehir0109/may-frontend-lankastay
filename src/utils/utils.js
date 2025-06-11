// API Base URL
export const baseURL = "https://6829efb0ab2b5004cb3543e3.mockapi.io/api/v1";

// Fetcher Function
export const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
};
