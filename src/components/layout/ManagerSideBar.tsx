import { MenuProps } from "antd";
import {
    
    UploadOutlined,
    UserOutlined,
    
  } from '@ant-design/icons';
import { NavLink } from "react-router-dom";


export const ManagerSideBardItems:MenuProps['items']=[
    {
      key: 'dashboard ',
      icon: <UserOutlined />,
      label: <NavLink to="/manager">Dashboard</NavLink>,
    },
    
    {
      key: 'all-product',
      icon: <UploadOutlined />,
      label:  <NavLink to="/manager/all-product">All Product</NavLink>,
    },
    {
      key: 'update-product',
      icon: <UploadOutlined />,
      label:  <NavLink to="/manager/update-product">update Product</NavLink>,
    },
    
  ]