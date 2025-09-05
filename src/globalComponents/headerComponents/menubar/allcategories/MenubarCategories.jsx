import { Dropdown , Space } from 'antd'
import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { FaBars } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { CategoryItems } from './CategoryDropdown';
import { FaAngleDown } from 'react-icons/fa'


const MenubarCategories = ({isMenu , className , icons}) => {
  const {t} = useTranslation();

  return (
    <>
      <Dropdown menu={{ items: CategoryItems }} trigger={['click']}>
        <a onClick={e => e.preventDefault()}>
            <Space className={className}>
              {
                isMenu && <FaBars />
              } {t('all_categories')}
              {
                icons && <span className='leading-6 text-black01'><FaAngleDown size={24} /></span>
              }
            </Space>
        </a>
      </Dropdown>
    </>
  )
}

export default MenubarCategories