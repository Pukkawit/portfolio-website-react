import React from 'react';
import './contact.scss';
import SectionDivider from '../../section_divider/SectionDivider';

const Contact = () => {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <p style={{ textAlign: 'center', margin: '0' }}>
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
        finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
        viverra facilisis ut ac est.
      </p>
      <SectionDivider />
      <form>
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your email" />
        <input type="text" placeholder="Phone Number" />
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter your message here..."
        ></textarea>
        <button className="contact-submit-btn">Sumit</button>
      </form>
    </div>
  );
};

export default Contact;
