import React from "react";

import FooterStyles from "./styles/FooterStyles";

import github from "../public/img/PNG/actualgithub.png";
import linkedin from "../public/img/PNG/linkedin.png";
import email from "../public/img/PNG/email.png";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="content">
        <a target="blank" href="https://github.com/paytonagreen">
          <img src={github} alt="" />
        </a>
        <a target="blank" href="mailto: paytonagreen@gmail.com">
          <img src={email} alt="" />
        </a>
        <a href="https://linkedin.com/in/paytonagreen" target="blank">
          <img src={linkedin} alt="" />
        </a>
      </div>
    </FooterStyles>
  );
};

export default Footer;
