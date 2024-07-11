/* eslint-disable @typescript-eslint/no-unused-vars */
import  { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import {  Outlet } from 'react-router-dom';
import { AdminSideBardItems } from './AdminSideBar';
import { ManagerSideBardItems } from './ManagerSideBar';
import { sellerSideBardItems } from './SellerSideBar';

const { Header, Sider, Content } = Layout;

// const items:MenuProps['items']=[
//     {
//       key: 'dashboard ',
//       icon: <UserOutlined />,
//       label: <NavLink to="/admin">Dashboard</NavLink>,
//     },
//     {
//       key: '2',
//       icon: <VideoCameraOutlined />,
//       label: 'Product Management',
//       children:[
//         {
//             key: '2-1',
//             label: <NavLink to="/product">Products</NavLink>,
//         },
//         {
//             key: 'add-product',
//             label: <NavLink to="/admin/add-product">Add Products</NavLink>,
//         },
//         {
//             key: '2-3',
//             label: <NavLink to="/admin/manage-product">Manage Products</NavLink>,
//         },
//         {
//           key: '4',
//           icon: <UserOutlined />,
//           label: <NavLink to="/admin/create-manager">Create Manager</NavLink>,
//       }
//       ]
//     },
//     {
//       key: '3',
//       icon: <UploadOutlined />,
//       label:  <NavLink to="/admin/sell-report">Sell Report</NavLink>,
//     },
    
//   ]

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    // const {
    //   token: { colorBgContainer, borderRadiusLG },
    // } = theme.useToken();
    const userRole = {
      ADMIN:'admin',
      MANAGER:'manager',
      SELLER:'seller'
    }
    let sideBarItems ;
    const role = 'seller';
    switch (role) {
      case userRole.ADMIN:
          sideBarItems=AdminSideBardItems;
        break;
      case userRole.MANAGER:
          sideBarItems=ManagerSideBardItems;
        break;
      case userRole.SELLER:
          sideBarItems=sellerSideBardItems;
        break;
    
      default:
        break;
    }
  
    return (
      <Layout style={{height:'100vh'}}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div style={{marginTop:'20px',marginBottom:'10px'}} className="demo-logo-vertical" >
            <h1 style={{color:'whitesmoke'}} >SportSphere</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={sideBarItems}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 ,}}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                marginLeft:'50px',
                width: 64,
                height: 64,
                color:'whitesmoke   '
              }}
            />
            {/* <div style={{display:'flex',justifyContent:'space-evenly'}}> */}

            <Button style={{marginLeft:'1180px'}}>LogIn</Button>
            {/* </div> */}
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
  };

export default MainLayout;