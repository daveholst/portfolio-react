import React from 'react';
import DevDotToIcon from '../assets/icons/dev-dot-to.svg';
import GitHubIcon from '../assets/icons/github.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';
import TwitterIcon from '../assets/icons/twitter.svg';

function Header() {
  return (
    <header id="header-bar">
      <span>daveholst.dev</span>
      <div id="icons-wrapper">
        <a href="https://github.com/daveholst">
          {/* <GitHubIcon /> */}
          <img src={GitHubIcon} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/daveholst/">
          {/* <LinkedInIcon /> */}
          <img src={LinkedInIcon} alt="" />
        </a>
        <a href="https://twitter.com/daveyholst">
          <img src={TwitterIcon} alt="" />
        </a>
        <a href="https://dev.to/daveholst">
          <img src={DevDotToIcon} alt="dev.to icon" />
        </a>
      </div>
    </header>
  );
}

export default Header;
