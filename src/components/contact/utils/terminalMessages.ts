import type { TerminalStep } from "../types/contact";

/* ==========================================================
   INITIAL TERMINAL STATE
========================================================== */

export const INITIAL_TERMINAL_STEPS: TerminalStep[] = [
  {
    id: "stage",
    command: "git add .",
    output: "Staging portfolio changes...",
    status: "pending",
  },
  {
    id: "commit",
    command: 'git commit -m "New Portfolio Inquiry"',
    output: "Creating commit...",
    status: "pending",
  },
  {
    id: "push",
    command: "git push origin main",
    output: "Connecting to GitHub...",
    status: "pending",
  },
  {
    id: "email",
    command: "emailjs send",
    output: "Preparing email payload...",
    status: "pending",
  },
  {
    id: "deliver",
    command: "deliver message",
    output: "Waiting for response...",
    status: "pending",
  },
];

/* ==========================================================
   TERMINAL SUCCESS OUTPUT
========================================================== */

export const SUCCESS_OUTPUTS: Record<string, string> = {
  stage: "✔ Files staged successfully.",

  commit: "✔ Commit created successfully.",

  push: "✔ Connected to remote repository.",

  email: "✔ Email sent through EmailJS.",

  deliver: "✔ Message delivered successfully.",
};

/* ==========================================================
   TERMINAL ERROR OUTPUT
========================================================== */

export const ERROR_OUTPUTS: Record<string, string> = {
  stage: "✖ Unable to stage files.",

  commit: "✖ Commit failed.",

  push: "✖ Remote connection failed.",

  email: "✖ EmailJS request failed.",

  deliver: "✖ Message delivery failed.",
};

/* ==========================================================
   EXECUTION DELAYS (ms)
========================================================== */

export const TERMINAL_DELAYS = {
  start: 500,

  command: 900,

  output: 500,

  finish: 1000,
} as const;

/* ==========================================================
   TERMINAL PROMPT
========================================================== */

export const TERMINAL_PROMPT = {
  user: "neelabh",

  host: "portfolio",

  symbol: "~",

  cursor: "$",
};

/* ==========================================================
   TERMINAL TITLES
========================================================== */

export const TERMINAL_TEXT = {
  title: "Deployment Terminal",

  subtitle: "Live Message Delivery",

  idle: "Waiting for user action...",

  sending: "Sending your message...",

  success: "Message delivered successfully.",

  error: "Failed to deliver message.",

  retry: "Please try again.",
};

/* ==========================================================
   HELPERS
========================================================== */

export const createPendingSteps = (): TerminalStep[] =>
  INITIAL_TERMINAL_STEPS.map((step) => ({
    ...step,
    status: "pending",
  }));

export const resetTerminalSteps = createPendingSteps;