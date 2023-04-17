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
padding: 2rem;
color: red;
border: 2px solid #d6d4d4;
`

const DaysWrapper = styled.div`
background: #f5f2f2;
padding: 1rem 5rem;
border: 2px solid #d6d4d4;
`



function App() {
  return (
    <AppWrapper >

      <HeaderWrapper>
      <Header/>
      </HeaderWrapper>

      <DaysWrapper>
      <Days/>
      </DaysWrapper>
      

      <Main/>

      <FooterWrapper>
      <Footer/>
      </FooterWrapper>
      

    </AppWrapper>
  );
}

export default App;
