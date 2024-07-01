import  { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps } from 'antd';

const { Header, Sider, Content } = Layout;

const items:MenuProps['items']=[
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'Dashboard',
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'Product Management',
      children:[
        {
            key: '2-1',
            label: 'Products',
        },
        {
            key: '2-2',
            label: 'Add Products',
        },
        {
            key: '2-3',
            label: 'Manage Products',
        }
      ]
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: 'Sell Report',
    },
    {
        key: '4',
        icon: <UserOutlined />,
        label: 'Create Manager',
    }
  ]

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    // const {
    //   token: { colorBgContainer, borderRadiusLG },
    // } = theme.useToken();
  
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
            items={items}
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
            Content
          </Content>
        </Layout>
      </Layout>
    );
  };

export default MainLayout;