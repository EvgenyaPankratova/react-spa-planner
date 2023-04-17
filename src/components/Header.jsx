import { AiOutlinePlus} from 'react-icons/ai';
import { useState } from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.h1`
font-weight: normal;
`

const HeaderWrapper = styled.span`
color: red;
font-size: 2rem;
cursor: pointer;
`



function Header(){
    const [newEvent, setNewEvent] = useState('');

    const handleEvent = (e) => {
    e.preventDefault();
    let ev = prompt("Enter event time: YYYY-MM-DD HH-mm-ss");
    setNewEvent(ev);
    console.log(newEvent)
    
}


    return <>
        <HeaderTitle>Interveiw Calendar</HeaderTitle>
        <HeaderWrapper onClick={handleEvent}>< AiOutlinePlus/></HeaderWrapper>
    </>
}

export default Header;