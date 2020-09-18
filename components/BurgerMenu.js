import React from "react";
import Link from 'next/link';
import styled from "styled-components";

const BurgerStyles = styled.div`
  transform: translateY(-100%);
  transition: all 1s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 25vh;
  background: ${(props) => props.theme.blue};
  position: absolute;
  top: 0;
  text-align: center;
  padding: 1rem;
  font-size: 2rem;
  color: ${props => props.theme.lightblue};
  ${(props) => props.open && `transform: translateX(0);`};
  ul {
    list-style: none;
    padding: 0;
    margin: 3rem 0;
    li {
      padding: 1rem;
    }
  }
`;

const BurgerMenu = ({open}) => {
  return (
    <BurgerStyles open={open}>
      <ul>
        <li>
          <Link href="/">ABOUT</Link>
        </li>
        <li>
          <Link href="/work">WORK</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link></li>
      </ul>
    </BurgerStyles>
  );
};

export default BurgerMenu;
