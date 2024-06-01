import { useState } from 'react';
import './App.css';
import HeaderMenu from './components/header/HeaderMenu';
import { BrowserRouter } from 'react-router-dom';
import RouterPage from './config/Router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename='/'>
        <HeaderMenu />
        {RouterPage}
      </BrowserRouter>

    </>
  )
}

export default App
