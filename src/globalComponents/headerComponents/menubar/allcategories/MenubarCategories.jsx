import { Dropdown , Space } from 'antd'
import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { FaBars } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const MenubarCategories = () => {
  const {t} = useTranslation();
  const items = [
    
    {
      label: (
        <Link to="/product" classname="font-montserrat font-normal text-base text-black01 pb-0.5">
          Computers & Tablets
        </Link>
      ),
      key: '0',
    },
    
    {
      label: (
        <Link to="/product" classname="font-montserrat font-normal text-base text-black01 pb-0.5">
          Mobile & Accessories
        </Link>
      ),
      key: '1',
    },
    
    {
      label: (
        <Link to="/product" classname="font-montserrat font-normal text-base text-black01 pb-0.5">
          TV & Home Theater
        </Link>
      ),
      key: '3',
    },
    
    {
      label: (
        <Link to="/product" classname="font-montserrat font-normal text-base text-black01 pb-0.5">
          Audio & Headphones
        </Link>
      ),
      key: '4',
    },
    
    {
      label: (
        <Link to="/product" classname="font-montserrat font-normal text-base text-black01 pb-0.5">
          Cameras & Camcorders
        </Link>
      ),
      key: '5',
    },
    
    {
      label: (
        <Link to="/product" classname="font-montserrat font-normal text-base text-black01 pb-0.5">
         Gaming Equipment
        </Link>
      ),
      key: '6',
    },
    
    {
      label: (
        <Link to="/product" classname="font-montserrat font-normal text-base text-black01 pb-0.5">
         Home Appliances
        </Link>
      ),
      key: '7',
    },

  ];
  return (
    <>
      <Dropdown menu={{ items }} trigger={['click']}>
        <a onClick={e => e.preventDefault()}>
            <Space className='font-montserrat font-bold text-base text-white leading-[24px] cursor-pointer'>
              <FaBars /> {t('all_categories')}
            </Space>
        </a>
      </Dropdown>
    </>
  )
}

export default MenubarCategories