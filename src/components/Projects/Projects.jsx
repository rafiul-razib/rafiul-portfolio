import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  console.log(projects);
  return (
    <div className="mt-28" name="projects">
      <h1 className="text-4xl text-white mt-20 text-center">My Key Projects</h1>

      <div className="divider"></div>

      <div>
        {projects.map((project) => (
          <>
            <div className="card card-side bg-base-100 shadow-xl mt-12">
              <figure className="w-1/3">
                <img src={project.image} alt="Movie" />
              </figure>
              <div className="card-body w-2/3">
                <h2 className="card-title text-4xl">{project.title}</h2>
                <p>{project.description}</p>
                <div className="divider"></div>
                <div className="flex gap-10">
                  <div>
                    <h3>Core Features :</h3>
                    {project.coreFeatures.map((feature) => (
                      <li>{feature}</li>
                    ))}
                  </div>
                  <div>
                    <h3>Used Technologies:</h3>
                    {project.technologies.map((tech) => (
                      <li>{tech}</li>
                    ))}
                  </div>
                </div>
                <div className="divider"></div>
                <div className="card-actions justify-end">
                  <a href={project.liveSiteLink} target="blank">
                    <button className="btn btn-outline">
                      <FaArrowUpRightDots className="text-2xl" />
                      Visit Site
                    </button>
                  </a>
                  <a href={project.githubClientLink} target="blank">
                    <button className="btn btn-outline">
                      <FaGithub className="text-2xl" /> Front-End Code
                    </button>
                  </a>
                  <a href={project.githubServerLink} target="blank">
                    <button className="btn btn-outline">
                      <FaGithub className="text-2xl" /> Back-End Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
