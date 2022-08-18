import React from "react";
import Main from "./Main";
import styled from "styled-components";

import balance from "../../images/balance box_.png";
import wallet from "../../images/balance box_ copy.png";

const Marketplace = () => {
  return (
    <StyledMainMarketplace image1={balance} image2={wallet}>
      <Main />
    </StyledMainMarketplace>
  );
};

export default Marketplace;

const StyledMainMarketplace = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(15, 16, 38, 255);
  font-family: "Dalek";
  width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  .main-marketplace {
    margin-top: 12.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .main-marketplace > button {
    width: max-content;
    padding: 1.5rem 3rem;
    font-size: 2rem;
    border: none;
    font-family: "Dalek";
    height: max-content;
    align-self: center;
    box-shadow: 0 0 15px 5px rgb(255, 183, 0);
  }

  .main-marketplace > .main-wallet {
    justify-self: end;
    font-size: 2rem;
  }

  .main-marketplace > button:hover {
    cursor: pointer;
  }

  .main-title {
    font-size: 7rem;
    color: rgb(241, 182, 54);
    text-align: center;
  }

  .boxes-container {
    display: flex;
    grid-column: 1/4;
    justify-content: space-between;
    margin-top: 3rem;
  }

  .boxes-container > .single-box {
    width: 33vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .boxes-container > .single-box > img {
    width: 22vw;
    transition: width 0.1s ease-in-out;
  }

  .boxes-container > .single-box > button {
    width: max-content;
    font-family: "Dalek";
    font-size: 2.4rem;
    padding: 0.6rem 3rem;
  }

  .boxes-container > .single-box > img:hover {
    width: 23vw;
  }

  .boxes-container > .single-box > span {
    font-size: 2.2rem;
  }

  .boxes-container > .single-box:nth-child(1) > span {
    color: yellow;
  }

  .boxes-container > .single-box:nth-child(2) > span {
    color: rgb(0, 210, 210);
  }

  .boxes-container > .single-box:nth-child(3) > span {
    color: rgb(230, 70, 230);
  }

  .boxes-container > .single-box:nth-child(1) > button {
    color: rgb(255, 183, 0);
    box-shadow: 0 0 10px 5px yellow;
    background-color: white;
    border: none;
    margin-top: 1rem;
  }

  .boxes-container > .single-box:nth-child(2) > button {
    color: rgb(0, 210, 210);
    box-shadow: 0 0 15px 7px;
    background-color: white;
    border: none;
    margin-top: 1rem;
  }

  .boxes-container > .single-box:nth-child(3) > button {
    color: rgb(230, 70, 230);
    box-shadow: 0 0 12px 7px;
    background-color: white;
    border: none;
    margin-bottom: 5rem;
    margin-top: 1rem;
  }

  & > img.logo {
    width: 300px;
    height: 120px;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  @media screen and (max-width: 429px) {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0;
    left: 0;
    overflow-x: scroll;
    & > .main-marketplace {
      margin-top: 10rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    .main-marketplace > button {
      width: max-content;
      padding: 1rem 3rem;
      font-size: 1.8rem;
      border: none;
      font-family: "Dalek";
      grid-row: 2/2;
      grid-column: 1/3;
      margin-top: 2rem;
    }

    .main-marketplace > .main-wallet {
      justify-self: end;
      font-size: 1.8rem;
      grid-column: 1/4;
      grid-row: 1/1;
      padding: 1rem 2rem;
      margin-top: 1rem;
    }

    .main-marketplace > button:hover {
      cursor: pointer;
    }

    .main-title {
      font-size: 3rem;
      color: rgb(241, 182, 54);
      grid-row: 3/3;
      grid-column: 1/4;
      margin-top: 2rem;
    }

    .boxes-container {
      display: flex;
      flex-direction: column;
      grid-column: 1/4;
      grid-row: 4/4;
      justify-content: space-between;
      margin-top: 3rem;
      gap: 5rem;
      overflow-y: scroll;
      height: max-content;
      width: 100%;
    }

    .boxes-container > .single-box {
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .boxes-container > .single-box > img {
      width: 90vw;
      transition: width 0.1s ease-in-out;
    }

    .boxes-container > .single-box > button {
      width: max-content;
      font-family: "Dalek";
      font-size: 1.6rem;
      padding: 0.5rem 2rem;
    }

    .boxes-container > .single-box > img:hover {
      width: 90vw;
    }

    .boxes-container > .single-box > span {
      font-size: 1.8rem;
    }

    .boxes-container > .single-box:nth-child(1) > span {
      color: yellow;
    }

    .boxes-container > .single-box:nth-child(2) > span {
      color: rgb(0, 210, 210);
    }

    .boxes-container > .single-box:nth-child(3) > span {
      color: rgb(230, 70, 230);
    }

    .boxes-container > .single-box:nth-child(1) > button {
      color: rgb(255, 183, 0);
      box-shadow: 0 0 10px 5px yellow;
      background-color: white;
      border: none;
    }

    .boxes-container > .single-box:nth-child(2) > button {
      color: rgb(0, 210, 210);
      box-shadow: 0 0 15px 7px;
      background-color: white;
      border: none;
    }

    .boxes-container > .single-box:nth-child(3) > button {
      color: rgb(230, 70, 230);
      box-shadow: 0 0 12px 7px;
      background-color: white;
      border: none;
      margin-bottom: 5rem;
    }
  }
`;
