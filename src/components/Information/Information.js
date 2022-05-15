import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import informationImage from "../../images/motiv22.png";
import informationHelmet2 from "../../images/shlem100.png";
import discordLogo from "../../images/Information/discord.png";
import logoShlem from "../../images/shlemLoo.png";
import logo from "../../images/logo.svg";
import soundON from "../../images/soundON.png";
import soundONW from "../../images/soundONWhite.png";
import soundOFF from "../../images/soundOFF.png";
import soundOFFW from "../../images/soundOFFWhite.png";

const StyledMusic = styled.div`
  position: relative;
  top: 0;
  width: 8%;
  left: 92%;
  height: 100%;
  z-index: 2;
  overflow: hidden;

  @media screen and (max-width: 768px){
      position: absolute;
  }
`;

const StyledMusicContainer = styled.div`
  position: absolute;
  padding: 4px;
  width: 130px;
  height: 80px;
  top: calc(50% - 40px);
  left: calc(100% - 28px);
  background-color: ${(props) =>
    props.page === 1 || props.page === 4 || props.page === 8 || props.page === 9
      ? "white"
      : "rgba(15,16,38,255)"};
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
    top: 19%;
    left: 27%;
    opacity: ${(props) => props.volumeBG / 0.2};
  }
  .volumeOff {
    width: 40%;
    position: absolute;
    top: 19%;
    left: 27%;
    opacity: 1;
  }
`;

const StyledWhiteBG = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.page === 1 ? "0" : "-110vw")};
  width: 50vw;
  height: 100vh;
  background-color: white;
  display: grid;
  justify-content: center;
  align-items: center;
  transition: left 0.5s ease-in-out;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledBlueBG = styled.div`
  position: absolute;
  top: ${(props) => (props.page === 1 ? "0" : "-110vh")};
  left: 50%;
  width: 50vw;
  height: 100vh;
  background-color: rgba(15, 16, 38, 255);
  display: grid;
  justify-content: center;
  align-items: center;
  transition: top 0.5s ease-in-out;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    position: relative;
    width: 100vw;
    left: 0;
  }
`;

const StyledInformation = styled.img`
  height: 100vh;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => (props.page === 1 ? "3vw" : "-110vw")};
  transition: left 0.5s ease-in-out;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledHelmet = styled.img`
  position: absolute;
  top: ${(props) => (props.page === 1 ? "50%" : "-110vh")};
  left: 49%;
  transform-origin: 50% 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 80%;
  z-index: 1;
  opacity: ${(props) => (props.page === 1 ? "1" : "0")};
  transition: top 0.4s ease-in-out;

  @media screen and (max-width: 320px) {
    position: absolute;
    height: 300px;
    top: 30px;
    left: 0;
    transform: none;
  }
  @media screen and (min-width: 321px) and (max-width: 375px) {
    height: 350px;
    top: 30px;
    left: 0;
    transform: none;

  }
  @media screen and (min-width: 376px) and (max-width: 428px) {
    height: 400px;
    transform: none;
    top: 30px;
    left: 0;
  }
`;

const StyledCPTH = styled.div`
  margin-left: -50px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-top: 50px;

  .titleCollection {
    font-size: 3.2vmax;
    color: rgba(73, 115, 242, 255);
    letter-spacing: 4px;
    font-family: "Magh";
    transform: scaleY(0.9);
    font-weight: 600;
  }

  .textCollection {
    font-size: 1vmax;
    letter-spacing: 0.5px;
    font-family: "Medium";
    font-weight: 600;
    transform: scaleY(0.95);
  }
`;

const StyledHOO = styled.div`
  width: 55%;
  /* justify-self: center; */
  z-index: 9000;
  @font-face {
    font-family: "Magh";
    src: url("./fonts/Maghfirea.otf");
  }

  .titleBlue {
    font-family: "Magh";
    font-size: 4vw;
    letter-spacing: 6px;
    color: white;
    display: block;
    transform: translateX(6vw) translateY(-4vw);
    line-height: 4vw;
    font-weight: 700;
  }

  .textBlue {
    font-size: 1vw;
    color: white;
    justify-self: center;
    align-self: center;
    display: block;
    font-family: "Medium";
    font-weight: 800;
    transform: translateX(6vw) translateY(-2vw) scaleY(0.9);
    letter-spacing: 1px;
    width: 85%;
    line-height: 1.4vw;
  }

  .discordButton {
    justify-self: center;
    align-self: center;
    transform: translateX(6vw) translateY(1vw);
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
    width: 90%;
    align-self: center;
    justify-self: end;
    filter: invert(1);
  }

  @media screen and (max-width: 320px) {
    width: 95%;
    align-self: end;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    .titleBlue {
      font-family: "Magh";
      font-size: 11vw;
      letter-spacing: 2px;
      justify-self: center;
      transform: none;
      margin-bottom: 30px;

    }

    .textBlue {
      font-size: 3.6vw;
      color: white;
      font-family: "Medium";
      font-weight: 800;
      letter-spacing: 1px;
      line-height: normal;
      width: 90%;
      text-align: center;
      margin-top: 10px;
      transform: none;
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
      font-size: 6vw;
    }

    .discordLogo {
      width: 50px;
      padding-right: 0px;
    }
  }
  @media screen and (min-width: 321px) and (max-width: 375px) {
    width: 100vw;
    align-self: end;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    .titleBlue {
      font-family: "Magh";
      font-size: 11vw;
      letter-spacing: 2px;
      align-self: center;
      transform: none;
      margin-bottom: 30px;
    }

    .textBlue {
      font-size: 3.6vw;
      color: white;
      font-family: "Medium";
      font-weight: 800;
      letter-spacing: 1px;
      line-height: normal;
      width: 90%;
      text-align: center;
      margin-top: 10px;
      transform: none;
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
      font-size: 6vw;
    }

    .discordLogo {
      width: 50px;
      padding-right: 0px;
    }
  }
  @media screen and (min-width: 376px) and (max-width: 428px) {
    width: 95%;
    align-self: end;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    .titleBlue {
      font-family: "Magh";
      font-size: 11vw;
      letter-spacing: 2px;
      justify-self: center;
      transform: none;
      margin-bottom: 30px;

    }

    .textBlue {
      font-size: 3.6vw;
      color: white;
      font-family: "Medium";
      font-weight: 800;
      letter-spacing: 1px;
      line-height: normal;
      width: 90%;
      text-align: center;
      margin-top: 10px;
      transform: none;
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
      font-size: 6vw;
    }

    .discordLogo {
      width: 60px;
      padding-right: 0px;
    }
  }
`;

const StyledLogo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 13vw;
  z-index: 1;
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

const Information = ({ currentPage, onLinkClick, images, music, volume }) => {
  const discordSound = new Audio("./discordSound.wav");
  discordSound.volume = 0.35;

  const discordRef = useRef(null);
  const [inside, setInside] = useState(true);

  const addImageLoaded = () => {
    images();
  };

  useEffect(() => {
    discordRef.current.addEventListener("mouseenter", () => {
      discordSound.currentTime = 0;
      discordSound.play();
    });
  }, []);

  const changeVolume = (step) => {
    music(step);
  };

  return (
    <>
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
      <StyledLogo onClick={() => onLinkClick(1)} page={currentPage}>
        <img src={logoShlem} alt="helmet" className="logoShlem" />
        <img src={logo} alt="heroes of olympus" className="logo" />
      </StyledLogo>
      <StyledWhiteBG page={currentPage}>
        <div>
          <StyledCPTH>
            <span className="titleCollection">Collection</span>
            <span className="textCollection">10 878 heroes</span>
          </StyledCPTH>
          <StyledCPTH>
            <span className="titleCollection">Price</span>
            <span className="textCollection">To be declared</span>
          </StyledCPTH>
          <StyledCPTH>
            <span className="titleCollection">Tribes</span>
            <span className="textCollection">
              There are 14 tribes <br /> with one God to lead
            </span>
          </StyledCPTH>
          <StyledCPTH>
            <span className="titleCollection">Heroes</span>
            <span className="textCollection">777 in each tribe</span>
          </StyledCPTH>
        </div>
      </StyledWhiteBG>
      <StyledInformation
        page={currentPage}
        src={informationImage}
        alt="information"
        onLoad={addImageLoaded}
      />
      <StyledHelmet
        page={currentPage}
        src={informationHelmet2}
        alt="helmet"
        onLoad={addImageLoaded}
      />
      <StyledBlueBG page={currentPage}>
        <StyledHOO>
          <span className="titleBlue">Heroes of Olympus</span>
          <span className="textBlue">
            Collection of 10,878 ultra-realistic 3D heroes, sealed in the Cursed
            Chests of Chaos, on the Solana blockchain! Ancient Greece is about
            to be rebuilt in the Metaverse. Join the Battle of the Gods!
          </span>
          <a
            className="discordButton"
            href="https://discord.com/invite/XHPyntDaF4"
            target="_blank"
            rel="noreferrer"
            ref={discordRef}
          >
            <span className="discordText">Join our Discord</span>
            <img className="discordLogo" src={discordLogo} alt="" />
          </a>
        </StyledHOO>
      </StyledBlueBG>
    </>
  );
};

export default Information;
