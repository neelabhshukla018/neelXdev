/* ==========================================================
   CONTACT FORM
========================================================== */

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/* ==========================================================
   EMAIL STATUS
========================================================== */

export type EmailStatus =
  | "idle"
  | "sending"
  | "success"
  | "error";

/* ==========================================================
   TERMINAL
========================================================== */

export type TerminalStepStatus =
  | "pending"
  | "running"
  | "completed"
  | "failed";

export interface TerminalStep {
  id: string;
  command: string;
  output?: string;
  status: TerminalStepStatus;
}

/* ==========================================================
   CONTACT INFO
========================================================== */

export interface ContactInfoItem {
  id: string;
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
  icon: React.ElementType;
}

/* ==========================================================
   SOCIAL LINKS
========================================================== */

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: React.ElementType;
}

/* ==========================================================
   AVAILABILITY
========================================================== */

export interface Availability {
  status: "available" | "busy" | "offline";
  label: string;
  description: string;
}

/* ==========================================================
   EMAILJS CONFIG
========================================================== */

export interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

/* ==========================================================
   CONTACT STATE
========================================================== */

export interface ContactState {
  status: EmailStatus;
  error: string | null;
}

/* ==========================================================
   SEND RESULT
========================================================== */

export interface SendEmailResult {
  success: boolean;
  message: string;
}