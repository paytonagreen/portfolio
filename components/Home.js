import React from "react";

import HomeStyles from "./styles/HomeStyles";

import image from "../public/img/Payton.jpg";

function Home() {
  return (
    <HomeStyles>
      <div className="container">
        <div className="text">
          <h2>Hey y'all!</h2>
          <p>
            Thanks for visiting! I'm Payton Green, a web developer here in
            Austin, TX.
          </p>
          <p>
            At the moment, I'm particularly interested in providing smooth,
            effortless <span>JavaScript-based UX/UI</span> solutions, primarily
            with <span>React </span>
            and <span>Apollo </span> - but I enjoy working server-side as
            well. I welcome opportunities to embrace it all: new languages, new
            frameworks, new problems, <span>new solutions</span>!
          </p>
          <p>
            When I'm not at the computer, I love playing and listening to music,
            drinking good wine (I'm a CMS Certified Sommelier), watching
            basketball (OKC!), and consuming science/speculative-fiction
            (lately, all of Doctor Who).
          </p>
          <p>
            Get in touch if you want to collaborate, have a job that you think
            I'd be a good fit for, or if you want to trade book recommendations,
            b-ball trade rumors, or talk about good bottles of wine!
          </p>
          <p>
          Talk soon,
          </p>
          <p>
          Payton
          </p>
        </div>
        <div className="img-container">
          <img src={image} alt="" />
        </div>
      </div>
    </HomeStyles>
  );
}

export default Home;
