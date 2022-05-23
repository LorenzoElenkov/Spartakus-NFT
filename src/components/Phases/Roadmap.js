import React from "react";

import styled from "styled-components";

import trident from "../../images/roadmpa/trident.png";
import shoulder from "../../images/roadmpa/shoulder1.png";
import { Slider } from "infinite-react-carousel/lib";

const StyledRoadmapContainer = styled.div`
  position: absolute;
  top: ${(props) => (props.page === 4 ? "0" : "-110vh")};
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #0f1026;
  transition: top 0.5s ease-in-out;
  @media screen and (max-width: 768px) {
    position: relative;
    top: 0;
    height: max-content;
  }
`;

const StyledCorousel = styled.div`
  padding: 0 0 0 5vw;
  width: 95vw;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 29.5%);
  grid-template-rows: 15% 65% 20%;
  column-gap: 5vw;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 60%;
    left: 80%;
    height: 40vh;
  }
  @media screen and (max-width: 768px) {
    display: block;
    img {
      display: none;
    }
  }
`;

const StyledPhase = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: repeat(7, max-content);
  grid-row: 2/2;

  .number {
    font-size: 10vw;
    color: white;
    text-shadow: 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
      0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff;
    grid-column: 1/1;
    grid-row: 1/10;
    padding-right: 2vw;
    padding-top: 3vh;
  }

  .title {
    font-size: 4vw;
    grid-column: 2/2;
    grid-row: 1/1;
    color: #f2cb05;
    font-family: "Magh";
    align-self: center;
    letter-spacing: 3px;
  }

  .subtitle {
    grid-column: 2/2;
    grid-row: 2/2;
    color: white;
    font-family: "Medium";
    font-size: 1.2vw;
    font-weight: 800;
    border-top: 2px solid #f2cb05;
    padding-top: 1.5vw;
    width: 100%;
  }

  .quote {
    grid-column: 2/2;
    grid-row: 3/3;
    color: white;
    font-size: 0.8vw;
    margin-top: 0.5vw;
    margin-bottom: 1.5vw;
    font-family: "Medium";
  }

  .unorderedList {
    grid-column: 2/2;
    grid-row: 4/4;
    color: white;
    display: grid;
    font-size: 1.1vw;
    row-gap: 1vw;
    height: 100%;
    align-self: end;
  }

  .unorderedList {
    list-style: none;
  }

  .unorderedList li {
    align-self: center;
    font-family: "Medium";
    font-weight: 700;
  }

  .unorderedList li::before {
    content: "";
    display: inline-block;
    width: 1vw;
    height: 1vw;
    background-image: url(${trident});
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: -40px;
    padding-left: 0.5vw;
  }
  @media screen and (max-width: 320px) {
    margin-top: 30px;
    .number {
      font-size: 7rem;
      color: white;
      text-shadow: 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
        0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff;
      grid-column: 1/1;
      grid-row: 1/10;
      padding-right: 2vw;
      padding-top: 3vh;
    }

    .title {
      font-size: 4rem;
    }

    .subtitle {
      grid-column: 2/2;
      grid-row: 2/2;
      color: white;
      font-family: "Medium";
      font-size: 1.2rem;
      font-weight: 800;
      border-top: 2px solid #f2cb05;
      padding-top: 1.5vw;
      width: 100%;
    }

    .quote {
      grid-column: 2/2;
      grid-row: 3/3;
      color: white;
      font-size: 1rem;
      margin-top: 0.5vw;
      margin-bottom: 30px;
      font-family: "Medium";
    }

    .unorderedList {
      grid-column: 2/2;
      grid-row: 4/4;
      color: white;
      display: grid;
      font-size: 1.2rem;
      row-gap: 1vw;
      height: 100%;
      width: 80%;
    }

    .unorderedList li::before {
      width: 15px;
      height: 15px;
    }
  }
  @media screen and (min-width: 321px) and (max-width: 375px) {
    margin-top: 30px;
    .number {
      font-size: 7rem;
      color: white;
      text-shadow: 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
        0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff;
      grid-column: 1/1;
      grid-row: 1/10;
      padding-right: 2vw;
      padding-top: 3vh;
    }

    .title {
      font-size: 4rem;
    }

    .subtitle {
      grid-column: 2/2;
      grid-row: 2/2;
      color: white;
      font-family: "Medium";
      font-size: 1.2rem;
      font-weight: 800;
      border-top: 2px solid #f2cb05;
      padding-top: 1.5vw;
      width: 100%;
    }

    .quote {
      grid-column: 2/2;
      grid-row: 3/3;
      color: white;
      font-size: 1rem;
      margin-top: 0.5vw;
      margin-bottom: 30px;
      font-family: "Medium";
    }

    .unorderedList {
      grid-column: 2/2;
      grid-row: 4/4;
      color: white;
      display: grid;
      font-size: 1.2rem;
      row-gap: 1vw;
      height: 100%;
      width: 80%;
    }

    .unorderedList li::before {
      width: 15px;
      height: 15px;
    }
  }
  @media screen and (min-width: 376px) and (max-width: 428px) {
    margin-top: 30px;
    .number {
      font-size: 7rem;
      color: white;
      text-shadow: 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
        0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff;
      grid-column: 1/1;
      grid-row: 1/10;
      padding-right: 2vw;
      padding-top: 3vh;
    }

    .title {
      font-size: 4rem;
    }

    .subtitle {
      grid-column: 2/2;
      grid-row: 2/2;
      color: white;
      font-family: "Medium";
      font-size: 1.2rem;
      font-weight: 800;
      border-top: 2px solid #f2cb05;
      padding-top: 1.5vw;
      width: 100%;
    }

    .quote {
      grid-column: 2/2;
      grid-row: 3/3;
      color: white;
      font-size: 1rem;
      margin-top: 0.5vw;
      margin-bottom: 30px;
      font-family: "Medium";
    }

    .unorderedList {
      grid-column: 2/2;
      grid-row: 4/4;
      color: white;
      display: grid;
      font-size: 1.2rem;
      row-gap: 1vw;
      height: 100%;
      width: 80%;
    }

    .unorderedList li::before {
      width: 15px;
      height: 15px;
    }
  }
  @media screen and (max-width: 768px) {
    &:nth-child(1) {
      margin-top: 50px;
    }
  }
`;

const Roadmap = ({ currentPage, images }) => {
  const addImageLoaded = () => {
    images();
  };
  return (
    <StyledRoadmapContainer page={currentPage}>
      <StyledCorousel>
            <StyledPhase>
                <span className='number'>1</span>
                <span className='title'>Phase I</span>
                <span className='subtitle'>THE MOST EPIC REVEAL IN THE NFT SPACE</span>
                <span className='quote'>- Heroes of Olympus</span>
                <ul className='unorderedList'>
                    <li className='unordered1'>Tribe Reveal</li>
                    <li className='unordered1'>Class Reveal</li>
                    <li className='unordered1'>Unleashing the "HEROES"</li>
                    <li className='unordered1'>Rarity Scale</li>
                    <li className='unordered1'>FULL COPYRIGHT ON YOUR "HERO"</li>
                    <li className='unordered1'>TRIBE SERVERS WILL BE UNLOCKED FOR HOLDERS</li>
                    <li className='unordered1'>30% of the royalties will go to the community</li>
                    <li className='unordered1'>Everything about their distribution will be decided <br />
                        with a poll in the private community server
                    </li>
                </ul>
            </StyledPhase>
            <StyledPhase>
                <span className='number'>2</span>
                <span className='title'>Phase II</span>
                <span className='subtitle'>Establishment of the Heroes of Olympus' DAO and token</span>
                <span className='quote'>- Agora Dao and $HROM</span>
                <ul className='unorderedList'>
                    <li className='unordered1'>Exclusive Airdrops every week</li>
                    <li className='unordered1'>Each "HERO" in your wallet will grant you one AIRDROP piece</li>
                    <li className='unordered1'>Each Airdrop will be 1/4 of an ancient puzzle</li>
                    <li className='unordered1'>Collect all 4 pieces to redeem your mystery reward</li>
                    <li className='unordered1'>Introduction to $HROM token</li>
                    <li className='unordered1'>Establishment of AgoraDAO</li>
                    <li className='unordered1'>The development of our P2E game <br /> "The Ancient Greek War", "Conflict of Elada"</li>
                </ul>
            </StyledPhase>
            <StyledPhase>
                <span className='number'>3</span>
                <span className='title'>Phase III</span>
                <span className='subtitle'>THE WAR BEGINS</span>
                <span className='quote'>- ATHENA</span>
                <ul className='unorderedList'>
                    <li className='unordered1'>Launching our P2E Game <br /> - 'The War for Ancient Greece'</li>
                    <li className='unordered1'>Expansion collection teasers</li>
                </ul>
            </StyledPhase>
            <img src={shoulder} alt='' onLoad={addImageLoaded}/>
        </StyledCorousel>
    </StyledRoadmapContainer>
  );
};

export default Roadmap;
