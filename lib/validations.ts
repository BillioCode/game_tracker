import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Name is too short").optional().or(z.literal("")),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username is too long")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores",
    ),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

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

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ReviewInput = z.infer<typeof reviewSchema>;
export type CommentInput = z.infer<typeof commentSchema>;
export type GameEntryInput = z.infer<typeof gameEntrySchema>;
