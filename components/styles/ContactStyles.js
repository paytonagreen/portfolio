import styled from 'styled-components';

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
    color: ${(props) => props.theme.blue};
  }
}
`;

export default ContactStyles;