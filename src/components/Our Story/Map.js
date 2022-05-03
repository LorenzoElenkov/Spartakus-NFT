import React, { useState } from "react";

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
  transition: left 0.5s ease-in-out;
`;

const StyledMap = styled.img`
  margin-top: 8%;
  width: 85%;
  align-self: center;
  justify-self: end;
  grid-row: 1/1;
  grid-column: 1/1;
`;

const StyledMapText = styled.span`
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  width: 55%;
  height: 60%;
  row-gap: 4vh;
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
    /* -webkit-text-stroke: 3px white; */
  }

  .areaText {
    font-family: "Medium";
    font-size: 1.1vw;
    white-space: pre-line;
    letter-spacing: 0.7px;
    text-align: center;
    grid-row: 4/4;
    grid-column: 1/1;
    z-index: 1;
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
    grid-row: 5/5;
    grid-column: 1/1;
    animation: hintAnimate 3s infinite;
  }

  .areaIcon {
    /* height: 350px; */
    /* height: 100%; */
    width: 80%;
    opacity: 0.15;
    grid-column: 1/1;
    grid-row: 1/3;
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
  position: relative;
  width: 80%;
  height: 50vw;
  grid-row: 1/1;
  grid-column: 1/1;
  transform: translateX(20%) translateY(1.5%);
  align-self: center;
  z-index: 9001;
  /* background: green; */
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
  if (currentPage !== 3 && clickedArea !== 0) {
    setClickedArea(0);
  }
  return (
    <StyledMapContainer page={currentPage}>
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
      />
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
      <StyledMapText clicked={clickedArea}>
        <span className="areaTitle">
          {clickedArea === 0
            ? <span>The map of Ancient Greece</span>
            : <span>{areasNames[clickedArea]?.name}</span>}
        </span>
        <img src={areasNames[clickedArea].icon} alt='' className='areaIcon'/>
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
  {text: "The land, where family and childbirth are the most important moral values. It is right next to her husband's, Zeus, territory but that does not mean she is safe from the war"},
  {text: "The land, where the one and only, god of thunder roams. It is the biggest land in Ancient Greece with its unique weather, depending on the mood of the mighty Zeus"},
  {text: "The land, where love is everywhere. All of the people there are passionate and focused on pleasure. The nature there is beautiful with myrtles and roses across the whole land"},
  {text: "The land, where nature is at its finest, wilderness everywhere. The people there have full respect for their land because they feed on it by hunting and farming"},
  {text: "The land, where the blacksmiths live and work. All of the divine forges in Ancient Greece are there and work almost without any break"},
  {text: "The land of the unstoppable warrios, where the god of war trains them to win in every battle. The conditions there are tough so the warriors are well prepared for every possible outcome"},
  {text: "The land, where music is in the air. All sorts of herbs are being cultivated for the preparation of different remedies. There the animal diversity is high and the sunlight is always upon"},
  {text: "The land of wittiness, where everyone is quick and cunning. The ruler here, Hermes, is the fastest God alive. Manipulative and adaptive skills are his strongest weapons in battles. His army is full of thieves, who plunder everyone they defeat"},
  {text: "The son of Ares, Deimos, is the most dreadful God of them all. The ruler of this land is the fear and horror. It is uninhabited because only a few could survive in these terrifying conditions. In battle, the strongest power of his troops is panic, which could be very dangerous"},
  {text: "The land of wisdom, where the philosophers are respected the most. There, every issue is solved by discussions and argumentation, but their war power and capacity are not to be underestimated. The mind of Athena is her most powerful weapon, making her a strong pretender for the war"},
  {text: "The land of broadening souls and shadows, where Nyx, the first Goddess, is the ruler. Even the almighty Zeus is feared by the powers of Nyx, and that is why her territory is so distant from the land of thunders. As she is the strongest in the night, this place is shadowy and dark"},
  {text: "The land of death, where terror and horror rule. There, the smell of fear is everything that a person could feel. The permanent night makes the place even more dreadful. Thanatos, the death himself, decides the destiny of those who are brave enough to stop there"},
  {text: "This is the Underworld on Earth, where the souls of the dead roam. Its extreme climate conditions make it harder for everyone to survive, except Hades. His main companion, Cerberus, is the protector of this land"},
  {text: "The land of waves and oceans, where terrifying creatures could be seen. Surrounded by water, this island is the safest place for Poseidon, and, there, his powers are the strongest. Regarding the war, its location is great, because it is separated from the main Greek land"},
]
