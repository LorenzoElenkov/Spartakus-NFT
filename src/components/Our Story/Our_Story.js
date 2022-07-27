import React from "react";

import styled from "styled-components";

import theHeader from "../../images/Our Story/Our Story.png";
import helmet from "../../images/shlem201.png";
import lines from "../../images/Our Story/Lines.png";
import arka from "../../images/arka.png";

const StyledHelmet = styled.img`
  grid-column: 2/4;
  grid-row: 1/1;
  height: 50vw;
  margin-left: -3.5%;
  justify-self: center;
  align-self: center;
  z-index: 1;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledWhiteBG = styled.div`
  grid-column: 3/5;
  grid-row: 1/1;
  background: white;
  display: grid;
  grid-template-columns: 26% 74%;
  grid-template-rows: repeat(8, 1fr);
  height: 100vh;

  @media screen and (max-width: 320px) {
    height: max-content;
    display: flex;
    flex-direction: column;
    margin-bottom: 75px;
    grid-column: 1/1;
    grid-row: 3/3;
  }
  @media screen and (min-width: 321px) and (max-width: 375px) {
    height: max-content;
    display: flex;
    flex-direction: column;
    margin-bottom: 75px;
    grid-column: 1/1;
    grid-row: 3/3;
  }
  @media screen and (min-width: 376px) and (max-width: 428px) {
    height: max-content;
    display: flex;
    flex-direction: column;
    margin-bottom: 75px;
    grid-column: 1/1;
    grid-row: 3/3;
  }
`;

const StyledBlueBG = styled.div`
  grid-column: 1/3;
  grid-row: 1/1;
  background: #0f1026;
  display: grid;
  grid-template-columns: 7.5% 85% 7.5%;
  grid-template-rows: repeat(8, 1fr);
  overflow: hidden;
  height: 100vh;
  .blankRef {
    width: 100%;
    height: 100px;
  }

  @media screen and (max-width: 428px) {
    grid-column: 1/1;
    grid-row: 1/1;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100vw;
    height: 55vh;
    background: white;
    height: max-content;
  }
`;

const StyledHeader = styled.img`
  grid-row: 3/3;
  grid-column: 2/2;
  width: 47.5%;
  align-self: end;
  padding-top: 5vh;
  @media screen and (max-width: 320px) {
    height: 300px;
    top: 35%;
    filter: invert(1);
    width: 200px;
    height: 55px;
    padding-top: 0;
    align-self: center;
  }
  @media screen and (min-width: 321px) and (max-width: 375px) {
    height: 300px;
    top: 35%;
    filter: invert(1);
    width: 220px;
    height: 60px;
    padding-top: 0;
    align-self: center;
  }
  @media screen and (min-width: 376px) and (max-width: 428px) {
    height: 300px;
    top: 35%;
    filter: invert(1);
    width: 220px;
    height: 60px;
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
    font-size: 1.3rem;
    margin-top: 30px;
  }
  @media screen and (min-width: 321px) and (max-width: 375px) {
    color: #0f1026;
    justify-self: center;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    width: calc(100% - 40px);
    font-size: 1.3rem;
    margin-top: 30px;
  }
  @media screen and (min-width: 376px) and (max-width: 428px) {
    color: #0f1026;
    justify-self: center;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    width: calc(100% - 40px);
    font-size: 1.3rem;
    margin-top: 30px;
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
    font-size: 1.3rem;
    width: calc(100% - 40px);
    padding: 0 20px;
    margin-top: -150px;
    grid-row: 1/1;
    grid-column: 1/1;
  }
  @media screen and (min-width: 321px) and (max-width: 375px) {
    font-size: 1.3rem;
    width: calc(100% - 40px);
    padding: 0 20px;
    margin-top: -175px;
    grid-row: 1/1;
    grid-column: 1/1;
  }
  @media screen and (min-width: 376px) and (max-width: 428px) {
    font-size: 1.3rem;
    width: calc(100% - 40px);
    padding: 0 20px;
    margin-top: -200px;
    grid-row: 1/1;
    grid-column: 1/1;
  }
`;

const StyledStoryContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 428px) {
    grid-template-columns: 1fr max-content 1fr;
    height: max-content;

    .motiv {
      transform: rotate(90deg) translateY(-40.5%);
      margin-top: -50%;
      height: 120vw;
      width: 50px;
      grid-row: 2/2;
      grid-column: 1/1;
    }
  }

`;

const Lore = ({ forwardedRef, currentPage, images }) => {
  const addImageLoaded = () => {
    images();
  };
  return (
    <StyledStoryContainer>
      <StyledBlueBG page={currentPage}>
        {window.outerWidth < 429 && (
          <div className="blankRef" ref={forwardedRef} />
        )}
        <StyledHeader src={theHeader} />
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
      <img src={arka} alt="motiv" className="motiv" />

      <StyledWhiteBG page={currentPage}>
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
    </StyledStoryContainer>
  );
};

export default Lore;
