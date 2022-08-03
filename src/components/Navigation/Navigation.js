import React from 'react';

import styled from 'styled-components';

import instagram from '../../images/instagram3.svg';
import twitter from '../../images/twitter3.svg';
import discord from '../../images/discord3.svg';
import instagram2 from '../../images/instagram4.svg';
import twitter2 from '../../images/twitter4.svg';
import discord2 from '../../images/discord4.svg';
import litepaper from '../../images/litepaper.pdf';


const SocialBar = styled.div`
    position: absolute;
    width: 15vw;
    height: 75px;
    top: calc(100vh - 80px);
    left: 84vw;
    z-index: 9998;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-evenly;
    align-items: center;

    .instagram, .twitter, .discord {
        width: 3vw;
        height: 3vw;
        background: none;
        border: none;
    }

    .instagram:hover, .twitter:hover, .discord:hover {
    }

    .instagram img, .twitter img {
        width: 100%;
    }

    .discord img {
        width: 110%;
    }

    @media screen and (max-width: 688px) {
        display: none;
    }
`;


const NavigationBar = styled.nav`
        position: absolute;
        top: 0;
        left: 50vw;
        width: 50vw;
        z-index: 9998;
        display: grid;
        grid-template-columns: 5% repeat(6, 1fr) 5%;
        /* column-gap: 5px; */
        .homeBut {
            grid-column: 2/2;
        }

        a {
            text-decoration: none;
            justify-self: center;
            text-align: center;
        }

        .homeBut, .loreBut, .roadmapBut, .faqBut, .rarityTool {
            background: transparent;
            border: none;
            font-size: 1.2vw;
            border-top: 7px solid transparent;
            padding-top: 2vh;
            color: ${props => props.page === 1 || props.page === 4 || props.page === 9 ? 'white' : '#0f1026'};
            font-weight: 800;
            letter-spacing: 2px;
            font-family: 'Medium';
            transition: color 0.5s ease-in-out, border-top 0.5s ease-in-out;
            position: relative;
        }
        

        .loreBut:hover .innerMenuLore, .roadmapBut:hover .innerMenuRoadmap, .faqBut:hover .innerMenuFaq {
            display: grid;
        }

        .loreBut:hover .invisibleSpace, .roadmapBut:hover .invisibleSpace, .faqBut:hover .invisibleSpace {
            display: grid;
        }

        .invisibleSpace:hover .innerMenuLore, .invisibleSpace:hover .innerMenuRoadmap, .invisibleSpace:hover .innerMenuFaq {
            display: grid;
        }

        .innerMenuLore, .innerMenuRoadmap, .innerMenuFaq {
            position: absolute;
            top: calc(4vh + 2.2vw);
            left: 0;
            display: none;
            justify-content: center;
            width: 100%;
            background: white;
            border: 1px solid black;
            border-top: none;
            padding-top: 2vh;
            z-index: 9998;
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

        /* .active {
            border-top: 7px solid ${props => props.page === 1 || props.page === 4 || props.page === 9 ? 'white' : '#0f1026'};;
        } */

        .innerLorePointer {
            width: 100%;
            justify-self: center;
            font-size: 0.8vw;
            color: black;
            letter-spacing: -2px;
            color: black;
        }

        .invisibleSpace {
            position: absolute;
            display: none;
            top: calc(4vh + 1.2vw);
            left: 0;
            width: 100%;
            height: 1vw;
            background-color: transparent;
        }


        @media screen and (max-width: 428px) {

        }


    `;


const Navigation = ({ currentPage, onLinkClick, onRTClick, info, lore, roadmap, faq, map, preview, token, team, footer }) => {

    const snd = new Audio('./clicksound.wav');

    const onRT = (state) => {
        onRTClick(state);
    }

  return (
      <>{window.outerWidth > 428 && <NavigationBar page={currentPage}>
        {/* <button className={currentPage === 1 ? 'homeBut active' : 'homeBut'} onClick={() => {onLinkClick(1); snd.play()}}>Home</button> */}
        <button className={currentPage === 1 ? 'homeBut active' : 'homeBut'} onClick={() => {info.current.scrollIntoView({ behavior: 'smooth'}); snd.play()}}>Home</button>
        <button className={currentPage >= 2 && currentPage <= 3 ? 'loreBut active' : 'loreBut'}>
            Lore
            <div className='invisibleSpace'/>
            <div className='innerMenuLore' page={currentPage}>
                <span className='innerLorePointer'>\/</span>
                <button page={currentPage} onClick={() => {lore.current.scrollIntoView({ behavior: 'smooth'}); snd.play()}}>Story</button>
                <button page={currentPage} onClick={() => {map.current.scrollIntoView({ behavior: 'smooth'}); snd.play()}}>Ancient Map</button>
            </div>
        </button>
        <button className={currentPage > 3 && currentPage <= 6 ? 'roadmapBut active' : 'roadmapBut'}>
            Roadmap
            <div className='invisibleSpace'/>
            <div className='innerMenuRoadmap' page={currentPage}>
                <span className='innerLorePointer'>\/</span>
                <button page={currentPage} onClick={() => {roadmap.current.scrollIntoView({ behavior: 'smooth'}); snd.play()}}>Roadmap</button>
                <button page={currentPage} onClick={() => {preview.current.scrollIntoView({ behavior: 'smooth'}); snd.play()}}>The Collection</button>
                <button page={currentPage} onClick={() => {token.current.scrollIntoView({ behavior: 'smooth'}); snd.play()}}>Token</button>
            </div>
        </button>
        <button className='rarityTool' onClick={() => onRT(true)}>Rarity</button>
        <a className='rarityTool' alt='litepaper' href={litepaper} target="_blank" rel="noreferrer">Lite<br/>paper</a>
        <button className={currentPage > 6 ? 'faqBut active' : 'faqBut'}>
            FAQ
            <div className='invisibleSpace'/>
            <div className='innerMenuFaq' page={currentPage}>
                <span className='innerLorePointer'>\/</span>
                <button page={currentPage} onClick={() => {faq.current.scrollIntoView({ behavior: 'smooth'}); snd.play()}}>FAQ</button>
                <button page={currentPage} onClick={() => {team.current.scrollIntoView({ behavior: 'smooth'}); snd.play()}}>Our Team</button>
                <button page={currentPage} onClick={() => {footer.current.scrollIntoView({ behavior: 'smooth'}); snd.play()}}>Contact</button>
            </div>
        </button>
        </NavigationBar>}
        

        <SocialBar>
            <a className='twitter' href='https://twitter.com/Heroes_Olympus_' target='_blank' rel='noreferrer'><img src={currentPage === 1 || currentPage === 4 || currentPage === 9 ? twitter2 : twitter} alt=''/></a>
            <a className='discord' href='https://discord.gg/XHPyntDaF4' target='_blank' rel='noreferrer'><img src={currentPage === 1 || currentPage === 4 || currentPage === 9 ? discord2 : discord} alt=''/></a>
        </SocialBar>
    </>
  )
}

export default Navigation;