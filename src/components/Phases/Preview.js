import React, { useState } from 'react';
import styled from 'styled-components';

import previewImg from '../../images/previewIcon.png';
import trident from '../../images/trident.png';

import Slider from 'infinite-react-carousel/lib/carousel/slider';

const StyledContainer = styled.div`
    position: absolute;
    top: 0;
    left: ${props => props.page === 5 ? '0' : '-110vw'};
    width: 100vw;
    height: 100vh;
    background: white;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20% 5% 5% 5% 1fr;
    transition: left 0.5s ease-in-out;


    .tridentImg {
        width: 5%;
        justify-self: center;
        align-self: end;
        grid-row: 2/2;
    }

    .previewText {
        font-family: 'Magh';
        font-size: 2.5vw;
        justify-self: center;
        height: max-content;
        grid-row: 3/3;
    }

    .slider {
        grid-row: 5/5;
        display: ${props => props.page === 5 ? 'block' : 'none'};
        z-index: 1;
    }

    .slider div {
        height: 100%;
    }

    .slider img {
        height: 45vh;
        box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.5);
    }

    @media screen and (max-width: 320px) {
        .tridentImg {
            width: 60px;
        }

        .previewText {
            font-size: 2.5rem;
        }

        .slider {
            display: block;
        }

        .slider img {
            height: 200px;
            transform: translateY(50px);
        }
    }
    @media screen and (min-width: 321px) and (max-width: 375px) {
        .tridentImg {
            width: 80px;
        }

        .previewText {
            font-size: 2.8rem;
        }

        .slider {
            display: block;
        }

        .slider img {
            height: 260px;
            transform: translateY(50px);
        }

    }
    @media screen and (min-width: 376px) and (max-width: 428px) {
        .tridentImg {
            width: 60px;
        }

        .previewText {
            font-size: 2.5rem;
        }

        .slider {
            display: block;
        }

        .slider img {
            height: 300px;
            transform: translateY(50px);
        }
    }

    @media screen and (max-width: 768px) {
        position: relative;
        left: 0;
    }
`;

const slidesToShowFn = () => {
    if (window.outerWidth < 768) {
        return 1;
    } else {
        return 3;
    }
}


const Preview = ({ currentPage, images }) => {
    const addImageLoaded = () => {
        images();
    };

  return (
    <StyledContainer page={currentPage}>
        <img src={trident} alt='' className='tridentImg' onLoad={addImageLoaded}/>
        <span className='previewText'>Preview our Collection</span>
        <Slider slidesToShow={slidesToShowFn()} className='slider' centerMode={true} centerPadding={50} autoplay={true} pauseOnHover={true} autoplaySpeed={2000} page={currentPage}>
            <div>
                <img src={trident} alt='' onLoad={addImageLoaded}/>
            </div>
            <div>
                <img src={previewImg} alt='' onLoad={addImageLoaded}/>
            </div>
            <div>
                <img src={previewImg} alt='' onLoad={addImageLoaded}/>
            </div>
            <div>
                <img src={previewImg} alt='' onLoad={addImageLoaded}/>
            </div>
            <div>
                <img src={previewImg} alt='' onLoad={addImageLoaded}/>
            </div>
        </Slider>
    </StyledContainer>
  )
}

export default Preview;