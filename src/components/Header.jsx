import React from 'react';
import { ReactComponent as DevDotToIcon } from '../assets/icons/dev-dot-to.svg';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from '../assets/icons/twitter.svg';

function Header() {
  return (
    <header id="social-icons">
      <span>daveholst.dev</span>
      <div id="icons-wrapper">
        <a href="https://github.com/daveholst">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/daveholst/">
          <LinkedInIcon />
        </a>
        <a href="https://twitter.com/daveyholst">
          <TwitterIcon />
        </a>
        <a href="https://dev.to/daveholst">
          <DevDotToIcon />
        </a>
      </div>
    </header>
  );
}

export default Header;
