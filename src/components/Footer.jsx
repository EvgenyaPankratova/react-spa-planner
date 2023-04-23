import { useState } from "react";
import styled from "styled-components";

function Footer({events, actives, setActive}){

    const Delete = styled.div`
    cursor: pointer;
    `
    const handleDelete = (isDelete) => {
        if(isDelete){
            window.confirm('Delete this event?')
        }
       
    }

    return <>
        <div>Today</div>
        <Delete onClick={() => handleDelete(actives.filter(elem => elem.forDelete).length >= 1)} style = {(actives.filter(elem => elem.forDelete === true).length >= 1) ? {display: 'block'} : {display: 'none'}}>Delete</Delete>
    </>
}

export default Footer;