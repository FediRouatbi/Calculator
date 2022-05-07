import { FaGithub, FaFacebook } from "react-icons/fa";

import "./about.css";
const About = () => {
  return (
    <div className="about">
      <p>
        This is a Calculator Application built with React for the purpose of
        displaying my front end knowledge
      </p>
      <div className="links">
        <a
          className="links_icon"
          target="_blank"
          href="https://github.com/FediRouatbi"
        >
          <FaGithub className="icon" size={40} />
        </a>
        <a
          className="links_icon"
          target="_blank"
          href="https://www.facebook.com/xCHIVASx/"
        >
          <FaFacebook className="icon" size={40} />
        </a>
      </div>
    </div>
  );
};

export default About;
