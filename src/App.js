import { useState } from 'react';
import styled from 'styled-components';
import Days from './components/Days';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const AppWrapper = styled.div`
@font-face {
  font-family: "NimbusSanL-Reg"; 
  src: local("NimbusSanL-Reg"), url("../fonts/NimbusSanL-Reg.ttf") format("ttf"); 
  font-style: normal; 
  font-weight: 400; 
  font-size: 14px;
  }
max-width: 740px;
min-height: 100vh;
border: 1px solid black;
margin: 0 auto;
font-family: "NimbusSanL-Reg", "Arial", sans-serif;
li{
  list-style-type: none;
}
`

const HeaderWrapper = styled.header`
display: flex;
justify-content: space-between;
padding: 2rem;
`

const FooterWrapper = styled.footer`
background: #f5f2f2;
padding: 1rem 2rem 1rem 2rem;
color: red;
border: 2px solid #d6d4d4;
font-size: 21px;
display: flex;
justify-content: space-between;
`

const DaysWrapper = styled.div`
background: #f5f2f2;
padding: 0.8rem 25px 0.8rem 8rem;
border: 2px solid #d6d4d4;
`


// const [events, setEvents] = useState([]);

// for(let i = 0; i <= 91; i++){
//   const newItem = { // создаём объект 
//     id: Math.random().toString(36).substring(2,9), //генерируем айди
//     complete: false //будем делать задачу активной/неактивной
//   }
//   setEvents([...events, newItem]) //добавляем старый массив и новый элемент
// }


function App() {
  
  let arr = [...Array(91)];
  const events = arr.map(elem => ({ id: Math.random().toString(36).substring(2,9) , isActive: false }));

  const [actives, setActive] = useState(events);


// const addTask = (userInput) => { // функция для добавления задачи
//     if(userInput) { //пишем проверку- если поле пустое, ничего не добавится
//       const newItem = { // создаём задачу
//         id: Math.random().toString(36).substring(2,9), //генерируем айди
//         task: userInput,
//         complete: false //будем делать задачу активной/неактивной
//       }
//       setEvents([...events, newItem]) //добавляем старый массив и новый элемент
//     }
//   }

//   const removeTask = (id) => { //удаление задачи
//     if (window.confirm("Удалить эту задачу?")) {
//       setEvents([...events.filter((event) => event.id !== id)])
//     } else {
//       alert("Вы нажали кнопку отмена")
//     }
//   }

//   const handleToggle = (id) => { 
//     setEvents([
//       ...events.map((event) => 
//       event.id === id ? {...event, complete: !event.complete} : {...event}
//       )
//     ])
//   }

  return (
    <AppWrapper >

      <HeaderWrapper>
      <Header />
      </HeaderWrapper>

      <DaysWrapper>
      <Days/>
      </DaysWrapper>
      

      <Main actives={actives} setActive={setActive} events={events}/>

      <FooterWrapper>
      <Footer actives={actives} setActive={setActive} events={events} />
      </FooterWrapper>
      

    </AppWrapper>
  );
}

export default App;
