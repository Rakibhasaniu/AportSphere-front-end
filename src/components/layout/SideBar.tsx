import {  Layout, Menu } from 'antd';
import { AdminSideBardItems } from './AdminSideBar';



const {Sider} = Layout

const SideBar = ({collapsed}) => {
 
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div style={{marginTop:'20px',marginBottom:'10px'}} className="demo-logo-vertical" >
            <h1 style={{color:'whitesmoke'}} >SportSphere</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={AdminSideBardItems}
          />
        </Sider>
        
    );
};

export default SideBar;