import React, { useState } from 'react';

import styled from 'styled-components';

import shlemLogo from '../../images/shlemLoo.png';
import shlemBG from '../../images/shlem200.png';
import twitter2 from '../../images/twitter3.svg';
import discord2 from '../../images/discord3.svg';
import litepaper from '../../images/litepaper.pdf';


const HeaderMobile = ({ music, volume, info, lore, roadmap, faq, showRT }) => {

    const [isMenuOn, setIsMenuOn] = useState(false);

    const openMenuHandler = () => {
        setIsMenuOn(!isMenuOn);
    }

    const changeVolume = (step) => {
        music(step);
    };


  return (
      <>{window.outerWidth < 429 && <>
      <StyledMobileNavigation isOpen={isMenuOn} volumeBG={volume}>
        <img src={shlemBG} alt=''/>
        <div className='topBar'>
            <img src={shlemLogo} alt=''/>
            <button className='closeMenu' onClick={openMenuHandler}>X</button>
        </div>
        <div className='links'>
            <button onClick={() => {openMenuHandler(); info.current.scrollIntoView({ behavior: 'smooth'})}}>Home</button>
            <button onClick={() => {openMenuHandler(); lore.current.scrollIntoView({ behavior: 'smooth' })}}>Lore</button>
            <button onClick={() => {openMenuHandler(); roadmap.current.scrollIntoView({ behavior: 'smooth'})}}>Roadmap</button>
            <button onClick={() => {openMenuHandler(); showRT()}}>Rarity Tool</button>
            <a className='rarityTool' alt='litepaper' href={litepaper} target="_blank" rel="noreferrer">Litepaper</a>
            <button onClick={() => {openMenuHandler(); faq.current.scrollIntoView({ behavior: 'smooth'})}}>FAQ</button>
        </div>
        <div className='musicControl'>
            <div className='musicBut' onClick={() => changeVolume(0.05)}>Music {Math.floor(volume / 0.2 * 100)}%</div>
        </div>
        <div className='socials'>
            <a className='twitter' href='https://twitter.com/Heroes_Olympus_' target='_blank' rel='noreferrer'><img src={twitter2} alt=''/></a>
            <a className='discord' href='https://discord.gg/XHPyntDaF4' target='_blank' rel='noreferrer'><img src={discord2} alt=''/></a>
        </div>
      </StyledMobileNavigation>
      <StyledMobileNavContainer>
        <img src={shlemLogo} alt=''/>
        <div className='menuButton' onClick={openMenuHandler}>
            <div className='topLine'/>
            <div className='midLine'/>
            <div className='botLine'/>
        </div>
    </StyledMobileNavContainer>
    </>}
    </>
  )
}

export default HeaderMobile;

const StyledMobileNavigation = styled.nav`
    position: fixed;
    top: ${props => props.isOpen ? '0' : '-120%'};
    left: 0;
    width: 100%;
    height: 100%;
    transition: top 0.5s ease-in-out;
    z-index: 10000;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > img {
        position: absolute;
        height: 120vh;
        left: -110%;
        top: -20%;
        opacity: 0.3;
        z-index: -1;
    }

    & > .topBar {
        width: calc(100% - 30px);
        height: 50px;
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        z-index: 9999;
    }

    & > .topBar > img {
        width: 40px;
        height: 40px;
    }

    & > .topBar > button {
        width: 40px;
        height: 40px;
        background-color: teal;
        border: none;
        border-radius: 50%;
        font-size: 2rem;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > .links {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    & > .links > a {
        font-size: 2rem;
        text-decoration: none;
        font-family: 'Medium';
        text-align: center;
        color: black;
    }

    & > .links > button {
        font-size: 1.8rem;
        background-color: transparent;
        border: none;
        font-family: 'Medium';
        padding: 10px 0;
        color: black;
    }

    & > .socials {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 20px;
    }

    & > .socials > a > img {
        width: 30px;
    }

    & > .musicControl {
        display: flex;
        justify-content: center;
    }

    & > .musicControl > .musicBut {
        font-family: 'Medium';
        font-size: 1.5rem;
        border: 1px solid black;
        padding: 5px 10px;
        position: relative;
        overflow: hidden;
        width: 30%;
        text-align: center;
    }

    & > .musicControl > .musicBut:before {
        content: '';
        position: absolute;
        top: 0;
        left: ${props => (1 - props.volumeBG / 0.2) * -100}%;
        background-color: tomato;
        width: 100%;
        height: 120%;
        z-index: -1;
        transition: left 0.4s ease-in-out;
    }

    @media screen and (min-width: 321px) and (max-width: 375px) {
        & > .topBar > img {
        width: 50px;
        height: 50px;
        } 
        & > .links {
            gap: 25px;
        }
        & > .links > button {
        font-size: 2rem;
        }
        & > .socials > a > img {
            width: 35px;
        }
    }
    @media screen and (min-width: 376px) and (max-width: 428px) {
        & > .topBar > img {
        width: 60px;
        height: 60px;
        } 
        & > .topBar > button {
        width: 50px;
        height: 50px;
        font-size: 2.5rem;
        }
        & > .links {
            gap: 35px;
        }
        & > .links > button {
        font-size: 2.2rem;
        }
        & > .socials > a > img {
            width: 40px;
        }
    }

`;

const StyledMobileNavContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 30px);
    height: max-content;
    background: rgba(15, 16, 38, 0.3);
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    z-index: 9998;
    .menuButton {
        width: max-content;
        height: max-content;
        align-self: center;
    }

    .topLine, .midLine, .botLine {
        width: 35px;
        height: 2px;
        background-color: white;
    }

    

    @media screen and (max-width: 320px) {
        .topLine {
            transform: translateY(-7px);
        }
        .midLine {
            transform: translateY(0px);
        }
        .botLine {
            transform: translateY(7px);
            
        }
        img {
        width: 45px;
        }
    }
    @media screen and (min-width: 321px) and (max-width: 375px) {
        .topLine {
            transform: translateY(-7px);
        }
        .midLine {
            transform: translateY(0px);
        }
        .botLine {
            transform: translateY(7px);
            
        }
        img {
        width: 50px;
        }
    }
    @media screen and (min-width: 376px) and (max-width: 428px) {
        .topLine {
            transform: translateY(-7px);
        }
        .midLine {
            transform: translateY(0px);
        }
        .botLine {
            transform: translateY(7px);
            
        }
        img {
        width: 50px;
        }
    }
`;