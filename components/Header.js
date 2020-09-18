import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import HeaderStyles from './styles/HeaderStyles';
import Nav from './Nav';
import BurgerMenu from './BurgerMenu';

const BurgerButton = styled.button`
  display: none;
  @media(max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 3.5%;
    right: 2%;
    height: 4rem;
    width: 4rem;
    z-index: 2;
    border: 2px solid ${props => props.theme.vermillion};
    outline: none;
    border-radius: 10%;
    background: ${props => props.theme.blue};
    font-size: 1rem;
    text-align: center;
    color: ${props => props.theme.tan};
    transition: all 10s;
  }
`;

const Header = () => {
  const [burgerOpen, setBurgerOpen ] = useState(false);
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    if (toggler) {
      setBurgerOpen(!burgerOpen);
      setToggler(false);
    }
  }, [toggler])

  return (
    <HeaderStyles>
      <BurgerButton onClick={() => setToggler(true)}>
        {!burgerOpen && 'MENU'}
        {burgerOpen && `CLOSE`}
      </BurgerButton>
      <BurgerMenu open={burgerOpen}/>
      <Nav/>
    </HeaderStyles>
  )
};

export default Header;