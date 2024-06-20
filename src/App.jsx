import { useState } from 'react';
import './App.css';
import HeaderMenu from './components/header/HeaderMenu';
import { BrowserRouter } from 'react-router-dom';
import RouterPage from './config/Router';
import Sidebar from './components/sidebar';
import { Col, Row } from 'antd';
import AppContext from 'antd/es/app/context';


function App() {

  const [searchText, setSearchText] = useState("");

  return (
    <>
      <AppContext.Provider value={{ "search": searchText, 'setSearchText': setSearchText }} >
        <BrowserRouter basename='/'>
          <Row span={24} gutter={6}>
            <Col span={4}>
              <Sidebar />
            </Col>

            <Col span={20}>
              <HeaderMenu />
              {RouterPage}
            </Col>
          </Row>

        </BrowserRouter>
      </AppContext.Provider>
    </>
  )
}

export default App
