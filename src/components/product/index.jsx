import styles from './Product.module.css';
import React from 'react';
import Tshit from '../../assets/tshirt-img.png';
import { Button, Col, Row } from 'antd';


const Product = () => {
    return (
        <div className={styles.product}>
            <h2>Man T -shirt</h2>
            <h3><span className={styles.price}> Price</span> $ 30</h3>
            <img src={Tshit} />

            <Row span={24}>
                <Col span={6}>
                    <Button className={styles.buy} type="text" >Buy Now</Button>
                </Col>
                <Col span={12}>

                </Col>
                <Col span={6}>
                    <Button type="text">Details</Button>
                </Col>
            </Row>



        </div>
    )
}

export default Product;