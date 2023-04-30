import { useEffect } from "react";
import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import styled, { withTheme } from "styled-components";

const WeekDays = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  @media (max-width: 375px) {
    font-size: 10px;
  }
  @media (min-width: 376px) and (max-width: 499px) {
    font-size: 10px;
  }
  @media (min-width: 500px) and (max-width: 750px) {
    font-size: 11px;
  }
`;
const WeekDaysItem = styled.li`
  text-align: center;
`;

const Dates = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 1.2rem;

  font-size: 20px;
  margin: 0 auto;
  @media (max-width: 375px) {
    font-size: 15px;
  }
  @media (min-width: 376px) and (max-width: 499px) {
    font-size: 16px;
  }
  @media (min-width: 500px) and (max-width: 750px) {
    font-size: 18px;
  }
`;

const DatesItem = styled.li`
  text-align: center;
  padding-left: 8px;
  padding-right: 8px;
  // padding-right: 10px;
`;

const Month = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 18px;
  @media (max-width: 375px) {
    font-size: 12px;
  }
  @media (min-width: 376px) and (max-width: 499px) {
    font-size: 15px;
  }
  @media (min-width: 500px) and (max-width: 750px) {
    font-size: 16px;
  }
`;

const Arrow = styled.span`
  color: red;
  font-size: 1.2rem;
  cursor: pointer;
  @media (max-width: 375px) {
    font-size: 1rem;
  }
  @media (min-width: 376px) and (max-width: 499px) {
    font-size: 1.2rem;
  }
`;

const DatesWeeksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const weekStyle = {
  color: "white",
  background: "red",
  width: "2rem",
  height: "2rem",
  borderRadius: "50%",
};

function Days() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getMonday = (date) => {
    let weekDay = date.getDay() - 1; //получаем номер текущего дня недели с пересчетом на начало от понед

    if (weekDay === -1) {
      //проверка, если день недели воскр
      weekDay = 6;
    }

    let mondayDate = new Date(date); //создание копии переданной даты
    mondayDate.setDate(mondayDate.getDate() - weekDay);
    return mondayDate;
  };

  const getWeek = (date) => {
    let week = new Array(7);

    for (let i = 0; i < 7; i++) {
        week[i] = new Date(date);
        week[i].setDate(week[i].getDate() + i);
      }
    return week;
  };

  const changeMonday = (monday, num) => {
    let newDate = new Date(monday)
    newDate.setDate(newDate.getDate() + num * 7);
    return newDate;
  };

  const handleClick = (monday, num) => {
    let newMonday = changeMonday(monday, num)

    setMondayDate(newMonday);
    setCurrentWeek(getWeek(newMonday));
  }

  let currentDate = new Date();

  const [mondayDate, setMondayDate] = useState(getMonday(currentDate));
  const [currentWeek, setCurrentWeek] = useState(getWeek(mondayDate));


  return (
    <>
      <DatesWeeksWrapper>
        <div>
          <WeekDays>
            {days.map((item, index) => {
              return <DatesItem key={index}>{item}</DatesItem>;
            })}
          </WeekDays>
        </div>

        <div>
          <Dates>
            {currentWeek.map((elem, index) => {
              return (
                <WeekDaysItem
                  key={index}
                  style={elem.toISOString() === currentDate.toISOString()? weekStyle : null}
                >
                  {elem.getDate()}
                </WeekDaysItem>
              );
            })}
          </Dates>
        </div>
      </DatesWeeksWrapper>

      <Month>
        {" "}
        <Arrow onClick = {() => handleClick(mondayDate, -1)} >
          <MdArrowBackIosNew />
        </Arrow>
        {months[mondayDate.getMonth()]} {mondayDate.getFullYear()}
        <Arrow  onClick = {() => handleClick(mondayDate, 1)}>
          <MdArrowForwardIos />
        </Arrow>
      </Month>
    </>
  );
}

export default Days;
