"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { DEFAULT_FORM_VALUES } from "../constants/contact";
import { useEmail } from "../email/useEmail";
import {
  contactSchema,
  ContactFormValues,
  MAX_MESSAGE_LENGTH,
} from "../utils/validation";

export const useContactForm = () => {
  const email = useEmail();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: DEFAULT_FORM_VALUES,
    mode: "onTouched",
  });

  const {
    watch,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = form;

  const message = watch("message") ?? "";

  const characterCount = message.length;

  const remainingCharacters = useMemo(
    () => MAX_MESSAGE_LENGTH - characterCount,
    [characterCount]
  );

  const progress = useMemo(
    () => (characterCount / MAX_MESSAGE_LENGTH) * 100,
    [characterCount]
  );

  /**
   * Plain submit function.
   * ContactForm decides when to call it.
   */
  const submit = async (values: ContactFormValues) => {
    const success = await email.send(values);

    if (success) {
      reset(DEFAULT_FORM_VALUES);
    }

    return success;
  };

  return {
    form,

    errors,

    submit,

    reset,

    status: email.status,

    error: email.error,

    resetStatus: email.reset,

    isSubmitting,

    isValid,

    message,

    characterCount,

    remainingCharacters,

    progress,
  };
};