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

  // console.log(projects);
  return (
    <div className="mt-28" name="projects">
      <h1 className="text-2xl lg:text-4xl text-white mt-20 text-center">
        My Key Projects
      </h1>

      <div className="divider"></div>

      <div>
        {projects.map((project) => (
          <>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-12 lg:h-[600px]">
              <div className="w-full lg:w-1/3 h-[250px] lg:h-[auto] overflow-hidden relative">
                <img
                  className="object-top object-cover"
                  src={project.image}
                  alt="Movie"
                />
              </div>
              <div className="card-body w-full lg:w-2/3">
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
                <div className="card-actions flex justify-center lg:justify-end">
                  <a href={project.liveSiteLink} target="blank">
                    <button className="btn btn-outline btn-sm lg:btn-md">
                      <FaArrowUpRightDots className="text-2xl" />
                      Visit Site
                    </button>
                  </a>
                  <a href={project.githubClientLink} target="blank">
                    <button className="btn btn-outline btn-sm lg:btn-md">
                      <FaGithub className="text-2xl" /> Front-End Code
                    </button>
                  </a>
                  <a href={project.githubServerLink} target="blank">
                    <button className="btn btn-outline btn-sm lg:btn-md">
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
