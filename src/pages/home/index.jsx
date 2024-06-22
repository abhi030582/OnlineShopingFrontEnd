import React, { useContext, useEffect, useState } from 'react'
import Product from '../../components/product';
import { Col, Row } from 'antd';
import { getProducts } from '../../services/productService';
import AppContext from 'antd/es/app/context';

const Home = () => {

    const [products, setProducts] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState([]);

    const contextData = useContext(AppContext);

    console.log(contextData);

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

    const filterProduct = (products) => {
        if (!products?.length) {
            return [];
        }

        const searchQuery = contextData.search?.toLowerCase() || '';
        const categoryQuery = contextData.category?.toLowerCase() || '';

        return products.filter(item => {
            const matchesSearch = searchQuery
                ? item.name.toLowerCase().includes(searchQuery)
                || item.description.toLowerCase().includes(searchQuery)
                || item.category.toLowerCase().includes(searchQuery)
                : true;

            const matchesCategory = categoryQuery && categoryQuery !== "all category"
                ? item.category.toLowerCase().includes(categoryQuery)
                : true;

            return matchesSearch && matchesCategory;
        });
    };



    return (
        <div>
            <h2>All Products</h2>
            <Row span={24} gutter={12}>
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