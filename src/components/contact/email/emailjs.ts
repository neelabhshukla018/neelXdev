import emailjs from "@emailjs/browser";

import type {
  ContactFormData,
  EmailConfig,
  SendEmailResult,
} from "../types/contact";

import { EMAILJS_CONFIG } from "../constants/contact";

/* ==========================================================
   CONFIG
========================================================== */

const config: EmailConfig = {
  serviceId: EMAILJS_CONFIG.serviceId,
  templateId: EMAILJS_CONFIG.templateId,
  publicKey: EMAILJS_CONFIG.publicKey,
};

/* ==========================================================
   VALIDATION
========================================================== */

const validateConfig = () => {
  if (!config.serviceId) {
    throw new Error(
      "Missing NEXT_PUBLIC_EMAILJS_SERVICE_ID environment variable."
    );
  }

  if (!config.templateId) {
    throw new Error(
      "Missing NEXT_PUBLIC_EMAILJS_TEMPLATE_ID environment variable."
    );
  }

  if (!config.publicKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_EMAILJS_PUBLIC_KEY environment variable."
    );
  }
};

/* ==========================================================
   SEND EMAIL
========================================================== */

export const sendEmail = async (
  data: ContactFormData
): Promise<SendEmailResult> => {
  try {
    validateConfig();

    await emailjs.send(
      config.serviceId,
      config.templateId,
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,

        // Optional variables
        to_name: "Neelabh Shukla",
        reply_to: data.email,
        sent_at: new Date().toLocaleString(),
      },
      {
        publicKey: config.publicKey,
      }
    );

    return {
      success: true,
      message: "Email sent successfully.",
    };
  } catch (error) {
    console.error("EmailJS Error:", error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong while sending the email.",
    };
  }
};

/* ==========================================================
   EMAILJS INITIALIZATION
========================================================== */

export const initializeEmailJS = () => {
  if (!config.publicKey) return;

  emailjs.init({
    publicKey: config.publicKey,
  });
};