import React, { useLayoutEffect, useRef, useState } from "react";

import styled from "styled-components";

import theHeader from "../../images/Our Story/Our Story.png";
import helmet from "../../images/Our Story/helmet.png";
import lines from "../../images/Our Story/Lines.png";

const StyledStoryContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 1;
`;

const StyledHelmet = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 50% 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 20%;
  opacity: 1;
  transition: left 0.4s ease-in-out;
  z-index: 1;
`;

const StyledWhiteBG = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50vw;
  height: 100%;
  background: white;
  // transition: 0.25s left ease-in-out;
  display: grid;
  grid-template-columns: 26% 74%;
  grid-template-rows: repeat(8, 1fr);
`;

const StyledBlueBG = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: #0f1026;
  // transition: 0.25s left ease-in-out;
  display: grid;
  grid-template-columns: 7.5% 85% 7.5%;
  grid-template-rows: repeat(8, 1fr);
  opacity: ${props => props.opac};
`;

const StyledHeader = styled.img`
  grid-row: 3/3;
  grid-column: 2/2;
  width: 47.5%;
  align-self: end;
  padding-top: 5vh;
`;

const StyledHeaderText = styled.span`
  color: white;
  grid-row: 5/5;
  grid-column: 2/2;
  font-size: 1.1vw;
  width: 74%;
  font-family: "Medium";
  // font-weight: 700;
  letter-spacing: 1.44px;
  line-height: 130%;
`;

const StyledWhiteLines = styled.img`
    grid-row: 3/3;
    grid-column: 2/2;
    height: 15vw;
`;

const StyledWhiteSecondaryText = styled.span`
    grid-row: 5/5;
    grid-column: 2/2;
    color: #0f1026;
    font-size: 1.1vw;
    font-family: 'Medium';
    letter-spacing: 1.44px;
    // font-weight: 600;
    line-height: 130%;
    width: 78%;
    margin-top: -5vw;
`;

const StyledMapMenu = styled.div`


`;

const StyledMap = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    // height: 90vh;
`;



const Lore = ({ currentPage }) => {
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const thisRef = useRef(null);
  let topPos = 0;
  let offset = 0;
  const onScroll = () => {
    topPos = thisRef.current.getBoundingClientRect().top;
    offset = ((window.innerHeight - topPos) / window.innerHeight).toFixed(2);
    if (topPos > 30) {
      oneRef.current.style.opacity = offset;
      oneRef.current.style.left = -(100 - (offset * 100)) + 'vw';
      twoRef.current.style.opacity = offset - 0.5;
      threeRef.current.style.opacity = offset - 0.5;
      // threeRef.current.style.left = (100 - (offset * 50)) + 'vw';
      threeRef.current.style.top = 100 - (offset * 100) + 'vh';
    }
    else if (topPos < -30) {
      oneRef.current.style.opacity = -offset + 2;
      oneRef.current.style.left = 100 - offset * 100 + 'vw';
      twoRef.current.style.opacity = -offset + 2;
      threeRef.current.style.opacity = -offset -0.5 + 2;
      // threeRef.current.style.left = offset * 50 + 'vw';
      threeRef.current.style.top = 100 - (offset * 100) + 'vh';
    }
    else {
      oneRef.current.style.opacity = 1;
      oneRef.current.style.left = '0vw';
      twoRef.current.style.opacity = 1;
      threeRef.current.style.opacity = 1;
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {window.removeEventListener('scroll', onScroll)};
  });

  return (
    <StyledStoryContainer ref={thisRef}>
      <StyledBlueBG page={currentPage} ref={oneRef} offset={offset}>
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
      <StyledHelmet src={helmet} alt="" page={currentPage} ref={twoRef}/>
      <StyledWhiteBG page={currentPage} ref={threeRef}>
        <StyledWhiteLines src={lines}/>
        <StyledWhiteSecondaryText>
            The king of the Earth had to be the worthiest among
            the Olympians and so the competition had to be fair.
            Chaos chose 14 of the most ambitious Gods and
            created a set of rules for the inevitable war that was
            to come. Every participating God had the right to
            command an army of 777 heroes.
            <br /> <br />
            Chaos determined that it was only fitting for the war
            over the rule of Earth to take place on it. The Gods
            and their Champions were now locked in the Cursed
            Chests of Chaos. The time for their opening has
            finally come. Become one of the HEROES and the
            battle over Earth.
        </StyledWhiteSecondaryText>
      </StyledWhiteBG>
    </StyledStoryContainer>
  );
};

export default Lore;
