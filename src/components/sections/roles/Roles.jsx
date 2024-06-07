import React from 'react';
import './roles.scss';
import SectionDivider from '../../section_divider/SectionDivider';

const Roles = () => {
  return (
    <>
      <div id="roles">
        <div className="service-1">
          <div className="service-icon">
            <img src="../src/assets/icons/design.png" alt="" />
            <h3>DESIGN</h3>
          </div>
          <p>
            I specialize in crafting websites tailored to your specific needs
            and preferences. Whether you have clear ideas in mind or need
            guidance from start to finish, I offer comprehensive design
            services. From conceptualization to implementation, I'm here to
            ensure your vision comes to life seamlessly.
          </p>
        </div>
        <div className="service-2">
          <div className="service-icon">
            <img src="../src/assets/icons/development--v3 1.png" alt="" />
            <h3>DEVELOPMENT</h3>
          </div>
          <p>
            I excel in crafting websites that align perfectly with your
            requirements and preferences. Whether you prefer a collaborative
            approach or need a site built from the ground up, I offer
            comprehensive development services. From inception to completion, I
            provide expert consultation to ensure your project exceeds
            expectations.
          </p>
        </div>
        <div className="service-3">
          <div className="service-icon ">
            <img
              src="../src/assets/icons/maintenance.png"
              alt=""
              className="maintenance"
            />
            <h3>MAINTENANCE</h3>
          </div>
          <p>
            I commit to providing ongoing maintenance services to ensure your
            website remains optimized and up-to-date. From routine updates to
            troubleshooting issues, I offer reliable support channeled towards
            your specific needs. Whether you need assistance with an existing
            site or ongoing maintenance for a new project, I'm here to provide
            expert guidance every step of the way.
          </p>
        </div>
      </div>
      <SectionDivider />
    </>
  );
};

export default Roles;
