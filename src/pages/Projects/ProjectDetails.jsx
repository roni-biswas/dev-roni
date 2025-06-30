import React, { useState } from "react";
import { useParams, Link } from "react-router";
import { projectData } from "../../data/projectData";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
} from "react-icons/fa";
import ImageWithLoader from "../../components/ImageWithLoader";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!project) return <p className="text-center py-20">Project not found</p>;

  return (
    <section className="bg-base-300 min-h-screen py-16 pt-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <FaArrowLeft /> Back to Home
        </Link>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-base-100">
          {project.name}
        </h1>

        {/* Image with click to zoom */}
        <div onClick={() => setIsModalOpen(true)} className="cursor-zoom-in">
          <ImageWithLoader
            src={project.image}
            alt={project.name}
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 h-screen bg-black/80 z-50 flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative max-w-4xl w-full px-4">
              <button
                className="absolute top-2 right-2 text-primary text-2xl z-10"
                onClick={() => setIsModalOpen(false)}
              >
                <FaTimes />
              </button>
              <img
                src={project.image}
                alt={project.name}
                className="w-full max-h-[90vh] object-contain rounded-lg border-2 border-white"
              />
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-2">
            Tech Stack
          </h3>
          <ul className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="badge badge-outline border-primary text-primary"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-2">Overview</h3>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </div>

        {/* Challenges */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-2">
            Challenges Faced
          </h3>
          <p className="text-gray-300">{project.challenges}</p>
        </div>

        {/* Improvements */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-2">
            Potential Improvements
          </h3>
          <p className="text-gray-300">{project.improvements}</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hover:btn-secondary hover:text-primary btn-sm inline-flex items-center gap-2"
          >
            Live Site <FaExternalLinkAlt />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-base-200 hover:btn-primary btn-sm inline-flex items-center gap-2"
          >
            GitHub <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
