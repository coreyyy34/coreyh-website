import { TechStack } from "./technology.type";

export type Project = {
  title: string;
  type:
    | "Full Stack Web Application"
    | "Frontend Application"
    | "Backend Application"
    | "JavaFX Application"
    | "Embedded Application";
  overview?: string;
  description: string[];
  key_features?: string[];
  challenges?: string[];
  category: "personal" | "university";
  universityProjectType?: "individual" | "pair" | "group";
  technologies: TechStack;
  sourceCode?: string;
  coverImageUrl?: string;
  imageUrls: string[];
};
