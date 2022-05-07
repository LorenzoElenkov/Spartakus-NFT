import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import loadingLogo from '../../images/footerLogo.png';

const flashing = keyframes`
    50% {
        opacity: 0;
    }
`;

const StyledLoadingContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #0f1026;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        margin-top: 10vh;
        width: 25%;
    }
    .loading {
        animation: ${flashing} 2s infinite;
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
`;


const Loading = (props) => {

    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHasLoaded(true);
        }, 5000);
    },[]);

    const readyHandler = () => {
        props.clicked();
    };

  return (
    <StyledLoadingContainer loaded={hasLoaded}>
        <img src={loadingLogo} alt=''/>
        {hasLoaded ? <span className='ready'>Ready!</span> : <span className='loading'>Loading...</span>}
        {hasLoaded && <button onClick={readyHandler}>Visit website</button>}
    </StyledLoadingContainer>
  )
}

export default Loading;