export interface RAWGGame {
  id: number;
  slug: string;
  name: string;
  background_image: string | null;
  rating: number;
  ratings_count: number;
  released: string | null;
  genres: { id: number; name: string; slug: string }[];
  platforms: { platform: { id: number; name: string } }[];
  description_raw?: string; // Only on single game fetch
}

export interface RAWGResponse {
  count: number;
  results: RAWGGame[];
}
