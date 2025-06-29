"use client";

import type { Project } from "@/types/project.type";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  X,
} from "lucide-react";
import Image from "next/image";
import { type FC, Fragment, useState } from "react";
import Badge from "../badge";
import BulletPointCard from "../bullet-point-card";
import { Button } from "../button";

interface ProjectDialogProps {
  project: Project;
  isDialogOpen: boolean;
  closeDialog: () => void;
}

const ProjectDialog: FC<ProjectDialogProps> = ({
  project,
  isDialogOpen,
  closeDialog,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.imageUrls.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + project.imageUrls.length) % project.imageUrls.length,
    );
  };

  const bulletPointSections = [
    project.key_features?.length && {
      title: "Key Features",
      items: project.key_features,
    },
    project.challenges?.length && {
      title: "Challenges",
      items: project.challenges,
    },
  ].filter((section): section is { title: string; items: string[] } =>
    Boolean(section),
  );

  return (
    <Transition appear show={isDialogOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeDialog}>
        {/* Background Overlay */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        </TransitionChild>

        {/* Dialog Container */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="max-h-[95vh] w-full max-w-5xl transform overflow-hidden rounded-2xl border border-neutral-800/50 bg-neutral-900 shadow-2xl transition-all">
                {/* Header */}
                <div className="top-0 z-10 flex items-center justify-between border-b border-neutral-800/50 bg-neutral-900/95 px-6 py-4 backdrop-blur-sm">
                  <div className="flex-1">
                    <DialogTitle as="div" className="mb-1 gap-4">
                      <h2 className="text-2xl font-bold text-white">
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" />
                          <span>University Project</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>2024</span>
                        </div>
                      </div>
                    </DialogTitle>
                  </div>

                  {/* Close Button */}
                  <Button
                    variant="outline"
                    size="small"
                    onClick={closeDialog}
                    className="ml-4 bg-transparent hover:bg-neutral-800"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Content */}
                <div className="max-h-[calc(95vh-120px)] overflow-y-auto">
                  <div className="space-y-8 p-6">
                    {/* Image Carousel */}
                    {project.imageUrls.length > 0 && (
                      <div className="mx-auto flex max-w-3xl flex-col items-center">
                        <div className="group relative aspect-[16/10] overflow-hidden rounded-xl w-full">
                          <Image
                            src={project.imageUrls[currentImageIndex]}
                            alt={`${project.title} - Image ${
                              currentImageIndex + 1
                            }`}
                            className="object-contain object-center p-4 w-full h-full"
                            fill
                          />

                          {/* Navigation Arrows */}
                          {project.imageUrls.length > 1 && (
                            <>
                              <Button
                                size="icon"
                                variant="outline"
                                className="absolute top-1/2 left-4 -translate-y-1/2 transform border-neutral-600 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/80"
                                onClick={prevImage}
                              >
                                <ChevronLeft className="h-5 w-5" />
                              </Button>
                              <Button
                                size="icon"
                                variant="outline"
                                className="absolute top-1/2 right-4 -translate-y-1/2 transform border-neutral-600 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/80"
                                onClick={nextImage}
                              >
                                <ChevronRight className="h-5 w-5" />
                              </Button>
                            </>
                          )}
                        </div>

                        {/* Image Indicators */}
                        {project.imageUrls.length > 1 && (
                          <div className="mx-auto flex space-x-2">
                            {project.imageUrls.map((_, index) => (
                              <button
                                key={index}
                                className={`h-2 w-2 rounded-full transition-all ${
                                  index === currentImageIndex
                                    ? "scale-125 bg-white"
                                    : "bg-white/50 hover:bg-white/75"
                                }`}
                                onClick={() => setCurrentImageIndex(index)}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Project Details */}
                    <div className="space-y-8">
                      {/* Description */}
                      <div className="space-y-4 rounded-xl border border-neutral-700/50 bg-neutral-800/30 p-6">
                        <h3 className="text-xl font-semibold text-white">
                          Description
                        </h3>
                        <div className="space-y-2">
                          {project.description.map((description, idx) => (
                            <p
                              key={idx}
                              className="leading-relaxed text-gray-300"
                            >
                              {description}
                            </p>
                          ))}
                        </div>

                        {/* Technology Badges */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} text={tech.name} />
                          ))}
                        </div>
                      </div>

                      {/* Features and Challenges */}
                      {bulletPointSections.length > 0 && (
                        <div
                          className={`grid gap-6 ${
                            bulletPointSections.length === 2
                              ? "grid-cols-1 lg:grid-cols-2"
                              : "grid-cols-1"
                          }`}
                        >
                          {bulletPointSections.map((section, idx) => (
                            <BulletPointCard
                              key={idx}
                              title={section.title}
                              items={section.items}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectDialog;
