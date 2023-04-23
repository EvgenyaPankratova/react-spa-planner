import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import styled, { withTheme } from 'styled-components';


const WeekDays = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 12px;
font-weight: bold;
outline: 1px solid red;
`
const WeekDaysItem = styled.li`
text-align: center;


`

const Dates = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
// padding: 1.2rem;

font-size: 20px;
margin: 0 auto;
`

const DatesItem = styled.li`
text-align: center;
padding-left: 8px;
padding-right: 8px;
// padding-right: 10px;
`

const Month = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
font-size: 18px;
`

const Arrow = styled.span`
color: red;
font-size: 1.2rem;
cursor: pointer;
`

const DatesWeeksWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

function Days(){
    const days = [
        'M',
        'T',
        'W',
        'T',
        'F',
        'S',
        'S'
    ];

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let date = new Date();
    
    let weekDay = date.getDay() - 1; //получаем номер текущего дня недели с пересчетом на начало от понед

    if(weekDay === -1){ //проверка, если день недели воскр
        weekDay = 6;
    }

    let mondayDate = new Date(date); //создание копии переданной даты
    mondayDate.setDate(mondayDate.getDate() - weekDay);

            let week = [];

            for(let i = 0; i < 7; i++){
          
            week[i] = mondayDate.getDate();
            mondayDate.setDate(mondayDate.getDate() + 1) ;
            
        }

    const weekStyle = {
        color: 'white',
        background: 'red',
        width: '2rem',
        height: '2rem',
        borderRadius: '50%'
  
    }
    

    // const PlusDays = () => {
    //     newDate.setDate(8 - date.getDate() + 7)
    //     for(let i = 0; i < 7; i++){
          
    //         week[i] = nowWeekDay + 7;
    //         newDate.setDate(newDate.getDate() + 8) ;
            
    //     }
    // }

    return <>

<DatesWeeksWrapper>
    <div>
        <WeekDays>
            {days.map((item, index) => {
                return <DatesItem key={index} >{item}</DatesItem>
            })}
        </WeekDays>
    </div>

    <div>
        <Dates>
           {week.map((elem, index) => {
            return <WeekDaysItem key={index} style={elem === new Date().getDate() ? weekStyle : null}>{elem}</WeekDaysItem>
           })}
        </Dates>
    </div>
    </DatesWeeksWrapper>

    <Month> <Arrow><MdArrowBackIosNew/></Arrow> {months[new Date().getMonth()]} {new Date().getFullYear()} <Arrow ><MdArrowForwardIos /></Arrow> </Month>
    
    </>
}

export default Days;