import { useCallback, useState } from "react";
import styled from "styled-components";

const MainWrapper = styled.main`
  display: flex;
  padding-left: 40px;
  @media (max-width: 375px) {
    padding-left: 5px;
  }
  @media (min-width: 376px) and (max-width: 499px) {
    padding-left: 9px;
  }
  @media (min-width: 500px) and (max-width: 750px) {
    padding-left: 12px;
  }
`;

const TimeSchedule = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #f5f2f2;
`;

const TimeScheduleItem = styled.li`
  color: #b3b3b3;
  padding-bottom: 30px;
  :last-child {
    padding-bottom: 0;
  }
  @media (max-width: 375px) {
    padding-bottom: 12px;
    font-size: 10px;
  }
  @media (min-width: 376px) and (max-width: 499px) {
    padding-bottom: 21px;
    font-size: 12px;
  }
  @media (min-width: 500px) and (max-width: 750px) {
    padding-bottom: 27px;
    font-size: 14px;
  }
`;

const Sells = styled.div`
  margin-left: 28px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(13, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media (max-width: 375px) {
    margin-left: 8px;
  }
  @media (min-width: 376px) and (max-width: 499px) {
    margin-left: 9px;
  }
  @media (min-width: 500px) and (max-width: 750px) {
    margin-left: 10px;
  }
`;

const Sell = styled.div`
  border: 2px solid #d6d4d4;
  border-left: none;
  border-top: none;
  width: 90px;
  height: 50px;
  cursor: pointer;
  :nth-child(7n) {
    border-right: none;
  }
  @media (max-width: 375px) {
    width: 45px;
    height: 35px;
  }
  @media (min-width: 376px) and (max-width: 499px) {
    width: 55px;
    height: 45px;
  }
  @media (min-width: 500px) and (max-width: 750px) {
    width: 68px;
    height: 48px;
  }
`;
const activeSell = {
  background: "#ebebfc",
};

const forDeleteSell = {
  background: "#bab9ed",
};

const SellItem = ({ handleToggle, elem, newEvent }) => {
  return (
    <Sell
      onClick={() => handleToggle(elem.id, newEvent)}
      style={elem.forDelete ? forDeleteSell : elem.isActive ? activeSell : null}
    ></Sell>
  );
};

function Main({ events, actives, setActive, newEvent, setNewEvent }) {
  let hours = [];
  hours.lenght = 12;
  for (let i = 9; i <= 20; i++) {
    if (i === 9) {
      hours[i] = "0" + i + ":00";
    } else {
      hours[i] = i + ":00";
    }
  }

  const handleToggle = (index, newEvent) => {
    actives.map((elem) => (elem.isActive && newEvent ? alert(newEvent) : null));

    setActive((actives) => {
      return actives.map((elem) => {
        if (elem.id === index && elem.isActive) {
          return {
            ...elem,
            isActive: !elem.isActive,
            forDelete: !elem.forDelete,
          };
        } else if (elem.id === index) {
          return {
            ...elem,
            isActive: !elem.isActive,
          };
        }
        return elem;
      });
    });
  };

  return (
    <MainWrapper>
      <div>
        <TimeSchedule>
          {hours.map((elem) => {
            return <TimeScheduleItem>{elem}</TimeScheduleItem>;
          })}
        </TimeSchedule>
      </div>

      <Sells>
        {actives.map((elem, index) => {
          return (
            <SellItem
              handleToggle={handleToggle}
              newEvent={newEvent}
              elem={elem}
            />
          );
        })}
      </Sells>
    </MainWrapper>
  );
}

export default Main;
