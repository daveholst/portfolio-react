import React from 'react';
import PropTypes from 'prop-types';

// import '../styles/about.css';

function About({ navIsSticky }) {
  return (
    <section id="about-section">
      {/* <a className="anchor" id="about"> */}
      <h2
        id="about"
        style={{
          marginTop: navIsSticky ? '7vh' : '2vh',
        }}
      >
        about.
      </h2>
      {/* </a> */}
      <p>
        I'm a 32 years old country kid with a passion for technology and the
        outdoors. I like to spend my time camping, hiking, kite-surfing,
        fishing, diving and doing multi-day motorbike expeditions out in the
        desert. I've always been a tinkerer, pulling things apart to see how
        they work and if they will go back together again.
      </p>
      <p>
        My personal technology interests include making, programming,
        electronics, home-automation and home-labbing. I'm always on the quest
        to see what I can create to make life easier, this has lead me to
        automate my entire house using a mix of open-source, self designed and
        commercial products. All these devices become compatible with each other
        through back-end systems running on a server in my shed. I hit the
        limits of what I could do with my lacking programming knowledge. As a
        result, through my studies at UWA and self-learning, I am happy to now
        call myself a Full Stack Developer.
      </p>
      <p>
        I have previously worked as a Design & Technology teacher and have a
        Diploma in Mechanical Engineering. I am well versed at creating and
        making and now have the skills to apply my problem solving abilities to
        a new context.
      </p>
      <p />
    </section>
  );
}

// add proptype to stop linter from yelling!
About.propTypes = {
  navIsSticky: PropTypes.bool,
};

export default About;
