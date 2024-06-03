import React from 'react'
import styles from './Product.module.css';
import Mobile from '../../assets/mobile.jpg';
import  { Button, Col, Row } from 'antd';

function mobiles() 
{
  return (
    <div className={styles.product}>
      <h2>Mobiles & Accesories</h2>
      <h3><span className={styles.price}>price</span>$50</h3>
      <img src={Mobile} height={356} width={256} />
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

export default mobiles
