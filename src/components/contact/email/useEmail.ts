"use client";

import { useCallback, useState } from "react";

import { sendEmail } from "./emailjs";
import type { ContactFormData, EmailStatus } from "../types/contact";

interface UseEmailReturn {
  status: EmailStatus;
  error: string | null;
  send: (data: ContactFormData) => Promise<boolean>;
  reset: () => void;
}

export const useEmail = (): UseEmailReturn => {
  const [status, setStatus] = useState<EmailStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const reset = useCallback(() => {
    setStatus("idle");
    setError(null);
  }, []);

  const send = useCallback(
    async (data: ContactFormData): Promise<boolean> => {
      try {
        setStatus("sending");
        setError(null);

        const response = await sendEmail(data);

        if (response.success) {
          setStatus("success");
          return true;
        }

        setStatus("error");
        setError(response.message);

        return false;
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : "Something went wrong while sending your message.";

        setStatus("error");
        setError(message);

        return false;
      }
    },
    []
  );

  return {
    status,
    error,
    send,
    reset,
  };
};