import React, { useEffect, useState } from 'react';
import { useRef } from 'react/cjs/react.production.min';
import styled, { keyframes } from 'styled-components';
import { css } from 'styled-components';
import loadingLogo from '../../images/footerLogo1.png';

const flashing = keyframes`
    50% {
        opacity: 0;
    }
`;

const StyledLoadingContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0f1026;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        margin-top: 5vh;
        width: 25%;
    }
    .loading {
        animation: ${flashing} 1.5s infinite;
        font-size: 5rem;
        font-family: 'Magh';
        color: white;
    }
    .ready {
        font-size: 5rem;
        font-family: 'Magh';
        color: white;
    }
    button {
        margin-top: 30px;
        font-size: 3rem;
        padding: 10px 30px;
        background-color: #5863f1;
        border: none;
        font-family: 'Magh';
        letter-spacing: 1px;
    }
    button:hover {
        color: white;
    }

    @media screen and (max-width: 320px) {
        
        img {
            width: 60%;
            margin-bottom: 50px;
        }

        .loading, .ready {
            font-size: 3rem;
        }
        button {
            font-size: 2rem;
            padding: 5px 15px;
        }
    }

    @media screen and (min-width: 321px) and (max-width: 375px) {
        img {
            width: 60%;
            margin-bottom: 50px;
        }

        .loading, .ready {
            font-size: 4rem;
        }
        button {
            font-size: 2.5rem;
            padding: 5px 15px;
        }
    }

    @media screen and (min-width: 376px) and (max-width: 428px) {
        img {
            width: 61%;
            margin-bottom: 50px;
        }

        .loading, .ready {
            font-size: 4rem;
        }
        button {
            font-size: 2.8rem;
            padding: 5px 15px;
        }
    }
`;

const StyledProgressBar = styled.div`
    margin-top: 20px;
    width: 25%;
    height: 30px;
    border-radius: 15px;
    border: 2px solid white;
    background: transparent;
    overflow: hidden;
    position: relative;

    .loadingBar {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: ${props => (props.images - 100) + '%'};
        background: #5863f1;
        ${props => props.images === 36 && animationPlay};
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
    }

    @media screen and (max-width: 320px) {
        width: 75%;
        height: 20px;
    }
    @media screen and (min-width: 321px) and (max-width: 375px){
        width: 75%;
        height: 25px;
    }
    @media screen and (min-width: 376px) and (max-width: 414px){
        width: 75%;
        height: 28px;
    }
`;

const loadingProgress = keyframes`
    100% {
        left: 0%;
    }
`;

const animationPlay = css`
    animation: ${loadingProgress} 2s ease-out;
`;


const Loading = ({ clicked, images }) => {

    const [hasLoaded, setHasLoaded] = useState(false);
    useEffect(() => {
        if (images === 36) {
            setTimeout(() => {
                setHasLoaded(true);
            }, 2100);
        }
    },[images]);


    const readyHandler = () => {
        clicked();
    };

  return (
    <StyledLoadingContainer loaded={hasLoaded}>
        <img src={loadingLogo} alt=''/>
        {hasLoaded ? <span className='ready'>Ready!</span> : <span className='loading'>Loading...</span>}
        <StyledProgressBar images={images} loaded={hasLoaded}>
            <span className='loadingBar'/>
        </StyledProgressBar>
        {hasLoaded && <button onClick={readyHandler}>Visit website</button>}
    </StyledLoadingContainer>
  )
}

export default Loading;