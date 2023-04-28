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

  let date = new Date();

  let weekDay = date.getDay() - 1; //получаем номер текущего дня недели с пересчетом на начало от понед

  if (weekDay === -1) {
    //проверка, если день недели воскр
    weekDay = 6;
  }

  let mondayDate = new Date(date); //создание копии переданной даты
  mondayDate.setDate(mondayDate.getDate() - weekDay);

  const [week, setWeek] = useState([]);
  const [thisMonth, setThisMonth] = useState(new Date().getMonth());

  let weekCopy = new Array(7);

  useEffect(() => {
    for (let i = 0; i < 7; i++) {
      weekCopy[i] = mondayDate.getDate();
      mondayDate.setDate(mondayDate.getDate() + 1);
    }
    setWeek(weekCopy);
  }, []);

  const getCurrentMonth = () => {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7); //прибавляем неделю к текущей дате

    let currentMonth = currentDate.getMonth();
    return currentMonth;
  };

  const plusDays = () => {
    let nextDate = new Date();

    let thisCurrentMonth = getCurrentMonth();
    setThisMonth(thisCurrentMonth);

    let nextMondayDate = new Date();
    nextMondayDate.setDate(nextMondayDate.getDate() + 7 - weekDay);

    let nextWeekCopy = new Array(7);

    for (let i = 0; i < 7; i++) {
      nextWeekCopy[i] = nextMondayDate.getDate();
      nextMondayDate.setDate(nextMondayDate.getDate() + 1);
    }
    setWeek(nextWeekCopy);
  };

  const minusDays = () => {
    let prevDate = new Date();
    prevDate.setMonth(prevDate.getMonth() - 1);
    setThisMonth(prevDate.getMonth());

    let prevMondayDate = new Date();
    prevMondayDate.setDate(prevMondayDate.getDate() - 7 - weekDay);

    let prevWeekCopy = new Array(7);

    for (let i = 0; i < 7; i++) {
      prevWeekCopy[i] = prevMondayDate.getDate();
      prevMondayDate.setDate(prevMondayDate.getDate() + 1);
    }
    setWeek(prevWeekCopy);
  };

  const weekStyle = {
    color: "white",
    background: "red",
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
  };

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
            {week.map((elem, index) => {
              return (
                <WeekDaysItem
                  key={index}
                  style={elem === new Date().getDate() ? weekStyle : null}
                >
                  {elem}
                </WeekDaysItem>
              );
            })}
          </Dates>
        </div>
      </DatesWeeksWrapper>

      <Month>
        {" "}
        <Arrow onClick={minusDays}>
          <MdArrowBackIosNew />
        </Arrow>{" "}
        {months[thisMonth]} {new Date().getFullYear()}{" "}
        <Arrow onClick={plusDays}>
          <MdArrowForwardIos />
        </Arrow>{" "}
      </Month>
    </>
  );
}

export default Days;
