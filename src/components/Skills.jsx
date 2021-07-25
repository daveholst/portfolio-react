import React from 'react';
// import '../styles/about.css';

function Skills() {
  return (
    <section id="skills-section">
      <span className="nav-padder" id="skills" />
      <h2>skills.</h2>
      <p>
        Over my years of working with computers, I have picked up a range of
        skills that are either self-taught, or learnt in a formal institution.
      </p>
      <h3>languages.</h3>
      <p className="no-top-p">
        JavaScript, node.js, CSS 3, HTML 5, SQL, Arduino C++, Basic Python, YAML
      </p>
      <h3>frameworks & libraries.</h3>
      <p className="no-top-p">
        Express, handlebars, Bulma, bootstrap, charts.js
      </p>
      <h3>databases.</h3>
      <p className="no-top-p">mySQL, mongoDB, SQLite, Sequelize, mongoose,</p>
      <h3>paradigms.</h3>
      <p className="no-top-p">
        TDD with Jest, REST API's, MVC, Agile Development, Working Backwards
      </p>
      <h3>devOps.</h3>
      <p className="no-top-p">
        Git, GitHub actions, GitHub Runners, Docker, Linux admin, cloud
        computing, Digital Ocean, Netlify, Heroku
      </p>
      <h3>iot.</h3>
      <p className="no-top-p">
        Arduino C++, esp micro-controllers, mqtt, websockets, electronics
      </p>
      <h3>other.</h3>
      <p className="no-top-p">
        Solidworks, Fusion 360, Inventor, AutoCAD, Adobe Photoshop, Adobe
        InDesign, Adobe Illustrator
      </p>
    </section>
  );
}

export default Skills;
