import { Outlet } from 'react-router-dom';
import {Breadcrumb, Button, Layout, Menu} from 'antd';
import AuthenticationModal from "../auth/authentication/AuthenticationModal";
const { Header, Content, Footer } = Layout;

const PageLayout = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <AuthenticationModal />
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
        {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
        {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
      </Breadcrumb>
      <div className="site-layout-content">
        <Outlet />
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default PageLayout;
