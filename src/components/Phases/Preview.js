import React from 'react';
import styled from 'styled-components';

import previewImg from '../../images/roadmpa/previewImg.png';
import trident from '../../images/roadmpa/trident.png';

const StyledContainer = styled.div`
    position: absolute;
    top: 0;
    left: ${props => props.page === 5 ? '0' : '-120vw'};
    width: 100%;
    height: 100%;
    background: white;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20% 5% 1fr;
    transition: left 0.5s ease-in-out;


    .tridentImg {
        width: 2.8%;
        justify-self: center;
        align-self: end;
    }

    .previewText {
        font-family: 'Magh';
        font-size: 2.5vw;
        justify-self: center;
        height: max-content;
    }
`;

const StyledCorouselPreview = styled.div`
    width: 100vw;
    height: 100%;
    overflow-x: scroll;
    display: grid;
    grid-template-columns: repeat(5, 25%);
    column-gap: 3vw;
    img {
        // width: 100%;
    }
`;



const Preview = ({ currentPage }) => {
  return (
    <StyledContainer page={currentPage}>
        <img src={trident} alt='' className='tridentImg'/>
        <span className='previewText'>Preview our Collection</span>
        <StyledCorouselPreview>
            <img src={previewImg} alt=''/>
            <img src={previewImg} alt=''/>
            <img src={previewImg} alt=''/>
            <img src={previewImg} alt=''/>
            <img src={previewImg} alt=''/>
        </StyledCorouselPreview>
    </StyledContainer>
  )
}

export default Preview;