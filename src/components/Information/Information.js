import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';

import informationImage from '../../images/Information/information.png';
import informationHelmet2 from '../../images/Information/Helmet.png';
import discordLogo from '../../images/Information/discord.png';
import logoShlem from '../../images/Information/prosto-shlem.png';
import logo from '../../images/Information/logo.png';

const StyledInfoContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

const StyledWhiteBG = styled.div`
    position: absolute;
    top: 0;
    left: ${props => props.page === 1 ? '0' : "-100%"};
    width: 50%;
    height: 100%;
    background-color: white;
    display: grid;
    justify-content: center;
    align-items: center;
    transition: left 0.5s ease-in-out;
`; 

const StyledBlueBG = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    background-color: rgba(15,16,38,255);
    display: grid;
    justify-content: center;
    align-items: center;
    transition: top 0.5s ease-in-out;
`;

const StyledInformation = styled.img`
    height: 25vmax;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 3vw;
    transition: left 0.5s ease-in-out;
`;

const StyledHelmet = styled.img`
    position: relative;
    top: 50%;
    left: 49%;
    transform-origin: 50% 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 37.5%;
    z-index: 1;
    opacity: ${props => props.page === 1 ? '1' : '0'};
    transition: top 0.4s ease-in-out;
`;

const StyledCPTH = styled.div`
    margin-left: -50px;
    display: flex;
    flex-direction: column;
    gap: 13px;
    margin-top: 50px;

    .titleCollection {
        font-size: 2.5vmax;
        color: rgba(73,115,242,255);
        letter-spacing: 2px;
        font-family: 'Medium';
        transform: scaleY(0.9);
        font-weight: 600;
    }

    .textCollection {
        font-size: 1vmax;
        letter-spacing: 0.5px;
        font-family: 'Medium';
        font-weight: 600;
        transform: scaleY(0.95);
    }
`;

const StyledHOO = styled.div`
    width: 55%;
    justify-self: center;
    z-index: 9000;

    @font-face {
        font-family: 'Magh';
        src: url('./fonts/Maghfirea.otf');
    }

    .titleBlue {
        font-family: 'Magh';
        font-size: 4vw;
        letter-spacing: 6px;
        color: white;
        display: block;
        transform: translateX(6vw) translateY(-4vw);
        line-height: 4vw;
        font-weight: 700;
    }

    .textBlue {
        font-size: 1vw;
        color: white;
        justify-self: center;
        align-self: center;
        display: block;
        font-family: 'Medium';
        font-weight: 800;
        transform: translateX(6vw) translateY(-2vw) scaleY(0.9);
        letter-spacing: 1px;
        width: 85%;
        line-height: 1.4vw;
    }

    .discordButton {
        justify-self: center;
        align-self: center;
        transform: translateX(6vw) translateY(1vw);
        height: 5vw;
        width: 15vw;
        display: grid;
        grid-template-columns: 3fr 1fr;
        background: #5863f1;
        border: none;
        z-index: 9000;
    }

    .discordButton:active {
        background: green;
    }

    .discordText {
        justify-self: center;
        align-self: center;
        font-size: 1.2vw;
        font-family: 'Medium';
        letter-spacing: 1px;
        font-weight: 900;
        color: white;
    }

    .discordLogo {
        width: 100%;
        align-self: center;
        justify-self: end;
        filter: invert(1);
    }
`;

const StyledLogo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 13vw;
    z-index: 1;
    background: #0f1026; //
    display: grid;
    grid-template-columns: 1fr max-content;
    padding: 10px 1vw;
    align-items: center;

    .logoShlem {
        justify-self: center;
        // height: 80%;
        width: 2.5vw;
    }

    .logo {
        // width: 80%;
        width: 8vw;
    }
`;

const Information = ({ currentPage }) => {

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
    console.log(offset);
    if (topPos < -30) {
        oneRef.current.style.opacity = 1 - (offset - 1)*2;
        twoRef.current.style.opacity = 1 - (offset - 1)*2;
        threeRef.current.style.opacity = 1 - (offset - 1);
        fourRef.current.style.opacity = 1 - (offset - 1)*2;
    } else {
        oneRef.current.style.opacity = 1;
        twoRef.current.style.opacity = 1;
        threeRef.current.style.opacity = 1;
        fourRef.current.style.opacity = 1;
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {window.removeEventListener('scroll', onScroll)};
  });
    
    
    const [inside, setInside] = useState(true);
  return (
    <StyledInfoContainer ref={thisRef}>
        <StyledLogo>
            <img src={logoShlem} alt='helmet' className='logoShlem'/>
            <img src={logo} alt='heroes of olympus' className='logo'/>
        </StyledLogo>
        <StyledWhiteBG page={currentPage} ref={oneRef}>
            <div>
                <StyledCPTH>
                    <span className='titleCollection'>Collection</span>
                    <span className='textCollection'>10 878 heroes</span>
                </StyledCPTH>
                <StyledCPTH>
                    <span className='titleCollection'>Price</span>
                    <span className='textCollection'>To be declared</span>
                </StyledCPTH>
                <StyledCPTH>
                    <span className='titleCollection'>Tribes</span>
                    <span className='textCollection'>There are 14 tribes <br /> with one God to lead</span>
                </StyledCPTH>
                <StyledCPTH>
                    <span className='titleCollection'>Heroes</span>
                    <span className='textCollection'>777 in each tribe</span>
                </StyledCPTH>
            </div>
        </StyledWhiteBG>
        <StyledInformation page={currentPage} src={informationImage} alt='information' ref={twoRef}/>
        <StyledHelmet page={currentPage} src={informationHelmet2} alt='helmet' ref={threeRef}/>
        <StyledBlueBG page={currentPage} ref={fourRef}>
            <StyledHOO>
                <span className={'titleBlue'}>Heroes of Olympus</span>
                <span className={'textBlue'}>Collection of 10,878 ultra-realistic 3D heroes,
                    sealed in the Cursed Chests of Chaos, on the
                    Solana blockchain! Ancient Greece is about to
                    be rebuilt in the Metaverse. Join the Battle of
                    the Gods!
                </span>
                <button className='discordButton'>
                    <span className='discordText'>
                        Join our Discord 
                    </span>
                    <img className='discordLogo' src={discordLogo} alt=''/>
                </button>
            </StyledHOO>
        </StyledBlueBG>
    </StyledInfoContainer>
  )
}

export default Information;