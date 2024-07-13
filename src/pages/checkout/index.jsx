import AppContext from 'antd/es/app/context';
import React, { useContext } from 'react';
import styles from './checkout.module.css';
import { Button } from 'antd';

const index = () => {
    const contextData = useContext(AppContext);

    const paymentHandler = () => {
        console.log(contextData.cart);
    }

    const hanldeRemove = (item) => {
        contextData.removeCart(item);
    }

    return (
        <div style={{ minHeight: '650px', height: '100%', width: '100%' }}>

            <table className={styles.checkout_table}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        contextData?.cart?.map((item, index) => {
                            console.log(item);
                            return (
                                <tr className={styles.product_details} key={item._id + index}>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>
                                    <td>1</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Button onClick={() => hanldeRemove(item)}>Remove</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <tr >
                        <td>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                            <span style={{ fontWeight: 'bolder' }}>
                                {
                                    contextData?.cart?.reduce((sum, item) => sum + item.price, 0)
                                }
                            </span>
                        </td>
                    </tr>

                </tbody>
            </table>

            <Button onClick={paymentHandler}> Payment </Button>


        </div>
    )
}

export default index;
