import styled from "styled-components";

function Footer({events, actives, setActive}){

    const Delete = styled.div`
    cursor: pointer;
    `

    return <>
        <div>Today</div>
        <Delete onClick={() => window.confirm('Delete this event?')}>Delete</Delete>
    </>
}

export default Footer;