/* ===========================================================
   PROJECT PREVIEW
=========================================================== */

export interface ProjectPreview {
  images: string[];
}

/* ===========================================================
   PROJECT LINKS
=========================================================== */

export interface ProjectLinks {
  github: string;
  demo: string;
}

/* ===========================================================
   TECH STACK
=========================================================== */

export interface TechStackItem {
  id: string;
  name: string;
  color?: string;
}

/* ===========================================================
   PROJECT MODEL
=========================================================== */

export interface Project {
  id: string;

  title: string;

  subtitle: string;

  description: string;

  techStack: TechStackItem[];

  preview: ProjectPreview;

  links: ProjectLinks;

  featured?: boolean;
}