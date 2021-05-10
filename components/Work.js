import React from 'react';
import Head from 'next/head';

import dustin from '../public/img/PNG/DLAltickScreen.png';
import lisa from '../public/img/PNG/lisa-new.png';
import payton from '../public/img/PNG/PGScreen.png';
import somm from '../public/img/PNG/SOMM-Screengrab.png';

import WorkCard from './WorkCard';
import WorkStyles from './styles/WorkStyles'

const content = (
  <>
    <WorkCard
      image={somm}
      link='https://asommforyou.com'
      title='A Somm For You'
      description='Full Stack Application'
      frontend="React (Next.js), SWR"
      backend="Ruby On Rails REST API"
      styledWith="CSS-In-JS/styled-components"
      testedWith="Jest/Testing Library"
    />
    <WorkCard
      image={dustin}
      link='https://dlaltick.paytongreen.com'
      title='DL Altick Music Co'
      description='Modern responsive SPA:'
      frontend="React"
      styledWith="SASS"
      testedWith="Jest/Enzyme"
    />
    <WorkCard
      image={lisa}
      link='https://lisa-alley.com'
      title='Lisa Alley Store'
      description='Full-Stack E-commerce App:'
      frontend="React (Next.js) & Apollo Client"
      backend="Node.js/Express/Prisma ORM, AWS"
      styledWith="CSS-inJS/styled-components"
      testedWith="Jest/TestingLibrary"
    />
    <WorkCard
      image={payton}
      link='https://paytongreen.com'
      title='Personal Portfolio'
      description='Modern, Responsive SPA'
      frontend="React (Next.js)"
      styledWith="CSS-in-JS/styled-components"
    />
    
    <h2>...And More On The Way!</h2>
  </>
);

const Work = () => {
  return (
    <>
      <Head>
        <title>Work | Payton Green</title>
      </Head>
      <WorkStyles>{content}</WorkStyles>
    </>
  );
};

export default Work;
