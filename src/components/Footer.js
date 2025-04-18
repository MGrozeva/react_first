import React from 'react';

const Footer = () => {
  return (
    <footer>
      <section>
        <h3 className="title">Our Mission</h3>
        <p className="description">
          Through direct action, exposure, and education, OCN hopes to motivate individuals all over the world to change their own behaviour towards a sustainable future.
        </p>
      </section>
      <section id="contacts">
        <ul>
          <h3 className="title">Contact us</h3>
          <li><i className="fas fa-envelope"></i>info@ocnamibia.org</li>
          <li><i className="fas fa-map-marked"></i>Ocean Conservation Namibia Trust, PO Box 5304, Walvis Bay, Namibia</li>
          <li><i className="fas fa-map-marked"></i>Ocean Conservation International, 8 The Green, STE A, Dover , DE 19901, USA</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;