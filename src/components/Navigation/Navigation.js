import React from 'react';

import styled from 'styled-components';

import instagram from '../../images/instagram3.svg';
import twitter from '../../images/twitter3.svg';
import discord from '../../images/discord3.svg';
import instagram2 from '../../images/instagram4.svg';
import twitter2 from '../../images/twitter4.svg';
import discord2 from '../../images/discord4.svg';

const SocialBar = styled.div`
    position: absolute;
    width: 30vw;
    height: 75px;
    top: calc(100vh - 80px);
    left: 69vw;
    z-index: 9999;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-evenly;
    align-items: center;

    .instagram, .twitter, .discord {
        width: 4vw;
        height: 4vw;
        background: none;
        border: none;
    }

    .instagram:hover, .twitter:hover, .discord:hover {
        cursor: pointer;
    }

    .instagram img, .twitter img {
        width: 100%;
    }

    .discord img {
        width: 110%;
    }
`;


const NavigationBar = styled.nav`
        position: absolute;
        top: 0;
        left: 50vw;
        width: 50vw;
        z-index: 9999;
        display: grid;
        grid-template-columns: 12% repeat(5, 1fr);
        .homeBut {
            grid-column: 2/2;
        }

        .homeBut, .loreBut, .roadmapBut, .faqBut {
            background: transparent;
            border: none;
            font-size: 1.2vw;
            border-top: 7px solid transparent;
            padding-top: 4vh;
            color: ${props => props.page === 1 || props.page === 4 || props.page === 9 ? 'white' : '#0f1026'};
            font-weight: 800;
            letter-spacing: 2px;
            font-family: 'Medium';
            transition: color 0.5s ease-in-out, border-top 0.5s ease-in-out;
            position: relative;
        }
        
        .homeBut:hover, .loreBut:hover, .roadmapBut:hover, .faqBut:hover {
            cursor: pointer;
        }


        .loreBut:hover .innerMenuLore, .roadmapBut:hover .innerMenuRoadmap, .faqBut:hover .innerMenuFaq {
            display: grid;
        }

        .innerMenuLore, .innerMenuRoadmap, .innerMenuFaq {
            position: absolute;
            top: calc(4vh + 1.2vw);
            left: 0;
            display: none;
            justify-content: center;
            width: 100%;
            background: white;
            border: 1px solid black;
            border-top: none;
            padding-top: 2vh;
            z-index: 9999;
        }

        .innerMenuLore:hover, .innerMenuRoadmap:hover, .innerMenuFaq:hover {
            display: grid;
        }

        .innerMenuLore button, .innerMenuRoadmap button, .innerMenuFaq button {
            background: none;
            border: none;
            font-size: 1vw;
            font-family: 'Light';
            letter-spacing: 1px;
            padding: 1.5vh 0;
        }

        .innerMenuLore button:not(:last-child), .innerMenuRoadmap button:not(:last-child), .innerMenuFaq button:not(:last-child) {
            border-bottom: 1px solid black;
        }

        .active {
            border-top: 7px solid ${props => props.page === 1 || props.page === 4 || props.page === 9 ? 'white' : '#0f1026'};;
        }

        .innerLorePointer {
            width: 100%;
            justify-self: center;
            font-size: 0.8vw;
            color: black;
            letter-spacing: -2px;
            color: black;
        }
    `;


const Navigation = ({ currentPage, onLinkClick }) => {


  return (
      <>
        <NavigationBar page={currentPage}>
            <button className={currentPage === 1 ? 'homeBut active' : 'homeBut'} onClick={() => {onLinkClick(1)}}>Home</button>
            <button className={currentPage >= 2 && currentPage <= 3 ? 'loreBut active' : 'loreBut'}>
                Lore
                <div className='innerMenuLore' page={currentPage}>
                    <span className='innerLorePointer'>\/</span>
                    <button page={currentPage} onClick={() => {onLinkClick(2)}}>Story</button>
                    <button page={currentPage} onClick={() => {onLinkClick(3)}}>Ancient Map</button>
                </div>
            </button>
            <button className={currentPage > 3 && currentPage <= 6? 'roadmapBut active' : 'roadmapBut'}>
                Roadmap
                <div className='innerMenuRoadmap' page={currentPage}>
                    <span className='innerLorePointer'>\/</span>
                    <button page={currentPage} onClick={() => {onLinkClick(4)}}>Roadmap</button>
                    <button page={currentPage} onClick={() => {onLinkClick(5)}}>The Collection</button>
                    <button page={currentPage} onClick={() => {onLinkClick(6)}}>Token</button>
                </div>
            </button>
            <button className={currentPage > 6 ? 'faqBut active' : 'faqBut'}>
                FAQ
                <div className='innerMenuFaq' page={currentPage}>
                    <span className='innerLorePointer'>\/</span>
                    <button page={currentPage} onClick={() => {onLinkClick(7)}}>FAQ</button>
                    <button page={currentPage} onClick={() => {onLinkClick(8)}}>Our Team</button>
                    <button page={currentPage} onClick={() => {onLinkClick(9)}}>Contact</button>
                </div>
            </button>
        </NavigationBar>

        <SocialBar>
            <button className='instagram'><img src={currentPage === 1 || currentPage === 4 || currentPage === 9 ? instagram2 : instagram} alt=''/></button>
            <button className='twitter'><img src={currentPage === 1 || currentPage === 4 || currentPage === 9 ? twitter2 : twitter} alt=''/></button>
            <button className='discord'><img src={currentPage === 1 || currentPage === 4 || currentPage === 9 ? discord2 : discord} alt=''/></button>
        </SocialBar>
    </>
  )
}

export default Navigation;