import styled from 'styled-components'

const NavStyles = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  max-width: 1100px;
  padding: 1.5rem;
  h1 {
    margin: 0;
    font-size: 4rem;
    color: ${props => props.theme.tan}
  }
  ul {
    display: flex;
    list-style: none;
    font-size: 2rem;
    li {
      padding-left: 2rem;

    }
  }
`;

export default NavStyles