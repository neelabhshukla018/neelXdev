import { z } from "zod";

/* ==========================================================
   CONTACT FORM VALIDATION
========================================================== */

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name must be less than 50 characters."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(100, "Subject must be less than 100 characters."),

  message: z
    .string()
    .trim()
    .min(20, "Message must contain at least 20 characters.")
    .max(1000, "Message must be less than 1000 characters."),
});

/* ==========================================================
   TYPES
========================================================== */

export type ContactFormValues = z.infer<typeof contactSchema>;

/* ==========================================================
   HELPERS
========================================================== */

export const MAX_MESSAGE_LENGTH = 1000;

export const MIN_MESSAGE_LENGTH = 20;

export const getRemainingCharacters = (value: string) =>
  MAX_MESSAGE_LENGTH - value.length;

export const isMessageValid = (value: string) =>
  value.trim().length >= MIN_MESSAGE_LENGTH;