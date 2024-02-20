import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          In my journey as a developer, I have successfully created two
          impressive projects that showcase my skills in HTML, CSS, JavaScript,
          React, Redux, and Tailwind CSS. These projects demonstrate my
          proficiency in web development and the ability to work with modern
          technologies and frameworks.
        </p>
        <br />
        <p className="text-xl">
          I have a good command over my technical skills such as HTML, CSS,
          JavaScript, and frameworks like React or Angular. I emphasize on my
          problem-solving skills and ability to tackle challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
