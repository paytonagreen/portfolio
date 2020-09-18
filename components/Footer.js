import React from 'react';

import FooterStyles from './styles/FooterStyles';

import github from '../public/img/PNG/actualgithub.png'
import linkedin from '../public/img/PNG/linkedin.png'
import email from '../public/img/PNG/email.png'

const Footer = () => {
  return (
    <FooterStyles>
      <div className="content">
      <img src={github} alt=""/>
      <img src={email} alt=""/>
      <img src={linkedin} alt=""/>
      </div>
    </FooterStyles>
  )
};

export default Footer;