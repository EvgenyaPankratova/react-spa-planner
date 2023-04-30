import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Days from "./components/Days";
import Days1 from "./components/Days";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const AppWrapper = styled.div`
  @font-face {
    font-family: "NimbusSanL-Reg";
    src: local("NimbusSanL-Reg"),
      url("../fonts/NimbusSanL-Reg.ttf") format("ttf");
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }
  max-width: 740px;
  min-height: 100vh;
  outline: 1px solid lightgray;
  margin: 0 auto;
  font-family: "NimbusSanL-Reg", "Arial", sans-serif;
  overflow: hidden;
  li {
    list-style-type: none;
  }
  @media (max-width: 375px) {
    max-width: 100%;
    overflow: hidden;
  }
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  @media (max-width: 375px) {
    max-width: 100%;
    overflow: hidden;
    padding: 1rem;
  }
  @media (min-width: 376px) and (max-width: 499px) {
    padding: 1.2rem;
  }
  @media (min-width: 500px) and (max-width: 750px) {
    padding: 1.5rem;
  }
`;

const FooterWrapper = styled.footer`
  background: #f5f2f2;
  padding: 1rem 2rem 1rem 2rem;
  color: red;
  border: 2px solid #d6d4d4;
  font-size: 21px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 375px) {
    max-width: 100%;
    overflow: hidden;
    font-size: 14px;
  }
  @media (min-width: 376px) and (max-width: 499px) {
    font-size: 16px;
  }
  @media (min-width: 500px && max-width: 750px) {
    font-size: 18px;
  }
`;

const DaysWrapper = styled.div`
  background: #f5f2f2;
  padding: 0.8rem 25px 0.8rem 8rem;
  border: 1px solid #d6d4d4;
  @media (max-width: 375px) {
    max-width: 100%;
    overflow: hidden;
    padding: 0.8rem 10px 0.8rem 3rem;
  }
  @media (min-width: 376px) and (max-width: 499px) {
    padding: 0.8rem 12px 0.8rem 4rem;
  }
  @media (min-width: 500px) and (max-width: 750px) {
    max-width: 100%;
    overflow: hidden;
    padding: 0.8rem 15px 0.8rem 5rem;
  }
`;

function App() {
  let arr = [...Array(91)];
  const events = arr.map((elem) => ({
    id: Math.random().toString(36).substring(2, 9),
    isActive: false,
    forDelete: false,
  }));

  const [actives, setActive] = useState(events);
  const [newEvent, setNewEvent] = useState("");

  return (
    <BrowserRouter basename="/">
      {" "}
      {/*указываем название репозитория как домашнюю страницу, относительно которой остальные пути*/}
      <AppWrapper>
        <HeaderWrapper>
          <Header newEvent={newEvent} setNewEvent={setNewEvent} />
        </HeaderWrapper>

        <DaysWrapper>
          <Days />
        </DaysWrapper>

        <Main
          actives={actives}
          setActive={setActive}
          events={events}
          newEvent={newEvent}
          setNewEvent={setNewEvent}
        />

        <FooterWrapper>
          <Footer
            actives={actives}
            setActive={setActive}
            events={events}
            newEvent={newEvent}
            setNewEvent={setNewEvent}
          />
        </FooterWrapper>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
