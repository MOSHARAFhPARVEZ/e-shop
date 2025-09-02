import { Dropdown , Space } from 'antd'
import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { FaBars } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { CategoryItems } from './CategoryDropdown';


const MenubarCategories = () => {
  const {t} = useTranslation();

  return (
    <>
      <Dropdown menu={{ items: CategoryItems }} trigger={['click']}>
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