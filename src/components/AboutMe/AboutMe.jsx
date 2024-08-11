import rzb3 from "../../assets/images/rzb3.png";
import { Typewriter } from "react-simple-typewriter";

const AboutMe = () => {
  return (
    <div>
      <div
        className="flex flex-col-reverse lg:flex-row items-center justify-center max-w-6xl mx-auto pt-12"
        name="resume"
      >
        <div className="w-full lg:w-1/2 text-center px-2">
          <h1 className="font-semibold lg:font-bold text-2xl lg:text-3xl ">
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
          <p className="text-gray-400 pt-4 lg:pt-6">
            My name is Rafiul Razib and I'm from Bangladesh. I am a Passionate
            MERN-focused front-end web developer with expertise in building
            responsive web applications. I am enthusiastic about learning new
            technologies, generating innovative ideas, and working with
            dedicated teams.
          </p>
          <div className="my-6 lg:my-12">
            <a
              href="https://drive.google.com/file/d/16FHcRZ2prRy9vzP0iOqjE2aTkKZi9Ir1/view?usp=sharing"
              target="blank"
            >
              <button className="btn btn-accent btn-sm lg:btn-md">
                Download Résumé
              </button>
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <img className="w-full" src={rzb3} alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
