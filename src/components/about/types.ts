export type Command =
  | "education"
  | "tech-stack"
  | "experience"
  | "achievements"
  | "projects"
  | "contact";

export interface CommandItemType {
  id: Command;
  label: string;
  icon?: string;
}

export interface TerminalData {
  command: string;
  filename: string;
  content: string;
}