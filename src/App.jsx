import { useState } from 'react';
import './App.css';
import HeaderMenu from './components/header/HeaderMenu';
import { BrowserRouter } from 'react-router-dom';
import RouterPage from './config/Router';
import Sidebar from './components/sidebar';
import { Col, Row } from 'antd';
import AppContext from 'antd/es/app/context';
import Footer from './components/footer/Footer';
import './config/Interceptore';


function App() {

  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All Category");
  const [cart, setCart] = useState([]);

  return (
    <>
      <AppContext.Provider value={{ "search": searchText, 'setSearchText': setSearchText, "category": category, setCategory, "cart": cart, "setCart": setCart }} >
        <BrowserRouter basename='/'>
          <div style={{ padding: 5 }}>
            <Row span={24} gutter={6}>
              <Col span={4}>
                <Sidebar />
              </Col>

              <Col span={20}>
                <HeaderMenu />
                {RouterPage}
              </Col>
            </Row>

            <Footer />
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  )
}

export default App
