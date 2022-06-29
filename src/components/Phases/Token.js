import React from "react";

import styled from "styled-components";

import shoulder from "../../images/shlem998.png";
import tokenImg from '../../images/Coin.gif';

const StyledContainer = styled.div`
  position: absolute;
  top: ${(props) => (props.page === 6 ? "0" : "-110vh")};
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  display: grid;
  grid-template-columns: 20% 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  row-gap: 1vw;
  transition: top 0.5s ease-in-out;
  overflow: hidden;
  .shoulder {
    position: absolute;
    transform: translateX(-30%) translateY(43vh);
    height: 57%;
  }

  .title {
    font-size: 5vw;
    font-family: "Magh";
    font-weight: 700;
    color: #4b95a6;
    grid-column: 2/2;
    align-self: end;
    letter-spacing: 1px;
  }
  .text {
      grid-column: 2/2;
      color: black;
      font-family: 'Medium';
      font-size: 1.3vw;
      white-space: pre-line;
      width: 80%;
    letter-spacing: 1px;
  }

  .previewImg {
    grid-column: 3/3;
    grid-row: 2/2;
    width: 80%;
    margin-top: -15%;
  }
  @media screen and (max-width: 320px) {
    position: relative;
    left: 0;
    top: 0;
    height: max-content;
    row-gap: 0;
    display: flex;
    flex-direction: column;
    .shoulder {
    position: absolute;
    transform: translateX(-30%) translateY(50%);
    height: 57%;
    opacity: 0.3;
    }

    .title {
        margin-top: 50px;
        font-size: 15vw;
        width: 100%;
        text-align: center;
      }
    .text {
        font-size: 1.2rem;
        padding: 0 20px;
        margin-top: 200px;
        text-align: center;
        width: 85%;
    }

    .previewImg {
      width: 50%;
      margin-top: 20px;
      position: absolute;
      top: 100px;
      left: 25%;
    }
  }
  @media screen and (min-width: 321px) and (max-width: 375px) {
    position: relative;
    height: max-content;
    left: 0;
    top: 0;
    row-gap: 0;
    display: flex;
    flex-direction: column;
    background-color: red;

    .shoulder {
    position: absolute;
    transform: translateX(-30%) translateY(50%);
    height: 57%;
    opacity: 0.3;
    }

    .title {
        margin-top: 50px;
        font-size: 16vw;
        width: 100%;
        text-align: center;
      }
    .text {
        font-size: 1.5rem;
        padding: 0 20px;
        margin-top: 220px;
        text-align: center;
        width: 85%;
    }

    .previewImg {
      width: 50%;
      margin-top: 20px;
      position: absolute;
      top: 100px;
      left: 25%;
    }
  }
  @media screen and (min-width: 376px) and (max-width: 428px) {
    position: relative;
    height: max-content;
    left: 0;
    top: 0;
    row-gap: 0;
    display: flex;
    flex-direction: column;
    background-color: red;
    .shoulder {
    position: absolute;
    transform: translateX(-30%) translateY(50%);
    height: 57%;
    opacity: 0.3;
    }

    .title {
        margin-top: 50px;
        font-size: 18vw;
        width: 100%;
        text-align: center;
      }
    .text {
        font-size: 1.5rem;
        padding: 0 20px;
        margin-top: 220px;
        text-align: center;
        width: 85%;
    }

    .previewImg {
      width: 50%;
      margin-top: 30px;
      position: absolute;
      top: 100px;
      left: 25%;
    }
  }
`;

const Token = ({ currentPage, images }) => {
  const addImageLoaded = () => {
    images();
  };
  return (
    <StyledContainer page={currentPage}>
      <img src={shoulder} alt="" className="shoulder" onLoad={addImageLoaded}/>
      <span className="title">$HROM</span>
      <span className="text">
        $HROM will be the token of our DAO- the 'Agora' Dao and the in-game currency of our play-to-earn game. <br /><br />
        Storing the token will be available in every Solana wallet, for example
        Phantom. Swapping will mostly be available on Raydium and Saber.<br /> $HROM
        will be equally distributed among all of the tribes in the strategic
        game. <br /> <br />The rarity of the “Heroes of Olympus” NFT will determine the
        amount of $HROM received. The coin will play a major role in the game’s
        mechanics.
      </span>
      <img src={tokenImg} alt='' className='previewImg' onLoad={addImageLoaded}/>
    </StyledContainer>
  );
};

export default Token;
