import React from "react";
import styled from "styled-components";
import github from '../public/img/PNG/actualgithub.png'
import linkedin from '../public/img/PNG/linkedin.png'
import email from '../public/img/PNG/email.png'


const ContactStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  max-width: 1100px;
  height: 85vh;
  .contact {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    img {
      width: 6rem;
      height: 6rem;
    }
    p {
      margin-left: 1rem;
      font-size: 2rem;
      color: ${props => props.theme.blue}
    }
  }
`;

const Contact = () => {
  return (
    <ContactStyles>
      <div className="contact">
      <img src={email} alt=""/> <p>Write Me!</p>
      </div>
      <div className="contact">
      <img src={github} alt=""/> <p>Code With Me!</p>
      </div>
      <div className="contact">
      <img src={linkedin} alt=""/> <p>Hire Me!</p>
      </div>
    </ContactStyles>
  );
};

export default Contact;