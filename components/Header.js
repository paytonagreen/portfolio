import React, {useState, useEffect} from "react";

import HeaderStyles, { BurgerButton } from './styles/HeaderStyles';
import Nav from './Nav';
import BurgerMenu from './BurgerMenu';

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
      <BurgerMenu toggler={toggler} setToggler={setToggler} open={burgerOpen}/>
      <Nav/>
    </HeaderStyles>
  )
};

export default Header;