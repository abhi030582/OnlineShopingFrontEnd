import React, { useContext, useEffect, useState } from 'react';
import { Layout, Input, Button, Avatar, Badge, Select, Modal } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import styles from './AppHeader.module.css';
import Logo from '../../assets/logo.png';
import AppContext from 'antd/es/app/context';
import { getCategories } from '../../services/productService';


const { Header } = Layout;
const { Search } = Input;
const { Option } = Select;

const HeaderMenu = () => {

  const contextData = useContext(AppContext);
  const [categories, setCategories] = useState([]);
  const [openCheckout, setOpenCheckout] = useState(false);

  console.log(contextData);

  const onSearch = (value) => {
    contextData.setSearchText(value);
  }

  async function fetchCategories() {
    try {
      const response = await getCategories();
      let result = response?.data;
      if (result?.success) {
        setCategories(result?.categories);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategory = (input) => {
    contextData.setCategory(input)
  }

  const handleCart = () => {
    setOpenCheckout(true);
  }

  const handleOk = () => {
    setOpenCheckout(false);
  };
  const handleCancel = () => {
    setOpenCheckout(false);
  };

  return (
    <div className={styles.appHeaderContainer}>
      <Header className={styles.appHeader}>

        <div className={styles.logo}>
          <img src={Logo} alt="Logo" style={{ marginTop: 25, marginRight: 10 }} />
        </div>

        <div>

          <Select value={contextData.category} style={{ width: 200 }} onChange={handleCategory}>
            <Option key={"all"}>All Category</Option>
            {
              categories.map((item) => {
                return (<Option key={item.name}>{item.name}</Option>)
              })
            }
          </Select>

        </div>

        <div className={styles.searchBar}>
          <Search placeholder="Search..." onSearch={onSearch} enterButton />
        </div>
        <div className={styles.loginSection}>
          <Button style={{ margin: 10 }} type="primary">Login</Button>

          <Badge count={contextData.cart.length} className={styles.cartIcon} >
            <ShoppingCartOutlined style={{ fontSize: '24px', cursor: 'pointer' }} onClick={handleCart} />
          </Badge>

          <Avatar style={{ marginLeft: 16, marginRight: 10 }} icon={<UserOutlined />} />

        </div>

      </Header>



      <Modal
        open={openCheckout}
        title="Checkout"
        onCancel={handleCancel}
        width={600}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Buy
          </Button>
        ]}
      >
        <div>

          Some contents...


        </div>

      </Modal>


    </div>
  )
}

export default HeaderMenu;