// src/app/projects/page.tsx
import Head from "next/head";

import ProjectCard from "../../components/ProjectCard";
import Header from "@/components/Header";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A cool project",
    link: "https://github.com",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Another cool project",
    link: "https://github.com",
  },
];

export default function Projects() {
  return (
    <div>
      <Header />
      <Head>
        <title>My Projects</title>
        <meta name="description" content="A showcase of my projects" />
      </Head>
      <section className="py-8">
        <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
