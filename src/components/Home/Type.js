import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer.","5 ⭐ on  CodeChef","Expert on CodeForces","SDE Intern at @hashedbit Innovation"," Web Development Internship  at @OctaNet Services Pvt Ltd"," I Build AI Related Project like AI Interview Mocker APP And AI Form Builder", " Frontend Developer.","an upcomming..........."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,

        // loop:true,
        typeSpeed:100,
        // deleteSpeed:10,
        delaySpeed:2000,
      }}
    />
  );
}

export default Type;
