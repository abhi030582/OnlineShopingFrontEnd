
import React from 'react';
import {
    DesktopOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

const Sidebar = () => {


    const items = [
        {
            key: '1',
            icon: <DesktopOutlined />,
            label: 'Home',
        },
        {
            key: '2',
            icon: <DesktopOutlined />,
            label: 'About',
        },
        {
            key: '3',
            icon: <DesktopOutlined />,
            label: 'Contact us',
        }
    ];


    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                background: '#001529'
            }}
        >
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                items={items}
            />
        </div>
    )
}

export default Sidebar;