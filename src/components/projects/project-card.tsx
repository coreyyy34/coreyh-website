"use client";
import type { Project } from "@/types/project.type";
import { Code2 } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { type FC, useState } from "react";
import { Button } from "../button";
import ProjectDialog from "./project-card-dialog";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleViewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="cursor-pointer rounded-md border-neutral-800/50 bg-neutral-900 flex flex-col h-full"
        onClick={handleCardClick}
      >
        <div className="relative flex aspect-[3/2] w-full items-center justify-center overflow-hidden rounded-t-md bg-neutral-800">
          {project.coverImageUrl ? (
            <Image
              src={project.coverImageUrl || "/img/placeholder.png"}
              alt={project.title || "Project image"}
              className="object-contain object-center p-4"
              fill
            />
          ) : (
            <div>
              <Code2 size={32} />
            </div>
          )}
        </div>

        <div className="border-b border-zinc-800/50 px-6 py-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-gray-400">{project.type}</p>
        </div>

        {/* Content - growing */}
        <div className="flex-grow px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">
              {getProjectLabel(project)}
            </span>
          </div>
          <p className="text-gray-300">{project.overview}</p>
        </div>

        {/* Buttons - fixed at bottom */}
        <div className="px-6 pb-4">
          <div
            className={`flex ${project.sourceCode ? "justify-between" : "justify-end"}`}
          >
            {project.sourceCode && (
              <Button
                variant="outline"
                target="_blank"
                href={project.sourceCode}
                onClick={handleGithubClick}
              >
                <i className="devicon-github-original mr-2"></i> Github
              </Button>
            )}
            <Button onClick={handleViewClick}>View</Button>
          </div>
        </div>
      </div>

      <ProjectDialog
        project={project}
        isDialogOpen={isDialogOpen}
        closeDialog={closeDialog}
      />
    </>
  );
};

const getProjectLabel = (project: Project): string => {
  if (project.category === "personal") {
    return "Personal Project";
  } else if (project.category === "university") {
    let label = "University Project";

    if (project.universityProjectType) {
      const capitalized =
        project.universityProjectType.charAt(0).toUpperCase() +
        project.universityProjectType.slice(1);
      label += ` (${capitalized})`;
    }

    return label;
  }

  return "Project";
};
