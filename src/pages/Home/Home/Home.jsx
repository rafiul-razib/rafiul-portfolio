import AboutMe from "../../../components/AboutMe/AboutMe";
import Banner from "../../../components/Banner/Banner";
import Navbar from "../../../components/Navbar/Navbar";
import Skills from "../../../components/Skills/Skills";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <Banner />
      <AboutMe />
      <Skills />
    </div>
  );
};

export default Home;
