import React, { useRef, useLayoutEffect } from "react";

import styled from "styled-components";

import shoulder from "../../images/shlem3.png";
import tokenImg from '../../images/roadmpa/token.png';

const StyledContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  display: grid;
  grid-template-columns: 15% 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  row-gap: 1vw;
  transition: top 0.5s ease-in-out;

  .shoulder {
    position: absolute;
    top: 40vh;
    left: 0;
    width: 35%;
    transform: rotate(-22deg);
  }

  .title {
    font-size: 5vw;
    font-family: "Magh";
    font-weight: 700;
    color: #4b95a6;
    grid-column: 2/2;
    align-self: end;
    letter-spacing: 1px;
  }
  .text {
      grid-column: 2/2;
      color: black;
      font-family: 'Medium';
      font-size: 1.1vw;
      white-space: pre-line;
      width: 70%;
    letter-spacing: 1px;
  }

  .previewImg {
      grid-column: 3/3;
      grid-row: 2/2;
    width: 90%;
    margin-top: -17.5vh;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.5);
  }

`;

const Token = ({ currentPage }) => {

  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const fourRef = useRef(null);
  const thisRef = useRef(null);
  let topPos = 0;
  let offset = 0;
  const onScroll = () => {
    topPos = thisRef.current.getBoundingClientRect().top;
    offset = ((window.innerHeight - topPos) / window.innerHeight).toFixed(2);
    if (topPos > 30) {
      oneRef.current.style.left = -110 + offset * 100 + 'vw';
      twoRef.current.style.fontSize = offset*5 + 'vw';
      twoRef.current.style.opacity = offset/2;
      // threeRef.current.style.fontSize = offset + 'vw';
      fourRef.current.style.width = (90 * offset) + '%';
      fourRef.current.style.opacity = offset;
    }
    else if (topPos < -30) {
      oneRef.current.style.left = -(offset - 0.9) * 100 + 'vw';
      twoRef.current.style.opacity = -(offset - 1)*5 + 1;
      threeRef.current.style.opacity = -(offset - 1)*5 + 1;
      fourRef.current.style.opacity = -(offset - 1)*5 + 1;
      fourRef.current.style.marginLeft = (offset - 1) * -100 + 'vw';
    }
    else {
      // oneRef.current.style.opacity = 1;
      oneRef.current.style.left = '-13vw';
      twoRef.current.style.opacity = 1;
      threeRef.current.style.opacity = 1;
      fourRef.current.style.width = '88%';
      fourRef.current.style.opacity = offset;
      fourRef.current.style.marginLeft = 0;
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {window.removeEventListener('scroll', onScroll)};
  });

  return (
    <StyledContainer page={currentPage} ref={thisRef}>
      <img src={shoulder} alt="" className="shoulder" ref={oneRef}/>
      <span className="title" ref={twoRef}>$HROM</span>
      <span className="text" ref={threeRef}>
        Storing the token will be available in every Solana wallet, for example
        Phantom. Swapping will mostly be available on Raydium and Saber.<br /> $HROM
        will be equally distributed among all of the tribes in the strategic
        game. <br /> <br />The rarity of the “Heroes of Olympus” NFT will determine the
        amount of $HROM received. The coin will play a major role in the game’s
        mechanics.
      </span>
      <img src={tokenImg} alt='' className='previewImg' ref={fourRef}/>
    </StyledContainer>
  );
};

export default Token;
