import { useState } from 'react'
import styled from 'styled-components';
import CARDS from './mock';
import Header from './components/Header'
import Questions from './components/Questions'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <SCApp>
    <Header />
    <Questions />
    <Footer />
    </SCApp>
  );
}

export default App

const SCApp = styled.div`
  	background-color: #fb6b6b;
`