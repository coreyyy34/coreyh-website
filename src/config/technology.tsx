import { Technology } from "@/types/technology.type";

export const TECH_STACK_LANGUAGES: Record<string, Technology> = {
	c: {
		name: "C",
		primaryColour: "blue",
		secondaryColour: "cyan",
		icon: <i className="devicon-c-plain"></i>,
	},
	csharp: {
		name: "C#",
		primaryColour: "indigo",
		secondaryColour: "blue",
		icon: <i className="devicon-csharp-plain"></i>,
	},
	java: {
		name: "Java",
		primaryColour: "red",
		secondaryColour: "amber",
		icon: <i className="devicon-java-plain"></i>,
	},
	python: {
		name: "Python",
		primaryColour: "yellow",
		secondaryColour: "green",
		icon: <i className="devicon-python-plain"></i>,
	},
	javascript: {
		name: "JavaScript",
		primaryColour: "yellow",
		secondaryColour: "orange",
		icon: <i className="devicon-javascript-plain"></i>,
	},
	typescript: {
		name: "TypeScript",
		primaryColour: "blue",
		secondaryColour: "indigo",
		icon: <i className="devicon-typescript-plain"></i>,
	},
	html: {
		name: "HTML",
		primaryColour: "orange",
		secondaryColour: "yellow",
		icon: <i className="devicon-html5-plain"></i>,
	},
	css: {
		name: "CSS",
		primaryColour: "blue",
		secondaryColour: "indigo",
		icon: <i className="devicon-css3-plain"></i>,
	},
};

export const TECH_STACK_LIBRARIES: Record<string, Technology> = {
	react: {
		name: "React",
		primaryColour: "blue",
		secondaryColour: "cyan",
		icon: <i className="devicon-react-original"></i>,
	},
	nextjs: {
		name: "Next.js",
		primaryColour: "blue",
		secondaryColour: "indigo",
		icon: <i className="devicon-nextjs-plain"></i>,
	},
	tailwindcss: {
		name: "Tailwind CSS",
		primaryColour: "teal",
		secondaryColour: "emerald",
		icon: <i className="devicon-tailwindcss-plain"></i>,
	},
	express: {
		name: "Express",
		primaryColour: "gray",
		secondaryColour: "gray",
		icon: <i className="devicon-express-original"></i>,
	},
	springboot: {
		name: "Spring Boot",
		primaryColour: "green",
		secondaryColour: "yellow",
		icon: <i className="devicon-spring-original"></i>,
	},
	// thymeleaf: {
	// 	name: "Thymeleaf",
	// 	primaryColour: "green",
	// 	secondaryColour: "emerald",
	// 	icon: <ThymeleafIcon />,
	// },
};

export const TECH_STACK_DEV_TOOLS: Record<string, Technology> = {
	vscode: {
		name: "VSCode",
		primaryColour: "blue",
		secondaryColour: "purple",
		icon: <i className="devicon-visualstudio-plain"></i>,
	},
	jetbrains: {
		name: "JetBrains",
		primaryColour: "blue",
		secondaryColour: "red",
		icon: <i className="devicon-intellij-plain"></i>,
	},
	ubuntu: {
		name: "Ubuntu",
		primaryColour: "orange",
		secondaryColour: "purple",
		icon: <i className="devicon-ubuntu-plain"></i>,
	},
	gradle: {
		name: "Gradle",
		primaryColour: "green",
		secondaryColour: "lime",
		icon: <i className="devicon-gradle-plain"></i>,
	},
	git: {
		name: "Git",
		primaryColour: "orange",
		secondaryColour: "red",
		icon: <i className="devicon-git-plain"></i>,
	},
	github: {
		name: "GitHub",
		primaryColour: "gray",
		secondaryColour: "gray",
		icon: <i className="devicon-github-original"></i>,
	},
	gitlab: {
		name: "GitLab",
		primaryColour: "orange",
		secondaryColour: "red",
		icon: <i className="devicon-gitlab-plain"></i>,
	},
	sql: {
		name: "SQL",
		primaryColour: "gray",
		secondaryColour: "blue",
		icon: <i className="devicon-mysql-plain"></i>,
	},
	redis: {
		name: "Redis",
		primaryColour: "red",
		secondaryColour: "orange",
		icon: <i className="devicon-redis-plain"></i>,
	},
};

export const TECH_STACK_LANGUAGES_LIST: Technology[] = Object.entries(
	TECH_STACK_LANGUAGES
).map(([key, value]) => ({
	key,
	...value,
}));

export const TECH_STACK_LIBRARIES_LIST: Technology[] = Object.entries(
	TECH_STACK_LIBRARIES
).map(([key, value]) => ({
	key,
	...value,
}));

export const TECH_STACK_DEV_TOOLS_LIST: Technology[] = Object.entries(
	TECH_STACK_DEV_TOOLS
).map(([key, value]) => ({
	key,
	...value,
}));
