import React, { useState, useRef, useLayoutEffect } from "react";

import styled from "styled-components";

import fullMap from "../../images/Our Story/0.svg";
import first from "../../images/Our Story/1.svg";
import second from "../../images/Our Story/2.svg";
import third from "../../images/Our Story/3.svg";
import forth from "../../images/Our Story/4.svg";
import fifth from "../../images/Our Story/5.svg";
import sixth from "../../images/Our Story/6.svg";
import seventh from "../../images/Our Story/7.svg";
import eight from "../../images/Our Story/8.svg";
import ninth from "../../images/Our Story/9.svg";
import tenth from "../../images/Our Story/10.svg";
import eleventh from "../../images/Our Story/11.svg";
import twelveth from "../../images/Our Story/12.svg";
import thirtheenth from "../../images/Our Story/13.svg";
import fortheenth from "../../images/Our Story/14.svg";

import heph from '../../images/heph.png';

const StyledMapContainer = styled.div`
  @font-face {
    font-family: "Magh";
    src: url("./fonts/Maghfirea.otf");
  }
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  display: grid;
  grid-template-columns: 50% 50%;
  transition: left 0.5s ease-in-out;
`;

const StyledMap = styled.img`
  position: relative;
  width: 165%;
  align-self: center;
  justify-self: start;
  grid-row: 1/1;
  grid-column: 1/1;
`;

const StyledMapText = styled.span`
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-rows: 5% max-content max-content max-content;
  width: 55%;
  heigth: 60%;
  row-gap: 4vh;

  .areaTitle {
    font-family: "Magh";
    font-size: 4vw;
    letter-spacing: 4px;
    text-align: center;
    color: #f2911b;
    grid-row: 2/2;
    font-weight: 600;
  }

  .areaText {
    font-family: "Medium";
    font-size: 1.1vw;
    white-space: pre-line;
    letter-spacing: 0.7px;
    text-align: center;
    grid-row: 3/3;

    img {
      width: 50%;
      opacity: 0.6;
    }
  }

  .areaHint {
    font-family: "Medium";
    font-size: 0.8vw;
    letter-spacing: 0.7px;
    text-align: center;
    padding: 2px 20px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: max-content;
    justify-self: center;
    align-self: end;
    grid-row: 4/4;
    animation: hintAnimate 3s infinite;
  }

  @keyframes hintAnimate {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

const StyledMapPointers = styled.div`
  position: relative;
  width: 75%;
  height: 45vw;
  grid-row: 1/1;
  grid-column: 1/1;
  transform: translateX(47.5%) translateY(-2.5%);
  align-self: center;
  z-index: 9001;
  .one {
    position: absolute;
    top: 10%;
    left: 83.5%;
    width: 7.5%;
    border: 1px solid white;
    border-radius: 10px;
    font-weight: 700;
    font-size: 1vw;
    color: white;
    background: transparent;
    transition: transform 0.35s;
  }

  .two {
    position: absolute;
    top: 10%;
    left: 55.5%;
    width: 7.5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 1vw;
    font-weight: 700;
    color: white;
    background: transparent;
    transition: transform 0.35s;

  }
  .three {
    position: absolute;
    top: 17%;
    left: 30.5%;
    width: 7.5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 1vw;
    font-weight: 700;
    color: white;
    background: transparent;
    transition: transform 0.35s;

  }
  .four {
    position: absolute;
    top: 29%;
    left: 15.5%;
    width: 7.5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 1vw;
    font-weight: 700;
    color: white;
    background: transparent;
    transition: transform 0.35s;

  }
  .five {
    position: absolute;
    top: 30%;
    left: 32%;
    width: 7.5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 1vw;
    font-weight: 700;
    color: white;
    background: transparent;
    transition: transform 0.35s;

  }
  .six {
    position: absolute;
    top: 38%;
    left: 24%;
    width: 7.5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 1vw;
    font-weight: 700;
    color: white;
    background: transparent;
    transition: transform 0.35s;

  }
  .seven {
    position: absolute;
    top: 46%;
    left: 27%;
    width: 7.5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 1vw;
    font-weight: 700;
    color: white;
    background: transparent;
    transition: transform 0.35s;

  }
  .eight {
    position: absolute;
    top: 41%;
    left: 39%;
    width: 7.5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 1vw;
    font-weight: 700;
    color: white;
    background: transparent;
    transition: transform 0.35s;

  }
  .twelve {
    position: absolute;
    top: 60%;
    left: 27%;
    width: 7.5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 1vw;
    font-weight: 700;
    color: white;
    background: transparent;
    transition: transform 0.35s;

  }
  .eleven {
    position: absolute;
    top: 60%;
    left: 39%;
    width: 7.5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 1vw;
    font-weight: 700;
    color: white;
    background: transparent;
    transition: transform 0.35s;

  }
  .thirtheen {
    position: absolute;
    top: 71.5%;
    left: 38%;
    width: 7.5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 1vw;
    font-weight: 700;
    color: white;
    background: transparent;
    transition: transform 0.35s;

  }
  .fourteen {
    position: absolute;
    top: 92.5%;
    left: 72%;
    width: 7.5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 1vw;
    font-weight: 700;
    color: white;
    background: transparent;
    transition: transform 0.35s;

  }
  .ten {
    position: absolute;
    top: 54%;
    left: 52%;
    width: 7.5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 1vw;
    font-weight: 700;
    color: white;
    background: transparent;
    transition: transform 0.35s;

  }
  .nine {
    position: absolute;
    top: 49%;
    left: 57.5%;
    width: 7.5%;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 1vw;
    font-weight: 700;
    color: white;
    background: transparent;
    transition: transform 0.35s;
  }

  .one:hover,
  .two:hover,
  .three:hover,
  .four:hover,
  .five:hover,
  .six:hover,
  .seven:hover,
  .eight:hover,
  .nine:hover,
  .ten:hover,
  .eleven:hover,
  .twelve:hover,
  .thirtheen:hover,
  .fourteen:hover {
    background: white;
    color: black;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
    transform: scale(1.2);
  }
`;
const Map = ({ currentPage }) => {
  const [clickedArea, setClickedArea] = useState(0);

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
      oneRef.current.style.opacity = offset * 2 - 1;
      oneRef.current.style.left = -100 + offset * 100 + 'vw';
      threeRef.current.style.left = -100 + offset * 100 + 'vw';
      twoRef.current.style.opacity = offset * 2 - 1;
    }
    else if (topPos < -30) {
      oneRef.current.style.opacity = -(offset - 1)*3 + 1;
      threeRef.current.style.left = (offset - 1) * 50 + 'vw';
      oneRef.current.style.left = (offset - 1) * 50 + 'vw';
      twoRef.current.style.opacity = -(offset - 1)*8 + 1;
      if (oneRef.current.style.opacity <= 0) {
        oneRef.current.style.display = 'none';
        threeRef.current.style.display = 'none';
      } else {
        oneRef.current.style.display = 'block';
        threeRef.current.style.display = 'block';
      }
    }
    else {
      oneRef.current.style.opacity = 1;
      oneRef.current.style.left = '0vw';
      threeRef.current.style.left = '0vw';
      twoRef.current.style.opacity = 1;
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {window.removeEventListener('scroll', onScroll)};
  });

  return (
    <StyledMapContainer page={currentPage} ref={thisRef}>
      <StyledMap
        src={
          clickedArea === 0
            ? fullMap
            : clickedArea === 1
            ? first
            : clickedArea === 2
            ? second
            : clickedArea === 3
            ? third
            : clickedArea === 4
            ? forth
            : clickedArea === 5
            ? fifth
            : clickedArea === 6
            ? sixth
            : clickedArea === 7
            ? eight
            : clickedArea === 8
            ? seventh
            : clickedArea === 9
            ? tenth
            : clickedArea === 10
            ? fortheenth
            : clickedArea === 11
            ? eleventh
            : clickedArea === 12
            ? ninth
            : clickedArea === 13
            ? twelveth
            : thirtheenth
        }
        clicked={clickedArea}
        ref={oneRef}
      />
      <StyledMapPointers ref={threeRef}>
        <button className="fourteen" alt="" onClick={() => setClickedArea(14)}>
          14
        </button>
        <button className="thirtheen" alt="" onClick={() => setClickedArea(13)}>
          13
        </button>
        <button className="twelve" alt="" onClick={() => setClickedArea(12)}>
          12
        </button>
        <button className="eleven" alt="" onClick={() => setClickedArea(11)}>
          11
        </button>
        <button className="ten" alt="" onClick={() => setClickedArea(10)}>
          10
        </button>
        <button className="nine" alt="" onClick={() => setClickedArea(9)}>
          9
        </button>
        <button className="eight" alt="" onClick={() => setClickedArea(8)}>
          8
        </button>
        <button className="seven" alt="" onClick={() => setClickedArea(7)}>
          7
        </button>
        <button className="six" alt="" onClick={() => setClickedArea(6)}>
          6
        </button>
        <button className="five" alt="" onClick={() => setClickedArea(5)}>
          5
        </button>
        <button className="four" alt="" onClick={() => setClickedArea(4)}>
          4
        </button>
        <button className="three" alt="" onClick={() => setClickedArea(3)}>
          3
        </button>
        <button className="two" alt="" onClick={() => setClickedArea(2)}>
          2
        </button>
        <button className="one" alt="" onClick={() => setClickedArea(1)}>
          1
        </button>
      </StyledMapPointers>
      <StyledMapText clicked={clickedArea} ref={twoRef}>
        <span className="areaTitle">
          {clickedArea === 0
            ? "The map of Ancient Greece"
            : `HEPHAESTUS`}
        </span>
        <span className="areaText">
          {clickedArea === 0
            ? "This is the zone of the warfare between the divine tribes. Almighty Chaos has divided the land equally among the 14 Gods and their corresponding tribes.\n\nThe main goal of each God is to capture all of the areas and become the ruler of Ancient Greece! This could be done only when he defeats each tribe separately."
            : <img src={heph} alt=''/>}
        </span>
        <span className="areaHint">
          Click an area on the map to find out more!
        </span>
      </StyledMapText>
    </StyledMapContainer>
  );
};

export default Map;
