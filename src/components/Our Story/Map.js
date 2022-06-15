import React, { useState } from "react";

import styled from "styled-components";

import fullMap from "../../images/map/PNG Karti0.png";
import first from "../../images/PNG Karti1.png";
import second from "../../images/PNG Karti2.png";
import third from "../../images/PNG Karti3.png";
import forth from "../../images/PNG Karti4.png";
import fifth from "../../images/PNG Karti5.png";
import sixth from "../../images/PNG Karti6.png";
import seventh from "../../images/PNG Karti7.png";
import eight from "../../images/PNG Karti8.png";
import ninth from "../../images/PNG Karti9.png";
import tenth from "../../images/PNG Karti10.png";
import eleventh from "../../images/PNG Karti11.png";
import twelveth from "../../images/PNG Karti12.png";
import thirtheenth from "../../images/PNG Karti13.png";
import fortheenth from "../../images/PNG Karti14.png";


import hera from '../../images/map/hera.png';
import zeus from '../../images/map/lightning.png';
import aphro from '../../images/map/aphrodite.png';
import artemis from '../../images/map/artemis.png';
import heph from '../../images/map/hephaestus.png';
import ares from '../../images/map/ares.png';
import apollon from '../../images/map/apollo.png';
import hermes from '../../images/map/hermes.png';
import deimos from '../../images/map/hades.png';
import athena from '../../images/map/athena.png';
import nyx from '../../images/map/persephone.png';
import thanatos from '../../images/map/titan.png';
import hades from '../../images/map/cerberus.png';
import poseidon from '../../images/map/trident.png';

const StyledMapContainer = styled.div`
  @font-face {
    font-family: "Magh";
    src: url("./fonts/Maghfirea.otf");
  }
  position: absolute;
  top: 0;
  left: ${(props) => (props.page === 3 ? "0" : "-110vw")};
  width: 100vw;
  height: 100vh;
  background: white;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100vh;
  transition: left 0.5s ease-in-out;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    position: relative;
    left: 0;
  }
`;

const StyledMapWrapper = styled.div`
  margin-top: 10%;
  height: 86%;
  justify-self: end;
  grid-row: 1/1;
  grid-column: 1/1;
  position: relative;
`;

const StyledMap = styled.img`
  height: 100%;
  /* background-color: rgba(0, 255, 0, 0.2); */
`;

const StyledMapText = styled.span`
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-rows: 1fr 1fr 1.5fr 1fr;
  width: 55%;
  height: 60%;
  row-gap: 40px;
  .areaTitle {
    font-family: "Magh";
    font-size: ${props => props.clicked === 0 ? '4vw' : '6vw'};
    letter-spacing: 4px;
    text-align: center;
    color: #f2911b;
    grid-row: 1/1;
    grid-column: 1/1;
    font-weight: 900;
    z-index: 1;
  }

  .areaText {
    font-family: "Medium";
    font-size: 1.1vw;
    white-space: pre-line;
    letter-spacing: 0.7px;
    text-align: center;
    /* grid-row: 4/4; */
    grid-row: ${props => props.clicked !== 0 ? '4/4' : '3/3'};
    grid-column: 1/1;
    z-index: 1;
    /* margin-top: ${props => props.clicked === 0 ? '50px' : '0px'}; */
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
    height: max-content;
    justify-self: center;
    grid-row: ${props => props.clicked !== 0 ? '5/5' : '4/4'};
    grid-column: 1/1;
    margin-top: ${props => props.clicked === 0 ? '30px' : '0px'};
    animation: hintAnimate 3s infinite;
  }

  .areaIcon {
    /* height: 350px; */
    /* height: 100%; */
    width: 80%;
    opacity: 0.15;
    grid-row: 1/3;
    grid-column: 1/1;
    justify-self: center;
    /* transform: translateY(-15%); */
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
  /* position: relative;
  width: 80%;
  height: 88.8%;
  grid-row: 1/1;
  grid-column: 1/1;
  justify-self: end;
  align-self: flex-end;
  background-color: rgba(255, 0, 0, 0.2);
  z-index: 9001; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(255, 0, 0, 0.2); */
  .one {
    position: absolute;
    top: 11.5%;
    left: 82%;
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
    top: 12%;
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
    top: 19%;
    left: 31.5%;
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
    left: 17%;
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
    top: 30.5%;
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
    top: 39%;
    left: 24.5%;
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
    top: 47%;
    left: 27.5%;
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
    top: 41.5%;
    left: 39.5%;
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
    left: 27.5%;
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
    left: 39.5%;
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
    top: 71%;
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
    top: 91.5%;
    left: 70%;
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
    left: 56.8%;
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
const Map = ({ currentPage, images }) => {

  const addImageLoaded = () => {
    images();
  };

  const [clickedArea, setClickedArea] = useState(0);
  if (currentPage !== 3 && clickedArea !== 0) {
    setClickedArea(0);
  }
  return (
    <StyledMapContainer page={currentPage}>
      <StyledMapWrapper>
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
            ? seventh
            : clickedArea === 8
            ? eight
            : clickedArea === 9
            ? ninth
            : clickedArea === 10
            ? tenth
            : clickedArea === 11
            ? eleventh
            : clickedArea === 12
            ? twelveth
            : clickedArea === 13
            ? thirtheenth
            : fortheenth
        }
        clicked={clickedArea}
        onLoad={addImageLoaded}
      ></StyledMap>
      <StyledMapPointers>
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
      </StyledMapWrapper>
      <StyledMapText clicked={clickedArea}>
        <span className="areaTitle">
          {clickedArea === 0
            ? <span>The map of Ancient Greece</span>
            : <span>{areasNames[clickedArea]?.name}</span>}
        </span>
        {clickedArea !== 0 && <img src={areasNames[clickedArea].icon} alt='' className='areaIcon' onLoad={addImageLoaded} draggable={false} onContextMenu={(e) => e.preventDefault()}/>}
        <span className="areaText">
          {clickedArea === 0
            ? "This is the zone of the warfare between the divine tribes. Almighty Chaos has divided the land equally among the 14 Gods and their corresponding tribes.\n\nThe main goal of each God is to capture all of the areas and become the ruler of Ancient Greece! This could be done only when he defeats each tribe separately."
            : areasText[clickedArea-1].text}
        </span>
        <span className="areaHint">
          Click an area on the map to find out more!
        </span>
      </StyledMapText>
    </StyledMapContainer>
  );
};
// <img src={areasNames[clickedArea].icon} alt='' className='areaIcon'/>
export default Map;

const areasNames = [
  {name: ''},
  {name: 'Hera', icon: hera},
  {name: 'Zeus', icon: zeus},
  {name: 'Aphrodite', icon: aphro},
  {name: 'Artemis', icon: artemis},
  {name: 'Hephaestus', icon: heph},
  {name: 'Ares', icon: ares},
  {name: 'Apollon', icon: apollon},
  {name: 'Hermes', icon: hermes},
  {name: 'Deimos', icon: deimos},
  {name: 'Athena', icon: athena},
  {name: 'Nyx', icon: nyx},
  {name: 'Thanatos', icon: thanatos},
  {name: 'Hades', icon: hades},
  {name: 'Poseidon', icon: poseidon},
];

const areasText = [
  {text: "The Land, where family and childbirth are the cornerstones of everything. Hera’s kingdom is right next to her husband’s (Zeus) land. That, however, does not mean that this place is safe from war"},
  {text: "The Land, where the one and only God of thunder reigns. It is the biggest realm in Ancient Greece. Its unique weather is dictated by the mood of the mighty Zeus"},
  {text: "The Land, where love is everywhere. The populace of this place is Hedonistic and Decadent. Nature—is almost as beautiful as the one in Elysium"},
  {text: "The Land, where nature is at its finest and wildlife is everywhere. Hunting is a religious activity here, and the locals worship the Land as if it is a deity. For Mother nature which feeds mankind with livestock and fertile Land, is worthy of the utmost respect"},
  {text: "The Land, where blacksmiths live and work. Weapons of the finest quality are produced here, bathed in the blood, sweat, and tears of the most talented craftsmen"},
  {text: "The Land, where the best warriors of Greece complete their training. Here the special ones are chosen by the God of war to polish their skills to become unstoppable. The conditions here are rough, creating the best training for the most esteemed warriors of Greece"},
  {text: "The Land, where music is in the air. Rich in herbs, this place is where the cultivation and preparation of different remedies is at its finest. The magnificent God Apollon reigns in these lands"},
  {text: "The Land of wittiness, where everyone is sharp as a whip and cunning as a fox. The ruler here, Hermes, is the fastest God alive. His manipulative skills are his strongest weapon in battle. The army of Hermes is comprised of thieves and other low lives who make sure to leave the bodies of their defeated enemies without a single penny"},
  {text: "The son of Ares, Deimos, is the most dreadful of the gods. Fear and horror rule over his realm. Only a handful can survive the inhospitable conditions of these lands. The strongest power of Deimos’s men is their ability to instill panic into their enemies"},
  {text: "The Land of wisdom, where philosophy is respected the most. Here, Every issue is solved through lengthy and tedious discussions. However, Military prowess is as valued as knowledge. Athena’s most precious weapon is her sharp mind, making her a strong contender."},
  {text: "The Land of lost souls and shadows, where Nyx, the first Goddess, reigns. Even the almighty Zeus fears the power of this deity, which is why her territory is so distant from the Land of thunders. The power of Nyx culminates during the night, which is why her kingdom is dark and covered with shadows."},
  {text: "The Land of death, where horror permeates everything and the sun never rises. Fear is all one could feel when entering this dark place. Thanatos, the God of death, decides the destiny of those brave enough to step here."},
  {text: "The Underworld on Earth, where the souls of the dead roam. Its extreme climate can make survival an almost impossible task for anyone. Of course, with one minor exception. Hades, the sovereign of the underworld- thrives in such conditions. Adding up to the inhospitality of the underworld is its guardian Cerberus, a three-headed beast whose name alone instills fear in every warrior."},
  {text: "The Land of waves and home of many terrifying sea creatures. Surrounded by water, this island is where Poseidon is strongest. Separated miles from the Greek mainland, the realm of Poseidon is an almost impregnable fortress."},
]
