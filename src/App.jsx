import { useState } from 'react';
import './App.css';
import HeaderMenu from './components/header/HeaderMenu';
import { BrowserRouter } from 'react-router-dom';
import RouterPage from './config/Router';
import Sidebar from './components/sidebar';
import { Col, Row } from 'antd';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename='/'>
        <Row span={24}>
          <Col span={4}>
            <Sidebar />
          </Col>

          <Col span={20}>
            <HeaderMenu />
            {RouterPage}
          </Col>
        </Row>



      </BrowserRouter>

    </>
  )
}

export default App
