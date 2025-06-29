"use client";

import { PROJECTS, PROJECTS_LIST } from "@/config/project";
import type { Project } from "@/types/project.type";
import { useState } from "react";
import { ProjectCard } from "../projects/project-card";
import { ProjectTabs } from "../projects/project-tabs";
import Section from "../section/section";
import SectionContent from "../section/section-content";
import SectionTitle from "../section/section-title";

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

  const handleTabChange = (newTab: string) => {
    if (newTab !== activeTab) {
      setActiveTab(newTab);
    }
  };

  return (
    <>
      <ProjectTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      <div className="relative min-h-[400px]">
        <div key={activeTab}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
