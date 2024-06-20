import React, { useContext, useEffect, useState } from 'react'
import Product from '../../components/product';
import { Col, Row } from 'antd';
import { getProducts } from '../../services/productService';
import AppContext from 'antd/es/app/context';

const Home = () => {

    const [products, setProducts] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState([]);

    const contextData = useContext(AppContext);


    async function fetchProducts() {
        try {
            const response = await getProducts();
            let result = response?.data;
            if (result?.success) {
                setProducts(result?.products);
                setFilteredProducts(result?.products);
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

    // useEffect(() => {
    //     console.log(products);
    //     let filted = products.filter(item => {
    //         return item.name.toLowerCase().includes(contextData.search.toLowerCase())
    //             || item.description.toLowerCase().includes(contextData.search.toLowerCase())
    //     });

    //     console.log(filted);

    //     setFilteredProducts(filted);

    // }, [contextData?.search]);

    const filterProduct = (products) => {
        if (products?.length > 0 && contextData.search?.length > 0) {
            return products.filter(item => {
                return item.name.toLowerCase().includes(contextData.search.toLowerCase())
                    || item.description.toLowerCase().includes(contextData.search.toLowerCase())
            });
        }
        return products;
    }



    return (
        <div>
            <h1>All Products</h1>
            <Row span={24} gutter={24}>
                {
                    products?.length > 0 ? filterProduct(products).map(item => {
                        return (
                            <Col key={item._id} span={8} style={{ paddingTop: 10 }}>
                                <Product data={item}></Product>
                            </Col>
                        )
                    }) :
                        <Col span={24}>
                            <h2 style={{ textAlign: 'center', color: 'red' }}>Product Not Found</h2>
                        </Col>
                }
            </Row>

        </div>
    )
}

export default Home;