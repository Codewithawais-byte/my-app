"use client";

import Head from "next/head";
import { useState } from "react";
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
  {
    id: 3,
    title: "Project 3",
    description: "Yet another amazing project",
    link: "https://github.com",
  },
  {
    id: 4,
    title: "Project 4",
    description: "One more incredible project",
    link: "https://github.com",
  },
  // Additional projects for the modal
  {
    id: 5,
    title: "Project 5",
    description: "Advanced web application",
    link: "https://github.com",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Mobile app development",
    link: "https://github.com",
  },
  {
    id: 7,
    title: "Project 7",
    description: "AI-powered solution",
    link: "https://github.com",
  },
  {
    id: 8,
    title: "Project 8",
    description: "E-commerce platform",
    link: "https://github.com",
  },
];

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scroll
    document.body.style.overflow = "unset";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Header /> */}
      <Head>
        <title>My Projects</title>
        <meta name="description" content="A showcase of my projects" />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 mt-32">
          <div className="inline-block border-4 border-black px-8 py-3 mb-8">
            <h1 className="text-lg font-light mb-0 tracking-[0.3em] uppercase">
              MY PROJECTS
            </h1>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Here's a collection of my work showcasing various skills and
            technologies. Each project represents a unique challenge and
            solution, built with passion and attention to detail.
          </p>

          <div
            onClick={openModal}
            className="inline-block border border-black px-6 py-2 text-xs tracking-wider uppercase cursor-pointer hover:bg-black hover:text-white transition-colors"
          >
            VIEW ALL
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="w-12 h-px bg-black"></div>
          <div className="mx-4">
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              className="fill-black"
            >
              <path d="M2 6l6-4v3h4V2l6 4-6 4V7H8v3L2 6z" />
            </svg>
          </div>
          <div className="w-12 h-px bg-black"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 mb-16">
          {projects.slice(0, 4).map((project, index) => (
            <div key={project.id} className="text-center">
              <h3 className="text-lg font-light tracking-[0.2em] uppercase mb-4">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-xs mx-auto">
                {project.description}. I can design the site based on your needs
                and suggestions. I can also design the site from scratch and
                consult you during the job.
              </p>
              {/* <ProjectCard project={project} /> */}
            </div>
          ))}
        </div>

        {/* Bottom Decorative Divider */}
        <div className="flex items-center justify-center mt-12">
          <div className="w-12 h-px bg-black"></div>
          <div className="mx-4">
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              className="fill-black"
            >
              <path d="M2 6l6-4v3h4V2l6 4-6 4V7H8v3L2 6z" />
            </svg>
          </div>
          <div className="w-12 h-px bg-black"></div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end">
          {/* Dark background overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-60 transition-opacity"
            onClick={closeModal}
          ></div>

          {/* Modal content - slides up from bottom */}
          <div
            className={`relative w-full bg-white rounded-t-2xl transform transition-transform duration-300 ease-out max-h-[85vh] overflow-hidden ${
              isModalOpen ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-light tracking-[0.2em] uppercase">
                ALL PROJECTS
              </h2>
              <button
                onClick={closeModal}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="overflow-y-auto px-6 py-6">
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <div key={project.id} className="text-center group">
                    {/* Project placeholder image */}
                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                      <svg
                        className="w-12 h-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>

                    <h3 className="text-base font-light tracking-[0.15em] uppercase mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Project link button */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-black px-4 py-1 text-xs tracking-wider uppercase hover:bg-black hover:text-white transition-colors"
                    >
                      VIEW PROJECT
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
