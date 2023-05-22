import { useState } from 'react'
import styled from 'styled-components';
import cards from './mock';
import Header from './components/Header'
import Questions from './components/Questions'
import Footer from './components/Footer'

function App() {
  
  const [count, setcount] = useState([])

  return (
    <SCApp>
    <Header />
    <Questions 
      cards={cards}
      count={count}
      setCount={setCount}
    />
    <Footer
      cards={cards}
      count={count}
    />
    </SCApp>
  );
}

export default App

const SCApp = styled.div`
  	background-color: #fb6b6b;
    overflow-x: hidden;
`