import styled from 'styled-components';

const MainWrapper = styled.main`
display: flex;
`

const TimeSchedule = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-between;
color: #f5f2f2;
`

const TimeScheduleItem = styled.li`
color: #b3b3b3;
padding-bottom: 15px;
:last-child{
    padding-bottom: 0;
}
`

const Sells = styled.div`
display: flex;
`

const Sell = styled.div`
outline: 1px solid gray;
width: 90px;
height: 60px;
`

function Main(){
    let hours = [];
    hours.lenght = 12;
    for(let i = 9; i <= 20; i++){
        if(i === 9){
            hours[i] = '0' + i + ':00';
        }else{
            hours[i] = i + ':00';
        }
       
    }


    return <MainWrapper>
    <div>
        <ul>
            {
                hours.map(elem => {
                    return <TimeScheduleItem>{elem}</TimeScheduleItem>
                })
                }
        </ul>
    </div>

    <Sells>
        <Sell></Sell>
        <Sell></Sell>
        <Sell></Sell>
        <Sell></Sell>
        <Sell></Sell>
        <Sell></Sell>
        <Sell></Sell>
    </Sells>
    </MainWrapper>
}

export default Main;