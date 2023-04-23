import { useCallback, useState } from 'react';
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
padding-bottom: 30px;
:last-child{
    padding-bottom: 0;
}
`

const Sells = styled.div`
margin-left: 28px;
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(13, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;

`

const Sell = styled.div`
border: 2px solid #d6d4d4;
border-left: none;
border-top: none;
width: 90px;
height: 50px;
cursor: pointer;
:nth-child(7n){
    border-right: none;
}
`
const activeSell = {
    background: '#ebebfc'
}

const forDeleteSell = {
    background: '#bab9ed'
}



const SellItem = ({ handleToggle, elem}) => {
    return (
        <Sell   onClick={() => handleToggle(elem.id)}  style={ elem.forDelete ? forDeleteSell : elem.isActive ? activeSell : null}></Sell>
    );
  };

function Main({events, actives, setActive}){
   

   

    let hours = [];
    hours.lenght = 12;
    for(let i = 9; i <= 20; i++){
        if(i === 9){
            hours[i] = '0' + i + ':00';
        }else{
            hours[i] = i + ':00';
        }
       
    }



    const handleToggle = index => {
        setActive(actives => {
            return actives.map(elem => {
              if (elem.id === index && elem.isActive) {
                return {
                  ...elem,
                  isActive: !elem.isActive,
                  forDelete: !elem.forDelete
                };
              }else if(elem.id === index){
                return {
                    ...elem,
                    isActive: !elem.isActive,
                  };
              }
              return elem;
            });
          });
    }


    console.log(actives)

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

        
        { actives.map((elem, index) => {
            // return  <Sell key = {index} onClick={handleToggle(elem.id)}   style={elem.isActive ? activeSell : null}/> 
            return <SellItem handleToggle={handleToggle} elem={elem}/>
        }
        
         ) }



    </Sells>
    </MainWrapper>
    
}



export default Main;