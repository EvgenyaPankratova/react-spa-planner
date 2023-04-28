import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import styled from "styled-components";

const HeaderTitle = styled.h1`
  font-weight: normal;
  @media (max-width: 375px) {
    font-size: 16px;
  }
  @media (min-width: 376px) and (max-width: 499px) {
    font-size: 21px;
  }
  @media (min-width: 500px) and (max-width: 750px) {
    font-size: 25px;
  }
`;

const HeaderWrapper = styled.span`
  color: red;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
  @media (min-width: 376px) and (max-width: 499px) {
    font-size: 1.5rem;
  }
  @media (min-width: 500px) and (max-width: 750px) {
    font-size: 1.8rem;
  }
`;

function Header({ newEvent, setNewEvent }) {
  const handleEvent = (e) => {
    e.preventDefault();
    let dateEvent = prompt("Enter event time: YYYY-MM-DD HH-mm-ss");
    let text = prompt("Enter event text");
    setNewEvent(dateEvent + " " + text);
  };

  return (
    <>
      <HeaderTitle>Interveiw Calendar</HeaderTitle>
      <HeaderWrapper onClick={handleEvent}>
        <AiOutlinePlus />
      </HeaderWrapper>
    </>
  );
}

export default Header;
