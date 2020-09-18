import React, { useState, useEffect } from "react";
import NavStyles from "./styles/NavStyles";
import Link from "next/link";

function Nav() {

  return (
    <NavStyles>
      <h1>Payton Green</h1>
      <ul>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link></li>
      </ul>
    </NavStyles>
  );
}

export default Nav;
