"use client";

import { useEffect } from "react";
import { Mail, MessageSquare, Type, User } from "lucide-react";

import { useContactForm } from "../hooks/useContactForm";
import { MAX_MESSAGE_LENGTH } from "../utils/validation";

import { InputField } from "./InputField";
import { SendingState } from "./SendingState";
import { SubmitButton } from "./SubmitButton";
import { SuccessState } from "./SuccessState";
import { TextAreaField } from "./TextAreaField";

interface ContactFormProps {
  className?: string;

  /**
   * Called after the email is sent successfully.
   */
  onSuccess?: () => void;
}

export function ContactForm({
  className,
  onSuccess,
}: ContactFormProps) {
  const {
    form,
    submit,
    errors,
    status,
    resetStatus,
    isSubmitting,
    isValid,
    characterCount,
    remainingCharacters,
    progress,
  } = useContactForm();

  const { register, handleSubmit } = form;

  const handleFormSubmit = handleSubmit(async (values) => {
    const success = await submit(values);

    if (success) {
      onSuccess?.();
    }
  });

  // Automatically close success screen after 2.5s
  useEffect(() => {
    if (status !== "success") return;

    const timer = setTimeout(() => {
      resetStatus();
    }, 2500);

    return () => clearTimeout(timer);
  }, [status, resetStatus]);

  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl",
        "border border-border/50",
        "bg-background/60",
        "backdrop-blur-xl",
        "p-5 sm:p-6 lg:p-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Sending Overlay */}
      <SendingState visible={status === "sending"} />

      {/* Success Overlay */}
      <SuccessState visible={status === "success"} />

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Send Me a Message
        </h2>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Have an idea, project, internship, or freelance opportunity?
          Fill out the form below and I'll get back to you soon.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleFormSubmit}
        className="space-y-6"
      >
        <InputField
          label="Full Name"
          icon={User}
          placeholder="John Doe"
          registration={register("name")}
          error={errors.name}
        />

        <InputField
          label="Email Address"
          icon={Mail}
          type="email"
          placeholder="john@example.com"
          registration={register("email")}
          error={errors.email}
        />

        <InputField
          label="Subject"
          icon={Type}
          placeholder="Project Discussion"
          registration={register("subject")}
          error={errors.subject}
        />

        <TextAreaField
          label="Message"
          icon={MessageSquare}
          placeholder="Tell me about your project..."
          registration={register("message")}
          error={errors.message}
          characterCount={characterCount}
          remainingCharacters={remainingCharacters}
          progress={progress}
          maxLength={MAX_MESSAGE_LENGTH}
        />

        <SubmitButton
          status={status}
          disabled={!isValid || isSubmitting}
        />
      </form>
    </div>
  );
}