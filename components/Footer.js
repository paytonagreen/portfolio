import React from 'react';
import styled from 'styled-components';
import github from '../public/img/PNG/actualgithub.png'
import linkedin from '../public/img/PNG/linkedin.png'
import email from '../public/img/PNG/email.png'

const FooterStyles = styled.footer`
  background: ${props => props.theme.blue};
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  .content {
    max-width: 1100px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
  img {
    width: 6rem;
    margin: 0 1rem;
  }
`;

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