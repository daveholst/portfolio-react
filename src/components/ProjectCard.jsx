import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/projectCard.css';

function ProjectCard(props) {
  const { cardInfo } = props;
  const { title, liveUrl, githubUrl, description, tech, thumbnail } = cardInfo;

  const thumbnailStyle = {
    gridColumn: '1/2',
    gridRow: '1/2',
    backgroundImage: `url("${thumbnail}")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'space',
    backgroundSize: '100%',
  };

  const [thumbnailHovered, setThumbnailHovered] = useState(false);

  function thumbnailHoveredToggle() {
    if (thumbnailHovered) setThumbnailHovered(false);
    else setThumbnailHovered(true);
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
          <a href={liveUrl}>
            <button type="button">Live Site</button>
          </a>
          <a href={githubUrl}>
            <button type="button">GitHub Repo</button>
          </a>
        </div>
      </div>

      <div className="project-info">
        <h4>
          <a href={`"${liveUrl}"`}>{title}</a>
        </h4>
        <p>{description}</p>
        <h3>tech.</h3>
        <p className="no-top-p"> {tech}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  cardInfo: PropTypes.any,
};

export default ProjectCard;
