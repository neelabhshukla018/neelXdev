import {
  Briefcase,
  FileText,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa6";

import type {
  Availability,
  ContactFormData,
  ContactInfoItem,
  SocialLink,
  TerminalStep,
} from "../types/contact";

/* ==========================================================
   CONTACT INFORMATION
========================================================== */

export const CONTACT_INFO: ContactInfoItem[] = [
  {
    id: "email",
    label: "Email",
    value: "neelabhshukla79@gmail.com",
    href: "mailto:neelabhshukla79@gmail.com",
    copyable: true,
    icon: Mail,
  },
  {
    id: "phone",
    label: "Phone",
    value: "+91 7307551612",
    href: "tel:+917307551612",
    copyable: true,
    icon: Phone,
  },
  {
    id: "location",
    label: "Location",
    value: "Lucknow, Uttar Pradesh, India",
    icon: MapPin,
  },
  {
    id: "work",
    label: "Open For",
    value: "Full Stack Development • Freelance • Internship",
    icon: Briefcase,
  },
];

/* ==========================================================
   SOCIAL LINKS
========================================================== */

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/neelabhshukla018",
    icon: FaGithub,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/neelabh18shukla/",
    icon: FaLinkedin,
  },
  {
    id: "blogs",
    name: "Blogs",
    url: "https://despire-blogsmt.netlify.app/",
    icon: FaGlobe,
  },
];

/* ==========================================================
   RESUME
========================================================== */

export const RESUME = {
  title: "Resume",
  description: "Download my latest resume",
  url: "/resume/Neelabh's_Resume.pdf",
  icon: FileText,
};

/* ==========================================================
   AVAILABILITY
========================================================== */

export const AVAILABILITY: Availability = {
  status: "available",
  label: "Available for Opportunities",
  description:
    "Currently open for internships, freelance, and full-time roles.",
};

/* ==========================================================
   DEFAULT FORM VALUES
========================================================== */

export const DEFAULT_FORM_VALUES: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

/* ==========================================================
   TERMINAL COMMANDS
========================================================== */

export const TERMINAL_COMMANDS: Omit<TerminalStep, "status">[] = [
  {
    id: "stage",
    command: "git add .",
    output: "Changes staged successfully.",
  },
  {
    id: "commit",
    command: 'git commit -m "New Portfolio Inquiry"',
    output: "Commit created successfully.",
  },
  {
    id: "push",
    command: "git push origin main",
    output: "Connecting to remote repository...",
  },
  {
    id: "emailjs",
    command: "emailjs send",
    output: "Sending email...",
  },
  {
    id: "success",
    command: "✔ Delivery Complete",
    output: "Message delivered successfully.",
  },
];

/* ==========================================================
   SECTION CONTENT
========================================================== */

export const CONTACT_CONTENT = {
  badge: "Get In Touch",

  heading: "Let's Build Something Amazing Together",

  description:
    "Whether you have a project, an idea, or just want to connect, I'd love to hear from you. Fill out the form and I'll get back to you as soon as possible.",

  submitText: "Send Message",

  sendingText: "Sending...",

  successTitle: "Message Sent Successfully",

  successDescription:
    "Thanks for reaching out! I'll get back to you as soon as possible.",
};

/* ==========================================================
   EMAILJS ENVIRONMENT KEYS
========================================================== */

export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",

  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",

  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};