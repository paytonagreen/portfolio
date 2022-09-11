import React from 'react';

import HomeStyles from './styles/HomeStyles';

function Home() {
  return (
    <HomeStyles>
      <div className='container'>
        <div className='text'>
          <h2>Hey y'all!</h2>
          <p>
            Thanks for visiting! I'm Payton Green, a web developer here in
            Austin, TX.
          </p>
          <p>
            At the moment, I'm particularly interested in providing smooth
            Developer Experience through monorepo configuration with tools like 
            <span> NX</span>, <span>pnpm</span>, and <span>TypeScript</span>. I
            welcome opportunities to embrace it all: new languages, new
            frameworks, new problems, <span>new solutions</span>!
          </p>
          <p>
            When I'm afk, I love playing and listening to music, drinking good
            wine (I'm a CMS Certified Sommelier), watching basketball (OKC!),
            and consuming science/speculative-fiction (lately, all of Doctor
            Who).
          </p>
          <p>
            Get in touch if you want to collaborate, have an open source project
            that you think I'd be a good fit for, or if you want to trade book
            recommendations, b-ball trade rumors, or talk about good bottles of
            wine!
          </p>
          <p>Talk soon,</p>
          <p>Payton</p>
        </div>
        <div className='img-container'>
          <img
            src='https://res.cloudinary.com/dtqqdu0so/image/upload/c_scale,w_1125/v1662844333/PG-Home_wcw5tz.jpg'
            alt=''
          />
        </div>
      </div>
    </HomeStyles>
  );
}

export default Home;
