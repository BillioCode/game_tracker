const RAWG_BASE = "https://api.rawg.io/api";
const API_KEY = process.env.RAWG_API_KEY;
import { RAWGResponse } from "@/types/rawg";

//
export async function searchGames(query: string) {
  const res = await fetch(
    `${RAWG_BASE}/games?key=${API_KEY}&search=${query}&page_size=20`,
  );
  if (!res.ok) throw new Error("Failed to fetch games");
  return res.json();
}

export async function getGame(slug: string) {
  const res = await fetch(`${RAWG_BASE}/games/${slug}?key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch game");
  return res.json();
}

export async function getPopularGames(): Promise<RAWGResponse> {
  const res = await fetch(
    `${RAWG_BASE}/games?key=${API_KEY}&ordering=-added&page_size=20&min_rating=4`,
  );
  if (!res.ok) throw new Error("Failed to fetch games");
  return res.json();
}
