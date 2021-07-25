import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/projectCard.css';

function ProjectCard(props) {
  const { cardInfo } = props;
  const { index, title, liveUrl, githubUrl, description, tech, thumbnail } =
    cardInfo;

  const thumbnailStyle = {
    gridColumn: '1/2',
    gridRow: `${index}/${index + 1}`,
    backgroundImage: `url("${thumbnail}")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'space',
    backgroundSize: '100%',
  };

  let [thumbnailHovered, setThumbnailHovered] = useState(false);
  // const infoStyle = {
  //   gridColumn: '2/4',
  //   gridRow: `${index}/${index + 1}`,
  // };

  function thumbnailHoveredToggle() {
    thumbnailHovered = thumbnailHovered
      ? setThumbnailHovered(false)
      : setThumbnailHovered(true);
  }

  return (
    <div className="project-container">
      <div
        className="project-thumbnail"
        style={thumbnailStyle}
        onMouseEnter={thumbnailHoveredToggle}
        onMouseLeave={thumbnailHoveredToggle}
      >
        <div
          style={{ opacity: thumbnailHovered ? 1 : 0 }}
          className="project-link-buttons"
        >
          <a href="https://coachroach.me/">
            <button type="button">Live Site</button>
          </a>
          <a href="https://github.com/busy-boys/coach-roach">
            <button type="button">GitHub Repo</button>
          </a>
        </div>
      </div>

      <div className="project-info">
        <h4>
          <a href="https://coachroach.me">{title}</a>
        </h4>
        <p>
          A malleable record keeping platform optimised to meet niche internal
          training structures. Coach Roach is highly customizable and built on
          bootstrap to allow companies to adjust the appearance of the service
          to fit corporate branding.It is hosted on a digitalocean VPS running
          dokku.
        </p>
        <h3>tech.</h3>
        <p className="no-top-p">
          node.js, mySQL, sequelize, express, handlebars, bootstrap, charts.js,
          axios, dokku, github actions
        </p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  cardInfo: PropTypes.any,
  // index: PropTypes.number,
  // title: PropTypes.string,
  // liveUrl: PropTypes.string,
  // githubUrl: PropTypes.string,
  // description: PropTypes.string,
  // tech: PropTypes.string,
  // thumbnail: PropTypes.string,
};

export default ProjectCard;
