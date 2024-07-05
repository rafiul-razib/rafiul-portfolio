const Education = () => {
  return (
    <div className="mt-28">
      <h1 className="text-4xl text-white mt-20 text-center">
        My Education and Trainings
      </h1>

      <div className="divider mb-12"></div>

      <div className="card lg:card-side bg-base-100 shadow-2xl">
        {/* <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure> */}
        <div className="card-body">
          <h2 className="card-title">Full Stack Web Development</h2>
          <p>
            I completed a 6 months long course on Full-Stack Web Development
            from{" "}
            <a
              className="font-bold text-purple-700"
              href="https://www.programming-hero.com/"
            >
              Programming Hero
            </a>{" "}
            and completed the course with excellence. Throughout my career, I
            have honed a strong sense of professionalism. I am now aspiring to
            build a successful career in Web and Mobile Application Development,
            with a deep interest in Software Engineering, particularly in these
            areas.
          </p>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-2xl my-12">
        {/* <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure> */}
        <div className="card-body">
          <h2 className="card-title">B.Sc in Leather Engineering</h2>
          <p>
            I graduated with a degree in Leather and Footwear Engineering from{" "}
            <a className="font-bold text-blue-700" href="https://www.du.ac.bd/">
              University of Dhaka
            </a>
            , Bangladesh. Following my graduation, I began my career at a
            prominent footwear manufacturing company in Bangladesh, where I
            currently hold the position of Deputy Manager in Production. My
            passion for coding has led me to develop several web applications
            that enhance our manufacturing processes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
