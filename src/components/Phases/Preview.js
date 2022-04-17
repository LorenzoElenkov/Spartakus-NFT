import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";

import previewImg from "../../images/roadmpa/previewImg.png";
import trident from "../../images/roadmpa/group143.png";
import previewImg2 from '../../images/gosho.png';

import arrow from '../../images/arrow.png';

const StyledContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25% 1% 1fr;
  transition: left 0.5s ease-in-out;

  .tridentImg {
    width: 3.5%;
    justify-self: center;
    align-self: end;
  }

  .previewText {
    font-family: "Magh";
    font-size: 2.5vw;
    justify-self: center;
    height: max-content;
  }

  button {
    position: absolute;
    background: transparent;
    border: none;
    width: 5vw;
    font-size: 2vw;
    z-index: 9999;
  }

  button:nth-child(3) {
    top: 56vh;
    left: 1%;
  }

  button:nth-child(4) {
    top: 53vh;
    left: 93%;
    transform: rotate(180deg);
  }

  .prevBut,
  .nextBut {
  }
`;

const StyledCorouselPreview = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  display: grid;
  grid-template-columns: repeat(5, 25%);
  column-gap: 5vw;
  .previewImg {
    width: 100%;
    box-shadow: 0 20px 20px 1px rgba(0, 0, 0, 0.5);
  }

  .previewImg:last-child {
      margin-right: 10vw;
  }


  
`;

const Preview = ({ currentPage }) => {
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
      //   oneRef.current.style.opacity = offset * 2 - 1;
      oneRef.current.style.width = 7 * offset + "vw";
      //   twoRef.current.style.opacity = offset * 2 - 1;
      twoRef.current.style.fontSize = offset * 3 + "vw";
      //   threeRef.current.style.opacity = offset * 2 - 1;
      threeRef.current.style.top = 100 - offset * 100 + "vh";
    } else if (topPos < -30) {
      oneRef.current.style.opacity = -(offset - 1) * 3 + 1;
      twoRef.current.style.opacity = -(offset - 1) * 3 + 1;
      threeRef.current.style.opacity = -(offset - 1) * 3 + 1;
    } else {
      oneRef.current.style.opacity = 1;
      twoRef.current.style.opacity = 1;
      threeRef.current.style.opacity = 1;
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const moveNext = () => {
    threeRef.current.scrollLeft += 100;
    console.log(123);
  };

  const movePrev = () => {
    threeRef.current.scrollLeft -= 100;
  };

  return (
    <StyledContainer page={currentPage} ref={thisRef}>
      <img src={trident} alt="" className="tridentImg" ref={oneRef} />
      <span className="previewText" ref={twoRef}>
        Preview our Collection
      </span>
      <button onClick={movePrev}>
        <img src={arrow} alt="" className="prevBut" />
      </button>
      <button onClick={moveNext}>
        <img src={arrow} alt="" className="nextBut" />
      </button>
      <StyledCorouselPreview ref={threeRef}>
        <img src={previewImg2} alt="" className="previewImg" />
        <img src={previewImg2} alt="" className="previewImg" />
        <img src={previewImg2} alt="" className="previewImg" />
        <img src={previewImg2} alt="" className="previewImg" />
        <img src={previewImg2} alt="" className="previewImg" />
      </StyledCorouselPreview>
    </StyledContainer>
  );
};

export default Preview;
