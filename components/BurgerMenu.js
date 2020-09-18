import React from "react";
import Link from "next/link";
import BurgerStyles from "./styles/BurgerStyles";

const BurgerMenu = ({ open, toggler, setToggler }) => {
  return (
    <BurgerStyles open={open}>
      <ul>
        <li>
          <button onClick={() => setToggler(!toggler)}>
            <Link href="/">ABOUT</Link>
          </button>
        </li>
        <li>
          <button onClick={() => setToggler(!toggler)}>
            <Link href="/work">WORK</Link>
          </button>
        </li>
        <li>
          <button onClick={() => setToggler(!toggler)}>
            <Link href="/contact">CONTACT</Link>
          </button>
        </li>
      </ul>
    </BurgerStyles>
  );
};

export default BurgerMenu;
