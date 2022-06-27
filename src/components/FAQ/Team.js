import React from 'react';

import styled from 'styled-components';

import black from '../../images/222 black.png';
import red from '../../images/222 red.png';
import blue from '../../images/222 blue.png';
import purple from '../../images/222 purple.png';
import green from '../../images/222 green.png';

import blueAvatar from "../../images/blueAvatar.png";
import redAvatar from "../../images/redAvatar.png";
import blackAvatar from "../../images/blackAvatar.png";
import purpleAvatar from "../../images/purpleAvatar.png";
import greenAvatar from "../../images/greenAvatar.png";

const StyledContainer = styled.div`
    position: absolute;
    top: ${props => props.page === 8 ? '0' : '-110vh'};
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    display: grid;
    grid-template-rows: 25% 5% 1fr 20%;
    transition: top 0.5s ease-in-out;
    overflow: hidden;

    .teamTitle, .secondText {
        color: #0f1026;
        justify-self: center;
        align-self: end;
        margin-bottom: 5vh;
        font-family: 'Medium';
        letter-spacing: 1px;
        font-size: 1.8vw;
    }

    .secondText {
        color: gray;
        font-size: 1vw;
        align-self: center;
        text-align: center;
    }

    .teamContainer {
        background: #0f1026;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }

    .teamContainer span {
        font-size: 1.4vw;
        font-family: 'Medium';
        letter-spacing: 1px;
    }

    .img1, .img2, .img3, .img4, .img5 {
        grid-row: 1/1;
        justify-self: center;
        align-self: end;
        background: white;
        /* border-radius: 50vw; */
        width: 75%;
    }

    .name1, .name2, .name3, .name4, .name5 {
        color: white;
        grid-row: 2/2;
        justify-self: center;
        align-self: center;
    }

    .ceo {
        grid-row: 3/3;
        justify-self: center;
        color: #f2cb05;
    }

    .dropEmail {
        justify-self: center;
        align-self: center;
    }

    .still {
        display: block;
        text-align: center;
        font-size: 1.4vw;
        font-family: 'Medium';
        margin-bottom: 1vw;
    }

    .subtextStill {
        display: block;
        text-align: center;
        font-size: 1.2vw;
        color: gray;
        font-family: 'Medium';
    }

    .underline {
        text-decoration: underline;
        color: rgb(0, 0, 150);
    }
    @media screen and (max-width: 320px) {
        position: relative;
        top: 0;
        height: max-content;
        display: flex;
        flex-direction: column;
        width: 100vw;
        
        .teamMobileContainer {
            display: flex;
            gap: 50px;
            width: 100vw;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            background-color: #0f1026;
            padding: 30px 30px;
            .teamSingleContainer:last-child {
                margin-right: 70px;
            }
            .teamSingleContainer {
                display: flex;
                gap: 10px;
                flex-direction: column;
                width: 500px;
                height: max-content;
                font-family: 'Medium';
                img {
                    width: 50vw;
                }
                span:nth-child(2) {
                    font-size: 5vw;
                }
                span:nth-child(3) {
                    font-size: 4vw;
                }
            }
        }



        .teamTitle {
            margin-top: 50px;
            align-self: center;
            margin-bottom: 5vh;
            font-family: 'Magh';
            font-weight: 900;
            letter-spacing: 3px;
            font-size: 8vw;
        }

        .secondText {
            font-size: 3.2vw;
            text-align: center;
            align-self: center;
            margin-top: -10px;
        }

        .teamContainer {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding-top: 20px;
        }

        .teamContainer span {
            font-size: 1.5rem;
        }

        .img1, .img2, .img3, .img4, .img5 {
            grid-row: 1/1;
            justify-self: center;
            align-self: center;
            width: 50%;
        }

        .name1, .name2, .name3, .name4, .name5 {
            color: white;
            grid-row: 2/2;
            justify-self: center;
            align-self: center;
        }

        .ceo {
            grid-row: 3/3;
            justify-self: center;
            color: #f2cb05;
            align-self: center;
            margin-bottom: 40px;
        }

        .still {
            font-size: 1.8rem;
            margin-bottom: 10px;
            margin-top: 10px;
        }

        .subtextStill {
            font-size: 1.5rem;
            margin-bottom: 30px;
        }

        .underline {
            text-decoration: underline;
            color: rgb(0, 0, 150);
        }

    }
    @media screen and (min-width: 321px) and (max-width: 375px) {
        
        position: relative;
        top: 0;
        height: max-content;
        display: flex;
        flex-direction: column;
        width: 100vw;
        
        .teamMobileContainer {
            display: flex;
            gap: 50px;
            width: 100vw;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            background-color: #0f1026;
            padding: 30px 30px;
            .teamSingleContainer:last-child {
                margin-right: 70px;
            }
            .teamSingleContainer {
                display: flex;
                gap: 10px;
                flex-direction: column;
                width: 500px;
                height: max-content;
                font-family: 'Medium';
                img {
                    width: 50vw;
                }
                span:nth-child(2) {
                    font-size: 5vw;
                }
                span:nth-child(3) {
                    font-size: 4vw;
                }
            }
        }

        .teamTitle {
            margin-top: 50px;
            align-self: center;
            margin-bottom: 5vh;
            font-family: 'Magh';
            letter-spacing: 3px;
            font-weight: 900;
            font-size: 8vw;
        }

        .secondText {
            font-size: 3.2vw;
            text-align: center;
            margin-top: -20px;
        }

        .teamContainer {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding-top: 20px;
        }

        .teamContainer span {
            font-size: 1.5rem;
        }

        .img1, .img2, .img3, .img4, .img5 {
            grid-row: 1/1;
            justify-self: center;
            align-self: center;
            width: 50%;
        }

        .name1, .name2, .name3, .name4, .name5 {
            color: white;
            grid-row: 2/2;
            justify-self: center;
            align-self: center;
        }

        .ceo {
            grid-row: 3/3;
            justify-self: center;
            color: #f2cb05;
            align-self: center;
            margin-bottom: 40px;
        }

        .still {
            font-size: 1.8rem;
            margin-bottom: 10px;
            margin-top: 10px;
        }

        .subtextStill {
            font-size: 1.5rem;
            margin-bottom: 30px;
        }

        .underline {
            text-decoration: underline;
            color: rgb(0, 0, 150);
        }
    }
    @media screen and (min-width: 376px) and (max-width: 428px) {
        position: relative;
        top: 0;
        height: max-content;
        display: flex;
        flex-direction: column;
        width: 100vw;
        
        .teamMobileContainer {
            display: flex;
            gap: 50px;
            width: 100vw;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            background-color: #0f1026;
            padding: 30px 30px;
            .teamSingleContainer:last-child {
                margin-right: 70px;
            }
            .teamSingleContainer {
                display: flex;
                gap: 10px;
                flex-direction: column;
                width: 500px;
                height: max-content;
                font-family: 'Medium';
                img {
                    width: 50vw;
                }
                span:nth-child(2) {
                    font-size: 5vw;
                }
                span:nth-child(3) {
                    font-size: 4vw;
                }
            }
        }


        .teamTitle {
            margin-top: 50px;
            align-self: center;
            margin-bottom: 5vh;
            font-family: 'Magh';
            font-weight: 900;
            letter-spacing: 3px;
            font-size: 8vw;
        }

        .secondText {
            font-size: 3.2vw;
            align-self: center;
            margin-top: -20px;
        }


        .teamContainer span {
            font-size: 1.5rem;
        }

        .img1, .img2, .img3, .img4, .img5 {
            justify-self: center;
            align-self: center;
        }

        .name1, .name2, .name3, .name4, .name5 {
            color: white;
            justify-self: center;
            align-self: center;
        }

        .ceo {
            justify-self: center;
            color: #f2cb05;
            align-self: center;
        }

        .still {
            font-size: 1.8rem;
            margin-bottom: 10px;
            margin-top: 10px;
        }

        .subtextStill {
            font-size: 1.5rem;
            margin-bottom: 30px;
        }

        .underline {
            text-decoration: underline;
            color: rgb(0, 0, 150);
        }
    }
`;
const Team = ({ currentPage, images }) => {
    const addImageLoaded = () => {
        images();
    };
  return (
    <StyledContainer page={currentPage}>
        <span className='teamTitle'>Meet the Team</span>
        <span className='secondText'>images below do not represent the collection</span>
        {window.outerWidth > 428 ? <div className='teamContainer'>
            <img src={blueAvatar} alt='' className='img1' onLoad={addImageLoaded}/>
            <span className='name1'>
                Lysandros
            </span>
            <span className='ceo'>
                Blockchain Developer
            </span>
            <img src={redAvatar} alt='' className='img2' onLoad={addImageLoaded}/>
            <span className='name2'>
                Isidoros
            </span>
            <span className='ceo'>
                3D Art Designer
            </span>
            <img src={blackAvatar} alt='' className='img3' onLoad={addImageLoaded}/>
            <span className='name3'>
                Markos
            </span>
            <span className='ceo'>
                Marketing Manager
            </span>
            <img src={purpleAvatar} alt='' className='img4' onLoad={addImageLoaded}/>
            <span className='name4'>
                Kallinikos
            </span>
            <span className='ceo'>
                Discord Manager
            </span>
            <img src={greenAvatar} alt='' className='img5' onLoad={addImageLoaded}/>
            <span className='name5'>
                Achilles
            </span>
            <span className='ceo'>
                Founder
            </span>
        </div> : 
        <div className='teamMobileContainer'>
            <div className='teamSingleContainer'>
                <img src={blueAvatar} alt='' className='img1' onLoad={addImageLoaded}/>
                <span className='name1'>
                    Lysandros
                </span>
                <span className='ceo'>
                    Blockchain Developer
                </span>
            </div>
            <div className='teamSingleContainer'>
                <img src={redAvatar} alt='' className='img2' onLoad={addImageLoaded}/>
                <span className='name2'>
                    Isidoros
                </span>
                <span className='ceo'>
                    3D Art Designer
                </span>
            </div>
            <div className='teamSingleContainer'>
                <img src={blackAvatar} alt='' className='img3' onLoad={addImageLoaded}/>
                <span className='name3'>
                    Markos
                </span>
                <span className='ceo'>
                    Marketing Manager
                </span>
            </div>
            <div className='teamSingleContainer'>
                <img src={purpleAvatar} alt='' className='img4' onLoad={addImageLoaded}/>
                <span className='name4'>
                    Kallinikos
                </span>
                <span className='ceo'>
                    Discord Manager
                </span>
            </div>
            <div className='teamSingleContainer'>
                <img src={greenAvatar} alt='' className='img5' onLoad={addImageLoaded}/>
                <span className='name5'>
                    Achilles
                </span>
                <span className='ceo'>
                    Founder
                </span>
            </div>
        </div>
        }
        <span className='dropEmail'>
            <span className='still'>
                Still have questions?
            </span>
            <span className='subtextStill'>
                Can't find the answer you're looking for? <br />
                Drop us a line in our dedicated Discord channel!
            </span>
        </span>
    </StyledContainer>
  )
}

export default Team;