import rzb3 from "../../assets/images/rzb3.png";
import { Typewriter } from "react-simple-typewriter";

const AboutMe = () => {
  return (
    <div>
      <div className="flex items-center justify-center max-w-6xl mx-auto pt-12">
        <div className="w-1/2 text-center">
          <h1 className="font-bold text-3xl text-white">
            I am{" "}
            <span>
              <Typewriter
                words={[
                  "Rafiul Razib",
                  "a Web Designer",
                  "a Front-End Web Developer",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-gray-400 pt-6">
            My name is Rafiul Razib and I'm from Bangladesh. I am a Passionate
            MERN-focused front-end web developer with expertise in building
            responsive web applications. I am enthusiastic about learning new
            technologies, generating innovative ideas, and working with
            dedicated teams.
          </p>
          <div className="my-12">
            <a href="/src/assets/WD RAFIUL HABIB.pdf" download>
              <button className="btn btn-accent">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <img className="w-full" src={rzb3} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
