import React from "react";

import styled from "styled-components";

import logo from "../../images/footerLogo.png";
import { Timeline } from "react-twitter-widgets";

const StyledLightBlue = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.page === 9 ? "0" : "-110vw")};
  width: 50%;
  height: 100%;
  background: #161b54;
  transition: left 0.5s ease-in-out;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1vh;
  img:nth-child(1) {
    justify-self: center;
    align-self: center;
    grid-column: 1/1;
    grid-row: 1/3;
    width: 120%;
  }

  ul {
    grid-column: 2/2;
    grid-row: 1/3;
    align-self: center;
    list-style-type: none;
    margin-top: 10vh;
  }

  ul li {
    color: #5da3f9;
    margin-bottom: 6vh;
    font-size: 1.2vw;
    font-family: "Medium";
  }

  ul li:not(:last-child)::before {
    content: "";
    display: inline-block;
    width: 0.4vw;
    height: 0.4vw;
    background: red;
    border-radius: 50vw;
    margin-right: 15px;
    margin-bottom: 4px;
  }
  @media screen and (max-width: 320px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: max-content;
    background: #161b54;
    transition: left 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    img:nth-child(1) {
      margin: 50px 0;
      align-self: center;
      width: 60%;
    }

    ul {
      display: none;
    }
  }
  @media screen and (min-width: 321px) and (max-width: 375px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: max-content;
    background: #161b54;
    transition: left 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    img:nth-child(1) {
      margin: 50px 0;
      align-self: center;
      width: 60%;
    }

    ul {
      display: none;
    }
  }
  @media screen and (min-width: 376px) and (max-width: 425px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: max-content;
    background: #161b54;
    transition: left 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    img:nth-child(1) {
      margin: 50px 0;
      align-self: center;
      width: 60%;
    }

    ul {
      display: none;
    }
  }

`;

const StyledDarkBlue = styled.div`
  position: absolute;
  top: ${(props) => (props.page === 9 ? "0" : "-110vh")};
  left: 50%;
  width: 50%;
  height: 100%;
  background: #111336;
  transition: left 0.5s ease-in-out;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr 1fr;
  transition: top 0.5s ease-in-out;

  .twitterEmbed {
    grid-column: 1/1;
    grid-row: 1/5;
    align-self: center;
    padding: 0 20%;
  }

  .twitterTitle {
      font-size: 3.5rem;
      color: white;
      font-family: 'Medium';
      justify-self: center;
      grid-row: 2/2;
      grid-column: 1/1;
  }
  
  @media screen and (max-width: 320px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    .twitterEmbed {
    grid-column: 1/1;
    grid-row: 1/3;
    width: 60%;
    align-self: center;
    margin-bottom: 30px;
    }

    .twitterTitle {
        font-size: 2.5rem;
        align-self: center;
        padding: 30px 0;
    }
  }
  @media screen and (min-width: 321px) and (max-width: 375px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    .twitterEmbed {
    grid-column: 1/1;
    grid-row: 1/3;
    width: 60%;
    align-self: center;
    margin-bottom: 30px;
    }

    .twitterTitle {
        font-size: 2.5rem;
        align-self: center;
        padding: 30px 0;
    }
  }
  @media screen and (min-width: 376px) and (max-width: 425px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    .twitterEmbed {
    grid-column: 1/1;
    grid-row: 1/3;
    width: 60%;
    align-self: center;
    margin-bottom: 30px;
    }

    .twitterTitle {
        font-size: 2.5rem;
        align-self: center;
        padding: 30px 0;
    }
  }
`;

const Footer = ({ currentPage, onLinkClick, images }) => {
  const addImageLoaded = () => {
    images();
  };

  return (
    <>
      <StyledLightBlue page={currentPage}>
        <img src={logo} alt="" onLoad={addImageLoaded}/>
        <ul>
          <li onClick={() => onLinkClick(1)}>Home</li>
          <li onClick={() => onLinkClick(2)}>Lore</li>
          <li onClick={() => onLinkClick(4)}>Roadmap</li>
          <li onClick={() => onLinkClick(7)}>FAQ</li>
          <li>© All Rights Reserved</li>
        </ul>
      </StyledLightBlue>
      <StyledDarkBlue page={currentPage}>
        <span className='twitterTitle'>Our Twitter Updates</span>
        <div className="twitterEmbed">
            <Timeline dataSource={{ sourceType: "profile", screenName:'crypto_alerting'}} options={{chrome: 'noheader, nofooter', height: 300}}></Timeline>
        </div>
      </StyledDarkBlue>
    </>
  );
};

export default Footer;
