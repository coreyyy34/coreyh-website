import { Technology } from "@/types/technology.type";

export const TECH_STACK_LANGUAGES: Record<string, Technology> = {
  c: {
    name: "C",
    icon: <i className="devicon-c-plain"></i>,
  },
  csharp: {
    name: "C#",
    icon: <i className="devicon-csharp-plain"></i>,
  },
  kotlin: {
    name: "Kotlin",
    icon: <i className="devicon-kotlin-plain"></i>,
  },
  java: {
    name: "Java",
    icon: <i className="devicon-java-plain"></i>,
  },
  python: {
    name: "Python",
    icon: <i className="devicon-python-plain"></i>,
  },
  javascript: {
    name: "JavaScript",
    icon: <i className="devicon-javascript-plain"></i>,
  },
  typescript: {
    name: "TypeScript",
    icon: <i className="devicon-typescript-plain"></i>,
  },
  html: {
    name: "HTML",
    icon: <i className="devicon-html5-plain"></i>,
  },
  css: {
    name: "CSS",
    icon: <i className="devicon-css3-plain"></i>,
  },
};

export const TECH_STACK_LIBRARIES: Record<string, Technology> = {
  react: {
    name: "React",
    icon: <i className="devicon-react-original"></i>,
  },
  nextjs: {
    name: "Next.js",
    icon: <i className="devicon-nextjs-plain"></i>,
  },
  tailwindcss: {
    name: "Tailwind CSS",
    icon: <i className="devicon-tailwindcss-plain"></i>,
  },
  express: {
    name: "Express",
    icon: <i className="devicon-express-original"></i>,
  },
  springboot: {
    name: "Spring Boot",
    icon: <i className="devicon-spring-original"></i>,
  },
  javafx: {
    name: "JavaFX",
    icon: <i className="devicon-java-plain"></i>,
  },
  thymeleaf: {
    name: "Thymeleaf",
    icon: <i className="devicon-spring-original"></i>,
  },
};

export const TECH_STACK_DEV_TOOLS: Record<string, Technology> = {
  vscode: {
    name: "VSCode",
    icon: <i className="devicon-visualstudio-plain"></i>,
  },
  jetbrains: {
    name: "JetBrains",
    icon: <i className="devicon-intellij-plain"></i>,
  },
  ubuntu: {
    name: "Ubuntu",
    icon: <i className="devicon-ubuntu-plain"></i>,
  },
  gradle: {
    name: "Gradle",
    icon: <i className="devicon-gradle-plain"></i>,
  },
  git: {
    name: "Git",
    icon: <i className="devicon-git-plain"></i>,
  },
  github: {
    name: "GitHub",
    icon: <i className="devicon-github-original"></i>,
  },
  gitlab: {
    name: "GitLab",
    icon: <i className="devicon-gitlab-plain"></i>,
  },
  sql: {
    name: "SQL",
    icon: <i className="devicon-mysql-plain"></i>,
  },
  redis: {
    name: "Redis",
    icon: <i className="devicon-redis-plain"></i>,
  },
};

export const TECH_STACK_LANGUAGES_LIST: Technology[] = Object.entries(
  TECH_STACK_LANGUAGES,
).map(([key, value]) => ({
  key,
  ...value,
}));

export const TECH_STACK_LIBRARIES_LIST: Technology[] = Object.entries(
  TECH_STACK_LIBRARIES,
).map(([key, value]) => ({
  key,
  ...value,
}));

export const TECH_STACK_DEV_TOOLS_LIST: Technology[] = Object.entries(
  TECH_STACK_DEV_TOOLS,
).map(([key, value]) => ({
  key,
  ...value,
}));
