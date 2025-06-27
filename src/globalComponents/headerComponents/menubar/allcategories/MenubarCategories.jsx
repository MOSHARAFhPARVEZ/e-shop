import { Dropdown , Space } from 'antd'
import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { FaBars } from "react-icons/fa";

const MenubarCategories = () => {
  const items = [
    {
      label: (
        <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
          1st menu item
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
          2nd menu item
        </a>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  return (
    <>
      <Dropdown menu={{ items }} trigger={['click']}>
        <a onClick={e => e.preventDefault()}>
          <Space>
          <FaBars />
            Click me
          </Space>
        </a>
      </Dropdown>
    </>
  )
}

export default MenubarCategories