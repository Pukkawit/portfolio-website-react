import React from 'react';
import './skills.scss';
const Skills = () => {
  return (
    <div id="skills" className="gray-bg">
      <h2 id="skills">Skills</h2>
      <h3>Using Now</h3>
      <div className="using-now">
        <div className="skill">
          <img src="../src/assets/icons/html-logo.svg" alt="" />
          <h5>html5</h5>
        </div>
        <div className="skill">
          <img src="../src/assets/icons/css-icon16.svg" alt="" />
          <h5>CSS3</h5>
        </div>
        <div className="skill">
          <img src="../src/assets/icons/sass-icon.svg" alt="" />
          <h5>SASS</h5>
        </div>
        <div className="skill">
          <img src="../src/assets/icons/javascript-icon.svg" alt="" />
          <h5>JavaScript</h5>
        </div>
        <div className="skill">
          <img src="../src/assets/icons/react-logo.svg" alt="" />
          <h5>React</h5>
        </div>
        <div className="skill">
          <img src="../src/assets/icons/bootstrap.svg " alt="" />
          <h5>Bootstrap</h5>
        </div>
        <div className="skill">
          <img src="../src/assets/icons/github-02.svg " alt="" />
          <h5>GIT</h5>
        </div>
        <div className="skill">
          <img src="../src/assets/icons/figma-1 1.svg " alt="" />
          <h5>Figma</h5>
        </div>
      </div>
      <h3>Learning</h3>
      <div className="using-now">
        <div className="skill">
          <img src="../src/assets/icons/nodeJS.svg" alt="" />
          <h5>Node Js</h5>
        </div>
        <div className="skill">
          <img src="./imgs/../src/assets/icons/mySQL.svg" alt="" />
          <h5>mySQL</h5>
        </div>
        <div className="skill">
          <img src="../src/assets/icons/mongoDB.svg" alt="" />
          <h5>MongoDB</h5>
        </div>
        <div className="skill">
          <img src="../src/assets/icons/typescript.svg" alt="" />
          <h5>Typescript</h5>
        </div>
      </div>
      <h3>Other Skills</h3>
      <div className="using-now">
        <div className="skill">
          <img src="../src/assets/icons/ANGIELSKI C1C2.png" alt="" />
          <h5>ANGIELSKI C1/C2</h5>
        </div>
        <div className="skill">
          <img src="../src/assets/icons/HIS.png" alt="" />
          <h5>HISZPAŃSKI B1/B2</h5>
        </div>
        <div className="skill">
          <img src="../src/assets/icons/c++.png" alt="" />
          <h5>C++</h5>
        </div>
        <div className="skill">
          <img src="../src/assets/icons/C-logo.png" alt="" />
          <h5>C</h5>
        </div>
      </div>
    </div>
  );
};

export default Skills;
