import React from 'react';
import { Layout, Input, Button, Avatar, Badge } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import styles from './AppHeader.module.css';
import Logo from '../../assets/logo.png';

const { Header } = Layout;
const { Search } = Input;

const HeaderMenu = () => {

  const onSearch = (value) => console.log(value);
  const cartItemCount = 5;

  return (
    <div className={styles.appHeaderContainer}>
      <Header className={styles.appHeader}>

        <div className={styles.logo}>
          <img src={Logo} alt="Logo" style={{ marginTop: 25, marginRight: 10 }} />
        </div>

        <div className={styles.searchBar}>
          <Search placeholder="Search..." onSearch={onSearch} enterButton />
        </div>

        <div className={styles.loginSection}>
          <Button style={{ margin: 10 }} type="primary">Login</Button>

          <Badge count={cartItemCount} className={styles.cartIcon}>
            <ShoppingCartOutlined style={{ fontSize: '24px',cursor:'pointer' }} />
          </Badge>

          <Avatar style={{ marginLeft: 16, marginRight: 10 }} icon={<UserOutlined />} />

        </div>

      </Header>
    </div>
  )
}

export default HeaderMenu;