import React from 'react';

import styled from 'styled-components';

import helmet from '../../images/Information/prosto-shlem.png';
import logo from '../../images/Information/logo.png';
import discordLogo from '../../images/Information/discord.png';

const StyledLightBlue = styled.div`
    position: absolute;
    top: 0;
    left: ${props => props.page === 9 ? '0' : '-110vw'};
    width: 50%;
    height: 100%;
    background: #161b54;
    transition: left 0.5s ease-in-out;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1vw;
    row-gap: 1vh;

    img:nth-child(1) {
        justify-self: center;
        align-self: end;
        grid-column: 1/1;
        grid-row: 1/1;
        width: 13%;
    }

    img:nth-child(2) {
        justify-self: center;
        align-self: start;
        grid-column: 1/1;
        grid-row: 2/2;
        width: 35%;
    }

    ul {
        grid-column: 2/2;
        grid-row: 1/3;
        align-self: center;
        list-style-type: none;
        margin-top: 10vh;
    }

    ul li {
        color: #5DA3F9;
        margin-bottom: 6vh;
        font-size: 1.2vw;
        font-family: 'Medium';
    }

    ul li::before {
        content: '';
        display: inline-block;
        width: 0.4vw;
        height: 0.4vw;
        background: red;
        border-radius: 50vw;
        margin-right: 15px;
        margin-bottom: 4px;
    }
    
`;

const StyledDarkBlue = styled.div`
    position: absolute;
    top: ${props => props.page === 9 ? '0' : '-110vh'};
    left: 50%;
    width: 50%;
    height: 100%;
    background: #111336;
    transition: left 0.5s ease-in-out;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    transition: top 0.5s ease-in-out;
`;

const Footer = ({ currentPage }) => {
  return (
    <>
        <StyledLightBlue page={currentPage}>
            <img src={helmet} alt=''/>
            <img src={logo} alt=''/>
            <ul>
                <li>Home</li>
                <li>Lore</li>
                <li>Roadmap</li>
                <li>FAQ</li>
                <li>© All Right Reserved</li>
            </ul>
        </StyledLightBlue>
        <StyledDarkBlue page={currentPage}>
            {/* <button className='discordButton'>
                <span className='discordText'>
                    Join our Discord 
                </span>
                <img className='discordLogo' src={discordLogo} alt=''/>
            </button> */}
        </StyledDarkBlue>
    </>
  )
}

export default Footer;