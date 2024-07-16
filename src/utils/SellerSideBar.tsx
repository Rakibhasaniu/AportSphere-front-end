import { MenuProps } from "antd";
import {
    
    UploadOutlined,
    UserOutlined,
    
  } from '@ant-design/icons';
import { NavLink } from "react-router-dom";


export const sellerSideBardItems:MenuProps['items']=[
    {
      key: 'all-product ',
      icon: <UserOutlined />,
      label: <NavLink to="/seller/all-product">All Product</NavLink>,
    },
    
    {
      key: 'sell-product',
      icon: <UploadOutlined />,
      label:  <NavLink to="/seller/sell-product">update Product</NavLink>,
    },
    
  ]