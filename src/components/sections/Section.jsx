import React from 'react';
import Itberries from './itBerries/Itberries';
import About from './about me/About';

import Roles from './roles/Roles';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import Portfolio from './portfolio/Portfolio';

const Section = () => {
  return (
    <div>
      <Itberries />
      <About />
      <Roles />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Section;
