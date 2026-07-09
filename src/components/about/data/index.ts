import achievements from "./achievements";
import contact from "./contact";
import education from "./education";
import experience from "./experience";
import projects from "./projects";
import techStack from "./techStack";

export const terminalData = {
  education,
  "tech-stack": techStack,
  experience,
  achievements,
  projects,
  contact,
} as const;