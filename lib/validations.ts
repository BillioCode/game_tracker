import { z } from "zod";

export const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  content: z
    .string()
    .min(10, "Review must be at least 10 characters")
    .max(1000),
});

export const commentSchema = z.object({
  content: z.string().min(1, "Comment cannot be empty").max(500),
});

export const gameEntrySchema = z.object({
  gameId: z.string(),
  gameSlug: z.string(),
  gameName: z.string(),
  gameCover: z.string().optional(),
  status: z.enum(["WANT_TO_PLAY", "PLAYING", "FINISHED"]),
});

export type ReviewInput = z.infer<typeof reviewSchema>;
export type CommentInput = z.infer<typeof commentSchema>;
export type GameEntryInput = z.infer<typeof gameEntrySchema>;
