import styles from './Product.module.css';
import React, { memo } from 'react';
import Tshit from '../../assets/tshirt-img.png';
import { Button, Col, Row } from 'antd';


const Product = (props) => {
    const { data } = props;


    return (
        <div className={styles.product}>
            <h2>{data.name}</h2>
            <h3><span className={styles.price}> Price</span> $ {data.price}</h3>
            <img src={Tshit} height={356} width={256} />

            <Row span={24}>
                <Col span={6}>
                    <Button className={styles.buy} type="text" >Buy Now</Button>
                </Col>
                <Col span={12}>

                </Col>
                <Col span={6}>
                    <Button type="text">Add To Cart</Button>
                </Col>
            </Row>

        </div>
    )
}

export default memo(Product);