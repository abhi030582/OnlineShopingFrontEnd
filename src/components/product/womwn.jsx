import React from 'react'
import Women from '../../assets/women.jpg';
import styles from './Product.module.css';
import { Button, Col, Row } from 'antd';

function womwn() 
{
  return (
    <div className={styles.product}>
        <h2>Women Dresses</h2>
        <h3><span className={styles.price}>Price</span> $40</h3> 
        <img src={Women} height={356} width={256} />
        <Row span={24}>
                <Col span={6}>
                    <Button className={styles.buy} type="text" >Buy Now</Button>
                </Col>
                <Col span={10}>

                </Col>
                <Col span={6}>
                    <Button type="text">Add To Cart</Button>
                </Col>
            </Row>

    </div>
  )
}

export default womwn
