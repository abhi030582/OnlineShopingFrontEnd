import styles from './Product.module.css';
import React, { memo, useContext } from 'react';
import Tshit from '../../assets/tshirt-img.png';
import { Button, Col, Row } from 'antd';
import AppContext from 'antd/es/app/context';


const Product = (props) => {

    const { data } = props;
    const contextData = useContext(AppContext);

    // const addToCart = (data) => {
    //     let cart = [...contextData.cart];
    //     console.log(cart);
    //     let obj = cart.find(item => item.product._id === data._id);
    //     console.log(obj);
    //     if (obj) {
    //         let filtered = cart.filter(item => item.product._id !== data._id);
    //         filtered.push({ "product": data, "qty": obj.qty + 1 });
    //         contextData.setCart(filtered);
    //     } else {
    //         cart.push({ "product": data, "qty": 1 });
    //         contextData.setCart(cart);
    //     }
    // }


    const addToCart = (data) => {
        let cart = [...contextData.cart];
        cart.push(data);
        contextData.setCart(cart);
    }




return (
    <div className={styles.product}>
        <h2>{data.name}</h2>
        <h3><span className={styles.price}> Price</span> $ {data.price}</h3>
        <img src={Tshit} height={356} width={256} />

        <Row span={24}>
            <Col span={6}>
                <Button className={styles.buy} type="text" >Buy Now</Button>
            </Col>
            <Col span={10}>

            </Col>
            <Col span={6}>
                <Button type="text" onClick={() => addToCart(data)}>Add To Cart</Button>
            </Col>
        </Row>

    </div>
)
}

export default memo(Product);