import styled from'styled-components';

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
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default FooterStyles;