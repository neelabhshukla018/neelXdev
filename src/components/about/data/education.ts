import { TerminalData } from "../types";

const education: TerminalData = {
  command: "cat education.json",
  filename: "education.json",

  content: `{
  "name": "Neelabh Shukla",
  "degree": "Bachelor of Technology",
  "branch": "Computer Science & Engineering",
  "university": "Shri Ramswaroop Memorial University",
  "year": "3rd Year",
  "location": "Lucknow, Uttar Pradesh",
  "focus": [
    "Full Stack Development",
    "Backend Engineering",
    "Problem Solving",
    "System Design"
  ]
}`,
};

export default education;