import React from "react";

import styled from "styled-components";

import theHeader from "../../images/Our Story/Our Story.png";
import helmet from "../../images/shlem201.png";
import lines from "../../images/Our Story/Lines.png";
import arka from "../../images/arka.png";

const StyledHelmet = styled.img`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.page === 2 ? "50%" : "-100%")};
  transform-origin: 50% 50%;
  transform: translateX(-52%) translateY(-50%);
  height: 85%;
  opacity: ${(props) => (props.page === 2 ? "1" : "0")};
  transition: left 0.4s ease-in-out;
  z-index: 1;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledWhiteBG = styled.div`
  position: absolute;
  top: ${(props) => (props.page === 2 ? "0" : "-100%")};
  left: 50%;
  width: 50%;
  height: 100%;
  background: white;
  transition: 0.5s top ease-in-out;
  display: grid;
  grid-template-columns: 26% 74%;
  grid-template-rows: repeat(8, 1fr);
  /* overflow: hidden; */

  .motiv {
    display: none;
  }

  @media screen and (max-width: 320px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 45vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 75px;
    .motiv {
      transform: rotate(90deg) translateY(-42.3%);
      height: 100vw;
      width: 50px;
      display: block;
      margin-top: -130px;
    }
  }
  @media screen and (min-width: 321px) and (max-width: 375px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 45vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 75px;
    .motiv {
      transform: rotate(90deg) translateY(-43.3%);
      height: 100vw;
      width: 50px;
      display: block;
      margin-top: -130px;
    }
  }
  @media screen and (min-width: 376px) and (max-width: 428px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    margin-bottom: 75px;
    .motiv {
      transform: rotate(90deg) translateY(-44%);
      height: 100vw;
      width: 50px;
      display: block;
      margin-top: -130px;
    }
  }
`;

const StyledBlueBG = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.page === 2 ? "0" : "-100%")};
  width: 50%;
  height: 100%;
  background: #0f1026;
  transition: 0.5s left ease-in-out;
  display: grid;
  grid-template-columns: 7.5% 85% 7.5%;
  grid-template-rows: repeat(8, 1fr);
  overflow: hidden;

  .blankRef {
    width: 100%;
    height: 100px;
  }

  @media screen and (max-width: 428px) {
    position: relative;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100vw;
    height: 55vh;
    background: white;
  }
`;

const StyledHeader = styled.img`
  grid-row: 3/3;
  grid-column: 2/2;
  width: 47.5%;
  align-self: end;
  padding-top: 5vh;
  @media screen and (max-width: 320px) {
    margin-top: 50px;
    height: 300px;
    top: 35%;
    filter: invert(1);
    width: 160px;
    height: 45px;
    padding-top: 0;
    align-self: center;
  }
  @media screen and (min-width: 321px) and (max-width: 375px) {
    margin-top: 50px;
    height: 300px;
    top: 35%;
    filter: invert(1);
    width: 160px;
    height: 45px;
    padding-top: 0;
    align-self: center;
  }
  @media screen and (min-width: 376px) and (max-width: 428px) {
    margin-top: 50px;
    height: 300px;
    top: 35%;
    filter: invert(1);
    width: 160px;
    height: 45px;
    padding-top: 0;
    align-self: center;
  }
`;

const StyledHeaderText = styled.span`
  color: white;
  grid-row: 5/5;
  grid-column: 2/2;
  font-size: 1.1vw;
  width: 74%;
  font-family: "Medium";
  font-weight: 700;
  letter-spacing: 1.44px;
  line-height: 130%;
  @media screen and (max-width: 320px) {
    color: #0f1026;
    justify-self: center;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    width: calc(100% - 40px);
    font-size: 0.9rem;
    margin-top: 10px;
  }
  @media screen and (min-width: 321px) and (max-width: 375px) {
    color: #0f1026;
    justify-self: center;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    width: calc(100% - 40px);
    font-size: 1.1rem;
    margin-top: 10px;
  }
  @media screen and (min-width: 376px) and (max-width: 428px) {
    color: #0f1026;
    justify-self: center;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    width: calc(100% - 40px);
    font-size: 1.3rem;
    margin-top: 10px;
  }
`;

const StyledWhiteLines = styled.img`
  grid-row: 3/3;
  grid-column: 2/2;
  height: 15vw;
  @media screen and (max-width: 428px) {
    display: none;
  }
`;

const StyledWhiteSecondaryText = styled.span`
  grid-row: 5/5;
  grid-column: 2/2;
  color: #0f1026;
  font-size: 1.1vw;
  font-family: "Medium";
  letter-spacing: 1.44px;
  font-weight: 600;
  line-height: 130%;
  width: 78%;
  margin-top: -5vw;
  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
    width: calc(100% - 40px);
    padding: 0 20px;
    margin-top: -120px;
    grid-row: 1/1;
    grid-column: 1/1;
  }
  @media screen and (min-width: 321px) and (max-width: 375px) {
    font-size: 1rem;
    width: calc(100% - 40px);
    padding: 0 20px;
    margin-top: -130px;
    grid-row: 1/1;
    grid-column: 1/1;
  }
  @media screen and (min-width: 376px) and (max-width: 428px) {
    font-size: 1.2rem;
    width: calc(100% - 40px);
    padding: 0 20px;
    margin-top: -120px;
    grid-row: 1/1;
    grid-column: 1/1;
  }
`;

const Lore = ({ forwardedRef, currentPage, images }) => {
  const addImageLoaded = () => {
    images();
  };
  return (
    <>
      <StyledBlueBG page={currentPage}>
        {window.outerWidth < 429 && (
          <div className="blankRef" ref={forwardedRef} />
        )}
        <StyledHeader src={theHeader}/>
        <StyledHeaderText>
          In the beginning, only the eternal and omnipotent Chaos existed.
          Everything originated from it- light, darkness, the planets, the
          stars, the gods, and mankind.
          <br />
          Following the great war between the Titans and the <br />
          Gods, a sacred die determined Zeus as the Master of the Skies,
          Poseidon was to be the Ruler of the Seas and Hades- the King of the
          Underworld. <br /> <br />
          Onlv the throne of Earth remained vacant. Evervone wanted to ascend on
          it. The hunger for power plagued every single one among the Gods.
          However, no one dared to even attempt seizing the throne of Earth. The
          eternal Chaos realizing the lust for power among the Gods took matters
          into his hands.
        </StyledHeaderText>
      </StyledBlueBG>
      <StyledHelmet
        src={helmet}
        alt=""
        page={currentPage}
        onLoad={addImageLoaded}
      />
      <StyledWhiteBG page={currentPage}>
        <img src={arka} alt="motiv" className="motiv" />
        <StyledWhiteLines src={lines} onLoad={addImageLoaded} />
        <StyledWhiteSecondaryText>
          The king of the Earth had to be the worthiest among the Olympians and
          so the competition had to be fair. Chaos chose 14 of the most
          ambitious Gods and created a set of rules for the inevitable war that
          was to come. Every participating God had the right to command an army
          of 777 heroes.
          <br /> <br />
          Chaos determined that it was only fitting for the war over the rule of
          Earth to take place on it. The Gods and their Champions were now
          locked in the Cursed Chests of Chaos. The time for their opening has
          finally come. Become one of the HEROES and the battle over Earth.
        </StyledWhiteSecondaryText>
      </StyledWhiteBG>
    </>
  );
};

export default Lore;
