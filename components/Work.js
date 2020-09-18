import React from "react";
import Head from 'next/head';
import WorkStyles from './styles/WorkStyles';
import dustin from "../public/img/PNG/DLAltickScreen.png";
import lisa from "../public/img/PNG/LisaScreen.png";
import payton from "../public/img/PNG/PGScreen.png";



const Work = () => {
  return (
    <>
    <Head>
      <title>
        Work | Payton Green
      </title>
    </Head>
    <WorkStyles>
      <div className="example1">
        <img src={dustin} alt="" />
        <div className="content">
          <a target="blank" href="http://dlaltick.paytongreen.com">
            <h1>DL Altick Music Co.</h1>
          </a>
          <p>Modern, responsive website:</p>
          <ul>
            <li>Created with React</li>
            <li>Styled with Sass</li>
            <li>Tested with Jest/Enzyme</li>
          </ul>
        </div>
      </div>
      <div className="example2">
        <div className="content">
          <a target="blank" href="http://paytongreen.com">
            <h1>Lisa Alley Store</h1>
          </a>
          <p>Full-Stack E-commerce App:</p>
          <ul>
            <li>Frontend: React (Next.js) & Apollo Client</li>
            <li>Node.js/Express/Prisma ORM backend</li>
            <li>Multi-layered admin functionality </li>
          </ul>
        </div>
        <img src={lisa} alt="" />
      </div>
      <div className="example1">
        <img src={payton} alt="" />
        <div className="content">
          <a target="blank" href="http://paytongreen.com">
            <h1>Payton Green Portfolio</h1>
          </a>
          <p>Modern, responsive website:</p>
          <ul>
            <li>Created with React</li>
            <li>Styled with styled-components</li>
            <li>Tested with Jest/Enzyme</li>
          </ul>
        </div>
      </div>
      <h2>...And More On The Way!</h2>
    </WorkStyles>
    </>
  );
};

export default Work;
