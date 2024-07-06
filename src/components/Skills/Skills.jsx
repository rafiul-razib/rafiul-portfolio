import iconHtml from "../../assets/images/icons/HTML.png";
import iconCss from "../../assets/images/icons/css.png";
import iconJS from "../../assets/images/icons/JavaScript.png";
import iconReact from "../../assets/images/icons/react.png";
import iconTailwind from "../../assets/images/icons/tailwind.png";
import iconBootStrap from "../../assets/images/icons/Bootsrap.png";
import iconFireBase from "../../assets/images/icons/firebase.png";
import iconNode from "../../assets/images/icons/node.png";
import iconExpress from "../../assets/images/icons/express.png";
import iconMongo from "../../assets/images/icons/mongo.png";
const Skills = () => {
  return (
    <div className="text-center mt-16" name="skills">
      <h1 className="text-2xl lg:text-4xl  my-4">
        Technologies I can work with
      </h1>
      <div className="divider"></div>
      <br />
      <div className="flex items-center justify-center gap-6 px-4">
        <div className="flex flex-col justify-center items-center">
          <img className="w-[4em]" src={iconHtml} />
          <h1 className="text-center">HTML</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-[4em]" src={iconCss} />
          <h1 className="text-center">CSS</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-[4em]" src={iconJS} />
          <h1 className="text-center">JavaScript</h1>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 px-4">
        <div className="flex flex-col justify-center items-center">
          <img className="w-[4em]" src={iconReact} />
          <h1 className="text-center">React Js</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-[4em]" src={iconTailwind} />
          <h1 className="text-center">Tailwind CSS</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-[4em]" src={iconBootStrap} />
          <h1 className="text-center">BootStrap</h1>
        </div>
        <dir className="flex flex-col justify-center items-center">
          <img className="w-[4em]" src={iconFireBase} />
          <h1 className="text-center">Firebase</h1>
        </dir>
      </div>
      <div className="flex  items-center justify-center gap-6 px-4">
        <div className="flex flex-col justify-center items-center">
          <img className="w-[4em]" src={iconNode} />
          <h1 className="text-center">Node Js</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-[4em]" src={iconExpress} />
          <h1 className="text-center">Express Js</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-[4em]" src={iconMongo} />
          <h1 className="text-center">MongoDb</h1>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Skills;
