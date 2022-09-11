import React from "react";

import FooterStyles from "./styles/FooterStyles";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="content">
        <a target="blank" href="https://github.com/paytonagreen">
          <img src="/img/png/actualgithub.png" alt="GitHub Profile" />
        </a>
        <a target="blank" href="mailto: paytonagreen@gmail.com">
          <img src="/img/PNG/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://linkedin.com/in/paytonagreen" target="blank">
          <img src="/img/PNG/email.png" alt="Email" />
        </a>
      </div>
    </FooterStyles>
  );
};

export default Footer;
