import { MenuProps } from "antd";
import {
    
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { NavLink } from "react-router-dom";


export const AdminSideBardItems:MenuProps['items']=[
    {
      key: 'dashboard ',
      icon: <UserOutlined />,
      label: <NavLink to="/admin">Dashboard</NavLink>,
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'Product Management',
      children:[
        {
            key: '2-1',
            label: <NavLink to="/admin/all-product">Products</NavLink>,
        },
        {
            key: 'add-product',
            label: <NavLink to="/admin/add-product">Add Products</NavLink>,
        },
        {
            key: '2-3',
            label: <NavLink to="/admin/manage-product">Manage Products</NavLink>,
        },
        {
          key: '4',
          icon: <UserOutlined />,
          label: <NavLink to="/admin/create-manager">Create Manager</NavLink>,
      }
      ]
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label:  <NavLink to="/admin/sell-report">Sell Report</NavLink>,
    },
    
  ]