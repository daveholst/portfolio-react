import React from 'react';

function Contact() {
  return (
    <section>
      <span className="nav-padder" id="contact" />
      <h2>contact.</h2>
      <p>
        If you would like to contact myself about my projects or employment
        opportunities, I am available for contact through the following methods.
      </p>
      <p>
        email:
        <a href="mailto:contact@daveholst.dev"> contact@daveholst.dev</a>
        <br />
        <br />
        linkedIn:
        <a href="https://www.linkedin.com/in/daveholst/">
          {' '}
          https://www.linkedin.com/in/daveholst/
        </a>
      </p>
    </section>
  );
}

export default Contact;
