import AboutMe from "../../../components/AboutMe/AboutMe";
import Banner from "../../../components/Banner/Banner";
import Contact from "../../../components/Contact/Contact";
import Education from "../../../components/Education/Education";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import Projects from "../../../components/Projects/Projects";
import Skills from "../../../components/Skills/Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
