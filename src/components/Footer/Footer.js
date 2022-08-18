import React from "react";

import styled from "styled-components";

import logo from "../../images/footerLogo1.png";
import { Timeline } from "react-twitter-widgets";

import calendar from "../../images/IMG_0481.png";
import calendar2 from "../../images/nft_calendar.svg";

const StyledLightBlue = styled.div`
  /* position: absolute; */
  /* top: 0; */
  /* left: ${(props) => (props.page === 9 ? "0" : "-110vw")}; */
  /* width: 50%; */
  grid-column: 1/2;
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
    grid-column: 1/3;
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
    grid-column: 1/3;
    img:nth-child(1) {
      margin: 50px 0;
      align-self: center;
      width: 60%;
    }

    ul {
      display: none;
    }
  }
  @media screen and (min-width: 376px) and (max-width: 428px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: max-content;
    background: #161b54;
    transition: left 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    grid-column: 1/3;
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
  height: 100vh;
  background: #111336;
  transition: left 0.5s ease-in-out;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr 1fr;
  transition: top 0.5s ease-in-out;
  grid-column: 2/5;
  .twitterEmbed {
    grid-column: 1/1;
    grid-row: 2/5;
    /* align-self: center; */
    width: max-content;
    justify-self: center;
    max-height: 50vh;
    overflow-y: scroll;
  }

  .twitterTitle {
      font-size: 3.5rem;
      color: white;
      font-family: 'Medium';
      justify-self: center;
      align-self: center;
      grid-row: 1/1;
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
    grid-column: 1/3;
    .twitterEmbed {
    grid-column: 1/1;
    grid-row: 1/3;
    width: 80%;
    align-self: center;
    margin-bottom: 30px;
    padding: 0;
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
    grid-column: 1/3;
    .twitterEmbed {
    grid-column: 1/1;
    grid-row: 1/3;
    width: 80%;
    align-self: center;
    margin-bottom: 30px;
    padding: 0;
    }

    .twitterTitle {
      font-size: 2.5rem;
      align-self: center;
      padding: 30px 0;
    }
  }
  @media screen and (min-width: 376px) and (max-width: 428px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    grid-column: 1/3;
    .twitterEmbed {
    grid-column: 1/1;
    grid-row: 1/3;
    width: 80%;
    overflow-y: scroll;
    align-self: center;
    margin-bottom: 30px;
    padding: 0;
    }

    .twitterTitle {
        font-size: 2.5rem;
        align-self: center;
        padding: 30px 0;
    }
  }
`;

const Footer = ({ currentPage, onLinkClick, images, forwardedRef, info, lore, roadmap, faq }) => {
  const addImageLoaded = () => {
    images();
  };
  const StyledContactContainer = styled.div`
  width: 100vw;
  height: max-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content max-content;
  .linkFooter {
      grid-column: 1/3;
      height: max-content;
      padding: 1rem;
      display: flex;
      place-items: center;
      gap: 10rem;
      margin: 0 auto;
  }
  .linkFooter > a > img {
      height: 10vh;
    }
  @media screen and (max-width: 428px) {
    flex-direction: column;
    height: max-content;

    .linkFooter {
      grid-column: 1/3;
    }
    .linkFooter > a > img {
      aspect-ratio: 1/1;
      width: 25vw;
    }
  }
`;
  return (
    <StyledContactContainer ref={forwardedRef}>
      <StyledLightBlue page={currentPage}>
        <img src={logo} alt="" onLoad={addImageLoaded}/>
        <ul>
          <li onClick={() => info.current.scrollIntoView({ behavior: 'smooth'})}>Home</li>
          <li onClick={() => lore.current.scrollIntoView({ behavior: 'smooth'})}>Lore</li>
          <li onClick={() => roadmap.current.scrollIntoView({ behavior: 'smooth'})}>Roadmap</li>
          <li onClick={() => faq.current.scrollIntoView({ behavior: 'smooth'})}>FAQ</li>
          <li>© All Rights Reserved</li>
        </ul>
      </StyledLightBlue>
      <StyledDarkBlue page={currentPage}>
        <span className='twitterTitle'>Our Twitter Updates</span>
        <div className="twitterEmbed">
            <Timeline dataSource={{ sourceType: "profile", screenName:"Heroes_Olympus_"}} options={{chrome: "noheader, nofooter", width: "500", height: "300"}}></Timeline>
        </div>
      </StyledDarkBlue>
      <div class='linkFooter'>
        <a href={"https://nftsolana.io"} target={"_blank"} rel="noreferrer">
          <img src={calendar} alt='' />
        </a>
        <a href={"https://nftcalendar.io"} target={"_blank"} rel="noreferrer">
          <img src={calendar2} alt=''/>
        </a>
      </div>
    </StyledContactContainer>
  );
};

export default Footer;
