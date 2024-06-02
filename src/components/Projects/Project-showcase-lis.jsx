import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import {  } from "@/utility/";

// Static data
const projectsData = [
  {
    index: 0,
    title: "Project One",
    href: "/project-one",
    tags: ["React", "Next.js", "TailwindCSS"],
    image: {
      LIGHT: "/images/project-one-light.png",
      DARK: "/images/project-one-dark.png",
    },
  },
  {
    index: 1,
    title: "Project Two",
    href: "/project-two",
    tags: ["JavaScript", "TypeScript"],
    image: {
      LIGHT: "/images/project-two-light.png",
      DARK: "/images/project-two-dark.png",
    },
  },
  // Add more projects as needed
];

// ProjectShowcaseListItem Component
function ProjectShowcaseListItem({ project, activeProject, toggleList }) {
  return (
    <motion.div
      className={("group flex gap-4")}
      onHoverStart={() => toggleList(project.index)}
      onFocus={() => toggleList(project.index)}
    >
      <span
        className={(
          "hidden text-6xl font-semibold transition-colors duration-300 lg:block",
          activeProject === project.index ? "text-accent" : "text-accent/70"
        )}
      >
        {project.index + 1}.
      </span>
      <span className="text-3xl font-semibold text-accent transition-colors duration-300 sm:text-4xl md:text-5xl lg:hidden">
        {project.index + 1}.
      </span>
      <div className="flex flex-col gap-2">
        <Link href={project.href} className="relative max-w-max">
          <span
            className={(
              "hidden text-6xl font-semibold transition-colors duration-300 lg:block",
              activeProject === project.index ? "text-accent" : "text-accent/70"
            )}
          >
            {project.title}
          </span>
          <span className="hover:-underline-offset-1 text-3xl font-semibold text-accent transition-colors duration-300 hover:underline sm:text-4xl md:text-5xl lg:hidden">
            {project.title}
          </span>
          <span
            className={(
              "absolute -bottom-1 left-0 hidden h-1 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full lg:block",
              activeProject === project.index ? "w-full" : "w-0"
            )}
          ></span>
        </Link>
        <p className="max-w-xl text-base font-semibold text-muted-foreground sm:text-lg">
          {project.tags.map((tag) => `#${tag} `)}
        </p>
      </div>
    </motion.div>
  );
}

// ProjectShowcaseList Component
export default function ProjectShowcaseList() {
  const [activeProject, setActiveProject] = useState(null);

  const toggleList = (index) => {
    setActiveProject(index);
  };

  return (
    <div>
      {projectsData.map((project) => (
        <ProjectShowcaseListItem
          key={project.index}
          project={project}
          activeProject={activeProject}
          toggleList={toggleList}
        />
      ))}
    </div>
  );
}
