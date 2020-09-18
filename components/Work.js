import React from "react";
import styled from "styled-components";
import dustin from "../public/img/PNG/DLAltickScreen.png";
import lisa from "../public/img/PNG/LisaScreen.png";
import payton from "../public/img/PNG/PGScreen.png";

const WorkStyles = styled.div`
  h2 {
    text-align: center;
    padding: 2rem;
    color: ${(props) => props.theme.vermillion};
    border-top: 1px solid ${(props) => props.theme.vermillion};
    margin: 0;
  }
  .example1 {
    display: grid;
    grid-template-columns: 2fr 1fr;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
    a {
      padding: 0;
      margin: 0;
      object-fit: cover;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
      background: ${(props) => props.theme.blue};
      border-left: 1px solid ${(props) => props.theme.vermillion};
      @media (max-width: 1000px) {
        text-align: center;
        border: none;
      }
      ul {
        list-style: none;
        padding: 0;
        @media(max-width: 1000px) {
          padding: none;
        }
        li {
          @media (max-width: 1000px) {
            text-align: center;
            padding: none;
          }
        }
      }
      h1 {
        color: ${(props) => props.theme.lightblue};
      }
      p {
        color: ${(props) => props.theme.tan};
      }
    }
  }
  .example2 {
    display: grid;
    grid-template-columns: 1fr 2fr;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
    img {
      width: 100%;
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: right;
      padding: 10px;
      background: ${(props) => props.theme.lightblue};
      border-right: 1px solid ${(props) => props.theme.vermillion};
      @media (max-width: 1000px) {
        text-align: center;
        border: none;
      }
      ul {
        list-style: none;
        padding: 0;
        @media(max-width: 1000px) {
          padding: none;
      }
      }
      }
      h1 {
        color: ${(props) => props.theme.blue};
      }
      p {
        color: ${(props) => props.theme.vermillion};
      }
    }
  }
`;

const Work = () => {
  return (
    <WorkStyles>
      <div className="example1">
        <img src={dustin} alt="" />
        <div className="content">
          <a target="blank" href="http://dlaltick.paytongreen.com">
            <h1>DL Altick Music Co.</h1>
          </a>
          <p>
            Modern, responsive website:
            <ul>
              <li>Created with React</li>
              <li>Styled with Sass</li>
              <li>Tested with Jest/Enzyme</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="example2">
        <div className="content">
          <a target="blank" href="http://paytongreen.com">
            <h1>Lisa Alley Store</h1>
          </a>
          <p>
            Full-Stack E-commerce App:
            <ul>
              <li>Frontend: React (Next.js) & Apollo Client</li>
              <li>Node.js/Express/Prisma ORM backend</li>
              <li>Multi-layered admin functionality </li>
            </ul>
          </p>
        </div>
        <img src={lisa} alt="" />
      </div>
      <div className="example1">
        <img src={payton} alt="" />
        <div className="content">
          <a target="blank" href="http://paytongreen.com">
            <h1>Payton Green Portfolio</h1>
          </a>
          <p>
            Modern, responsive website:
            <ul>
              <li>Created with React</li>
              <li>Styled with styled-components</li>
              <li>Tested with Jest/Enzyme</li>
            </ul>
          </p>
        </div>
      </div>
      <h2>...And More On The Way!</h2>
    </WorkStyles>
  );
};

export default Work;
