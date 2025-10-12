import React from 'react';
import { Drawer, Space, Button } from 'antd';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const CustomDrawer = ({children , placement , open , setOpen , title, closable, rootClassName = ''}) => {

  const onClose = () => {
    setOpen(false);
  };
 
  return (
    <>
      <Drawer
        title={title}
        placement={placement}
        closable={closable}
        onClose={onClose}
        open={open}
        key={placement}
        rootClassName={rootClassName}
      >
        {children}
      </Drawer>
    </>
  );
};
export default CustomDrawer;