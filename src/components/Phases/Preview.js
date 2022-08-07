import React from 'react';
import styled from 'styled-components';

// import previewImg from '../../images/previewIcon.png';
import trident from '../../images/trident.png';

import a from '../../images/Sneak peek 1.png';
import b from '../../images/Sneak peek 8.png';
import c from '../../images/Sneak peek 6.png';
import d from '../../images/Sneak peek 3.png';
import e from '../../images/Sneak peek 4.png';
import f from '../../images/Sneak peek 2.png';
import g from '../../images/Sneak peek 9.png';
import h from '../../images/Sneak peek 7.png';
import j from '../../images/Sneak peek 5.png';

import Slider from 'infinite-react-carousel/lib/carousel/slider';

const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20% 5% 5% 5% 1fr;
    

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
            font-size: 3.2rem;
        }

        .slider {
            display: block;
        }

        .slider img {
            height: 65vw;
            transform: translateY(50px);
        }
    }
    @media screen and (min-width: 321px) and (max-width: 375px) {
        .tridentImg {
            width: 80px;
        }

        .previewText {
            font-size: 3.5rem;
        }

        .slider {
            display: block;
        }

        .slider img {
            height: 70vw;
            transform: translateY(50px);
        }

    }
    @media screen and (min-width: 376px) and (max-width: 428px) {
        .tridentImg {
            width: 100px;
        }

        .previewText {
            font-size: 4rem;
        }

        .slider {
            display: block;
        }

        .slider img {
            height: 70vw;
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


const Preview = ({forwardedRef, currentPage, images }) => {
    const addImageLoaded = () => {
        images();
    };

  return (
    <StyledContainer page={currentPage} ref={forwardedRef}>
        <img src={trident} alt='' className='tridentImg' onLoad={addImageLoaded}/>
        <span className='previewText'>Preview our Collection</span>
        <Slider slidesToShow={slidesToShowFn()} className='slider' centerMode={true} centerPadding={50} autoplay={true} pauseOnHover={true} autoplaySpeed={3000} page={currentPage} arrows={false}>
            <div>
                <img src={a} alt='' onLoad={addImageLoaded}/>
            </div>
            <div>
                <img src={b} alt='' onLoad={addImageLoaded}/>
            </div>
            <div>
                <img src={c} alt='' onLoad={addImageLoaded}/>
            </div>
            <div>
                <img src={d} alt='' onLoad={addImageLoaded}/>
            </div>
            <div>
                <img src={e} alt='' onLoad={addImageLoaded}/>
            </div>
            <div>
                <img src={f} alt='' onLoad={addImageLoaded}/>
            </div>
            <div>
                <img src={g} alt='' onLoad={addImageLoaded}/>
            </div>
            <div>
                <img src={h} alt='' onLoad={addImageLoaded}/>
            </div>
            <div>
                <img src={j} alt='' onLoad={addImageLoaded}/>
            </div>
        </Slider>
    </StyledContainer>
  )
}

export default Preview;