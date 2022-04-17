import React, {useRef, useLayoutEffect, useEffect, useState} from 'react';

import styled from 'styled-components';

import trident from '../../images/roadmpa/trident.png';
import shoulder from '../../images/roadmpa/shoulder1.png';
const StyledRoadmapContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #0f1026;
    transition: top 0.5s ease-in-out;
`;

const StyledCorousel = styled.div`
    padding: 0 0 0 5vw;
    width: 95vw;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-template-rows: 15% 65% 20%;
    column-gap: 7vw;
    overflow: scroll;
    position: relative;
    img {
        position: absolute;
        top: 60%;
        left: 173%;
        width: 20%;
        transform: rotate(15deg);
    }
    
`;

const StyledPhase = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: 30% repeat(6, 1fr);
    grid-row: 2/2;

    &:nth-child(3) {
        padding-right: 30vw;
    }

    .number {
        font-size: 30vw;
        color: white;
        text-shadow: 0 0 3px yellow, 0 0 3px yellow, 0 0 3px yellow, 0 0 3px yellow, 0 0 3px yellow, 0 0 3px yellow, 0 0 3px yellow;
        grid-column: 1/1;
        grid-row: 1/5; 
        padding-right: 2vw;
    }

    .title {
        font-size: 5vw;
        grid-column: 2/2;
        grid-row: 1/1;
        color: #f2cb05;
        font-family: 'Magh';
        align-self: center;
        letter-spacing: 3px;
    }

    .subtitle {
        color: white;
        font-family: 'Medium';
        font-size: 1vw;
        font-weight: 800;
        border-top: 2px solid #f2cb05;
        padding-top: 1.5vw;
        height: max-content;
        width: max-content;
    }

    .quote {
        color: white;
        height: max-content;
        font-size: 0.8vw;
        margin-top: 0.5vw;
        margin-bottom: 1.5vw;
        font-family: 'Medium';
    }

    .unorderedList {
        color: white;
        display: grid;
        font-size: 1.3vw;
        row-gap: 1vw;
    }

    .unorderedList {
        list-style: none;
    }

    .unorderedList li {
        align-self: center;
        font-family: 'Medium';
        font-weight: 700;
    }

    .unorderedList li::before {
        content: '';
        display: inline-block;
        width: 1.3vw;
        height: 1.3vw;
        background-image: url(${trident});
        background-size: contain;
        background-repeat: no-repeat;
        margin-left: -40px;
        padding-left: 0.5vw;
    }
`;

const Roadmap = ({ currentPage }) => {

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
    }
    else if (topPos < -30) {
      oneRef.current.style.opacity = -(offset - 1)*3 + 1;
    }
    else {
      oneRef.current.style.opacity = 1;
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    oneRef?.current.addEventListener('click', () => {
        oneRef.current.scrollLeft += 33;
    })
    return () => {window.removeEventListener('scroll', onScroll)};
  });


  return (
    <StyledRoadmapContainer page={currentPage} ref={thisRef}>
        <StyledCorousel ref={oneRef}>
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
                <span className='subtitle'>THE ART OF EVENT REINVENTION</span>
                <span className='quote'>- LEFAIR MAGAZINE</span>
                <ul className='unorderedList'>
                    <li className='unordered1'>Exclusive Airdrops every week</li>
                    <li className='unordered1'>Each "HERO" in your wallet will grant you one AIRDROP piece</li>
                    <li className='unordered1'>Each Aidrop will be 1/4 of an ancient puzzle</li>
                    <li className='unordered1'>Collect all 4 pieces to redeem your mystery reward</li>
                    <li className='unordered1'>Introduction to $HROM token</li>
                    <li className='unordered1'>Establishment of AgoraDAO</li>
                    <li className='unordered1'>The development of our P2E game <br /> "The Ancient Greek War", "Conflict of Elada"</li>
                </ul>
            </StyledPhase>
            <StyledPhase>
                <span className='number'>3</span>
                <span className='title'>Phase III</span>
                <span className='subtitle'>THE RACE OF RACES</span>
                <span className='quote'>- SOMEONE SAID THAT</span>
                <ul className='unorderedList'>
                    <li className='unordered1'>Something</li>
                    <li className='unordered1'>Something</li>
                    <li className='unordered1'>Something</li>
                    <li className='unordered1'>Something</li>
                    <li className='unordered1'>Something</li>
                    <li className='unordered1'>Something</li>
                    <li className='unordered1'>Something</li>
                </ul>
            </StyledPhase>
            <img src={shoulder} alt=''/>
        </StyledCorousel>
    </StyledRoadmapContainer>
  )
}

export default Roadmap;