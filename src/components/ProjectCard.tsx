// src/components/ProjectCard.tsx
import React from "react";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-3">{project.description}</p>
      <Link href={project.link} target="_blank" className="text-blue-500 hover:underline">
        View Project
      </Link>
    </div>
  );
};

export default ProjectCard;