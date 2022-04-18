import React from 'react';

import styled from 'styled-components';

import avatar from '../../images/team/Avatar-1.png';

const StyledContainer = styled.div`
    position: absolute;
    top: ${props => props.page === 8 ? '0' : '-100%'};
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: grid;
    grid-template-rows: 25% 1fr 20%;
    transition: top 0.5s ease-in-out;

    .teamTitle {
        color: #0f1026;
        justify-self: center;
        align-self: end;
        margin-bottom: 5vh;
        font-family: 'Medium';
        letter-spacing: 1px;
        font-size: 1.8vw;
    }

    .teamContainer {
        background: #0f1026;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .teamContainer span {
        font-size: 1.4vw;
        font-family: 'Medium';
        letter-spacing: 1px;
    }

    .img1, .img2, .img3, .img4 {
        grid-row: 1/1;
        justify-self: center;
        align-self: end;
        background: white;
        border-radius: 50vw;
    }

    .name1, .name2, .name3, .name4 {
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
`;
const Team = ({ currentPage }) => {
  return (
    <StyledContainer page={currentPage}>
        <span className='teamTitle'>Meet the Team</span>
        <div className='teamContainer'>
            <img src={avatar} alt='' className='img1'/>
            <span className='name1'>
                Kalin Danailov
            </span>
            <span className='ceo'>
                CEO
            </span>
            <img src={avatar} alt='' className='img2'/>
            <span className='name2'>
                Martin Chaushev
            </span>
            <span className='ceo'>
                CEO
            </span>
            <img src={avatar} alt='' className='img3'/>
            <span className='name3'>
                Anton G.
            </span>
            <span className='ceo'>
                CEO
            </span>
            <img src={avatar} alt='' className='img4'/>
            <span className='name4'>
                Lips Umgq
            </span>
            <span className='ceo'>
                CEO
            </span>
        </div>
        <span className='dropEmail'>
            <span className='still'>
                Still have questions?
            </span>
            <span className='subtextStill'>
                Can't find the answer you're looking for? <br />
                Shoot us an email at <span className='underline'>heroesofolympus@info.com</span>
            </span>
        </span>
    </StyledContainer>
  )
}

export default Team;