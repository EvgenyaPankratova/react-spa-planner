import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import styled from 'styled-components';


const WeekDays = styled.ul`
display: flex;
justify-content: space-between;
padding: 1rem;
`

const Dates = styled.ul`
display: flex;
justify-content: space-between;
padding: 1rem;
`

const Month = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem;
`

const Arrow = styled.span`
color: red;
font-size: 1rem;
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
    let week = [];
    week.lenght = 7;
    for(let i = 0; i < 7; i++){
        week[i] = date.getDate();
        date.setDate(date.getDate() + 1);
    }

    return <>

    <div>
        <WeekDays>
            {days.map(item => {
                return <li>{item}</li>
            })}
        </WeekDays>
    </div>

    <div>
        <Dates>
           {week.map(elem => {
            return <li>{elem}</li>
           })}
        </Dates>
    </div>

    <Month> <Arrow><MdArrowBackIosNew/></Arrow> {months[new Date().getMonth()]} {new Date().getFullYear()} <Arrow><MdArrowForwardIos/></Arrow> </Month>
    
    </>
}

export default Days;