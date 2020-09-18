import styled from 'styled-components'

const NavStyles = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  max-width: 1100px;
  padding: 1.5rem;
  @media(max-width: 700px) {
    justify-content: center;
    padding: 1rem;
  }
  h1 {
    margin: 0;
    font-size: 4rem;
    color: ${props => props.theme.tan}
  }
  ul {
    display: flex;
    list-style: none;
    font-size: 2rem;
    @media(max-width: 700px) {
      display: none;
    }
    li {
      padding-left: 2rem;

    }
  }
`;

export default NavStyles