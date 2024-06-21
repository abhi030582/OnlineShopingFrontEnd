import React, { useContext, useEffect, useState } from 'react';
import { Layout, Input, Button, Avatar, Badge, Select } from 'antd';
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

  const onSearch = (value) => {
    contextData.setSearchText(value);
  }

  const cartItemCount = 5;

  const [categories, setCategories] = useState([]);



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

          <Badge count={cartItemCount} className={styles.cartIcon}>
            <ShoppingCartOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
          </Badge>

          <Avatar style={{ marginLeft: 16, marginRight: 10 }} icon={<UserOutlined />} />

        </div>

      </Header>
    </div>
  )
}

export default HeaderMenu;