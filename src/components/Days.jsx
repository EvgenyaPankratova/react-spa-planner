import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import styled, { withTheme } from 'styled-components';


const WeekDays = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
font-size: 14px;
font-weight: bold;
`
const WeekDaysItem = styled.li`
text-align: center;

`

const Dates = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1.2rem;
font-size: 20px;
`

const DatesItem = styled.li`
text-align: center;
padding-left: 7px;
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
    let newDate = new Date(date); //создание копии переданной даты
    let week = [];
    let nowWeekDay = date.getDay(); //получаем номер текущего дня недели
    week.lenght = 7;
    
        let addDays = 0; //сколько дней до понедельника
            if(nowWeekDay === 1){
                addDays = 0;
            }else if(nowWeekDay === 0){
                addDays = 1;
                }else{
             addDays = (8 - nowWeekDay);
            }
            newDate.setDate(addDays - date.getDate()); //получаем предыдущий понедельник    
        for(let i = 0; i < 7; i++){
          
            week[i] = newDate.getDate();
            newDate.setDate(newDate.getDate() + 1) ;
            
        }

    const weekStyle = {
        color: 'white',
        background: 'red',
        width: '2rem',
        height: '2rem',
        borderRadius: '50%'
    }

    return <>

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

    <Month> <Arrow><MdArrowBackIosNew/></Arrow> {months[new Date().getMonth()]} {new Date().getFullYear()} <Arrow><MdArrowForwardIos/></Arrow> </Month>
    
    </>
}

export default Days;