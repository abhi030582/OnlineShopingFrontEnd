import React, { useEffect, useState } from 'react'
import Product from '../../components/product';
import { Col, Row } from 'antd';
import { getProducts } from '../../services/productService';

const Home = () => {

    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        try {
            const response = await getProducts();
            let result = response?.data;
            if (result?.success) {
                setProducts(result?.products);
            }
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        //Old way using promise then
        // getProducts().then(response => {
        //     let result = response?.data;
        //     if (result?.success) {
        //         setProducts(result?.products);
        //     }
        //     console.log(result);
        // }).catch(error => {
        //     console.log(error);
        // });

        fetchProducts();

    }, []);


    return (
        <div>
            <h1>All Products</h1>
            <Row span={24} gutter={24}>
                {
                    products.map(item => {
                        return (
                            <Col key={item._id} span={8} style={{ paddingTop: 10 }}>
                                <Product data={item}></Product>
                            </Col>
                        )
                    })
                }

            </Row>

        </div>
    )
}

export default Home;