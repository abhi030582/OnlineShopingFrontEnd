import React from 'react'
import Product from '../../components/product';
import Women from '../../components/product/womwn';
import Mobiles from '../../components/product/mobiles';
import { Carousel, Col, Row } from 'antd';

const Home = () => {

    return (
        <div>
            <div>
                <h1>
                    Man & Woman Fashion
                </h1>
            </div>
   
            <Row span={24} gutter={24}>
                <Col span={8}>
                    <Product></Product>
                </Col>
                <Col span={8}>
                   <Women></Women>
                </Col>
                <Col span={8}>
                    <Mobiles></Mobiles>
                </Col>
               
            </Row>
        </div>
    )
}

export default Home;