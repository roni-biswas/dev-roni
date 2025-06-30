import React from "react";
import { Link } from "react-router";
import { projectData } from "../../data/projectData.js";
import ImageWithLoader from "../../components/ImageWithLoader.jsx";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-base-300 via-[#141414] to-base-300 py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            data-aos="fade-up"
          >
            My&nbsp;Recent&nbsp;Works
          </h2>
          <p
            className="text-base md:text-lg text-gray-300 leading-relaxed tracking-wide"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </header>

        {/* Card Grid */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {projectData.map((p) => (
            <div
              key={p.id}
              data-aos="zoom-in-up"
              className="card bg-base-100/10 backdrop-blur-md shadow-md
                         border border-base-200 hover:shadow-xl hover:-translate-y-1
                         transition duration-300"
            >
              <figure className="h-84 overflow-hidden">
                <ImageWithLoader
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
                {/* <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                /> */}
              </figure>

              <div className="card-body">
                <h3 className="card-title text-base-100">{p.name}</h3>
                <p className="text-gray-400 line-clamp-3">
                  {p.description.length > 70
                    ? `${p.description.slice(0, 70)}...`
                    : p.description}
                </p>

                <div className="card-actions mt-4">
                  <Link
                    to={`/projects/${p.id}`}
                    className="btn btn-sm btn-primary w-full"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
