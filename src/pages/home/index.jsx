import React from 'react'
import Product from '../../components/product';
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
                    <Product></Product>
                </Col>
                <Col span={8}>
                    <Product></Product>
                </Col>
            </Row>




        </div>
    )
}

export default Home;