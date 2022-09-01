import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import informationHelmet2 from "../../images/shlem101.png";
import informationHelmet3 from "../../images/shlem1001.png";
import informationHelmetMobile from "../../images/shlem100.png";
import discordLogo from "../../images/Information/discord.png";
import logoShlem from "../../images/shlemLoo.png";
import logo from "../../images/logo.svg";
import soundON from "../../images/soundON.png";
import soundONW from "../../images/soundONWhite.png";
import soundOFF from "../../images/soundOFF.png";
import soundOFFW from "../../images/soundOFFWhite.png";

import krug from "../../images/krugche.png";
import circleLogo from "../../images/circleLogo.png";

const StyledMusic = styled.div`
  /* position: relative;
  top: 0;
  width: 200px;
  left: calc(100% - 200px);
  height: 100%;
  z-index: 2;
  overflow: hidden; */

  position: fixed;
  top: calc(50% - 50px);
  left: calc(100% - 200px);
  height: 50px;
  width: 200px;
  z-index: 10000;
  @media screen and (max-width: 768px) {
    position: absolute;
  }
`;

const StyledMusicContainer = styled.div`
  position: absolute;
  padding: 4px;
  width: 200px;
  height: 80px;
  top: calc(50% - 40px);
  left: calc(100% - 28px);
  border: 1px solid black;
  background-color: white;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  transition: all 0.3s ease-in-out;
  padding: 10px;

  span {
    font-size: 2rem;
    letter-spacing: 1px;
    font-family: "Magh";
    position: absolute;
    top: 27.5%;
    left: 5px;
    transform-origin: 50% 100%;
    transform: rotate(-90deg);
    color: ${(props) =>
      props.page === 1 ||
      props.page === 4 ||
      props.page === 8 ||
      props.page === 9
        ? "rgba(15,16,38,255)"
        : "white"};
  }

  &:hover {
    left: calc(100% - 130px);
  }

  .volumeOn {
    width: 40%;
    position: absolute;
    top: 6%;
    left: 16%;
    opacity: ${(props) => props.volumeBG / 0.2};
  }
  .volumeOff {
    width: 40%;
    position: absolute;
    top: 6%;
    left: 16%;
    opacity: 1;
  }
`;

const StyledWhiteBG = styled.div`
  background-color: white;
  grid-column: 1/3;
  grid-row: 1/1;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledBlueBG = styled.div`
  background: rgba(15, 16, 38, 255);
  grid-column: 3/5;
  grid-row: 1/1;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    background: rgba(15, 16, 38, 255);
    grid-column: 1/1;
    grid-row: 1/1;
  }
`;

const StyledHelmet2 = styled.img`
  height: 85vh;
  z-index: 1;
  margin-left: 50%;
  margin-top: 5%;
  @media screen and (max-width: 428px) {
    display: none;
  }
`;

const StyledHelmetMobile = styled.img`
  width: 85vw;
  z-index: 1;
  grid-row: 1/1;
  grid-column: 1/1;
  align-self: center;
  justify-self: center;
  @media screen and (min-width: 429px) {
    display: none;
  }
`;

const StyledHelmet = styled.img`
  height: 120vh;
  margin-top: -22.5vh;
  margin-left: -22.5vw;
  z-index: 0;

  @media screen and (max-width: 428px) {
    left: 50%;
    z-index: 1;
    height: 400px;
    display: none;
  }
`;

const StyledHOO = styled.div`
  z-index: 9000;
  grid-column: 2/4;
  grid-row: 1/1;
  display: grid;
  .circle {
    background-image: url(${krug});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
    grid-row: 1/1;
    grid-column: 1/1;
  }

  .circleLogo {
    width: 65%;
    grid-row: 1/1;
    grid-column: 1/1;
    justify-self: center;
    align-self: center;
    margin-top: -15vw;
  }

  .circleText {
    justify-self: center;
    align-self: center;
    margin-top: 6.5vw;
    font-size: 1.2vw;
    color: white;
    font-family: "Medium";
    font-weight: 800;
    letter-spacing: 1px;
    line-height: normal;
    width: 65%;
    text-align: center;
    grid-row: 1/1;
    grid-column: 1/1;
  }
  @font-face {
    font-family: "Magh";
    src: url("./fonts/Maghfirea.otf");
  }

  .discordButton {
    grid-row: 1/1;
    grid-column: 1/1;
    margin-top: 23vw;
    justify-self: center;
    align-self: center;
    height: 5vw;
    width: 18vw;
    display: grid;
    grid-template-columns: 3fr 1fr;
    background: #5863f1;
    border: none;
    z-index: 9999;
    text-decoration: none;
  }

  .discordButton:hover {
    background: rgba(73, 115, 242, 255);
    box-shadow: 0px 0px 50px 5px rgba(63, 71, 176, 1);
  }

  .discordButton:active {
    background: #5863f1;
  }

  .discordText {
    justify-self: center;
    align-self: center;
    font-size: 1.4vw;
    font-family: "Magh";
    letter-spacing: 2px;
    font-weight: 900;
    color: white;
  }

  .discordLogo {
    padding-right: 10px;
    width: 85%;
    align-self: center;
    justify-self: end;
    filter: invert(1);
  }

  @media screen and (max-width: 320px) {
    width: 100%;
    align-self: end;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    grid-column: 1/1;
    grid-row: 2/2;
    margin-top: 0;
    .circle {
      display: none;
    }
    .circleLogo {
      /* margin-top: 40vh; */
    }
    .circleText {
      margin-top: 2vh;
      font-size: 3.5vw;
      width: 90%;
    }
    .discordButton {
      height: 50px;
      width: 220px;
      transform: none;
      margin-top: 20px;
      padding: 5px 10px;
    }

    .discordButton:hover {
      background: none;
      box-shadow: none;
    }

    .discordText {
      font-size: 2rem;
    }

    .discordLogo {
      width: 50px;
      padding-right: 0px;
    }
  }
  @media screen and (min-width: 321px) and (max-width: 375px) {
    width: 100%;
    align-self: end;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    grid-column: 1/1;
    grid-row: 2/2;
    margin-top: 0;

    .circle {
      display: none;
    }
    .circleLogo {
      /* margin-top: 40vh; */
    }
    .circleText {
      margin-top: 2vh;
      font-size: 3.5vw;
      width: 90%;
    }
    .discordButton {
      height: 50px;
      width: 220px;
      transform: none;
      margin-top: 20px;
      padding: 5px 10px;
    }

    .discordButton:hover {
      background: none;
      box-shadow: none;
    }

    .discordText {
      font-size: 2rem;
    }

    .discordLogo {
      width: 50px;
      padding-right: 0px;
    }
  }
  @media screen and (min-width: 376px) and (max-width: 428px) {
    width: 100%;
    align-self: end;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    grid-column: 1/1;
    grid-row: 2/2;
    margin-top: 0;
    .circle {
      display: none;
    }
    .circleLogo {
      /* margin-top: 40vh; */
    }
    .circleText {
      margin-top: 2vh;
      font-size: 3.5vw;
      width: 90%;
    }

    .discordButton {
      height: 60px;
      width: 240px;
      transform: none;
      margin-top: 20px;
      padding: 5px 10px;
    }

    .discordButton:hover {
      background: none;
      box-shadow: none;
    }

    .discordText {
      font-size: 2rem;
    }

    .discordLogo {
      width: 60px;
      padding-right: 0px;
    }
  }
`;

const StyledLogo = styled.a`
  position: fixed;
  top: 0;
  left: 0;
  width: 13vw;
  z-index: 9990;
  background-color: ${(props) =>
    props.page === 2 || props.page === 4 ? "white" : "#0f1026"};
  display: grid;
  grid-template-columns: max-content max-content;
  padding: 10px 1vw;
  align-items: center;
  border-bottom-right-radius: 50px;
  transition: background-color 0.5s ease-in-out;
  .logoShlem {
    width: 4vw;
  }

  .logo {
    width: 8vw;
  }
`;

const StyledInformationContainer = styled.div`
  grid-column: 1/2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 100vh;
  @media screen and (max-width: 429px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    background-color: rgba(15, 16, 38, 255);
  }
`;

const Information = ({
  forwardedRef,
  currentPage,
  onLinkClick,
  images,
  music,
  volume,
}) => {
  const discordSound = new Audio("./discordSound.wav");
  discordSound.volume = 0.35;

  const discordRef = useRef(null);

  useEffect(() => {
    discordRef.current?.addEventListener("mouseenter", () => {
      discordSound.currentTime = 0;
      discordSound.play();
    });
  }, []);

  const changeVolume = (step) => {
    music(step);
  };

  return (
    <>
      {window.outerWidth > 428 && (
        <StyledMusic>
          <StyledMusicContainer page={currentPage} volumeBG={volume}>
            <span>Music</span>
            {volume !== 0 && (
              <img
                className="volumeOn"
                src={
                  currentPage === 1 ||
                  currentPage === 4 ||
                  currentPage === 8 ||
                  currentPage === 9
                    ? soundON
                    : soundONW
                }
                alt=""
                onClick={() => changeVolume(0.05)}
              />
            )}
            {volume === 0 && (
              <img
                className="volumeOff"
                src={
                  currentPage === 1 ||
                  currentPage === 4 ||
                  currentPage === 8 ||
                  currentPage === 9
                    ? soundOFF
                    : soundOFFW
                }
                alt=""
                onClick={() => changeVolume(0.05)}
              />
            )}
            <div />
          </StyledMusicContainer>
        </StyledMusic>
      )}
      {window.outerWidth > 428 && (
        <StyledLogo onClick={() => onLinkClick(1)} page={currentPage}>
          <img src={logoShlem} alt="helmet" className="logoShlem" />
          <img src={logo} alt="heroes of olympus" className="logo" />
        </StyledLogo>
      )}
      <StyledInformationContainer ref={forwardedRef}>
        <StyledWhiteBG page={currentPage}>
          <StyledHelmet
            page={currentPage}
            src={informationHelmet2}
            alt="helmet"
          />
        </StyledWhiteBG>
        <StyledHelmetMobile
          src={informationHelmetMobile}
          alt="helmet on mobile"
          ref={forwardedRef}
        />
        <StyledHOO page={currentPage}>
          <div
            alt="Circle containing main collection information"
            className="circle"
          />
          <img
            src={circleLogo}
            alt="Website logo in circle"
            className="circleLogo"
          />
          <span className="circleText">
            Collection of ultra-realistic 3D heroes, sealed in the Cursed Chests
            of Chaos, on the Solana blockchain! Ancient Greece is about to be
            rebuilt in the Metaverse. Join the Battle of the Gods!
          </span>
          <a
            className="discordButton"
            href="https://mintheroesofolympus.com"
            target="_blank"
            rel="noreferrer"
            ref={discordRef}
          >
            <span className="discordText">MINT NOW</span>
            <img className="discordLogo" src={discordLogo} alt="" />
          </a>
        </StyledHOO>
        <StyledBlueBG page={currentPage}>
          <StyledHelmet2
            page={currentPage}
            src={informationHelmet3}
            alt="helmet2"
          />
        </StyledBlueBG>
      </StyledInformationContainer>
    </>
  );
};

export default Information;
