"use client";

import { useState } from "react";
import Section from "../section/section";
import SectionTitle from "../section/section-title";
import { ProjectTabs } from "../projects/project-tabs";
import { ProjectCard } from "../projects/project-card";
import SectionContent from "../section/section-content";
import { PROJECTS_LIST, PROJECTS } from "@/config/project";
import { Project } from "@/types/project.type";

export const ProjectsSection = () => {
	return (
		<Section id="projects">
			<SectionTitle
				title="Featured Projects"
				badge="Portfolio"
				description="Dive into some of my recent projects and discover the tools and techniques I used to build them."
			/>

			<SectionContent>
				<ProjectsList />
			</SectionContent>
		</Section>
	);
};

const ProjectsList = () => {
	const [activeTab, setActiveTab] = useState<string>("All");
	const tabs = ["All", "Personal", "University"];

	let projects: Project[] = [];
	if (activeTab === "All") {
		projects = PROJECTS_LIST;
	} else if (activeTab === "Personal") {
		projects = PROJECTS.personal;
	} else if (activeTab === "University") {
		projects = PROJECTS.university;
	}

	return (
		<>
			<ProjectTabs
				tabs={tabs}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</>
	);
};
