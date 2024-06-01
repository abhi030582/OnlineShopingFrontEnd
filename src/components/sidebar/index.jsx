
import React from 'react';
import {
    DesktopOutlined, ContactsOutlined, SnippetsOutlined, ProductOutlined
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
            key: 'Products',
            label: 'Products',
            icon: <ProductOutlined />,
            children: [
                {
                    key: '5',
                    label: 'Man & Woman Fashion',
                },
                {
                    key: '6',
                    label: 'Electronic',
                },
                {
                    key: '7',
                    label: 'Jewellery Accessories',
                },
            ]
        },


        {
            key: '2',
            icon: <SnippetsOutlined />,
            label: 'About',
        },
        {
            key: '3',
            icon: <ContactsOutlined />,
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